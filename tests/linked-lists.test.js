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
    expect(newList.head.next.value).toBe('bob');
    expect(newList.head.next.next.value).toBe('angelina');
    expect(newList.head.next.next.next.value).toBe('raquel');
  });

  it('prepend adds nodes to the beginning of the list', () => {
    newList.prepend('steve');
    newList.prepend('bob');
    newList.prepend('angelina');
    newList.prepend('raquel');
    expect(newList).toBe(4);
  })
})