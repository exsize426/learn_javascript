const elementDivRise = document.createElement("div");                       
elementDivRise.innerHTML = `<div onclick="alert('Вывод родителя')"> 
      "Всплытие на parent"
      <p onclick="alert('Вывод ребенка')">
        "Всплытие на child"
    <p>                                                                      
  </div>`                                                                   //  Первый блок div
  elementDivRise.classList.add('first');                                    //
document.body.prepend(elementDivRise)                                       //

const elementDivSquare = document.createElement("div");                                 //
elementDivSquare.style.backgroundColor = 'rgb(0, 255, 255)';                          //
elementDivSquare.classList.toggle('square');                                            //
                                                                                        //
const square = {                                                                        //
    width: "40px",                                                                      //
    height: "40px",                                                                     //
    "margin-bottom": "10px"                                                             //
}                                                                                       //
                                                                                        //
Object.assign(elementDivSquare.style, square);                                          //      Квадрат
                                                                                        //
elementDivSquare.addEventListener("contextmenu",(event) => {                            //
        event.preventDefault()                                                          //
        const colorSquare =  prompt('Какой цвет фона розовый?', '');                    //
          if(colorSquare == 'pink') {                                                   //
            elementDivSquare.style.backgroundColor = "rgb(121, 23, 239)" ;            //
            setTimeout(() => elementDivSquare.hidden = !elementDivSquare.hidden, 3000); //
          }                                                                             //
    }                                                                                   //
)                                                                                       //
document.body.querySelector(".first").append(elementDivSquare)                          //



const disappear = document.querySelector('#valera');
setInterval(() => disappear.hidden = !disappear.hidden, 5000); // мигание элемента


document.querySelector("#three").addEventListener('click', (event) => {
    if(event.target.dataset.counter != undefined) {       // счетчик
        event.target.value++
    }
})
function checkPhoneKey(event){
    return ((event >= 0 && event <= 9) || event == '+' || event == '-' ||
     event == 'Backspace' || event == 'ArrowRight' || event == 'ArrowLeft' ||      // номер телефона
      event == '(' || event == ')' )
}

    document.addEventListener('keydown', (event) =>{
        if( (event.key == "z" || event.key == "Z" || event.code == "KeyZ" ) && event.ctrlKey ){ // комбинация клавиш
             alert('У тебя получилось!!!')
        }
    })

    document.body.insertAdjacentHTML("beforeend", `<p>Дата: ${new Date().toLocaleDateString()}</p>`);
    select.options[2].selected = true; // установили селекту значение по умолчанию
    
    const option = new Option('Work',"5", false,false); // добавление нового пункта в выпадающий список
    document.body.querySelector('#select').append(option) 
    let oninputElem = document.body.querySelector('#oninputNext');
    oninputElem.oninput = () =>{
        paragraf1.innerHTML = oninputNext.value
    }



    const modal = document.querySelector('dialog')                       //
const modalBox = document.getElementById('modal-box')                    //
const showModalBtn = document.getElementById('show-modal-btn')           //
const closeModalBtn = document.getElementById('close-modal-btn')         //
                                                                         //
let isModalOpen = false;                                                 //
                                                                         //
showModalBtn.addEventListener('click', (e) => {                          //    
  modal.showModal()                                                      //
  isModalOpen = true                                                     //        ---- Модальное окно(сложно)
  e.stopPropagation()                                                    //
})                                                                       //
                                                                         //
closeModalBtn.addEventListener('click', () => {                          //
  modal.close()                                                          //
  isModalOpen = false                                                    //
})                                                                       //
                                                                         //
document.addEventListener('click', (e) => {                              //
  if (isModalOpen && !modalBox.contains(e.target)) {                     //
    modal.close()                                                        //
  }                                                                      //
})
document.querySelector("#five").addEventListener("DOMContentLoaded",ready)
function ready(){
    alert('DOM готов')
}

document.addEventListener('readystatechange', () =>{                    // - - показ состояния загрузки страницы
    alert(`DOM загружен, состояние: ${document.readyState}`)
})
const sixP = document.querySelectorAll("p")[2]                          //
const ranges = new Range();                                             //
    ranges.setStart(sixP,1);                                            //   --- Выделение элементов на странице в id = sixP
    ranges.setEnd(sixP,4);                                               //                                               
    document.getSelection().addRange(ranges)                            //
//----------------------------------------------------------------------//
const startSelection = document.querySelector('#btnRange');             //             
startSelection.addEventListener('click',() => {                         //
    const rangess = new Range();                                        // --- Выделение элементов на странице в id = sixP, 2 способ
    rangess.setStart(sixP,startRange.value);                            //
    rangess.setEnd(sixP,endRange.value) ;                               //
    document.getSelection().removeAllRanges(); // - очистить текущее выделение                         
    document.getSelection().addRange(rangess)                           //
})

