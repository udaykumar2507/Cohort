"use strict";
// interface User {
//   age : number,
//   name : string,
// }
Object.defineProperty(exports, "__esModule", { value: true });
function updateuser(updateduser) {
    updateduser.name = 'Ujval';
    updateduser.age = 21;
    updateduser.email = 'uk25072004@gmail.com';
    console.log(updateduser);
}
updateuser({
    name: 'Uday',
    age: 18,
    email: 'ujval@gail.com'
});
const guy = {
    id: "1234",
    name: "Uday",
};
const age = {
    "Uday": { age: 18, name: "Uday" },
    "Ujval": { age: 21, name: "Ujval" },
};
const users = new Map();
users.set("uday@123", { name: "Ras", age: 30, email: "ras@gmail.com" });
users.set("uday@12", { name: "Ras1", age: 30, email: "ras2@gmail.com" });
const use_r = users.get("uday@123");
console.log(use_r);
users.delete("uday@12");
//# sourceMappingURL=index.js.map