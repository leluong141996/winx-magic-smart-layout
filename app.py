from flask import Flask, request, render_template
from flask_dropzone import Dropzone
import os
import requests
import pickle
import cv2


app = Flask(__name__)
dir_path = os.path.dirname(os.path.realpath(__file__))
app.config.update(
    UPLOADED_PATH=os.path.join(dir_path, 'static/image_upload'),
    # Flask-Dropzone config:
    DROPZONE_ALLOWED_FILE_TYPE='image',
    DROPZONE_MAX_FILE_SIZE=3,
    DROPZONE_MAX_FILES=20
)

url = "http://172.16.6.230:5000/api/v1.0/entertainment/hackathon/thumbnails"

nginx_http = "http://172.16.8.201:9092"

dropzone = Dropzone(app)
filename = None

global arr_filename
arr_filename = []

model_layout_2_image = pickle.load(open("model/model_layout_2_image.gapo", 'rb'))
model_layout_3_image = pickle.load(open("model/model_layout_3_image.gapo", 'rb'))
model_layout_4_image = pickle.load(open("model/model_layout_4_image.gapo", 'rb'))

def sort_image(arr):
    try:
        payload = {
            "images": arr
        }

        response = requests.post(url, json=payload)

        return response.json()['Data']
    except Exception:
        return arr


@app.route('/upload', methods=['POST', 'GET'])
def upload():
    file = None
    global arr_filename

    if request.method == 'POST':
        f = request.files.get('file')
        file = f.save(os.path.join(app.config['UPLOADED_PATH'], f.filename))
        filename = f.filename
        arr_filename.append(filename)

    return render_template('index.html')

@app.route("/process", methods=['GET', 'POST'])
def process():
    print("Starting process")
    global arr_filename
    if request.method == 'POST':
        if request.form.get('Post') == 'Post':
            print(arr_filename)
            arr_path_nginx = []
            for image_name in arr_filename:
                if len(arr_path_nginx) <= 4:
                    arr_path_nginx.append(nginx_http + os.path.join(app.config['UPLOADED_PATH']) + '/' + image_name)

            arr_path_sort = sort_image(arr_path_nginx)
            arr_size = []
            label = [1]

            if len(arr_path_sort) == 2:
                #process with model for layout 2 image
                for image_path in arr_path_sort:
                    image_path_process = image_path.split('9092')[-1]
                    image = cv2.imread(image_path_process)
                    w, h, _ = image.shape
                    arr_size.append(w)
                    arr_size.append(h)

                label = model_layout_2_image.predict([arr_size])


            elif len(arr_path_sort) == 3:
                #process with model for layout 3 image
                for image_path in arr_path_sort:
                    image_path_process = image_path.split('9092')[-1]
                    image = cv2.imread(image_path_process)
                    w, h, _ = image.shape
                    arr_size.append(w)
                    arr_size.append(h)

                label = model_layout_3_image.predict([arr_size])

            elif len(arr_path_sort) == 4:
                #process with model for layout 4 image
                for image_path in arr_path_sort:
                    image_path_process = image_path.split('9092')[-1]
                    image = cv2.imread(image_path_process)
                    w, h, _ = image.shape
                    arr_size.append(w)
                    arr_size.append(h)

                label = model_layout_4_image.predict([arr_size])

            if len(arr_path_nginx) > 4:
                arr_path_nginx = arr_path_nginx[0:4]

            print("arr_path_sort: ", arr_path_sort)
            print("label: ", label[0])
            print("total: ", len(arr_path_nginx))

            arr_filename = []

            payload = {
                "list_image_upload": arr_path_nginx,
                "list_image_process": arr_path_sort,
                "layout_id": label[0], 
                "total": len(arr_path_nginx)
            }

            return render_template('result.html', data_payload=payload)

    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/result', methods=['GET', 'POST'])
def result():
    return render_template('result.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, debug=True)