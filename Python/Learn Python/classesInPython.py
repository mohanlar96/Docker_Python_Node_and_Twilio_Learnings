
class Point :
    def __init__(self,x,y):
        self.y=y
        self.x=x

    def move(self):
        print("move "+str(self.x))

    def draw(self):
        print("draw")


point1= Point(x=1,y=2)
point1.x=10
point1.y=20

print(point1.x)
point1.draw()

point2=Point(10,20)
point2.move()





