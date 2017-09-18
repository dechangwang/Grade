from flask import Flask,render_template,request, jsonify
import requests
import test
from business import gradeService


app = Flask(__name__)

@app.route('/')
def index():
    return "index"

@app.route('/index')
@app.route('/index/<name>')
def hello_world(name=None):
    return render_template('index.html', name=name)

@app.route('/about/')
def about():
    return 'about'

@app.route('/data',methods=['GET','POST'])
def data():
    content = request.json
    personId = content['person_id']
    print(content['person_id'])
    try:
        print(content['test'])
    except Exception:
        print("error")

    test.sayHello()
    return jsonify({"uuid": content})

# res = requests.post('http://localhost:5000/api/add_message/1234', json={"mytext":"lalala"})
# if res.ok:
#     print res.json()

@app.route('/filter')
def filter():
    return render_template('filter.html')

@app.route("/grade")
@app.route("/grade/<personId>")
def grade(personId=None):
    gradeService.getPerson(personId)
    return "hello"

if __name__ == '__main__':
    app.run(debug=True)