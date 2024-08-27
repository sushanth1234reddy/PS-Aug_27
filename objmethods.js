let emp={
    name:"vinod",
    place:"Hyderabad",
    salary:1000000,
    eid:"VIN100",
    nickname:"barre"

}
let temp={inc:"yes",
    rating:"excellent"
}
//syntax to used object methods
//Object.method(objcetname);

console.log(Object.keys(emp));// used to retrive the keys of the given objects
console.log(Object.values(emp));// used to retrive the values of the objcet
console.log(Object.values(emp).length);// can only get the length if we can access either keys or values then apply lenggth properties
console.log(Object.entries(emp));// used to get both keys assocoated with values of the object

console.log(Object.assign(emp,temp));// this is used to assign the properties of source object to the target object

delete emp.nickname;
console.log(emp);