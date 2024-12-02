const { log } = require('node:console');
const fs = require('node:fs')

const values = (fs.readFileSync('./test.txt', "utf-8").trim().split("\r\n")).map(x => (x.split(" ").map(x => (parseInt(x)))));

const filterMonotonicArrays = (arr) => {
    return arr.filter(subArray => {
      const increasing = subArray.every((val, i, a) => i === 0 || val > a[i - 1]); // Strictly increasing
      const decreasing = subArray.every((val, i, a) => i === 0 || val < a[i - 1]); // Strictly decreasing
      return increasing || decreasing; // Return true if monotonic
    });
  };
  
  const values2 = filterMonotonicArrays(values);





let cal = values.map((x) => {
    return x.map((num, index, arr) => {
            if(index<arr.length-1 ){
                let jud= Math.abs(num - arr[index+1])
             if(jud<=3 && jud>=1){
                return true;
             }
             else{
                return false
             }
                

            }
            else{
                return null;
            }
    })
})


let diff = values.map((x) => {
    return x.map((num, index, arr) => {
            if(index<arr.length-1 ){
                let jud= Math.abs(num - arr[index+1])
             if(jud<=3 && jud>=1){
                return jud;
             }
             else{
                return -1*jud
             }
                

            }
            else{
                return null;
            }
    })
})





let cleanCal= cal.map(innerArray=>innerArray.filter(item=> item!==null))

let answer = cleanCal.map((innerArray)=>{
    return innerArray.every(item=>item==true)
})

let sum=0;
answer.forEach(value=>{
    if(value==true){
        sum++;
    }
})


log(values)
log(diff)
log(values2)
log(cleanCal)
log(sum);