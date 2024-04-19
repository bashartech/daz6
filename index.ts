// Day 6
// Question 16

let guests = ["Saad","Mahad","ali","hamza"]
console.log("I foung a big dinner")

guests.unshift("Sarim")
guests.splice(guests.length/2,0,"Faizan")

guests.forEach(guests=>{
    console.log(`${guests} are invited in dinner`)
})
console.log(guests)

// Question 17

let extracted_people = guests.slice(2,5)
console.log(extracted_people)

// Question 18

let places = ["India","Turkey","france","japan","spain"]

console.log("Original Order :",places);
console.log("Alphabatical Order :",[...places].sort());
console.log("Original Order :",places);
console.log("Reverse alphabatical order:",[...places].sort().reverse());
console.log("Original Order :",places);
places.reverse
console.log("Reversed Order:",places);
places.reverse()
console.log("Original Order :",places);
places.sort()
console.log("Alphabatical Order :",places);
places.reverse()
console.log("Reversed Order:",places);







