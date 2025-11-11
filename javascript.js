const name = "Alvaro";
let age = 27;

console.log(name + " has " + age + " years old ");

const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});