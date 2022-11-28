export default class Token {
    constructor(options) {
        this.scope = options?.scope;
        this.token_type = options?.token_type;
        this.expires_in = options?.expires_in;
        this.refresh_token = options?.refresh_token;
        this.access_token = options?.access_token;
    }
}