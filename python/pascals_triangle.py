from math import comb
n = int(input("n: "))

for i in range(n):
    print(" " * (n-i),end="")
    for j in range(i+1):
        print(comb(i,j),end=" ")
    print()