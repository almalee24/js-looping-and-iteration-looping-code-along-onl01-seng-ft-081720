// Code your solutions in this file
let array = [ 'Lisa', 'Kaitlin', 'Jan']
let event = ['surprise']
function writeCards(array, event) {
    let results = []
    for(let i = 0; i < array.length; i++){
        results.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return results;
}

let num = 10
function countDown(num) {
    while(num >= 0){
        console.log(num--)
    }
}