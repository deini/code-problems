import { Stack } from './../stack/stack';

export class StackOfStacks {
  constructor(limit) {
    this._stacks = new Stack();
    this._limit = limit;
  }

  push(value) {
    if (value === undefined) {
      return;
    }

    if (this._stacks.isEmpty()) {
      this._stacks.push(new Stack());
    }

    if (this._stacks.peek().getSize() === this._limit) {
      this._stacks.push(new Stack());
    }

    const currentStack = this._stacks.peek();
    currentStack.push(value);
  }

  pop() {
    const currentStack = this._stacks.peek();

    if (currentStack.isEmpty()) {
      return;
    }

    const value = currentStack.pop();

    if (currentStack.isEmpty()) {
      this._stacks.pop();
    }

    return value;
  }
}
