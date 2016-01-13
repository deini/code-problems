// TODO Add more tests

import { QueueWithStacks } from './queueWithStacks';

describe('QueueWithStacks', () => {
  it('should have basic functionality', () => {
    const queue = new QueueWithStacks();

    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.peek()).toBe(1);
    expect(queue.pop()).toBe(1);

    expect(queue.peek()).toBe(2);
    expect(queue.pop()).toBe(2);

    expect(queue.peek()).toBe(3);
    expect(queue.pop()).toBe(3);
  });
});
