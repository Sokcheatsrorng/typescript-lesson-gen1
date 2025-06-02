//built-in type
let str:string = "hello";
let num1:number = 10;
let data = [1, "sokcheat"];
let x; 

console.log(`The type of string ${typeof str}`);
console.log(`The type of number ${typeof num1}`);
console.log(`The type of data ${typeof data}`);
console.log(`The type of x ${typeof x}`);

// unknown 
// let un:unknown; 
// function catchType(un:unknown){
//     if(typeof(un) == "string"){
//         console.log("Unknown type is a string type");
//     }
//     else if(typeof(un) == "number" ){
//         console.log("Unknown type is a number");
//     }
// }
// // calling the funtion 
// catchType(10);


// any type 
//  async function fetchData(url:string):Promise<any>{
//     try{
//         const data = await fetch(url);
//         const response = await data.json();
//         return response;

//     }catch(err){
//        console.log(err);
//     }
// }
// const base_url = "https://dummyjson.com/carts";
// let result = fetchData(base_url).then(data=> console.log(data));
// console.log(result);

// function random(str:any)
// {
//     console.log(str);
// }
// let num:number[] = [1,34,556];
// random(num);

// never type 
// function ErrorResponse():never{
//     throw new Error(`This is error `);
// }
// ErrorResponse();

// array 
// let arrayValue =[1,"Polin",true];
// console.table(arrayValue);
// // array when we annotate specific for number only
let arrayNumber:number[] = [1,2,3,4,5,6];
arrayNumber[0]= 3;
console.table(arrayNumber);

// copy array by using spread ...
let copyArrayNumber1 = [...arrayNumber];
console.log(`The copy array result using spead : ${copyArrayNumber1}`);


// // copy array by using slice
// let copyArrayNumber2 = copyArrayNumber1.slice();
// console.log(`The copy array result using slice : ${copyArrayNumber2}`);

// // copy array by using Array.from
// let copyArrayNumber3 = Array.from(copyArrayNumber2);
// console.log(`The copy array result using Array.from : ${copyArrayNumber3}`);

// using filter 
let resultOfEven= arrayNumber.filter(num => num % 2 == 0);
console.log(`This is even number result: ${resultOfEven}`);

// tuple 


let person: [number, string] = [1, 'Tony Stark']


// console.log(rs1);

// const taxCalculate= (income: number, tax:number):number =>{
//     return income *tax;
// }
// taxCalculate(100,0.2);

//array
let arr = [];