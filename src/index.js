import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import store from './store';
import App from './components/app';
import BookstoreService from "./services/bookstore-service";
import ErrorBoundry from "./components/error-boundry";
import BookstoreServiceContext from "./components/bookstore-service-context";

const bookstoreService = new BookstoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceContext.Provider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceContext.Provider>
        </ErrorBoundry>
    </Provider>, 
    document.getElementById('root'));

