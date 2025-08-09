import math
n = int(input("n: "))

temp = n
sum_of_factorials = 0

while temp > 0:
    digit = temp%10
    sum_of_factorials += math.factorial(digit)
    temp//=10

if sum_of_factorials == n:
    print("strong number")
else :
    print("not a strong number")
