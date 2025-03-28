// Пример использовании цикла
let age ;

for(age = 2; age <=10; age++) {
    (age % 2 == 0) ? console.log(age) : false
}

for(age = 2; age <=10; age++) {
    if (age % 2 == 0) {
        console.log(age)
    }
}
//Пример использовании функции:
function checkAge(age) {
   return (age > 18) ?  true :  confirm('Родители разрешили?');
  }

  let res = checkAge(10);
  console.log(res)

//------------- Пример 2.--------------

let min = (a,b) => {
  return (a > b) ? b : a;
}

let results = min(2, 5);
  console.log(results)

//------------- Пример 3.--------------

let pow = (x,n) => {
    return x ** n
}
let result = pow(1, 100);
  console.log(result)

