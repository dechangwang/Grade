from repository.oracle import personRepository

def getPerson(personId):
    personRepository.getPerson(personId)
    print(personId)