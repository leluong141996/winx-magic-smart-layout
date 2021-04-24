from flask import Flask, request, render_template
from flask_dropzone import Dropzone
import os


app = Flask(__name__)

dir_path = os.path.dirname(os.path.realpath(__file__))

app.config.update(
    UPLOADED_PATH=os.path.join(dir_path, 'static/image_upload'),
    # Flask-Dropzone config:
    DROPZONE_ALLOWED_FILE_TYPE='image',
    DROPZONE_MAX_FILE_SIZE=3,
    DROPZONE_MAX_FILES=20
)

dropzone = Dropzone(app)
filename = None
arr_filename = []


@app.route('/upload', methods=['POST', 'GET'])
def upload():
    file = None
    if request.method == 'POST':
        f = request.files.get('file')
        file = f.save(os.path.join(app.config['UPLOADED_PATH'], f.filename))
        filename = f.filename
        arr_filename.append(filename)

    return render_template('index.html')

@app.route("/process", methods=['GET', 'POST'])
def process():
    print("Starting process")

    if request.method == 'POST':
        if request.form.get('Post') == 'Post':
            print("CLICK>>>>>>>>>>>>>>>>")
            print(arr_filename)

    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, debug=True)