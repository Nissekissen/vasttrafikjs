/**
 * Converts an object to a parametars string.
 * 
 * @param {Object} data The object you want to convert.
 * @returns The object into a string.
 */
const paramsObjectToString = (data) => {

    const entries = Object.entries(data);

    let params = ''

    for (const entry of entries) {
        let index = entries.indexOf(entry);
        if (index > 0) {
            params = `${params}&${entry[0]}=${entry[1]}`;
            continue;
        }
        params = `${params}?${entry[0]}=${entry[1]}`;
    }
    return params;
}


export default { paramsObjectToString }