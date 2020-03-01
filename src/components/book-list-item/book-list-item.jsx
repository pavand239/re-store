import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
export const BookListItem = ({book, onBookAdded}) => {
    return (
        <Row className='book-list-item my-5'>
            <Col sm={3} className="book-cover mb-3 mb-sm-1">
                <a href='#'><img src={book.image}/></a>
            </Col>
            <Col>
                <h3 className='title'>{book.title}</h3>
                <p>{book.author}</p>
                <p>Price: {book.price}</p>
                <Button 
                    onClick={onBookAdded}
                    variant="primary">Add to cart</Button>
            </Col>
        </Row>
    )
}
