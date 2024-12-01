//const { log } = require('node:console');
const fs = require('node:fs')

const data=fs.readFileSync('./input_star1.txt','utf-8');
//console.log(data);
const list = data.split("\r\n");
//console.log(list)

const lis2 =   list.map((x)=>x.split("\ \ \ "))

let left = lis2.map((x)=>Number(x[0]))
let right = lis2.map((x)=>Number(x[1]))
left.pop()
left.sort()
right.pop()
right.sort()
let sum =0

left.forEach((value,index) => {
    const diff = Math.abs(value-right[index] )
  

   // console.log(diff)
    sum+=diff;
})

//second star
sum=0;
left.forEach((value1)=>{
    right.forEach((value)=>{
        if(value1==value){
            sum+=value;
            //console.log(true)
        }
        else{
           // console.log(false)
        }

    })
});
console.log(sum)



