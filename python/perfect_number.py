n = int(input("Enter a number: "))

factors = [i for i in range(1,n) if n % i == 0 ]

print(f"Factors: {factors}")

if(sum(factors)==n):
    print("Perfect number")
else:
    print("not a perfect number")