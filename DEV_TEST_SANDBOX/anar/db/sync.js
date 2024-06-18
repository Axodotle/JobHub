const { Client } = require('pg');

const client = new Client({
  host: 'postgres.c7s4qy006fy0.us-east-1.rds.amazonaws.com',
  port: 5432,
  user: 'postgres',
  password: 'dbPassMtAPXrTHoMhDMtfP6o7nL2CPaCCmieC9dbPass',
  database: 'postgres',
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to the database successfully!');
    // Create a test table
    const createTableQuery = `
  CREATE TABLE IF NOT EXISTS mice_and_cats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
  );
`;
    await client.query(createTableQuery);
    console.log('Test table created successfully!');

    // Insert a record into the test table
    const insertQuery = `
  INSERT INTO test_table (name)
  VALUES ('test_name')
  RETURNING *;
`;
    const result = await client.query(insertQuery);
    console.log('Record inserted successfully:', result.rows[0]);
  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    await client.end();
    console.log('Database connection closed.');
  }
}

run();

run();

/*****************************************************************
 * const { Client } = require('pg');                             *
 *                                                               *
 * const client = new Client({                                   *
 *   host: 'postgres.c7s4qy006fy0.us-east-1.rds.amazonaws.com',  *
 *   port: 5432,                                                 *
 *   user: 'postgres',                                           *
 *   password: 'dbPassMtAPXrTHoMhDMtfP6o7nL2CPaCCmieC9dbPass',   *
 *   database: 'postgres',                                       *
 * });                                                           *
 *                                                               *
 * client                                                        *
 *   .connect()                                                  *
 *   .then(() => {                                               *
 *     console.log('Connected to the database successfully!');   *
 *     return client.end();                                      *
 *   })                                                          *
 *   .catch((err) => {                                           *
 *     console.error('Connection to the database failed!', err); *
 *   });                                                         *
 *****************************************************************/
