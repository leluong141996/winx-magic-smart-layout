from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/result', methods=['GET', 'POST'])
def result():
    return render_template('result.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, debug=True)