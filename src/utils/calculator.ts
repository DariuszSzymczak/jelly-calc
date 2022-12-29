export class Calculator {
  result: number = 0;
  a: number = 0;
  b: number = 0;

  add() {
    this.result = this.a + this.b;
  }

  substract() {
    this.result = this.a - this.b;
  }

  divide() {
    this.result = this.a / this.b;
  }

  multiplication() {
    this.result = this.a * this.b;
  }
}
