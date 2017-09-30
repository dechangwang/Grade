#!/usr/bin/env python
# -*- coding:utf-8 -*-
import cx_Oracle
import pandas as pd
from model import person


def createPerson(persons):
    p = person.Person(persons['personId'] + "", persons['name'] + "", persons['gender'],
                      persons['age'], persons['nativePlace'], persons['nation'],
                      persons['edutationLevel'], persons['statusOfMarry'],
                      persons['title'], persons['accent'])
    return p


def getPerson(personId):
    conn = getConnect()
    cursor = conn.cursor()
    cursor.execute("select * from JF_D_SAMPLE where 身份证号 = '%s'" % personId)
    res = cursor.fetchall()
    colunmNames = ['personId', 'name', 'gender', 'nation', 'nativePlace', 'age', 'edutationLevel', 'statusOfMarry',
                   "title", 'accent', 'ageRange', 'type', 'label']
    data = pd.DataFrame(res, columns=colunmNames)
    #    print(data)
    size = len(data.index)
    print("len = %d" % size)

    person1 = createPerson(data.ix[0])

    # print(person1)


    # for i in range(size):
    #     print(data.ix[i])
    # try:
    #     print(data.count())
    # except Exception:
    #     print("error")

    # if data['1'].count() > 0:
    #     print(data.ix[0])
    # print(data[:][1])
    # for d in data:
    #     print(data[d])


    # data.to_excel('data.xls')

    cursor.close()
    conn.close()
    return person1


def attrGrade(personInfo: person.Person):
    genderScore = getConcreteAttrGrade(personInfo.gender)
    nationScore = getConcreteAttrGrade(personInfo.nation)
    birthPlaceScore = getConcreteAttrGrade(personInfo.birthPlace)
    edutationLevelScore = getConcreteAttrGrade(personInfo.edutionLevel)
    statusOfMarryScore = getConcreteAttrGrade(personInfo.maritalStatus)
    titleScore = getConcreteAttrGrade(personInfo.title)
    ageScore = getAgeAttrGrade(float(personInfo.age))
    accentScore = getConcreteAttrGrade(personInfo.accent)
    scoreDict = dict(genderScore=genderScore, nationScore=nationScore, accentScore=accentScore,ageScore=ageScore,
                     birthPlaceScore=birthPlaceScore, edutationLevelScore=edutationLevelScore,
                     statusOfMarryScore=statusOfMarryScore, titleScore=titleScore)
    # print(scoreDict)
    return scoreDict


def get_attr_weight():
    gender_weight = get_concrete_attr_weight("性别")
    nation_weight = get_concrete_attr_weight("民族")
    age_weight = get_concrete_attr_weight("年龄")
    birth_place_weight = get_concrete_attr_weight("籍贯")
    education_level_weight = get_concrete_attr_weight("文化程度")
    status_marry_weight = get_concrete_attr_weight("婚姻状况")
    title_weight = get_concrete_attr_weight("身份名称")
    accent_weight = get_concrete_attr_weight("口音")
    attr_weight_dict = dict(gender_weight=gender_weight, nation_weight=nation_weight,
                            age_weight=age_weight, birth_place_weight=birth_place_weight,
                            education_level_weight=education_level_weight,
                            status_marry_weight=status_marry_weight,
                            title_weight=title_weight, accent_weight=accent_weight)
    return attr_weight_dict


def getConcreteAttrGrade(attr):
    conn = getConnect()
    cursor = conn.cursor()
    cursor.execute("select score from jf_attr_value where value = '%s'" % attr)
    score = cursor.fetchone()

    # print("score = %d" %score)
    cursor.close()
    conn.close()
    return score[0]


def getAgeAttrGrade(age):
    conn = getConnect()
    cursor = conn.cursor()
    cursor.execute("select value,score from jf_attr_value where name='年龄'")
    res = cursor.fetchall()
    data = pd.DataFrame(res, columns=['ageRange', 'score'])

    size = data['ageRange'].count()
    ageScore = 0
    for i in range(size):
        ageRange = data.ix[i]['ageRange'].rstrip()
        #pos = ageRange.find('-')

        # if pos == 0:
        #     ageRange = ageRange[1:len(ageRange)]
        arrAge = ageRange.split(':')
        startAge = 0.0
        endAge = 0.0
        try:
            startAge = float(arrAge[0].rstrip())
            endAge = float(arrAge[1].rstrip())
        except Exception:
            print("获取年龄段出错")

        if startAge < age and endAge > age:
            ageScore = data.ix[i]['score']
            print("startAge = %s endAge = %s" % (startAge, endAge))
            break

    print("score = %d" % ageScore)
    cursor.close()
    conn.close()
    return ageScore


def get_concrete_attr_weight(attr):
    conn = getConnect()
    cursor = conn.cursor()
    cursor.execute("select weight from JF_ATTR_WEIGHT where name = '%s'" % attr)
    score = cursor.fetchone()
    # print("score = %d" %res)
    cursor.close()
    conn.close()
    return score[0]


def getConnect():
    return cx_Oracle.connect('integral/Tongji123@10.60.38.133/orcl')

# getAgeAttrGrade(10)
# getPerson("102")
