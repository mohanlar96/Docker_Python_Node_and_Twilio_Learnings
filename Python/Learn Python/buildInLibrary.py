import random
from pathlib import Path

for i in range(1):
    print(random.choice(["Mohan ","Sadequr", "Marcin "]))


class Dice:
    def roll(self):
        first= random.randint(1,6)
        second= random.randint(1,6)
        return first,second


dice= Dice()
print(dice.roll())



path=Path()
path.mkdir("testingMKDIR")

for file in path.glob('*.py'):
    print(file)
