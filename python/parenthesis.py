s = input("str:")

depth = 0
maxdepth = 0
errors = 0

for char in s:
    if char == "(":
        depth+=1
        maxdepth = max(maxdepth,depth)
    elif char == ")":
        if depth == 0:
            errors += 1
        else:
            depth -= 1

errors += depth

if errors == 0:
    print(f"valid and depth {maxdepth}")

else:
    print(f"not valid and errors {errors}")