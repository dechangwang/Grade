#!/usr/bin/env python
# -*- coding:utf-8 -*-
class Person:
    def __init__(self,personId="",name="",gender="",age=0,birthPlace="",nation="",edutionLevel="",maritalStatus="",title="",accent=""):
        self.personId = personId
        self.name = name
        self.gender = gender
        self.age = age
        self.birthPlace = birthPlace
        self.nation = nation
        self.edutionLevel = edutionLevel
        self.maritalStatus = maritalStatus
        self.title = title
        self.accent = accent

    def __str__(self):
        return 'Person (%s, %s, %s, %s,%s, %s, %s,%s,%s, %s)'\
               % (self.personId,self.name,self.gender, self.age,self.birthPlace,
                  self.nation,self.edutionLevel, self.maritalStatus,self.title,self.accent)

    def getJson(self):
        return dict(personId=self.personId,name=self.name,
                    gender=self.gender,birthplace=self.birthPlace,
                    nation=self.nation,edutationLevel=self.edutionLevel,
                    statusOfMarry=self.maritalStatus,title=self.title,
                    accent=self.accent)

# person = Person("1","张三","男","上海","汉族","大学","已婚")
# print(person)
# print(person.nation)