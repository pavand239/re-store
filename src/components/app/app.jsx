import React from 'react';
import { Switch, Route} from 'react-router-dom';
import {Container} from "react-bootstrap";

import {CardPage, HomePage} from '../pages';
import ShopHeader from "../shop-header"; 

export const App = () => {
    return (
        <>
            <ShopHeader/>
            <Container>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/cart'>
                        <CardPage />
                    </Route>
                </Switch>
            </Container>
        </>
    )
}