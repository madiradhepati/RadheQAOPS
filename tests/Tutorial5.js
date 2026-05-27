//var - global level/function level - can be redeclared/reinitialised
//let - global level/block level {} - can be reinitialised  but not redeclared
//const - cannot redeclared/reinitialized 


const greet = 'evening'
//greet = 'day'
if (1==1)
{
    let greet = 'sunday'
}

function add(a,b)
{
    let greet = 'morning'
    return a+b
}

sum = add(4,6)
console.log(sum)
console.log(greet)