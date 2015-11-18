import { Node } from './node';

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(node) {
    if (node instanceof Node === false) {
      return;
    }

    if (!this.head) {
      this.head = node;
      this.size += 1;

      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.size += 1;
  }

  // We could do it with with this.size
  // But we also can do it with slow/fast strategy
  isPalindrome() {
    const stack = [];

    let fast = this.head;
    let slow = this.head;

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

    node.next = this.head;
    this.head = node;
    this.size += 1;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  remove(node) {
    let current = this.head;
    let prev = null;

    if (!this.head) {
      return;
    }

    if (this.head === node) {
      this.head = this.head.next;
      this.size -= 1;

      return;
    }

    while (current) {
      if (current === node) {
        prev.next = current.next;

        this.size -= 1;
      } else {
        prev = current;
      }

      current = current.next;
    }
  }

  unique() {
    const hash = {};

    let prev = null;
    let current = this.head;

    while (current) {
      const value = current.value;

      if (hash[value]) {
        prev.next = current.next;
        this.size -= 1;
      } else {
        hash[value] = true;
        prev = current;
      }

      current = current.next;
    }
  }
}
