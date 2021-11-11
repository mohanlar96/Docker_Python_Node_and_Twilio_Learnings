def greet_user(name, last): #paramater
    print(f'Hi there {name} {last}')
    print ('thius is called by python .')
    return True # null in Python is None


print(" Start")
greet_user('JOhn',"Smith ") #positional argument


greet_user(last="Lar", name="Mohan ") #keyworld argument
#if you want to mix 2 things.. use posiiontal argument frist then positional
print("end ")