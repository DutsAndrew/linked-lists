const LinkedList = require('../linked-lists');
// const Node = require('../linked-lists');

describe('linked list testing', () => {

  let newList;

  beforeEach(() => {
    newList = new LinkedList();
  });

  it('creates list', () => {
    expect(newList.head).toBe(null);
  });

  it('append method adds nodes to list, new nodes are added to the end', () => {
    newList.append('steve');
    newList.append('bob');
    newList.append('angelina');
    newList.append('raquel');
    expect(newList.head.value).toBe('steve');
    expect(newList.head.nextNode.value).toBe('bob');
    expect(newList.head.nextNode.nextNode.value).toBe('angelina');
    expect(newList.head.nextNode.nextNode.nextNode.value).toBe('raquel');
  });

  it('prepend adds nodes to the beginning of the list', () => {
    newList.prepend('steve');
    newList.prepend('bob');
    newList.prepend('angelina');
    newList.prepend('raquel');
    expect(newList.head.value).toBe('raquel');
    expect(newList.head.nextNode.value).toBe('angelina');
    expect(newList.head.nextNode.nextNode.value).toBe('bob');
    expect(newList.head.nextNode.nextNode.nextNode.value).toBe('steve');
  });

  it('size method returns the correct size of the linked list', () => {
    newList.prepend('steve');
    newList.prepend('bob');
    newList.append('angelina');
    newList.append('raquel');
    expect(newList.size()).toBe(4);
  });

  it('head method returns correct head of linked list', () => {
    newList.append('angelina');
    newList.append('raquel');
    expect(newList.getHead().value).toBe('angelina');
  });

  it('tail method returns the end of linked list', () => {
    newList.prepend('steve');
    newList.prepend('bob');
    newList.append('angelina');
    newList.append('raquel');
    newList.append('george');
    newList.append('anna');
    expect(newList.tail().value).toBe('anna');
  })
})