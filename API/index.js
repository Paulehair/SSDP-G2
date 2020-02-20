const mongoose = require('mongoose');
let DB = ``;

if (process.env.NODE_ENV === 'development')
	DB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ssdp-9bgwa.mongodb.net/test?retryWrites=true&w=majority`;
if (process.env.NODE_ENV === 'production')
	DB = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongodb:27017/test`;
const PORT = 9000;

// Connect to database
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => {
		console.log('Connected to DB');
	})
	.catch(e => {
		console.log('Error while connecting to DB');
		console.error(e);
	});

// Import Express app and start server listener
const app = require('./app');
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Close server if an error is caught
process.on('unhandledRejection', err => {
	console.error(err.name, err.message);
	server.close(() => process.exit(1));
});
