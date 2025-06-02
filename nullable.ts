

// create function for message
function MessageDisplay(message:string | null):void{
    console.log(`Hello ${message}`);
}

// calling the function 
MessageDisplay(null);

// ?. optional chaining
type Department ={
    name: string;
    createAt: Date;
}

function getDepartmentInfo(id:number): Department | undefined | null {
   return id === 0? null: {name:'IT', createAt: new Date()}
}

let departement = getDepartmentInfo(10);
console.log(departement);
if(departement !=null && departement !=undefined){
    console.log(departement.name);
    console.log(departement.createAt);
}

getDepartmentInfo(10)? null: {name:'IT', createAt: new Date()}

// method accessment with ?.
let rsDepartment = getDepartmentInfo(20);
console.log(rsDepartment?.createAt?.getFullYear() || 'No date to build or create departement');

// type departments= [
//     {
//         name:'Computer Sciences',
//         createAt: new Date()
//     }
// ]

let professors:Department[]= [{
    name:"Computer Science",
    createAt: new Date()
}];
console.log(professors?.[0] || {name:"Science", createAt:new Date()})


// using ?. with function 
let multiply = (a:number,b:number):number=>{
    return a*b;
}
console.log(multiply?.(10,30) || 'No value');



