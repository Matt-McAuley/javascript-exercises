const findTheOldest = function(arr) {
    const sortedAges = arr.sort((person1, person2) => {
        if (person1.yearOfDeath === undefined && person2.yearOfDeath === undefined) {
            return ((2023 - person1.yearOfBirth) > (2023 - person2.yearOfBirth)) ? -1 : 1;
        }
        if (person1.yearOfDeath === undefined) {
            return ((2023 - person1.yearOfBirth) > (person2.yearOfDeath - person2.yearOfBirth)) ? -1 : 1;
        }
        if (person2.yearOfDeath === undefined) {
            return ((person1.yearOfDeath - person1.yearOfBirth) > (2023 - person2.yearOfBirth)) ? -1 : 1;
        }
        return ((person1.yearOfDeath - person1.yearOfBirth) > (person2.yearOfDeath - person2.yearOfBirth)) ? -1 : 1;
    });
    return sortedAges[0];
};

// Do not edit below this line
module.exports = findTheOldest;
