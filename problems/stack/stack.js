import { LinkedList } from '../linkedList/linkedList';
import { Node } from '../linkedList/node';

export class Stack {
  constructor() {
    this._linkedList = new LinkedList();
  }

  getSize() {
    return this._linkedList.getSize();
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  peek() {
    if (this._linkedList.getHead()) {
      return this._linkedList.getHead().value;
    }
  }

  pop() {
    const head = this._linkedList.getHead();

    let value;

    if (head) {
      value = head.value;
    }

    this._linkedList.remove(head);

    return value;
  }

  push(value) {
    if (value !== undefined) {
      const node = new Node(value);

      this._linkedList.prepend(node);
    }
  }
}
