let marks = [10,20,30,40,50,60]
console.log(marks[1])
console.log(marks[3])
marks[3] = 90
console.log(marks[3])
console.log(marks.length)

marks.push(99)
console.log(marks)
marks.unshift(8)
console.log(marks)
marks.pop()
console.log(marks)
console.log(marks.indexOf(50))
console.log(marks.includes(60))
console.log(marks.slice(3,5))

let sum=0
for(i=0;i<marks.length;i++)
{
    sum=sum+marks[i]
}
console.log(sum)

A = marks.reduce((sum,mark)=>sum+mark,0)
console.log(A)

scores =[12,13,14,16,20,19]
B = scores.reduce((sum,mark)=>sum+mark,0)
console.log(B)

New=[]
Numbers=[12,13,14,16,20,19]
for(i=0;i<Numbers.length;i++)
{
    if (Numbers[i]%2 == 0)
    {
        New.push(Numbers[i])
    }
}
console.log(New)

B = scores.filter(scores=>scores%2==0)
console.log(B)

map2 =[]
map1 = [12,14,16]
for(i=0;i<map1.length;i++)
{
    const Z = map1[i]*3
    {
        map2.push(Z)
    }
}
console.log(map2)

// L=0
X = map1.map(map1=>map1*3)
Y = X.reduce((X,L)=>X+L,0)
console.log(X)
console.log(Y)

console.log('*****************')
W=[12,13,14,16]
G = W.filter(W=>W%2==0).map(W=>W*3).reduce((X,L)=>X+L,0)
console.log(G)

fruits = ["banana","mango","apple","apricot"]
console.log(fruits.sort())
console.log(fruits.reverse())
// console.log(fruits)

V =[12,13,16,3,10,59]
console.log(V.sort((a,b)=>a-b))
console.log(V.sort((a,b)=>b-a))
// console.log(V)


