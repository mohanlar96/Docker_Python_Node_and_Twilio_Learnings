try:
    age= int(input('Age: ' ))
    print( age)
    age/2
except ValueError:
    print( ' Invalid value')
except ZeroDivisionError:
    print('Age cannot be 0. ')
