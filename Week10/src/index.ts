import { Client } from 'pg';

const client = new Client({
  connectionString: 'postgresql://postgres:1234@localhost:5432/postgres',
});

//

async function createTable() {
  await client.connect().catch(err => console.error('Connection error', err.stack));
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE NOT NULL
    );
  `;
  const res = await client.query(query);
  console.log('Table created', res);
} 
// createTable().finally(() => client.end());

// Not a Better Practice to insert data like this

// async  function insertTable() {
//    await client.connect().catch(err => console.error('Connection error', err.stack));
//    const query = `INSERT INTO  users (name,email) VALUES ('UDAY','uk25072004@gmail.com')`;
//    const res = await client.query(query);
//    console.log('Data inserted', res);
// } 
// insertTable().finally(() => client.end());


async function InsertTable(name: string, email: string  ) {
    await client.connect().catch(err => console.error('Connection error', err.stack));    
    const query = `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`;
    const values = [name, email];
    const res = await client.query(query, values);  
    console.log('Data inserted', res.rows[0]);
}
  
// InsertTable('Ujval', 'Ujval@gmail.com').finally(() => client.end());  

async function fetchUsers(email: string) { 
    await client.connect().catch(err => console.error('Connection error', err.stack));    
    const query = `SELECT * FROM users WHERE email = $1`;
    const values = [email];
    const res = await client.query(query, values);  
    console.log('User fetched', res.rows[0]);
}
fetchUsers('Ujval@gmail.com').finally(() => client.end());  

