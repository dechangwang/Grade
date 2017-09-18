import cx_Oracle
import pandas as pd

def getPerson(personId):
    conn = getConnect()
    cursor = conn.cursor()
    cursor.execute("select * from JF_D_SAMPLE WHERE ")
    res = cursor.fetchall()
    data = pd.DataFrame(res, columns=['1', '案件类别', '111', '1111'])
    print(data)

    # data.to_excel('data.xls')

    cursor.close()
    conn.close()


def getConnect():
    return cx_Oracle.connect('integral/Tongji123@10.60.38.133/orcl')