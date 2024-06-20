const { Pool } = require('pg');

const pool = new Pool({
  host: 'jobsdbmain.c7s4qy006fy0.us-east-1.rds.amazonaws.com',
  port: 5432,
  user: 'postgres',
  password: 'dbPassMtA2CPags6746ufvbg3hye639dbPass',
  database: 'postgres',
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

module.exports = pool;

// async function runDB() {
//   try {
//     await client.connect();
//     console.log('Connected to the AWS-RDS instance successfully!');
//   } catch (err) {
//     console.error('Database error ocured:', err);
//     console.log('Database error ocured:', err);
//   } finally {
//     await client.end();
//     console.log('Database connection closed.');
//   }
// }

// runDB();
