interface User{
    id: number;
    name?: string;
    email?: string;
    age?: number;
}

let user: User = {
    id: 1,
    name:"Vy",
    email:"vy123@gmail.com",
    age:21
}

console.log(user);
console.log(user.name);

let listUsers: User[] = [
    {
        id: 1,
        name: "Vy"
    },
    {
        id: 2,
        name:"Nguyen"
    }
]

for(let user of listUsers){
    console.log(user);
}