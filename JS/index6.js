let arr = [5,7,3,2]

arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
})

arr.forEach((element,index,arr) =>{
    console.log("arrow", index,element,arr);
})

const hero = ["nagraj","dhruva","maniraj","doga"]
hero.forEach((element) => {
    console.log(element.toUpperCase())
})

arr.map(function(element,index,arr){
    console.log(element,index,arr);
    
})

hero.map((h) =>{
    console.log(h.toUpperCase())
})

            // filtter

console.log(hero);
const herowithraj = hero.filter((h) => {
    return h.endsWith('raj')
})

console.log(herowithraj);

        // shopping card

const cartbill =[20,30,50]
const sumofcartbill = cartbill.reduce((prev, curr) => prev+curr,0)
console.log(sumofcartbill);


            // game score

const gameScore =[40,50,80,100]
const gameScoreCheck = gameScore.every((v) =>
    typeof v=== 'number')

console.log("check :", gameScoreCheck);


        // find score above 80

const above80 =  gameScore.find((score) =>  score>80 )
console.log(above80);