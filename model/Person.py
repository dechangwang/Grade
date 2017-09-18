class Person:
    def __init__(self,personId,name,gender,birthPlace,nation,edutionLevel,maritalStatus):
        self.personId = personId
        self.name = name
        self.gender = gender
        self.birthPlace = birthPlace
        self.nation = nation
        self.edutionLevel = edutionLevel
        self.maritalStatus = maritalStatus

    def __str__(self):
        return 'Person (%s, %s, %s, %s,%s, %s, %s)'\
               % (self.personId,self.name,self.gender, self.birthPlace,
                  self.nation,self.edutionLevel, self.maritalStatus)

# person = Person("1","张三","男","上海","汉族","大学","已婚")
# print(person)
# print(person.nation)