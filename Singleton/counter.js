let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCounter() {
    return counter;
  }

  increament() {
    return ++counter;
  }

  decreament() {
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
