from flask import Flask, render_template, request, jsonify
import requests
import test
from business import gradeService
import json

app = Flask(__name__)


@app.route('/')
def index():
    return "index"


@app.route('/index')
@app.route('/index/<name>')
def hello_world(name=None):
    # res = requests.get('http://127.0.0.1:5000/grade/102')
    return render_template('index.html', name=name)


@app.route('/about/')
def about():
    return 'about'


@app.route('/data', methods=['GET', 'POST'])
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
    person = gradeService.getPerson(personId)
    p_score = gradeService.gradePerson(person)
    attr_weight = gradeService.attr_weight()
    print(p_score)
    print(attr_weight)

    score = p_score['genderScore'][0] * attr_weight['gender_weight'][0] + p_score['nationScore'][0] * attr_weight[
        'nation_weight'][0] + p_score['ageScore']* attr_weight['age_weight'][0] + p_score['birthPlaceScore'][0] * attr_weight[
        'birth_place_weight'][0] + p_score['edutationLevelScore'][0] * attr_weight[
        'education_level_weight'][0] + p_score['statusOfMarryScore'][0] * attr_weight[
        'status_marry_weight'][0] + p_score['titleScore'][0] * attr_weight[
        'title_weight'][0] + p_score['accentScore'][0] * attr_weight['accent_weight'][0]

    print("person score = ",score)
    # d = dict(name='bob',age = 20,score=88)

    print(person.getJson())
    return json.dumps(person.getJson())


if __name__ == '__main__':
    app.run(debug=True)
