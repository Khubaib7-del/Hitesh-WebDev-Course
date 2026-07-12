const fs = require('fs');
const os = require('os');

const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        //Call event
        this.emit('message', message);
    }
}

const logger = new Logger();
const logfile = './event.log.txt'

const LogToFile=(event)=>{
    const logMessage = `${new Date().toISOString()} - ${event}\n`;
    fs.appendFileSync(logfile, logMessage)
}

logger.on('message', LogToFile);

setInterval(() => {
    const memoryUsage = os.freemem() / os.totalmem() * 100;
    logger.log(`Memory Usage: ${memoryUsage.toFixed(2)}%`);
}, 3000);

logger.log('Event Logger started...');
logger.log('Logging memory usage every 3 seconds...');