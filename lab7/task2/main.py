from models import Animal, Cat, Dog

a1 = Animal("Animal", 3, "Animal")
a2 = Cat("Murka", 4, "Cat", 42)
a3 = Dog("La", 2, "Dog", "Labrador")

animals = [a1, a2, a3]

for animal in animals:
    print(animal)         
    print(animal.voice()) 
    print(animal.info())  
    print("---")
    
    if isinstance(animal, Cat):
        print("Mouse caught:", animal.mouseCaught)
    elif isinstance(animal, Dog):
        print("Breed:", animal.breed)