const array = [1, 2, 3, 4, 5, 6, 7]
let elemArr
function removeElement(array, elem) { 
    elemArr = array.indexOf(elem); 
        while (elemArr > -1) { 
            array.splice(elemArr, 1); 
            elemArr = array.indexOf(elem); 
        } 
} 
removeElement(array, 6)
console.log(array)