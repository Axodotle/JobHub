const db = require('../db');

const appModel = {};

appModel.createApp = async (
  username,
  company,
  date_applied,
  role,
  status,
  notes,
  next_interview
) => {
  console.log(username);
  const getUserIdQuery = `
    SELECT id FROM users WHERE username = $1;
  `;

  try {
    const { rows } = await db.query(getUserIdQuery, [username]);
    if (rows.length === 0) {
      throw new Error(`User with username ${username} not found.`);
    }
    const userId = rows[0].id;

    const insertQuery = `
        INSERT INTO applications (owner_id, company, date_applied, role, status, notes, next_interview)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;
    const values = [
      userId,
      company,
      date_applied,
      role,
      status,
      notes,
      next_interview,
    ];
    const { rows: insertedRows } = await db.query(insertQuery, values);
    return insertedRows[0];
  } catch (err) {
    throw err;
  }
};

module.exports = appModel;
