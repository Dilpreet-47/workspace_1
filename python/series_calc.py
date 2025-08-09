a = int(input("a: "))
b = int(input("b: "))
n = int(input("n: "))
result = []

for i in range(1,n+1):
    result.append(str(a+b**i))

print(f"Result :{' '.join(result)} ")