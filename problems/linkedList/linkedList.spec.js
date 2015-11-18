import { LinkedList } from './linkedList';
import { Node } from './node';

describe('append()', () => {
  it('should add node to the end of the list', () => {
    const list = new LinkedList();

    let lastNode = new Node(3);

    list.append(new Node(1));
    list.append(new Node(2));
    list.append(lastNode);

    let current = list.head;

    while (current.next) {
      current = current.next;
    }

    expect(current).toBe(lastNode);
  });

  it('should not break the list', () => {
    const list = new LinkedList();

    let node1 = new Node(1);
    let node2 = new Node(2);

    list.append(node1);
    list.append(node2);

    expect(list.head).toBe(node1);
    expect(list.head.next).toBe(node2);
  });

  it('should not add a node if node is invalid', () => {
    const list = new LinkedList();

    list.append({});
    expect(list.head).toBe(null);
  });

  it('should update the list size', () => {
    const list = new LinkedList();

    list.append(new Node(1));
    list.append(new Node(2));
    list.append(new Node(3));

    expect(list.size).toBe(3);
  });
});

describe('prepend()', () => {
  it('should add node to the beginning of the list', () => {
    const list = new LinkedList();

    let testNode = new Node(1);

    list.prepend(testNode);
    expect(list.head).toBe(testNode);

    testNode = new Node(2);
    list.prepend(testNode);
    expect(list.head).toBe(testNode);

    testNode = new Node(3);
    list.prepend(testNode);
    expect(list.head).toBe(testNode);
  });

  it('should not break the list', () => {
    const list = new LinkedList();

    let node1 = new Node(1);
    let node2 = new Node(2);

    list.prepend(node1);
    list.prepend(node2);

    expect(list.head).toBe(node2);
    expect(list.head.next).toBe(node1);
  });

  it('should not add a node if node is invalid', () => {
    const list = new LinkedList();

    list.prepend({});
    expect(list.head).toBe(null);
  });

  it('should update the list size', () => {
    const list = new LinkedList();

    list.prepend(new Node(1));
    list.prepend(new Node(2));
    list.prepend(new Node(3));

    expect(list.size).toBe(3);
  });
});

describe('unique()', () => {
  it('should remove duplicates and update size', () => {
    const list = new LinkedList();
    const hash = {};

    list.prepend(new Node(1));
    list.prepend(new Node(2));
    list.prepend(new Node(1));
    list.prepend(new Node(1));
    list.unique();

    let current = list.head;

    while (current) {
      const value = current.value;

      expect(hash[value]).toBe(undefined);

      hash[value] = true;

      current = current.next;
    }

    expect(list.size).toBe(2);
  });
});

describe('isPalindrome()', () => {
  it('should work with odd size lists', () => {
    const list = new LinkedList();

    list.append(new Node(1));
    list.append(new Node(2));
    list.append(new Node(1));

    expect(list.isPalindrome()).toBe(true);
  });

  it('should work with even size lists', () => {
    const list = new LinkedList();

    list.append(new Node(1));
    list.append(new Node(2));
    list.append(new Node(2));
    list.append(new Node(1));

    expect(list.isPalindrome()).toBe(true);
  });

  it('should return false if not palindrome', () => {
    const list = new LinkedList();

    list.append(new Node(1));
    list.append(new Node(2));
    list.append(new Node(3));
    list.append(new Node(1));

    expect(list.isPalindrome()).toBe(false);
  });
});

describe('hasLoop()', () => {

});

describe('intersection()', () => {

});

describe('insertAt()', () => {

});
