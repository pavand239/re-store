import React from 'react';
import {Navbar} from 'react-bootstrap';
import "./shop-header.css";
import { Link } from 'react-router-dom';

export const ShopHeader = ({numItems, total}) => {
   return (
        <Navbar sticky='top' bg='light'>
            <Link to='/'>
                <Navbar.Brand>
                    <h1 className='logo'>ReStore</h1>   
                </Navbar.Brand>
            </Link>
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text className='shopping-cart'>
                    <i className="fas fa-shopping-cart cart-icon"> </i>
                    <Link to="/cart" >
                        {numItems} items (${total})
                    </Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}