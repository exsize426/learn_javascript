// Task 1:
// -------------
//  Что нужно сделать:

// 1️⃣  Напиши функцию getAverage(grades), которая принимает массив оценок и возвращает среднее значение.

// 2️⃣  Выведи в консоль информацию по каждому студенту:
//    - имя
//    - возраст
//    - среднюю оценку

// 3️⃣ Напиши функцию getTopStudent(names, grades)  
//    Функция должна вернуть имя студента с самой высокой средней оценкой.
// let studentNames = ["Анна", "Борис", "Виктор"];
// let studentAges = [18, 20, 19];
// let studentGrades = [
//   [5, 4, 5], // Анна
//   [3, 4, 4], // Борис
//   [5, 5, 5]  // Виктор
// ];

// --------------

// const getAverage = (grades) => {
//   const result = [];
//     grades.forEach((items) => {
//       let sum = 0;

//       items.forEach((value) => {
//         sum = sum + value

//       })
//       sum = sum / items.length
//       result.push(sum)
//     })
//     return result;
// }


// const studentInfoList = () => {
//   for(let i = 0; i < studentNames.length; i++ ){
//     const firstName = studentNames[i]; 
//     const age = studentAges[i]; // не понятно как перебрался этот массив
//     const averages = average[i];

//     console.log(`
//       Студент: ${firstName}
//       Возраст: ${age}
//       Средний балл: ${averages}
//       `)
//   }
// }


// const getTopStudent = (names, grades) => {
//   let firstName = 0;
//   let name = 0;
//   for(let i = 0; i < grades.length; i++ ){
    
//     if(firstName < grades[i]){
//       firstName = grades[i];
//       name = names[i];
//     }
//   }
//  return name;
  
// }

// const average = getAverage(studentGrades);
// console.log(average);
// studentInfoList();
// let studentResult = getTopStudent(studentNames,average);
// console.log(studentResult)


// -------------
// Task 2:
// -------------

// 1️⃣  Добавление и удаление задач  
// - Добавь новую задачу "Прочитать книгу" в конец списка.  
// - Удали последнюю задачу.  
// - Добавь "Записаться на курс" в начало списка.  
// - Удали первую задачу.  
// - Вставь "Сделать уборку" на второе место в списке.  

// 2️⃣ Поиск задач  
// - Найди индекс задачи "Позвонить другу".  
// - Проверь, есть ли в списке задача "Сходить в зал".  
// - Найди первую задачу, содержащую слово "код".  

// 3️⃣ Перебор задач  
// - Выведи все задачи в консоль с их порядковым номером (используй `forEach`).  

// 4️⃣ Преобразование списка  
// - Создай новый массив, в котором к каждой задаче добавляется "(важно)".  
// - Отсортируй задачи по алфавиту.  
// - Переверни порядок задач.  
// - Объедини массив задач в строку через запятую.  
// - Раздели строку обратно в массив.  

// 5️⃣ Итоговый расчёт  
// - Посчитай общее количество символов во всех задачах вместе.

const tasks = ["Купить продукты", "Сделать зарядку", "Позвонить другу", "Написать код"];

tasks.push("Прочитать книгу");
tasks.pop();
tasks.unshift("Записаться на курс");
tasks.shift();
tasks.splice(1,0,"Сделать уборку");

const callFriends = tasks.findIndex(value => {
  return value == "Позвонить другу";
});

const searchTask = tasks.includes("Сходить в зал");

const findTaskWord = tasks.find(item => {
    if(item.includes('код')){
      return item;
    }
})

const showIndexTask = tasks.forEach((item, index) => {
  console.log(
    `
    Задача: ${item}. Номер задания: ${index + 1}
    `
  )
})

const importantlyTask = tasks.map(value => {
  
   return value = `Важно ${value}`;

})

const sortInOrder = tasks.sort((a,b) => a > b ? 1 : -1);

const reversTask = tasks.reverse();

const taskDivide = tasks.join(', ');
const gatherTask = taskDivide.split(',');


const sumIndex = (arr) => {
  return arr.join(',').length;
}

const sumIndexWayTwo = (arr) => {
    let answer = 0;
    
  return answer = arr.join(',').split('').reduce((sum, current) => sum + current.length,0);

}
let resultOne = sumIndex(tasks);
let resultTwo = sumIndexWayTwo(tasks);

console.log(resultOne,resultTwo)