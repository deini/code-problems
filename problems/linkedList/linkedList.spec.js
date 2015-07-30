import { LinkedList } from './linkedList';
import { Node } from './node';

describe('prepend()', () => {
  it('should do something', () => {
    const list = new LinkedList();
    const node = new Node(1);

    list.prepend(node);

    expect(list.head.value).toEqual(1);
  });
});
