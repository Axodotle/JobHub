// For internal use only

const db = require('../db');
const bcrypt = require('bcrypt');

async function hashAndUpdate() {
  try {
    const getUsers = 'SELECT id, password FROM users;';
    const result = await db.query(getUsers);

    const users = result.rows;
    const updatedUsers = [];

    // Hash passwords for each user
    for (let user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      updatedUsers.push({ id: user.id, hashedPassword });
    }

    // Update passwords in the database
    for (let updatedUser of updatedUsers) {
      const updatePasswordQuery = `
          UPDATE users
          SET password = $1
          WHERE id = $2;
        `;
      await db.query(updatePasswordQuery, [
        updatedUser.hashedPassword,
        updatedUser.id,
      ]);
    }

    console.log('Passwords updated successfully for all users.');
  } catch (err) {
    console.error('Error occurred:', err);
    throw err;
  } finally {
    await db.end();
  }
}

hashAndUpdate();
