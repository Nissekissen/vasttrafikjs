

module.exports = class APIResponse {
    constructor(response) {
        
        this.response = response;
    }
    async toJSON() {
        return await this.response.json();
    }
    async toText() {
        return await this.response.text();
    }
}