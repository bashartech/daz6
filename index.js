// Question 16
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = ["Saad", "Mahad", "ali", "hamza"];
console.log("I foung a big dinner");
guests.unshift("Sarim");
guests.splice(guests.length / 2, 0, "Faizan");
guests.forEach(function (guests) {
    console.log("".concat(guests, " are invited in dinner"));
});
console.log(guests);
// Question 17
var extracted_people = guests.slice(2, 5);
console.log(extracted_people);
// Question 18
var places = ["India", "Turkey", "france", "japan", "spain"];
console.log("Original Order :", places);
console.log("Alphabatical Order :", __spreadArray([], places, true).sort());
console.log("Original Order :", places);
console.log("Reverse alphabatical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original Order :", places);
places.reverse;
console.log("Reversed Order:", places);
places.reverse();
console.log("Original Order :", places);
places.sort();
console.log("Alphabatical Order :", places);
places.reverse();
console.log("Reversed Order:", places);
