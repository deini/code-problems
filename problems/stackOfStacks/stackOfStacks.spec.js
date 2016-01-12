// TODO Add more tests

import { StackOfStacks } from './stackOfStacks';

describe('StackOfStacks', () => {
  it('basic functionality', () => {
    const stack = new StackOfStacks(3);

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack._stacks.getSize()).toBe(2);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack._stacks.getSize()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack._stacks.getSize()).toBe(0);
  });
});
