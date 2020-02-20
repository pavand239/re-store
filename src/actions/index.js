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
const bookAddedToCart = (id) =>({
    type:'BOOK_ADDED_TO_CART',
    payload:id
})
const bookDecAtCart = (id) =>({
    type:'BOOK_DEC_AT_CART',
    payload:id
})
const bookRemoveFromCart = (id) =>({
    type:'BOOK_REMOVE_FROM_CART',
    payload:id
})

const fetchBooksOld =(dispatch, bookstoreService)=> (()=>{
        dispatch(booksRequested());
        bookstoreService.getBooks()
                            .then((data)=>dispatch(booksLoaded(data)))
                            .catch((err)=>dispatch(booksError(err)));
                        })

const fetchBooks=(bookstoreService)=>()=>(dispatch)=>{
    dispatch(booksRequested());
    bookstoreService.getBooks()
                        .then((data)=>dispatch(booksLoaded(data)))
                        .catch((err)=>dispatch(booksError(err)));
}

export {
    fetchBooks,
    bookAddedToCart,
    bookDecAtCart,
    bookRemoveFromCart
}