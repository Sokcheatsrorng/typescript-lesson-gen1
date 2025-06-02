#!/bin/bash
  
 read -p "Enter the value: " value
 
 if [ $value == 1 ]; then
    npx ts-node index.ts
 elif [ $value == 2 ]; then 
    npx ts-node object.ts
 elif [ $value == 3 ]; then 
    npx ts-node type.ts
 else 
     read -p "enter the specific file: " inpt
     npx ts-node $inpt
 fi
  

    

 
