import { User } from './models/User';

const user1 = new User({ name: 'Amir', age: 28 });
let age = user1.get('age');
console.log(age);

user1.set({ name: 'Amir Zhou', age: 34 });
age = user1.get('age');
console.log(age);

user1.set({ age: 40 });
