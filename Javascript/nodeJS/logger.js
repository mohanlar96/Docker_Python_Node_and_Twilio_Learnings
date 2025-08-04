const EventEmitter = require('events');

class Logger extends EventEmitter{

    log(msg){
        console.log(msg)
        this.emit('ruruSmiled', {tooth : 32-4 });
    }

}
module.exports = Logger;