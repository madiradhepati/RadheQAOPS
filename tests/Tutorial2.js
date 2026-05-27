const flag = true
if (!flag)
{
    console.log('condition satisfied')
}
else
{
     console.log(flag)
     console.log('condition not satisfied')
}

// while(true)
// {
//     console.log('am in loop')
// }

// let i=0
// while(i<10)
// {
//     i++
//     console.log(i)
// }

let i=0
while(i>10)
{
    i++
    console.log(i)
}
do {
    i=i+2
   }while(i>10)
    console.log(i)


for(let k=0;k<=10;k++)
{
     console.log(k)
}

let required=true
while(required)
{
    console.log(required)
    required = false
}

//from 1 to 10, give me commmon multiples of 2 and 5
for(let k=1;k<=10;k++)
{
     if(k%2 == 0 && k%5 == 0)
     {
        console.log(k)
     }
}

console.log('******************')

let n=0
for(let k=1;k<=100;k++)
{
     if(k%2 == 0 && k%5 == 0)
     {
        n++
        console.log(k)
        if (n==3)
        break
     }
}

