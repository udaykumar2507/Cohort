import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function insertUser(username : string , password : string , firstName : string , lastName : string) {
    const res = await prisma.user.create({ 
        data: {
            email: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
     });
    console.log(res);
}

// insertUser('UdayKumar2', 'mypassword', 'Uday1', 'Kumar2').finally( async () => {
//     await prisma.$disconnect();
// });

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {firstName,lastName}: UpdateParams) {
    const res = await prisma.user.update({
        where: { email : username },
        data: { 
            firstName: firstName,
            lastName: lastName
            }
    });
    console.log(res);
}   
// updateUser("UdayKumar2", {firstName: 'Ujval', lastName: 'Maurya'}).finally( async () => {
//     await prisma.$disconnect();
// });




async function  fetchUser(username : string){
    const res = await  prisma.user.findFirst({
        where :{
            email : username,
        }
    });
    console.log(res);
}

fetchUser('UdayKumar  ').finally( async () => {
    await prisma.$disconnect();
});
