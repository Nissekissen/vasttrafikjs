import Base from "./Base.js";


export default class BoardBase extends Base {
    constructor(client, options) {
        super(options);
        this.client = client;
    }
}