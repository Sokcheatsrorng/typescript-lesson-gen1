
// union type 
function displayId(id: number | string | null){

    if(typeof id === 'number'){
        console.log("This ID is number")
    }
    else if(typeof id === 'string'){
        console.log("This ID is string")
    }
    else if(typeof id === null){
        console.log("This ID is null")
    }
}

// displayId(crypto.randomUUID());
displayId(10);
// console.log(rs)
// display 
// console.log(displayId('E-001'))