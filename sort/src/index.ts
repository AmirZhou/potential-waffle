import { NumbersCollection } from './NumbersCollection';
import { CharactersCollections } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

// const sorter1 = new Sorter(new NumbersCollection([1, 4, 2, 9, -10, -23, -99]));
// sorter1.sort();
// console.log(sorter1.collection);

// const sorter2 = new Sorter(new CharactersCollections('amirzhou'));
// sorter2.sort();
// console.log(sorter2.collection);

const linkedList1 = new LinkedList();
linkedList1.add(-1);
linkedList1.add(-7);
linkedList1.add(-3);
linkedList1.add(-10);
linkedList1.print();
linkedList1.sort();
linkedList1.print();
