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
    expect(newList.size()).toBe(0);
    newList.prepend('steve');
    newList.prepend('bob');
    newList.append('angelina');
    newList.append('raquel');
    expect(newList.size()).toBe(4);
  });

  it('head method returns correct head of linked list', () => {
    expect(newList.getHead()).toBe(null);
    newList.append('angelina');
    newList.append('raquel');
    expect(newList.getHead().value).toBe('angelina');
  });

  it('tail method returns the end of linked list', () => {
    expect(newList.tail()).toBe(null);
    newList.prepend('steve');
    newList.prepend('bob');
    newList.append('angelina');
    newList.append('raquel');
    newList.append('george');
    newList.append('anna');
    expect(newList.tail().value).toBe('anna');
  });

  it('at(index) method returns node that matches passed index', () => {
    expect(newList.at(0)).toBe(null);
    newList.prepend('steve');
    expect(newList.at(1)).toBe('steve');
    newList.prepend('bob');
    newList.append('angelina');
    newList.append('raquel');
    newList.append('george');
    newList.append('anna');
    newList.append('john');
    newList.append('may');
    newList.append('zoe');
    expect(newList.at(3)).toBe('angelina');
    expect(newList.at(100)).toBe(null);
  })

  it('pop method removes last item in list', () => {
    expect(newList.pop()).toBe(null);
    newList.prepend('steve');
    newList.prepend('bob');
    newList.append('angelina');
    newList.append('raquel');
    newList.append('george');
    newList.append('anna');
    newList.append('john');
    newList.append('may');
    newList.append('zoe');
    expect(newList.pop()).toBe('zoe');
    expect(newList.head.nextNode.nextNode.nextNode.nextNode.nextNode.nextNode.nextNode.nextNode).toBe(null);
  });

  it('contains method returns true/false if node is in list', () => {
    expect(newList.contains('steve')).toBe(false);
    expect(newList.contains('leo')).toBe(false);
    newList.prepend('steve');
    newList.prepend('bob');
    newList.append('angelina');
    newList.append('raquel');
    expect(newList.contains('raquel')).toBe(true);
    newList.append('george');
    newList.append('anna');
    newList.append('john');
    expect(newList.contains('john')).toBe(true);
    newList.append('may');
    newList.append('zoe');
    expect(newList.contains('steve')).toBe(true);
    expect(newList.contains('raquel')).toBe(true);
    expect(newList.contains('zoe')).toBe(true);
    expect(newList.contains('hanna')).toBe(false);
    expect(newList.contains('mateo')).toBe(false);
  });

  it('find method returns index of node if a value matches the passed value', () => {
    expect(newList.find('bobby')).toBe(null);
    newList.prepend('steve');
    newList.prepend('bob');
    expect(newList.find('bob')).toBe(1);
    newList.append('angelina');
    expect(newList.find('angelina')).toBe(2);
    newList.append('raquel');
    expect(newList.find('raquel')).toBe(3);
    newList.append('george');
    newList.append('anna');
    newList.append('john');
    expect(newList.find('john')).toBe(6);
    newList.append('may');
    newList.append('zoe');
    expect(newList.find('zoe')).toBe(8);
    expect(newList.find('yui')).toBe(null);
  });

  it('toString returns the entire list as a string', () => {
    expect(newList.toString()).toBe(null);
    newList.prepend('steve');
    newList.prepend('bob');
    newList.append('angelina');
    newList.append('raquel');
    newList.append('george');
    newList.append('anna');
    newList.append('john');
    newList.append('may');
    newList.append('zoe');
    expect(newList.toString()).toBe("( bob ) -> ( steve ) -> ( angelina ) -> ( raquel ) -> ( george ) -> ( anna ) -> ( john ) -> ( may ) ->  null");
  });

  it('insertAt inserts a new node at passed index', () => {
    newList.prepend('steve');
    newList.prepend('bob');
    newList.append('angelina');
    newList.append('raquel');
    newList.append('george');
    newList.append('anna');
    newList.append('john');
    newList.append('may');
    newList.append('zoe');
    expect(newList.insertAt('maria', 4)).toBeDefined();
    expect(newList.insertAt('andrew', 2)).toBeDefined();
    expect(newList.insertAt('rachel', 10)).toBeDefined();
    expect(newList.toString()).toBe("( bob ) -> ( steve ) -> ( andrew ) -> ( angelina ) -> ( raquel ) -> ( maria ) -> ( george ) -> ( anna ) -> ( john ) -> ( may ) -> ( rachel ) ->  null");
  })
})