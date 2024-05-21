import os

from flask import Flask, send_from_directory, render_template

app = Flask(__name__, static_folder='static')


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/react')
@app.route('/react/<path:path>')
def serve_react_app(path='index.html'):
    return send_from_directory('static/react_app/build', path)



@app.route('/resume')
def resume():
    return render_template('resume.html')


@app.route('/projects')
def projects():
    return render_template('resume.html')


# if __name__ == '__main__':
#     app.run()


# For Dev
if __name__ == '__main__':
    app.run(debug=True)