x = [2,34,4,6,3,4,2,10,44,46,90,32,221,11,113]


xx = map(lambda a: a*a,x)

print(list(xx))

xy = filter(lambda i: i%2 == 0 , x) # filter(function, input)
print(list(xy))



# Define a function to check if a number is even
def is_even(num):
    return num % 2 == 0

# Create a list of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Use the filter() function
even_numbers = list(filter(is_even, numbers))

print("Even numbers:", even_numbers)

