import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function insertUser(username, password, firstName, lastName) {
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
async function updateUser(username, { firstName, lastName }) {
    const res = await prisma.user.update({
        where: { email: username },
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
async function fetchUser(username) {
    const res = await prisma.user.findFirst({
        where: {
            email: username,
        }
    });
    console.log(res);
}
fetchUser('UdayKumar').finally(async () => {
    await prisma.$disconnect();
});
