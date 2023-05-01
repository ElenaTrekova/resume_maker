const initCollections = (collections) => {
    collections.forEach(collection => {
        if(!localStorage.hasOwnProperty(collection.title)) {
            localStorage.setItem(collection.title, JSON.stringify(collection.value))
        }
    });
}

const insertData = (collection, doc) => {
    if (!localStorage.hasOwnProperty(collection)) {
        localStorage.setItem(collection,JSON.stringify([doc]))
    } else {
        const rows = JSON.parse(localStorage.getItem(collection))
        rows.push(doc)
        localStorage.setItem(collection,JSON.stringify(rows))
    }
    return {ok: true, message: `The document has been successfully added to ${collection}`}
}

const selectData = (collection) => {
    if (!localStorage.hasOwnProperty(collection)) {
        return []
    } else {
        return JSON.parse(localStorage.getItem(collection))
    }
}

const updateData = (collection, doc, id) => { 
    if (!localStorage.hasOwnProperty(collection)) {
        localStorage.setItem(collection,JSON.stringify([doc]))
    } else {
        let rows = JSON.parse(localStorage.getItem(collection))
        rows = rows.map((row) => row.id === id ? doc : row)
        localStorage.setItem(collection,JSON.stringify(rows))
    }
    return {ok: true, message: `Data has been successfully updated in ${collection}`}
}

const deleteData = (collection, id) => {
    if (!localStorage.hasOwnProperty(collection)) { 
        return {ok: false, message: `No matching record found`}
    } else {
        let rows = JSON.parse(localStorage.getItem(collection))
        rows = rows.filter((row) => row.id !== id)
        localStorage.setItem(collection,JSON.stringify(rows))
        return {ok: true, message: `The record has been successfully removed from the ${collection}`}
    }
}

export {
    initCollections, 
    insertData, 
    selectData, 
    updateData, 
    deleteData
}