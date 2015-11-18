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

describe('remove', () => {
  function expectNotToContain(head, node) {
    let current = head;

    while (current) {
      expect(current).not.toBe(node);

      current = current.next;
    }
  }

  it('should remove the first node correctly', () => {
    const first = new Node(1);
    const list = new LinkedList();

    list.append(first);
    list.append(new Node(2));
    list.append(new Node(3));

    list.remove(first);

    expectNotToContain(list.head, first);

    expect(list.size).toBe(2);
  });

  it('should remove a middle node correctly', () => {
    const list = new LinkedList();
    const middle = new Node(2);

    list.append(new Node(1));
    list.append(middle);
    list.append(new Node(3));

    list.remove(middle);

    expectNotToContain(list.head, middle);

    expect(list.size).toBe(2);
  });

  it('should remove the last node correctly', () => {
    const last = new Node(3);
    const list = new LinkedList();

    list.append(new Node(1));
    list.append(new Node(2));
    list.append(last);

    list.remove(last);

    expectNotToContain(list.head, last);

    expect(list.size).toBe(2);
  });

  it('should remove correctly if there is just one node', () => {
    const list = new LinkedList();
    const lonely = new Node(1);

    list.append(lonely);
    list.remove(lonely);

    expectNotToContain(list.head, lonely);

    expect(list.size).toBe(0);
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

describe('containsValue()', () => {
  it('should return true if the value exists in the list', () => {
    const list = new LinkedList();

    list.append(new Node(1));
    list.append(new Node(2));
    list.append(new Node(3));

    expect(list.containsValue(2)).toBe(true);
  });

  it('should return false if the value does not exists in the list', () => {
    const list = new LinkedList();

    list.append(new Node(1));
    list.append(new Node(2));
    list.append(new Node(3));

    expect(list.containsValue(4)).toBe(false);
  });
});

describe('containsNode()', () => {
  it('should return true if the node exists in the list', () => {
    const list = new LinkedList();
    const testNode = new Node(1);

    list.append(testNode);
    list.append(new Node(2));

    expect(list.containsNode(testNode)).toBe(true);
  });

  it('should return false if the node does not exists in the list', () => {
    const list = new LinkedList();
    const testNode = new Node(1);

    list.append(new Node(1));
    list.append(new Node(2));

    expect(list.containsNode(testNode)).toBe(false);
  });
});

describe('hasLoop()', () => {
  it('should return false if the list has no loop', () => {
    const list = new LinkedList();

    list.append(new Node(1));
    list.append(new Node(2));
    list.append(new Node(3));

    expect(list.hasLoop()).toBe(false);
  });

  it('should return the node where the loop starts', () => {
    const list = new LinkedList();
    const first = new Node(1);
    const second = new Node(2);
    const third = new Node(3);

    third.next = second;

    list.append(first);
    list.append(second);
    list.append(third);

    expect(list.hasLoop()).toBe(second);
  });
});

describe('indexOf()', () => {
  it('should return the correct index #', () => {
    const list = new LinkedList();
    const testNode = new Node(1);

    expect(list.indexOf(testNode)).toBe(-1);

    list.append(testNode);
    expect(list.indexOf(testNode)).toBe(0);

    list.prepend(new Node(2));
    expect(list.indexOf(testNode)).toBe(1);

    list.prepend(new Node(3));
    expect(list.indexOf(testNode)).toBe(2);
  });
});

describe('insertAt()', () => {
  it('should be able to insert if the list is empty', () => {
    const list = new LinkedList();
    const testNode = new Node(1);

    list.insertAt(0, testNode);

    expect(list.head).toBe(testNode);
    expect(list.size).toBe(1);
  });

  it('it should be able to insert in the beginning of the list', () => {
    const list = new LinkedList();
    const firstNode = new Node(1);
    const secondNode = new Node(2);

    list.append(secondNode);
    list.insertAt(0, firstNode);

    expect(list.head).toBe(firstNode);
    expect(firstNode.next).toBe(secondNode);
    expect(list.size).toBe(2);
  });

  it('it should be able to insert in the middle of the list', () => {
    const list = new LinkedList();
    const firstNode = new Node(1);
    const secondNode = new Node(2);
    const thirdNode = new Node(3);

    list.append(firstNode);
    list.append(thirdNode);
    list.insertAt(1, secondNode);

    expect(firstNode.next).toBe(secondNode);
    expect(secondNode.next).toBe(thirdNode);
    expect(list.size).toBe(3);
  });

  it('it should be able to insert in the end of the list', () => {
    const list = new LinkedList();
    const firstNode = new Node(1);
    const secondNode = new Node(2);
    const thirdNode = new Node(3);

    list.append(firstNode);
    list.append(secondNode);
    list.insertAt(2, thirdNode);

    expect(secondNode.next).toBe(thirdNode);
    expect(list.size).toBe(3);
  });
});
