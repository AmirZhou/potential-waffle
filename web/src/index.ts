import { User } from './models/User';

const user1 = new User({ name: 'Amir', age: 28 });

user1.on('poke', () => {
  console.log(`destory the world`);
});
user1.on('poke', () => {
  console.log(`destory the world again`);
});
user1.trigger('poke');
user1.trigger('poke1111111');
