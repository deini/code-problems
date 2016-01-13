import { Stack } from './../stack/stack';

export class QueueWithStacks {
  constructor() {
    this.newStack = new Stack();
    this.oldStack = new Stack();
  }

  peek() {
    this.shiftStacks();

    return this.oldStack.peek();
  }

  pop() {
    this.shiftStacks();

    return this.oldStack.pop();
  }

  push(value) {
    this.newStack.push(value);
  }

  shiftStacks() {
    if (this.oldStack.isEmpty()) {
      while (!this.newStack.isEmpty()) {
        this.oldStack.push(this.newStack.pop());
      }
    }
  }
}
