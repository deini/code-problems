export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value === undefined) {
      return;
    }

    if (value < this.value) {
      if (this.left === null) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (target === undefined) {
      return false;
    }

    if (target === this.value) {
      return true;
    }

    if (target < this.value) {
      if (this.left) {
        this.left.contains(target);
      } else {
        if (this.right) {
          this.right.contains(target);
        }
      }
    }

    return false;
  }

  inOrder(fn) {
    function doInOrder(node) {
      if (node) {
        doInOrder(node.left);
        fn(node);
        doInOrder(node.right);
      }
    }

    doInOrder(this);
  }

  preOrder(fn) {
    function doPreOrder(node) {
      if (node) {
        fn(node);
        doPreOrder(node.left);
        doPreOrder(node.right);
      }
    }

    doPreOrder(this);
  }

  postOrder(fn) {
    function doPostOrder(node) {
      if (node) {
        doPostOrder(node.left);
        doPostOrder(node.right);
        fn(node);
      }
    }

    doPostOrder(this);
  }
}

