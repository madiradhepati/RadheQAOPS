let message1 : string = 'Radhe'
//message1 = 2

let age : number = 2
let isactive : boolean = true

let data : number[] = [1,2,3]

let score : any = 5
score = 'school'

console.log(message1)

function add(a:number,b:number):number
{
    return a+b;
}

console.log(add(1,2))

let person : {name:string, age:number} = 
{
    name: 'Radhe',
    age: 34

}

let person1 = 
{
    name: 'Radhe',
    age: 34
}

person1.city = 'bangalore'

console.log(person1.city)
