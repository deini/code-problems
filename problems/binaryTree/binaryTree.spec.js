import { Node } from './binaryTree';

describe('BinaryTree', () => {
  it('should return inOrder', () => {
    const node = new Node(2);
    const arr = [];

    node.insert(1);
    node.insert(3);

    node.inOrder(currentNode => {
      arr.push(currentNode.value);
    });

    expect(arr).toEqual([1, 2, 3]);
  });

  it('should return preOrder', () => {
    const node = new Node(2);
    const arr = [];

    node.insert(1);
    node.insert(3);

    node.preOrder(currentNode => {
      arr.push(currentNode.value);
    });

    expect(arr).toEqual([2, 1, 3]);
  });

  it('should return postOrder', () => {
    const node = new Node(2);
    const arr = [];

    node.insert(1);
    node.insert(3);

    node.postOrder(currentNode => {
      arr.push(currentNode.value);
    });

    expect(arr).toEqual([1, 3, 2]);
  });
});
