const Logger = require('./logger')

const logger = new Logger();

logger.on('ruruSmiled',d => console.log('she smiled',d))

logger.log(

    'hello :) '
)

