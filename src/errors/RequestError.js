export default class RequestError {
    constructor(message) {
        return new Error(`Request Error: ${message}`)
    }
}