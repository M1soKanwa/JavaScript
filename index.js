const person = Object.create(
  {
      calculateAge() {
          console.log('Age :', new Date().getFullYear() - this.birthYear);
      }
  }, 
  {
  name: {
      value: '(Roman)',
      enumerable: true, // для того чтобы поле **name** было видно в **key**.
      writable: true,  // Открывает доступ к смене обьекта (названия и тд).
      configurable: true //  позволяет удалять какой либо ключ из объекста.
  },
  birthYear: {
     value: 2000, 
     enumerable: false,
     writable: false,                              //    По стандарту enumerable,writable,configurable  -  стоят в **FALSE**
     configurable: false
  },
  age: {
      get() {
          return new Date().getFullYear() - this.birthYear   // В **get** можем запихнуть любую логику.
      },
      set(value) {
          document.body.style.background = 'red'
          console.log('Set age' , value)
      }
  }
}) 



for (let key in person) {
  if (person.hasOwnProperty(key)) {
  console.log('Key -', key, person[key]);
  }
}