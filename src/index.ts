enum ROLES {
    ADMIN = 'ADMIN',
    AUTHOR = 10,
    GUEST
}

const person: {
    name: string,
    age: number,
    hobbies: string[],
    roles: ROLES
}  = { 
    name: "Eric Nkaka",
    age: 23,
    hobbies: ["Playing basketabll", "dancing", "listening to musing","singing"],
    roles: ROLES.ADMIN 
}

if(person.roles === ROLES.ADMIN){
    console.log("Yes this is an admin")
}else{
    console.log("No admin found!")
}

// for(let hobby of person.hobbies){
//   console.log(hobby.toUpperCase())
// }