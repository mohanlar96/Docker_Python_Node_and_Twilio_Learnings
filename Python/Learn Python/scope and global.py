x = 'mohan'

def fun(name):
    global x #if we use this it's gonna change 
    x=name

print(x)
fun('pyaro')
print(x) # will not change until you use global inside fun scope