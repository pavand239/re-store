import React from 'react';
import { Switch, Route} from 'react-router-dom';
import {Container} from "react-bootstrap";

import {CardPage, HomePage} from '../pages';
import ShopHeader from "../shop-header"; 

export const App = () => {
    return (
        <>
            <ShopHeader numItems={2} total={100} />
            <Container>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/card'>
                        <CardPage />
                    </Route>
                </Switch>
            </Container>
        </>
    )
}