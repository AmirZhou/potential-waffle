import { User } from './models/User';
import axios from 'axios';
// Jun 22 - 1
const user = new User({ id: 2, name: 'Zhou Yue', age: 0 });
user.on('save', () => {
  console.log(user);
});
user.save();
// Jun 21 -2
// const user = new User({ id: 1 });
// user.on('change', () => {
//   console.log(user);
// });
// user.fetch();
// console.log(user.get('id'));
// Jun 21 -1
// const user = new User({ name: 'TestJun21', age: 0 });

// console.log(user.get('name'));
// user.on('change', () => {
//   console.log('smthing changed');
// });
// user.set({ name: 'gogogog' });
// user.sync.save(user.attributes.get('name'));
// -----------Before Jun 21-----------------------------------
// const user1 = new User({ name: 'Amir', age: 28 });

// user1.on('poke', () => {
//   console.log(`destory the world`);
// });
// user1.on('poke', () => {
//   console.log(`destory the world again`);
// });
// user1.trigger('poke');
// user1.trigger('poke1111111');

// axios.post('http://localhost:3000/users', user1);

// axios({
//   url: 'http://localhost:3000/users/1',
//   method: 'get',
// }).then((response) => {
//   console.log(response.data.events);
// });

// const fetchUser = async (id: number) => {
//   const response = await axios({
//     url: `http://localhost:3000/users/${id}`,
//     method: 'get',
//   });
//   console.log(response.data);
// };

// fetchUser(2);

// jun 19 -1
// const testFetchUser = new User({ id: 1 });

// testFetchUser.fetch();

// setTimeout(() => {
//   console.log(testFetchUser);
// }, 4000);

// const testPutUser = new User({ id: 2 });
// testPutUser.set({ name: 'Torin Zhou' });
// testPutUser.save();
// setTimeout(() => {
//   console.log('Waiting update take effect');
// }, 1000);
// testPutUser.fetch();
// setTimeout(() => {
//   console.log(testPutUser);
// }, 1000);

// jun 19 -2
// const testSaveWithoutIDUser = new User({ name: 'Amir Zhou', age: 88 });
// testSaveWithoutIDUser.save();

// jun 20 -1
// const testEventUser = new User({ name: 'amir', age: 18 });
// testEventUser.events.on('poke', () => {
//   console.log('boss music on');
// });
// testEventUser.events.trigger('poke');
