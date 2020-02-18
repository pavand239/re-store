const bookLoaded = (newBooks) => {
    return {
        type:'BOOK_LOADED',
        payload: newBooks
    }
}

export {
    bookLoaded
}