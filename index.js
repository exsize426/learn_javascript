class Tv {
    town ='Rostov' // свойство можно так задать
    static shop = 'Mvideo' // статические свойства не наследуются, а к статическим методам нельзя обратиться tv.knowBrand
    constructor(diagonal,android,brand) {
        this.diagonal = diagonal,
        this.android = android,
        this.brand = brand,
        this._color = null
    }

    knowBrand() {
        console.log(`Марка телевизора ${this.brand}`)
    }

    firmware(android) {
        this.android = android;
        if(android == 'Android' || android == "Da" ){
            console.log('У вас современный телевизор.')
        } else {
            console.log('Нужна приставка')
        }
    }

    set color (color) {
        this._color = color
    }

    get color () {
        return this._color
    }
    
}

const tcl = new Tv(50,true,'tcl'); // Tv { town: 'Rostov', diagonal: 50, android: true, brand: 'tcl' }
tcl.knowBrand() // tcl
const samsung = new Tv(55, true, 'samsung',);
samsung.color = 'black'; // добавили color через get и set
samsung.firmware('Da')// пробрасываем значение в метод класса


class Marka extends Tv {
   constructor (diagonal,android,brand) {
    super(diagonal,android,brand),
    this._color = null
   }

   knowBrand() {
        console.log('hello') // переопределение метода
   }
}

const sony = new Marka(55,'Нет', 'Sony');
sony.firmware() // наследуется метод у родителя
console.log(sony)