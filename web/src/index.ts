import { User } from './models/User';
import axios from 'axios';

const user1 = new User({ name: 'Amir', age: 28 });

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

const fetchUser = async (id: number) => {
  const response = await axios({
    url: `http://localhost:3000/users/${id}`,
    method: 'get',
  });
  console.log(response.data);
};

fetchUser(2);
