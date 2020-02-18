const booksRequested = () => ({
    type: 'FETCH_BOOKS_REQUEST'
})
const booksLoaded = (newBooks) => ({
    type:'FETCH_BOOKS_SUCCES',
    payload: newBooks
})
const booksError = (error) => ({
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
})

const fetchBooks =(dispatch, {bookstoreService})=> ({
    fetchBooks:()=>{
        dispatch(booksRequested());
        bookstoreService.getBooks()
                            .then((data)=>dispatch(booksLoaded(data)))
                            .catch((err)=>dispatch(booksError(err)));
                        }})

export {
    fetchBooks
}