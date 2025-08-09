x = int(input("k: "))

a, b = 0, 1
index = 0
sum_even_indexed = 0

while a < x:
    print(a)
    if index % 2 == 0:
        sum_even_indexed += a
    a, b = b, a + b
    index += 1

print("sum:", sum_even_indexed)