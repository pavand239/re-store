import React from 'react';
import {Row, Col} from "react-bootstrap";
export const BookListItem = ({book}) => {
    return (
        <Row className='book-list-item my-5'>
            <Col sm={3} className="book-cover mb-3 mb-sm-1">
                <a href='#'><img src={book.image}/></a>
            </Col>
            <Col>
                <h3 className='title'><a href='#'>{book.title}</a></h3>
                <p>{book.author}</p>
                <p>Price: {book.price}</p>
                <button type="button" class="btn btn-primary">Add to cart</button>
            </Col>
        </Row>
    )
}