console.log('app started')

function getMinMax(array) {
    var min = Number.MAX_VALUE, max = Number.MIN_VALUE

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if(element < min) {
            min = element
        }
        if(element > max) {
            max = element
        }
    }

    return { min, max }
}

console.log(getMinMax([0,1,1,2,34,5,6,7,8,76,54]))