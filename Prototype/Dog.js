class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return "woof";
  }
}

const dog1 = new Dog("first");
const dog2 = new Dog("second");
const dog3 = new Dog("third");

console.log(Dog.prototype);
console.log(dog1.__proto__);

Dog.prototype.play = () => console.log("Playing Now!");

dog1.play();

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }
  fly() {
    console.log("fly~!");
  }
}

const flyDog1 = new SuperDog("Daisy");

flyDog1.fly();
