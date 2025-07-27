names= ['JOhn','Bob','Mosh', 'Sarah', 'Mohan '];

print(names[2:4]) # select the range of the array .

number=[1,3,5,7,3,67,2]

max=number[0]

for x in number:
    if(max<x):
        max=x
print(f"maxing number {max}")

matrix=[
    [1,2,3],
    [4,5,6],
    [7,9,2]
]
print(matrix[0][1])
for row in matrix:
    for item in row:
        print(item)

number.append(10);
number.insert(2,10)
#number.clear()
number.remove(67)
number.pop()
print(number.index(2))
number.sort()
number.reverse()
number2=number.copy()


# removing the dumplicate from
numbers= [2,2,4,6,3,4,6,1]
uniques=[]
for num in numbers:
    if num not in uniques:
        uniques.append(num)

print(uniques);