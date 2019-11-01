const http = require('http')

const HOST_TEXT = '--host=';
const PORT_TEXT = '--port=';


const host = process.argv.find(arg => arg.includes('HOST_TEXT')).replace(HOST_TEXT, '') || 'localhost';
const port = process.argv.find(arg => arg.includes('PORT_TEXT')).replace(PORT_TEXT, '') || 6666;

console.log(host, port);
