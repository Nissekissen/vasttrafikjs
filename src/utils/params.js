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