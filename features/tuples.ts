const drink1 = {
  name: 'coca',
  suguar: 50,
  carbonated: false,
};

const drinkArray = [
  'pepsi',
  888,
  false,
  'this is an array examine the inferred type',
];

// tuple without type alis
const drink2: [string, number, boolean] = ['water', 0, false];

// tuple with type alis
type Drink = [string, number, boolean];
const drink3: Drink = ['Pepsi', 99, true];
