const array = [2,4,1,5,7,8,9,6]
const newArr = [];

for(let i in array){
    if(array[i] % 2 === 0){
        newArr.push(array[i])
    }
}

for(let i=0; i < array.length; i++){
    if(array[i] % 2 === 0){
        newArr.push(array[i])
    }
}

// console.log(newArr);
