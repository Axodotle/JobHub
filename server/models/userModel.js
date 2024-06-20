const db = require('../db');
const bcrypt = require('bcrypt');

async function createUser(username, password, firstName, lastName) {
  const query = `
      INSERT INTO users (username, password, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
  const values = [username, password, firstName, lastName];

  try {
    const { rows } = await db.query(query, values);
    return rows[0]; // Return the inserted user object
  } catch (err) {
    throw err; // Let the caller handle the error
  }
}

async function getUserById(userId) {
  const query = `
      SELECT *
      FROM users
      WHERE id = $1;
    `;
  const values = [userId];

  try {
    const { rows } = await db.query(query, values);
    console.log(rows[0]);
    return rows[0];
  } catch (err) {
    throw err;
  }
}

async function getUser(username) {
  const query = `
        SELECT *
        FROM users
        WHERE username = $1;
      `;
  const values = [username];

  try {
    const { rows } = await db.query(query, values);
    console.log(rows[0]);
    return rows[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getAllUsers() {
  const query = `
      SELECT *
      FROM users;
    `;

  try {
    const { rows } = await db.query(query);
    console.log(rows);
    return rows; // Return array of user objects
  } catch (err) {
    throw err;
  }
}

async function checkAccess(username, password) {
  const query = `
      SELECT * FROM users
      WHERE username = $1;
    `;
  try {
    const values = [username];
    const result = await db.query(query, values);
    if (result.rows.length === 0) {
      console.log(`No account with username "${username}"`);
      return false; // User not found
    }
    const hashedPassword = result.rows[0].password;
    const match = await bcrypt.compare(password, hashedPassword);
    console.log('Welcome Back');
    return match;
  } catch (err) {
    console.error('Wrong username or password', err);
    throw err;
  }
}
// getAllUsers();

module.exports = { createUser, getUser, getUserById, getAllUsers, checkAccess };
