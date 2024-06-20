function errorHandler(err, req, res, next) {
  if (err.code === '23505' && err.detail.includes('Key (username)')) {
    return res.status(409).json({ error: 'Username already exists.' });
  } else {
    // Generic error handling
    console.error('Unhandled error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = errorHandler;
