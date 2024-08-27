let input={
    name:"vinod",
    place:"Hyderabad",
    salary:1000000,
    eid:"VIN100",
    nickname:"barre"

}
Object.seal(input);

console.log(delete input.name);

input.address="nagole";

console.log(input)

input.name="akshay";
input.place="Rajastahan"

console.log(input)

