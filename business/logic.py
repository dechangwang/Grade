def opeNeo4j():
    print("this is opeNeo4j func")
    return "result"

def maxLength(arr,pre,curpos):
    if curpos == len(arr):
        return 0
    taken = 0
    if arr[curpos][0] > pre[0] and arr[curpos][1] > pre[1]:
        taken = 1 + maxLength(arr,arr[curpos],curpos +1)

    nottaken = maxLength(arr,pre,curpos+1)
    return max(taken,nottaken)


arr = [[5,4],[6,4],[6,7],[2,3]]
arr.sort()
print(arr)
res = maxLength(arr,[0,0],0)
print(res)

