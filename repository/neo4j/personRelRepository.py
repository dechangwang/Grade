#!/usr/bin/env python
# -*- coding:utf-8 -*-

from neo4j.v1 import GraphDatabase, basic_auth
from model import person

driver = GraphDatabase.driver("bolt://localhost:7687", auth=basic_auth("neo4j", "wang"))


def get_session():
    return driver.session()
    # return session


def create_person(persons):
    p = person.Person(persons['personId'] + "", persons['name'] + "", persons['gender'],
                      persons['age'], persons['birthPlace'], persons['nation'],
                      persons['eduLevel'], persons['statusMarry'],
                      persons['title'], persons['accent'])
    return p


def get_rel_persons(person_id):
    session = get_session()
    # driver = GraphDatabase.driver("bolt://localhost:7687", auth=basic_auth("neo4j", "wang"))
    # session = driver.session()

    result = session.run("match(p:Person{personId:'102'})<-[m]-(person) return person")
    person_list = []
    for res in result:
        p = create_person(res['person'])
        person_list.append(p)

    session.close()
    return person_list


if __name__ == '__main__':
    get_rel_persons("102")
