import React, { useEffect} from 'react';
import { connect } from "react-redux";
import {Row} from "react-bootstrap";

import {withBookstoreService} from '../hoc';
import {bookLoaded} from "../../actions";
import BookListItem from "../book-list-item";

import './book-list.css'

const BookList = ({books, bookstoreService, bookLoaded}) => {
    useEffect(()=>{
        bookLoaded(bookstoreService.getBooks());
    },[])
    let bookList = books.map((book) => (
        <div key = {book.id}>
            <BookListItem book={book} />
        </div>
    ))
    return (
        <ul>
            {bookList}
        </ul>
    )
}

const mapStateToProps=(state)=>({
    books:state.books
})

export default withBookstoreService(
                    connect(mapStateToProps,{bookLoaded})
                (BookList))
