x = int(input("k: "))

index = 0
sum = 0
a , b = 0, 1
while a<x:
    print(a)
    if index %2==0:
        sum += a
    a , b = b , a+b
    index+=1    
print("sum: ",sum)