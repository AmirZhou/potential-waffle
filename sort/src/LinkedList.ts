import { Sorter } from './Sorter';

class Node {
  value: number;
  next: Node | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const nextNode = new Node(data);
    if (!this.head) {
      this.head = nextNode;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = nextNode;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let count = 1;
    let tail = this.head;
    while (tail.next) {
      count++;
      tail = tail.next;
    }
    return count;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Out of Bound');
    }
    let tail: Node | null = this.head;
    let current = 0;
    while (tail) {
      if (current === index) {
        return tail;
      }
      current++;
      tail = tail.next;
    }
    throw new Error('Incex out of bound');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty.');
    }
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.at(leftIndex).value;
    this.at(leftIndex).value = this.at(rightIndex).value;
    this.at(rightIndex).value = temp;
  }

  print(): void {
    if (!this.head) {
      throw new Error('The list is empty');
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

// compare(leftIndex: number, rightIndex: number) : boolean {
//   return true;
// }
// swap(leftIndex: number, rightIndex: number) : void {
//   const temp =
// }
