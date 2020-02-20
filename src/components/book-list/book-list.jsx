import React, { useEffect} from 'react';
import { connect,  } from "react-redux";
import {bindActionCreators} from "redux";
import {withBookstoreService} from '../hoc';
import {fetchBooks, bookAddedToCart} from "../../actions";
import BookListItem from "../book-list-item";
import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";

import './book-list.css'

const BookList = ({books, onBookAdded}) => (
    <div className='book-list'>
       { books.map((book) => (
                <BookListItem 
                    key = {book.id} 
                    book={book} 
                    onBookAdded={()=>{onBookAdded(book.id)}}/>
        ))}
    </div>
)

const BookListContainer = ({books, loading, error, fetchBooks, onBookAdded}) => {
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
    return <BookList books={books} onBookAdded={onBookAdded} />
}

const mapStateToProps=({bookList:{books,loading,error}})=>({
    books,
    loading,
    error,
})
const mapDispatchToProps=(dispatch,{bookstoreService})=>(bindActionCreators(
    {
    fetchBooks:fetchBooks(bookstoreService),
    onBookAdded:bookAddedToCart
},dispatch))
export default withBookstoreService(
                    connect(mapStateToProps,mapDispatchToProps)
                (BookListContainer))
