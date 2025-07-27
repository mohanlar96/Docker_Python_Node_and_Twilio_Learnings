x = [x for x in range(5) ]
print(x)

x = [ x + 5  for x in range(5) ]
print(x)

x = [ 0 for x in range(5) ]
print(x)


x = [[x for x in range(3)] for x in range(5)]
print(x)


x = [i for i in range(20) if i% 5 == 0 ] #collection 
print(x)


x = {i:0 for i in range(20) if i% 5 == 0 } # dict
print(x)


x = {i for i in range(20) if i% 5 == 0 } # set
print(x)


x = tuple(i for i in range(20) if i% 5 == 0 ) # tuple
print(x)
