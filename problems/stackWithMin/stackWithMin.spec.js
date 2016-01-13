import { StackWithMin } from './stackWithMin';

describe('StackWithMin', () => {
  it('shold have basic stack functionality', () => {
    const stack = new StackWithMin();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);

    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);

    expect(stack.peek()).toBe(1);
    expect(stack.pop()).toBe(1);
  });

  it('should return the min', () => {
    const stack = new StackWithMin();

    stack.push(3);
    stack.push(1);
    stack.push(2);
    stack.push(5);

    expect(stack.min()).toBe(1);

    // Removing 5
    stack.pop();

    expect(stack.min()).toBe(1);

    // Removing 2
    stack.pop();


    expect(stack.min()).toBe(1);

    // Removing 1
    stack.pop();

    expect(stack.min()).toBe(3);
  });
});
