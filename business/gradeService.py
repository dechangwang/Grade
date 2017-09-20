#!/usr/bin/env python
# -*- coding:utf-8 -*-
from repository.oracle import personRepository
from model import person


def getPerson(person_id):
    return personRepository.getPerson(person_id)


def gradePerson(person_info):
    score_dict = personRepository.attrGrade(person_info)
    return score_dict


def attr_weight():
    return personRepository.get_attr_weight()
