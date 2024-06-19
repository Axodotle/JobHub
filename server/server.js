const express = require('express');
const cors = require('cors');
const applicationsRouter = require('./routes/applications');
const routerSignup = require('./routes/users'); //Change variable label to userRouter?
const path = require('path');
const app = express();

const indexPath = path.join(__dirname, '../client/public/index.html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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

app.use('/users', routerSignup);
app.use('/applications', applicationsRouter);

// Global error handler:
app.use((err, req, res, next) => {
  // Default error structure
  const defaultErr = {
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
