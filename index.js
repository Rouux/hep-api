/* eslint-disable indent */
/* eslint-disable no-fallthrough */
/* eslint-disable no-console */
const app = require('./src/api');
const debug = require('debug')('api');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
	const normalizedPort = parseInt(val, 10);
	if (isNaN(normalizedPort)) return val;
	if (normalizedPort >= 0) return normalizedPort;
	return false;
}

function onError(error) {
	if (error.syscall !== 'listen') throw error;

	const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
	switch (error.code) {
		case 'EACCES':
			console.error(`${bind} requires elevated privileges`);
			process.exit(1);
		case 'EADDRINUSE':
			console.error(`${bind} is already in use`);
			process.exit(1);
		default:
			throw error;
	}
}

function onListening() {
	const addr = server.address();
	if (typeof addr !== 'string')
		debug(`Listening at http://localhost:${addr.port}/`);
}
