interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

let user1: Greetable;

user1 = {
  name: "Akinola Gabriel",
  //   age: 27,
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  },
};

user1.greet("Hi there I am ");
