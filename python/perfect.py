n = int(input("n: "))

factors = [i for i in range(1,n) if n % i==0]
sum_factors = sum(factors)

print(f"factors of this number are: {factors}\nsum: {sum_factors}")

if sum_factors==n:
    print("it is perfect number")
elif sum_factors>n:
    print("Abundant number")
else:
    print("Deficient number")