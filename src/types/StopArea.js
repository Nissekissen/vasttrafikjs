export default class StopArea {
    constructor(options) {
        const entries = Object.entries(options)
        for (const option of entries) {
            this[option[0]] = option[1]
        }
    }
}