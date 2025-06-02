

// type declare 
type EmployeeType = {
    readonly id: string;
    name: string;
    position: string;
    baseSalary: number;
    getSalary: () => number;
    getBonus: (percent: number) => number;
    getDetail: () => string;
};

// create class to implements from type EmployeeType
class Employee implements EmployeeType{
    id: string;
    name: string;
    position: string;
    baseSalary: number;
    // declare constructor
    constructor(id:string, name:string, baseSalary:number, position:string){
        this.id= id;
        this.name = name;
        this.position = position;
        this.baseSalary = baseSalary;
    }
    // complete logic of each functions
    getDetail(){
        return `${this.name}- ${this.position}- ${this.baseSalary}`;
    }
    // complete logic of getBonus
    getBonus(percent:number){
        return this.baseSalary * (percent/100);
    }

    // getSalary
    getSalary(){
        return this.baseSalary;
    }
}

// create object from Employee class
const emp:Employee[]= [
    new Employee(
        "E-001","Sokcheat",1000, "Instructor Assistance"
    ),
    new Employee(
        "E-002","KukSeng",1000, "Full Stack Developer"
    )
]
// display result
console.table(emp.map(e=> ({
    ID:e.id, 
    NAME: e.name, 
    POSITION: e.position,
    SALARY:e.getSalary(), 
    BONUSE: e.getBonus(10), 
    DETAIL:e.getDetail()
})))
