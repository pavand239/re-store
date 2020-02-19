import React from 'react';
import {Table,Button, ButtonGroup} from "react-bootstrap";
import {connect} from "react-redux";

import "./shopping-cart-table.css"

const ShoppingCartTable = ({items, orderTotal, onInc, onDec, onDel}) => {
    let itemsTable= items.map((item, idx)=>{
        let {id, title, author, count, total} = item;
        return (
        <tr key={id}>
            <td>{idx+1}</td>
            <td>{title}</td>
            <td>{author}</td>
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
                        <th>Title</th>
                        <th>Author</th>
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

const mapStateToProps = (state) =>({
    items:state.items,
    orderTotal:state.orderTotal
})

const mapDispatchToProps = ()=>({
    onInc:(id)=>console.log('inc',id),
    onDec:(id)=>console.log('dec',id),
    onDel:(id)=>console.log('del',id)
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);