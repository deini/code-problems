import { Node } from './node';

export class LinkedList {
  constructor() {
    this._size = 0;
    this._head = null;
  }

  append(node) {
    if (node instanceof Node === false) {
      return;
    }

    if (!this._head) {
      this._head = node;
      this._size += 1;

      return;
    }

    let current = this._head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this._size += 1;
  }

  containsNode(node) {
    let current = this._head;

    while (current) {
      if (current === node) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  containsValue(value) {
    let current = this._head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  getHead() {
    return this._head;
  }

  getSize() {
    return this._size;
  }

  hasLoop() {
    let fast = this._head;
    let slow = this._head;

    if (!this._head) {
      return false;
    }

    fast = fast.next;

    while (fast && fast.next) {
      if (slow === fast) {
        slow = this._head;

        while (slow !== fast) {
          slow = slow.next;
          fast = fast.next.next;
        }

        return slow;
      }

      slow = slow.next;
      fast = fast.next.next;
    }

    return false;
  }

  indexOf(node) {
    let current = this._head;
    let index = 0;

    while (current) {
      if (current === node) {
        return index;
      }

      current = current.next;
      index += 1;
    }

    return -1;
  }

  insertAt(index, node) {
    let current = this._head;

    if (index < 0 || index > this._size) {
      return;
    }

    if (index === 0) {
      node.next = this._head;
      this._head = node;
      this._size += 1;

      return;
    }

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;
    this._size += 1;
  }

  // We could do it with with this._size
  // But we also can do it with slow/fast strategy
  isPalindrome() {
    const stack = [];

    let fast = this._head;
    let slow = this._head;

    while (fast && fast.next) {
      stack.push(slow.value);

      fast = fast.next.next;
      slow = slow.next;
    }

    if (fast) {
      slow = slow.next;
    }

    while (slow) {
      if (slow.value !== stack.pop()) {
        return false;
      }

      slow = slow.next;
    }

    return true;
  }

  prepend(node) {
    if (node instanceof Node === false) {
      return;
    }

    node.next = this._head;
    this._head = node;
    this._size += 1;
  }

  print() {
    let current = this._head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  remove(node) {
    let current = this._head;
    let prev = null;

    if (!this._head) {
      return;
    }

    if (this._head === node) {
      this._head = this._head.next;
      this._size -= 1;

      return;
    }

    while (current) {
      if (current === node) {
        prev.next = current.next;

        this._size -= 1;
      } else {
        prev = current;
      }

      current = current.next;
    }
  }

  unique() {
    const hash = {};

    let prev = null;
    let current = this._head;

    while (current) {
      const value = current.value;

      if (hash[value]) {
        prev.next = current.next;
        this._size -= 1;
      } else {
        hash[value] = true;
        prev = current;
      }

      current = current.next;
    }
  }
}
