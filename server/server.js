const dbErrorHandler = require('./controllers/dbErrorHandler');
const express = require('express');
const cors = require('cors');
const appRouter = require('./routes/appRouter');
const authRouter = require('./routes/authRouter');
const path = require('path');
const app = express();
// const dotenv = require('/dotenv/config.js');
require('dotenv').config();

const indexPath = path.join(__dirname, '../client/dist/index.html');

const PORT = process.env.PORT || 8000;
console.log('port', PORT);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// // Serve static content
// app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(`Error sending index.html: ${err}`);
      res.status(500).send({
        log: `Error sending index.html: ${err}`,
        status: 'error',
        code: 500,
        message: 'Something went wrong while serving the request',
      });
    }
  });
});

app.use('/users', authRouter);
app.use('/applications', appRouter);

app.use(dbErrorHandler);

// Global error handler:
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unrecognized error caught',
    status: 500,
    message: 'An error occurred',
  };
  const errorObj = Object.assign({}, defaultErr, err);
  // console.error(errorObj.message);

  return res.status(errorObj.status).json({ error: errorObj.message });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
``;
