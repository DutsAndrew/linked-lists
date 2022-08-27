class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(data) {
    const newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode;
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
    return this.head;
  }
  prepend(data) {
    const newNode = new Node(data);
    if (this.head !== null) {
      let currentHead = this.head;
      this.head = newNode;
      newNode.nextNode = currentHead;
      return;
    } else {
      this.head = newNode;
    }

  }
}

class Node {
  constructor(data) {
    this.value = data;
    this.nextNode = null;
  }
  value(data) {
    this.value = data;
  }
}

module.exports = LinkedList;
// module.exports = Node;