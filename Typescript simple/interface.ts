interface User {
    id?: number;
    name?: string;
    email?: string;
    age?: number;
}
// fill nao co ? thi co cung duoc. hoac khong co cung duoc. Con fill ? la bat buoc

let user: User = {
    id: 1,
    name: "Nguyen",
    email: "nguyen@gmail.com",
    age: 12
}

console.log(user);
console.log(user.name);

let listUsers: User[] = [
    {
        id: 1,
        name: "Nguyen"
    },
    {
        id: 2,
        name: "Thao"
    },
    {
        id: 3,
        name: "Mai"
    },
]

for (let user of listUsers) {
    console.log(user)
}