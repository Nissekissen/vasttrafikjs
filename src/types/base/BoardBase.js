const Base = require('./Base');


module.exports = class BoardBase extends Base {
    constructor(client, options) {
        super(options);
        this.client = client;
    }
}