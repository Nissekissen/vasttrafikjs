export default class StopPoint {
    constructor(options) {
        const entries = Object.entries(options)
        console.log(entries)
        for (const option of entries) {
            this[option[0]] = option[1]
        }
    }
}