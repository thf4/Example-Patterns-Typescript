"use strict";
class Logger {
    constructor() {
    }
    static getInstance() {
        if (Logger.instance == null) {
            Logger.instance = new Logger();
        }
        ;
        return Logger.instance;
    }
    ;
    info(msg) {
        console.log(msg);
    }
}
const log = Logger.getInstance();
log.info('test');
