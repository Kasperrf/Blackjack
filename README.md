My very first standalone project.

Live version here: https://kasperrf.github.io/Blackjack/


const findTheOldest = function(array) {
    let age = 0
    let highestAge = 0
    let highestAgePerson = ""

    for(let char in array){
        age = array[char].yearOfDeath - array[char].yearOfBirth
        if (age > highestAge){
            highestAge = age
            highestAgePerson = array[char].name
        }
    }
    // console.log(highestAgePerson)
    return highestAgePerson
};

// Do not edit below this line
module.exports = findTheOldest;
