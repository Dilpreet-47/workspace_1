n = int(input("n: "))

if n<0:
    print("Invalid")
else:
    num = n
    for factors in [2,3,5]:
        while num%factors==0:
            num//=factors
    if num == 1:
        print("ugly number")
    else :
        print("not an ugly number")