from flask import Flask, render_template, request, jsonify, Response
import requests
import test
from business import gradeService
import json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index2.html')


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
@app.route("/grade/<personId>", methods=['GET', 'POST'])
def grade(personId=None):
    person = gradeService.getPerson(personId)
    p_score = gradeService.gradePerson(person)
    attr_weight = gradeService.attr_weight()
    rel_persons = gradeService.get_rel_persons(personId)
    print(p_score)
    print(attr_weight)

    score = calc_individual_person_score(p_score, attr_weight)

    for p in rel_persons:
        rel_person_score = gradeService.gradePerson(p)
        print("rel score = ", rel_person_score)
        # rel_score = calc_individual_person_score(rel_person_score,attr_weight)
        # print(" rel_score = ",rel_score)

    print("person score = ", score)
    # d = dict(name='bob',age = 20,score=88)

    print(person.getJson())
    response = Response(
        response=json.dumps(person.getJson()),
        mimetype="application/json",
        status=200
    )
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response
    # return jsonify(person.getJson())


def calc_individual_person_score(p_score, attr_weight):
    score = p_score['genderScore'] * attr_weight['gender_weight'] + p_score['nationScore'] * attr_weight[
        'nation_weight'] + p_score['ageScore'] * attr_weight['age_weight'] + p_score['birthPlaceScore'] * attr_weight[
        'birth_place_weight'] + p_score['edutationLevelScore'] * attr_weight[
        'education_level_weight'] + p_score['statusOfMarryScore'] * attr_weight[
        'status_marry_weight'] + p_score['titleScore'] * attr_weight[
        'title_weight'] + p_score['accentScore'] * attr_weight['accent_weight']
    return score


if __name__ == '__main__':
    app.run(debug=True)
