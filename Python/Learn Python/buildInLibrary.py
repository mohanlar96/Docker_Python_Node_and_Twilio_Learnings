import random
from pathlib import Path
import shutil


for i in range(1):
    print(random.choice(["Mohan ","Sadequr", "Marcin "]))


class Dice:
    def roll(self):
        first= random.randint(1,6)
        second= random.randint(1,6)
        return first,second


dice= Dice()
print(dice.roll())

class Person:
    def __init__(self,x,y):
        self.x = x
        self.y = y
    
    def getProp(self):
        print(self.x,self.y)

d = Person(3,4)

print(d.getProp())



path=Path("testingMKDIR")
path.mkdir(exist_ok=True)

# Step 2: Create a file inside that directory
file_path = path / "my_file.txt"
file_path.write_text("Hello, Mohan! This is your file.")  # you can write any text here

for file in path.glob('*.txt'):
    print(file)


shutil.rmtree(path) # remove dir 
