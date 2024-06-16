import { User } from './models/User';

const user1 = new User({ name: 'Amir', age: 28 });
const age = user1.get('age');
console.log(age);
