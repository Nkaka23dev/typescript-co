const person: {
    name: string;
    age:number;
    hobbies: string[];
    role: [number, string] 
} = {
    name: "Nkaka",
    age: 27,
    hobbies: ["basketball", "Music", "reading book", "dancing"],
    role: [7, "author"]
}

// a tuple can't be reassigned
// person.role = ["author", "hehehe"]

console.log(person.role)

person.hobbies.forEach(value => {
    console.log(value.toUpperCase())
})