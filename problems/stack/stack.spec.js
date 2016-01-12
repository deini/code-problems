// TODO Add more tests

import { Stack } from './stack';

describe('Stack', () => {
  it('basic functionality', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });
});
