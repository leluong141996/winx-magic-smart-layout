import requests

url = "http://172.16.6.230:5000/api/v1.0/entertainment/hackathon/thumbnails"

def sorf_image(arr):
    payload = {
        "images": arr
    }

    response = requests.post(url, json=payload)

    return response.json()['Data']

arr = [
        "http://172.16.8.201:9092/home/luonglv/luonglv/code/GAPO/smart_layout/winx-magic-smart-layout/static/image_upload/1609328577.3195894.jpg",
        "http://172.16.8.201:9092/home/luonglv/luonglv/code/GAPO/smart_layout/winx-magic-smart-layout/static/image_upload/1609328577.4269118.jpg",
        "http://172.16.8.201:9092/home/luonglv/luonglv/code/GAPO/smart_layout/winx-magic-smart-layout/static/image_upload/1609328577.2751296.jpg",
        "http://172.16.8.201:9092/home/luonglv/luonglv/code/GAPO/smart_layout/winx-magic-smart-layout/static/image_upload/1609328577.1282673.jpg"
    ]

sorf_image(arr)
