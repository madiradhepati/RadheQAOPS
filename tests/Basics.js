let person = {

    firstName: "John",
    lastName: "Smith",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

// console.log(person.fullName());
// console.log(person.firstName);
// console.log(person["lastName"]);
// //person.firstName = "Radhe";
// console.log(person.firstName);
// person.age = 35
// console.log(person);
// //delete person.age
// console.log(person);
// console.log("age" in person);

// for (let key in person) {
//     console.log(key);
//     console.log(person[key]);
// }


module.exports = class Person
{

    gender = 'Male'
    job = "Software Engineer"
    get city(){
        return "Las Vegas"
    }

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }   

} 

// let person1 = new Person("John", "Smith");
// let person2 = new Person("Jane", "Doe");
// console.log(person1.gender)
// console.log(person1.city)
// console.log(person1.job)
// console.log(person1.firstName)
// console.log(person1.lastName)
// console.log(person1.fullName())
// console.log(person2.fullName())
