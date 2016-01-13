import { Stack } from './../stack/stack';

export class StackWithMin {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
  }

  min() {
    return this.minStack.peek();
  }

  peek() {
    return this.stack.peek();
  }

  push(value) {
    if (value === undefined) {
      return;
    }

    this.stack.push(value);

    if (this.minStack.isEmpty() || this.minStack.peek() > value) {
      this.minStack.push(value);
    } else {
      this.minStack.push(this.minStack.peek());
    }
  }

  pop() {
    this.minStack.pop();

    return this.stack.pop();
  }
}
