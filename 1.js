let count = 15;
let x = [];
const n = 0;
const m = -50;
const Max = Math.max(n, m)
const Min = Math.min(n, m)
while (x.length < count) 
{randomNumber = Math.floor((Math.random() * (Max - Min + 1) + Min))
    x.push(randomNumber)}
console.log(x)