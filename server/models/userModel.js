const db = require('../db');

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

// getAllUsers();

module.exports = { createUser, getUser, getUserById, getAllUsers };
