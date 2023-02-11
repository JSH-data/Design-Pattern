const dog = {
  bark() {
    return "Woof";
  },
};

const pet1 = Object.create(dog);

console.log("Direct Properties on pet1", Object.keys(pet1));
console.log("Properties on pet1's prototype", Object.keys(pet1.__proto__));
