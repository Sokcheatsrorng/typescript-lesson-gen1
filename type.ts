

// declare type alias 
type Student = {
    readonly id:string,
    name: string,
    gender: string,
    getDetail: ()=>void;
    getRetired :(date:Date)=>void;
}; 

let student:Student ={
    id: "001",
    name: "Sokcheat", 
    gender: "Female", 
    getDetail(){  
        console.log(`${this.name}, ${this.gender}`);
    },
    getRetired(date:Date) {
        console.log(`${date.getDate}`)
    }
}

console.table([student]);