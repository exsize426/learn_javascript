//  Что нужно сделать:

// 1. Напиши функцию getAverage(grades), которая принимает массив оценок и возвращает среднее значение.

// 2. Выведи в консоль информацию по каждому студенту:
//    - имя
//    - возраст
//    - среднюю оценку

// 3. Напиши функцию getTopStudent(names, grades)  
//    Функция должна вернуть имя студента с самой высокой средней оценкой.
let studentNames = ["Анна", "Борис", "Виктор"];
let studentAges = [18, 20, 19];
let studentGrades = [
  [5, 4, 5], // Анна
  [3, 4, 4], // Борис
  [5, 5, 5]  // Виктор
];

const getAverage = (grades) => {
  const result = [];
    grades.forEach((items) => {
      let sum = 0;

      items.forEach((value) => {
        sum = sum + value

      })
      sum = sum / items.length
      result.push(sum)
    })
    return result;
}


const studentInfoList = () => {
  for(let i = 0; i < studentNames.length; i++ ){
    const firstName = studentNames[i]; 
    const age = studentAges[i]; // не понятно как перебрался этот массив
    const averages = average[i];

    console.log(`
      Студент: ${firstName}
      Возраст: ${age}
      Средний балл: ${averages}
      `)
  }
}


const getTopStudent = (names, grades) => {
  let firstName = 0;
  let name = 0;
  for(let i = 0; i < grades.length; i++ ){
    
    if(firstName < grades[i]){
      firstName = grades[i];
      name = names[i];
    }
  }
 return name;
  
}

const average = getAverage(studentGrades);
console.log(average);
studentInfoList();
let studentResult = getTopStudent(studentNames,average);
console.log(studentResult)