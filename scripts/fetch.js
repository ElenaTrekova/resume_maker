const _get_ = async (url) => {
    const response = await fetch(url);
    return await response.json()
}

const _post_ = async (url, data, headers = null) => {
	const setHeaders = headers ? { 'Content-Type': 'application/json', ...headers} : { 'Content-Type': 'application/json'}
		
    const response = await fetch(url, {
        method: 'POST',
        headers: setHeaders,
        body: JSON.stringify(data)
    });
    return await response.json()
}

const _put_ = async (url, data) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json()
}

const _delete_ = async (url) => {
    const response = await fetch(url, {
        method: 'DELETE',
    });
    return await response.json()
}

export {
    _get_, 
    _post_, 
    _put_, 
    _delete_
}