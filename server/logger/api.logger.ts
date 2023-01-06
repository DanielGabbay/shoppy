const {Logger} = require('logger-ts-node');
export default class APILogger {

    info(message: string, data?: any) {
        Logger.info(`${message} ${data ? JSON.stringify(data) : ''}`);
    }

    warn(message: string, data?: any) {
        Logger.warn(`${message} ${data ? JSON.stringify(data) : ''}`);
    }


    error(message: string, data?: any) {
        Logger.error(`${message} ${data ? JSON.stringify(data) : ''}`);
    }


    debug(message: string, data?: any) {
        Logger.debug(`${message} ${data ? JSON.stringify(data) : ''}`);
    }

    trace(message: string, data?: any) {
        Logger.trace(`${message} ${data ? JSON.stringify(data) : ''}`);
    }

    /******************/

    logRequest(req: any) {
        this.info(`Request: ${req.method} ${req.originalUrl}`);
    }
}
