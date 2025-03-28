let shopList= new Map();

shopList.set('apple', 'green');
shopList.set('orange', 'orange');
shopList.set('banan', 'yellow');

console.log(shopList.has('bafanan')) // true
console.log(shopList.get("apple")) // green
console.log(shopList) // Map(3) {'apple' => 'green','orange' => 'orange','banan' => 'yellow'}

let shopListArray = Array.from(shopList); // [ [ 'apple', 'green' ], [ 'orange', 'orange' ], [ 'banan', 'yellow' ] ]

for(let products of shopList.keys() ) {
  console.log(products) // apple orange banan
}

for(let products of shopList.values() ) {
  console.log(products) // green orange yellow
}

for(let products of shopList.entries() ) {
  console.log(products) // [ 'apple', 'green' ], [ 'orange', 'orange' ], [ 'banan', 'yellow' ]
}

let breadDog = new Set();

breadDog.add('bigl');
breadDog.add('toi-terier');
breadDog.add('taksa');
breadDog.add('bigl')
//  ['korgi','toi-terier', 'taksa', 'shpits', 'toi-terier'];

breadDog.has()
breadDog.add('bigl');
console.log(breadDog) // { 'bigl', 'toi-terier', 'taksa' }

let arr = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4, 5]

let obj = {
  '1': 5,
  "2": 4,
  "3": 3
}
for(let i of Object.entries(obj)){
  console.log(i) // 5,4,3
}