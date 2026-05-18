const Person = require('./Basics')
class Pet extends Person
{

     get city(){
        return "Mexico"
    }
    constructor(firstName, lastName) {
        super(firstName, lastName);
        
    }

}

let pet1 = new Pet("Tommy", "Smith");
console.log(pet1.gender)
console.log(pet1.city)
console.log(pet1.job)
console.log(pet1.firstName)
console.log(pet1.lastName)
console.log(pet1.fullName())
