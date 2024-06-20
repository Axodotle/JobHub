const express = require('express');
const cors = require('cors');
const appRouter = require('./routes/appRouter');
const authRouter = require('./routes/AuthRouter');
const path = require('path');
const app = express();

const indexPath = path.join(__dirname, '../client/dist/index.html');

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

app.listen(3000, () => {
  console.log('listening on port 3000');
});

module.exports = app;
``