import React from 'react';
import {Navbar} from 'react-bootstrap';
import "./shop-header.css";

export const ShopHeader = ({numItems, total}) => {
   return (
        <Navbar>
            <Navbar.Brand href='/'>
                <h1 className='logo'>ReStore</h1>
            </Navbar.Brand>
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text className='shopping-cart'>
                    <i class="fas fa-shopping-cart cart-icon"> </i>
                    {numItems} items (${total})
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}