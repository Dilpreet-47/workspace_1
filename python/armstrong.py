n = int(input("Enter the input: "))

digits = [int(d) for d in str(n)]

length = len(digits)

sum_of_digits = sum(d**length for d in digits) 
print(f"sum of all the digits is {sum_of_digits}")
if sum_of_digits == n:
    print("armstrong number")
else:
    print("not a armstrong number")