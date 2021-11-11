customer={
    "name":"John Smith",
    "age":30,
    "is_verifyied":True # no duplicated key allow.. no 2 age allow
}



print(customer["name"])
print(customer.get("age", "DEFAULT VALUE "))
