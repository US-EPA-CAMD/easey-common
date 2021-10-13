interface LogInterface {
    warn: (message: string, args?: any[]) => void;
    error: (errorType: Error, message: string, args?: any[]) => void;
    info: (message: string, args?: any[]) => void;
}
export declare class Logger implements LogInterface {
    private logInstance;
    constructor();
    warn(message: any, args?: any): void;
    error(errorType: any, message: any, args?: any): void;
    info(message: any, args?: any): void;
}
export default Logger;
