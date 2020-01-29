const PORT = 9000

// Import Express app and start server listener
const app = require('./app');
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Close server if an error is caught
process.on('unhandledRejection', err => {
  console.error(err.name, err.message);
  server.close(() => process.exit(1));
});
