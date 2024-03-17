//   Классы 

// class MyClass {
//     // isAdmin = false                // Тут писать isAdmin.
//     constructor(name) {
//         this.name = name;
//         this.isAdmin = true  // Либо тут писать isAdmin .
//     }
//     method1() {
//         console.log('Hello!');                  //
//     }                                             ///       Method , их нужно записывать без запятой.
//     method2() {                                 //
//         console.log('Hello!');
//     }
//     get printName() {
//         return this.name
//     }
// }


// let user1 = new MyClass('Luna');
// console.log(user1.printName);






class Animal {
  static printName = 'Это класс для создания животного'
  static method1 () {
      console.log('Это код метода класса');
  }
  constructor(name) {
      this.name = name
      this.speed = 0
  }

  run(speed) {
      this.speed = speed
      console.log(`${this.name} бежит со скоростью ${this.speed}`);
  }

  stop() {
      this.speed = 0
      console.log('Мы остановили животное');
  }
}

class Rabbit extends Animal {         //   extends  -  наследует
  //constructor(...arg){
  // super(...arg)   
  // } 
  hide() {
      console.log('Я спрятался');
  }

  stop() {
      super.stop()                      // Команду **Super** нужно использовать обязательно если наследуется от родительского.
      this.hide()
  }
}

Animal.method1();

const rabbit = new Rabbit('Кролик');      
rabbit.stop();
// rabbit.run(10);

// console.log(rabbit);