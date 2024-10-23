class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    isEmpty() {
      return this.root === null;
    }
    insert(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.root = node;
      } else {
        this.insertValue(this.root, node);
      }
    }
    insertValue(root, node) {
      if (node.value < root.value) {
        if (root.left === null) {
          root.left = node;
        } else {
          this.insertValue(root.left, node);
        }
      } else {
        if (root.right === null) {
          root.right = node;
        } else {
          this.insertValue(root.right, node);
        }
      }
    };
  }
  
const bst = new BinarySearchTree();


console.log("is this empty?", bst.isEmpty());
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)
bst.insert(6)
bst.insert(7)
bst.insert(8)
bst.insert(9)
bst.insert(0)
bst.insert(11)
bst.insert(12)
bst.insert(13)
bst.insert(14)
bst.insert(15)
bst.insert(16)
bst.insert(17)
bst.insert(18)
bst.insert(19)
bst.insert(20)
bst.insert(21)
bst.insert(22)
bst.insert(23)
console.log(bst);
