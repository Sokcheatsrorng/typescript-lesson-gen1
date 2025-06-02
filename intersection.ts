

// declare two types of it 
type Animal={
    type:string;
    leg: number;
}
// type of sound 
type Sound={
    sound: string;
    volume: number;
}
// type of dog
type Dog = {
    dog: Sound[];
}
// using interesection 
type DogAnimal = Dog & Animal;

const dogAction:DogAnimal= {
     type: "Mammal", 
     leg: 4, 
     dog:[
        {
            sound:"Hog Hog",
            volume:100
        }
     ]
}

console.table(dogAction);


// litteral 
type Size = 'm' | 's' | 'l' | 'xl';

const sz:Size = 'm';
console.log(size);