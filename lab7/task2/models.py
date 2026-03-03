class Animal:
    def __init__(self, name, age, type):
        self.name = name
        self.age = age
        self.type = type
    def getName(self):
        return self.name
    def getAge(self):
        return self.age
    def getType(self):
        return self.type
    def setName(self, name):
        self.name = name
    def setAge(self, age):
        self.age = age
    def setType(self, type):
        self.type = type
        
    def info(self):
        return "this is an animal"
    def voice(self):
        return "an animal makes a sound"
    
    def __str__(self):
        return f"name: {self.name}, age: {self.age}, type: {self.type} "
    
    
    
class Cat(Animal):
    def __init__(self, name, age, type, mouseCaught):
        super().__init__(name, age, type)
        self.mouseCaught = mouseCaught
        
    def getMouseCaught(self):
        return self.mouseCaught
    def setMouseCaught(self, mouseCaught):
        self.mouseCaught = mouseCaught
        
    def info(self):
        return "this is a Cat"
    def voice(self):
        return "Meowwww"
    def findViscas():
        return True
    
    def __str__(self):
        return super().__str__() + f"mouseCaught: {self.mouseCaught} "
    
class Dog(Animal):
    def __init__(self, name, age, type, breed):
        super().__init__(name, age, type)
        self.breed = breed
        
    def getBreed(self):
        return self.breed
    def setBreed(self, breed):
        self.breed = breed
        
    def info(self):
        return "this is a Dog"
    def voice(self):
        return "Woof"
    def findBone():
        return True
    
    def __str__(self):
        return super().__str__() + f"breed: {self.breed} "