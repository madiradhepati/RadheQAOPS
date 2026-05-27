

day = 'tuesday '
console.log(day.length)
A = day.slice(0,4)
console.log(A)
B = day[2]
console.log(B)
C = day.split('s')
console.log(C[0].length)
console.log(C[0].trim().length)
console.log(C[1].length)
console.log(C[1].trim().length)

date = '10'
nextdate = '27'
const diff = parseInt(nextdate) - parseInt(date)
console.log(diff)
console.log(diff.toString())

X = day+'is funday'
console.log(X)


// X = day.trim()+'is funday'
// console.log(X)

let count=0
Y = X.indexOf('day')
while(Y!== -1)
{
    count++
    Y = X.indexOf('day',Y+1)
}
//console.log(Y)
console.log(count)

// Y = X.indexOf('day',5)
// console.log(Y)


