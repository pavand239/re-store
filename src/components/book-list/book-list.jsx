import React, { useEffect} from 'react';
import { connect } from "react-redux";

import {withBookstoreService} from '../hoc';
import {fetchBooks} from "../../actions";
import BookListItem from "../book-list-item";
import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";

import './book-list.css'

const BookList = ({books}) => (
    <div className='book-list'>
       { books.map((book) => (
                <BookListItem key = {book.id} book={book} />
        ))}
    </div>
)

const BookListContainer = ({books, loading, error, fetchBooks}) => {
    useEffect(()=>{
        fetchBooks();
    },[])
    if (loading) {
        return (
            <div className='d-flex w-100'>
                <Spinner />
            </div>
        )
    }
    if (error ) {
        return <ErrorIndicator />
    }
    return <BookList books={books} />
}

const mapStateToProps=(state)=>({
    books:state.books,
    loading:state.loading,
    error:state.error
})

export default withBookstoreService(
                    connect(mapStateToProps,fetchBooks)
                (BookListContainer))
