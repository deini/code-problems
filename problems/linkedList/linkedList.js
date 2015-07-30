export class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(node) {
    if (!node) {
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
