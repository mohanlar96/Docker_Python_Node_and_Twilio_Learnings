const EventE = require('events');

const emitter = new EventE();

emitter.on('ruruSmiled', (data)=> console.log('she smiled with a grace' , data));

emitter.emit('ruruSmiled', {color:'white',tooth: -4 })