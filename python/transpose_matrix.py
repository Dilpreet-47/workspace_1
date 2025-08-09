row = int(input("Enter the rows: "))
column = int(input("Enter the columns: "))

matrix = []

print("Enter the elements: ")
for i in range(row):
    li = list(map(int,input().split()))
    matrix.append(li)

print("orginal matrix: ",matrix)

transpose = []

for j in range(column):
    row = []
    for i in range(row):
        row.append(matrix[i][j])
    transpose.append(row)

