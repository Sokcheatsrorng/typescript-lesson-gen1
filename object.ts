
// delcare enum 
 enum size{
    S = 'small',
    M = 'medium',
    L = 'large',
    xl = 'extra large'
};
// display size of shirt
console.table(size);

enum week{
    Sunday = 5,
    Monday, //6
    Tuesday,//7
    Wednesday, //8
    Thursday,//9
    Friday,//10
    Saturday, //11
}
// display result of table of week
console.table([week]);

// create function with void (no return value)
function displayMessage(s:string):void{
    console.log(s);
}
// calling the funciton displayMessage
displayMessage('hello mama');

// create function calculate tax 
function taxCalculation(income:number, tax:0.1):number{
    return income * tax;
}

// calling the function of calculatetax
const result = taxCalculation(500,0.1);
console.log(`The amount that get after tax: ${result}`);

//function as constructor 
function setConstructor(fn:(s:string)=> void){
    fn("hello everyone");
}


// object 
const Students:{
    readonly id:string, 
    name: string, 
    gender: string,
    getDetail:()=>void;
} ={
    id: "",
    name:"",
    gender:"",
    getDetail(){
        console.log(`Student ID : ${this.id}, Student Name: ${this.name}, Student Gender: ${this.gender}`);
    }
};

Students.name= "Devith";
Students.gender = "Male";

console.table([Students]);

Students.getDetail();