// const { Pool } = require('pg');

// const client = new Pool({
//   host: 'jobsdbmain.c7s4qy006fy0.us-east-1.rds.amazonaws.com',
//   port: 5432,
//   user: 'postgres',
//   password: 'dbPassMtA2CPags6746ufvbg3hye639dbPass',
//   database: 'postgres',
// });

// async function run() {
//   try {
//     await client.connect();
//     console.log('Connected to the database successfully!');

//     // Create the users table with an id primary key and unique username
//     const createTableQuery = `
//       CREATE TABLE IF NOT EXISTS users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE,
//         password VARCHAR(255) NOT NULL,
//         first_name VARCHAR(50),
//         last_name VARCHAR(50),
//         usertype VARCHAR(20),
//         country VARCHAR(50)
//       );
//     `;
//     await client.query(createTableQuery);
//     console.log('Users table created successfully!');

//     // Insert multiple records into the users table
//     const insertQuery = `
//       INSERT INTO users (username, password, first_name, last_name, usertype, country) VALUES
//       ('jdoe', 'password123', 'John', 'Doe', 'admin', 'United States'),
//       ('asmith', 'passw0rd!', 'Alice', 'Smith', 'regular', 'Canada'),
//       ('bjones', 'qwerty!', 'Bob', 'Jones', 'guest', 'United Kingdom'),
//       ('clarkson', 'abc123', 'Clark', 'Kent', 'regular', 'Australia'),
//       ('djohnson', 'letmein', 'David', 'Johnson', 'admin', 'Germany'),
//       ('ewilliams', 'mypassword', 'Emily', 'Williams', 'guest', 'France'),
//       ('fmartin', 'iloveyou', 'Frank', 'Martin', 'regular', 'Spain'),
//       ('gking', 'welcome1', 'Grace', 'King', 'admin', 'Italy'),
//       ('hharris', 'sunshine', 'Hannah', 'Harris', 'guest', 'Brazil'),
//       ('ijones', '123456', 'Ian', 'Jones', 'regular', 'Japan')
//       RETURNING *;
//     `;
//     const result = await client.query(insertQuery);
//     console.log('Records inserted successfully:', result.rows);
//   } catch (err) {
//     console.error('Error occurred:', err);
//   } finally {
//     await client.end();
//     console.log('Database connection closed.');
//   }
// }

// run();

// // async function run() {
// //   try {
// //     await client.connect();
// //     console.log('Connected to the database successfully!');

// //     // await client.query(createUsersTableQuery);
// //     // console.log('Users table created successfully!');

// //     // Insert a record into the mice_and_cats table
// //     const insertQuery = `
// //       INSERT INTO users (username, password, first_name, last_name, usertype, country) VALUES
// // ('jdoe', 'password123', 'John', 'Doe', 'admin', 'United States'),
// // ('asmith', 'passw0rd!', 'Alice', 'Smith', 'regular', 'Canada'),
// // ('bjones', 'qwerty!', 'Bob', 'Jones', 'guest', 'United Kingdom'),
// // ('clarkson', 'abc123', 'Clark', 'Kent', 'regular', 'Australia'),
// // ('djohnson', 'letmein', 'David', 'Johnson', 'admin', 'Germany'),
// // ('ewilliams', 'mypassword', 'Emily', 'Williams', 'guest', 'France'),
// // ('fmartin', 'iloveyou', 'Frank', 'Martin', 'regular', 'Spain'),
// // ('gking', 'welcome1', 'Grace', 'King', 'admin', 'Italy'),
// // ('hharris', 'sunshine', 'Hannah', 'Harris', 'guest', 'Brazil'),
// // ('ijones', '123456', 'Ian', 'Jones', 'regular', 'Japan')
// // RETURNING *;
// // `;
// //     const result = await client.query(insertQuery);
// //     console.log('Record inserted successfully:', result.rows);
// //   } catch (err) {
// //     console.error('Error occurred:', err);
// //   } finally {
// //     await client.end();
// //     console.log('Database connection closed.');
// //   }
// // }

// // // async function run() {
// // //   try {
// // //     await client.connect();
// // //     console.log('Connected to the database successfully!');
// // //     // Create a test table
// // //     // const createTableQuery =
// // //     // await client.query(createTableQuery);
// // //     // console.log('Test table created successfully!');

// // //     // Insert a record into the test table
// // //     const insertQuery = `
// // //   INSERT INTO mice_and_cats (date, name)
// // //   VALUES ('gfddgsfgffdgfdf', 'June')
// // //   RETURNING *;
// // // `;
// // //     const result = await client.query(insertQuery);
// // //     console.log('Record inserted successfully:', result.rows[0]);
// // //   } catch (err) {
// // //     console.error('Error occurred:', err);
// // //   } finally {
// // //     await client.end();
// // //     console.log('Database connection closed.');
// // //   }
// // // }

// // // Create the users table
// // // const createUsersTableQuery = `
// // //   CREATE TABLE users (
// // //     username VARCHAR(50) PRIMARY KEY,
// // //     password VARCHAR(255) NOT NULL,
// // //     first_name VARCHAR(50),
// // //     last_name VARCHAR(50),
// // //     usertype VARCHAR(20),
// // //     country VARCHAR(50)
// // //   );
// // // `;
// // run();
