export class Calculator {
  result: number = 0;
  a: number = 0;
  b: number = 0;

  add() {
    return this.a + this.b;
  }

  substract() {
    return this.a - this.b;
  }

  divide() {
    return this.a / this.b;
  }

  multiplication() {
    return this.a * this.b;
  }
}
