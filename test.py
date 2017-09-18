import cx_Oracle
import pandas as pd

from model.Person import Person
from business import testImport

# testImport.doSomething()
# person = Person("1","张三","男","上海","汉族","大学","已婚")
# person.age = 20
# print(person)
# print(person.age)

def opeOracle():
    conn = cx_Oracle.connect('integral/Tongji123@10.60.38.133/orcl')
    cursor = conn.cursor()
    cursor.execute("select * from T_A_AJJBXX")
    res = cursor.fetchall()
    data = pd.DataFrame(res, columns=['1', '案件类别', '111', '1111'])
    print(data)

    # data.to_excel('data.xls')

    cursor.close()
    conn.close()
    # for result in cursor:
    #     print(result)

    # res = cursor.fetchall()
    # print("-----------all result ----------\n\r")
    # print(res)

def sayHello():
    print("this is test.sayHello func")

if __name__ == '__main__':
    print("Hi")
    opeOracle()