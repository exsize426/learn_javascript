// 1 Деструктуризация
let [newCar = 'YAZ',newColor = 'green'] = ['bmw'];
console.log(newCar,newColor) //bmw green

const dogs = ['pydel', "toi-terrier"];
const [baffy,stella] = dogs;
console.log(baffy) //pydel

const options = {
  title: 'Menu',
  height: 200,
  width: 100
}

const pet = '{"cat":"snider","dog":"menny", "people": ["katya","dima"]}'
const json = JSON.parse(pet)
console.log(json.people[1]) 


