ch = input("ch: ")

if ch.isalpha():
    if ch.lower() in "aeiou":
        print("it is vowel")
    else:
        print("it is a consonent")
else:
    print("it is not an alphabet")