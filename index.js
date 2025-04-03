const calculator = {
    add(a,b) {
        return this.a + this.b;
    },
    subtract(a,b) {
        return this.a - this.b;
    },
    multiply(a,b) {
        return this.a * this.b;
    },
    divide(a,b) {
        return this.a / this.b;
    }
}

const numbers = {
    a: 10,
    b: 5
  };

  console.log(calculator.add.call(numbers))// 15
  console.log(calculator.subtract.apply(numbers))// 5
  const boundMultiply = calculator.divide.bind(numbers);
  console.log(boundMultiply()) // bind нужно вызывать