from neo4j.v1 import GraphDatabase, basic_auth

driver = GraphDatabase.driver("bolt://localhost:7687", auth=basic_auth("neo4j", "wang"))
session = driver.session()

# session.run("CREATE (a:Person {name: {name}, title: {title}})",
#               {"name": "Arthur", "title": "King"})
#
# result = session.run("MATCH (a:Person) WHERE a.name = {name} "
#                        "RETURN a.name AS name, a.title AS title",
#                        {"name": "Arthur"})
# for record in result:
#     print("%s %s" % (record["title"], record["name"]))
#
# session.close()


def serialize_movie(movie):
    return {
        'id': movie['id'],
        'title': movie['title'],
        'summary': movie['summary'],
        'released': movie['released'],
        'duration': movie['duration'],
        'rated': movie['rated'],
        'tagline': movie['tagline']
    }

result = session.run("match(m:Movie{title:'The Replacements'})<-[r]-(p) return m,p,type(r) as rating")
for res in result:
    #print(res['m'])
    print(serialize_movie(res['m']))


session.close()


