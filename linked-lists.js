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
  size() {
    if (this.head === null) return 0;
    let currentNode = this.head;
    let sizeCount = 1;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      sizeCount++;
    }
    return sizeCount;
  }
  getHead() {
    return this.head;
  }
  tail() {
    if (this.head === null) return null;
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  at(index) {
    if (this.head === null) return null;
    if (index === 0) return this.head.value;
    let currentIndex = 1;
    let currentNode = this.head;
    while (currentIndex !== index) {
      if (!currentNode.nextNode) return null;
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
    return currentNode.value;
  }
  pop() {
    if (this.head === null) return null;
    let currentNode = this.head;
    while (currentNode.nextNode) {
      if (currentNode.nextNode.nextNode === null) {
        let poppedNode = currentNode.nextNode.value;
        currentNode.nextNode = currentNode.nextNode.nextNode;
        return poppedNode;
      }
      currentNode = currentNode.nextNode;
    }
  }
  contains(value) {
    if (this.head === null) return false;
    let currentNode = this.head;
    while (currentNode.nextNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    if (currentNode.value === value) {
      return true;
    }
    return false;
  }
  find(value) {
    if (this.head === null) return null;
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode.nextNode) {
      currentIndex++;
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
    }
    if (currentNode.value === value) {
      return currentIndex;
    }
    return null;
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