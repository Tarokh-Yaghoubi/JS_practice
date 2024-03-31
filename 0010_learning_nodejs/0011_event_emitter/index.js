const logEvents = require('./logEvents')

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {};

// initialize an object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg) => {logEvents(msg)})

// add a time out to see what is happening better
setTimeout(() => { myEmitter.emit('log', 'Log event emitted')  }, 2000);

