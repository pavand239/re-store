import React from 'react';
import {Table} from "react-bootstrap";

import "./shopping-cart-table.css"

export const ShoppingCartTable = () => {
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
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Clean Code: A Handbook of Agile Software Craftsmanship</td>
                        <td>Robert C. Martin</td>
                        <td>2</td>
                        <td>62$</td>
                        <td className='action'>
                            <i class="fas fa-plus-circle text-success"></i>
                            <i class="fas fa-minus-circle text-warning"></i>
                            <i class="fas fa-trash-alt text-danger"></i>
                        </td>
                    </tr> 
                    <tr>
                        <td>2</td>
                        <td>Web Design with HTML, CSS, JavaScript and jQuery Set</td>
                        <td>Jon Duckett</td>
                        <td>1</td>
                        <td>47$</td>
                        <td className='action'>
                            <i class="fas fa-plus-circle text-success"></i>
                            <i class="fas fa-minus-circle text-warning"></i>
                            <i class="fas fa-trash-alt text-danger"></i>
                        </td>
                    </tr> 
                </tbody>
            </Table>
            <h3>Total: 100$</h3>
        </>
    )
}