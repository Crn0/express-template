class BaseError extends Error {
    constructor(name, httpCode, message, errors,isOperational) {
        super(message);
        this.name = name;
        this.httpCode = httpCode;
        this.errors = errors;
        this.isOperational = isOperational
    }
}

const f = new BaseError('CustomError', 401, 'testing', {
    message: 'foobar',
}, true)

console.log(f.stack)