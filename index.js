let firstName = prompt("Как вас зовут?",'');
let surName = prompt("Какая у вас фамилия?",'');
let age = +prompt("Сколько вам лет?",'');

const form = {
    name: firstName,
    surName: surName,
    age: age
}

question = (age) => {
   return (age < 18) ? "Вы несовершенно летний" : 
          (age >= 18) ? "Вы совершеннолетний" : "Доступ разрешен";

}

let res = question(age);
console.log(res)
console.log(form)
//циклы
const order = 10;

for( i = 1; i <=order; i++) {
    console.log(i)
}
