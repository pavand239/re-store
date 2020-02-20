import React from 'react';
import {Table,Button, ButtonGroup} from "react-bootstrap";
import {connect} from "react-redux";

import {bookAddedToCart, bookDecAtCart, bookRemoveFromCart} from "../../actions";

import "./shopping-cart-table.css"

const ShoppingCartTable = ({cartItems, orderTotal, onInc, onDec, onDel}) => {
    if (cartItems.length===0){
        return <h3>You haven’t ordered anything yet</h3>
    }
    let itemsTable= cartItems.map((item, idx)=>{
        let {id, title, author, count, total} = item;
        return (
        <tr key={id}>
            <td>{idx+1}</td>
            <td>{title} <small>{author}</small></td>
            <td>{count}</td>
            <td>{total}</td>
            <td className='action'>
                <ButtonGroup className='float-right'>
                    <Button 
                        onClick ={()=>onInc(id)}
                        variant="outline-success" size='sm'>
                        <i className="fas fa-plus-circle"></i>
                    </Button> 
                    <Button 
                        onClick ={()=>onDec(id)}
                        variant="outline-warning" size='sm'>
                        <i className="fas fa-minus-circle"></i>
                    </Button>
                    <Button 
                        onClick ={()=>onDel(id)}
                        variant="outline-danger" size='sm'>
                        <i className="fas fa-trash-alt"></i>
                    </Button>  
                </ButtonGroup>  
            </td>
        </tr> 
    )})
    return (
        <>
            <h3>Your order</h3>
            <Table bordered responsive hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsTable}
                </tbody>
            </Table>
            <h3 className='cart-total'>Total: {orderTotal}$</h3>
        </>
    )
}

const mapStateToProps = ({shoppingCart:{cartItems, orderTotal}}) =>({
    cartItems,
    orderTotal
})

const mapDispatchToProps = (dispatch)=>({
    onInc:(id)=>dispatch(bookAddedToCart(id)),
    onDec:(id)=>dispatch(bookDecAtCart(id)),
    onDel:(id)=>dispatch(bookRemoveFromCart(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);