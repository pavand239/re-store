import React from 'react';

import BookstoreService from "../../services/bookstore-service";
import ErrorBoundary from "../error-boundry";
import BookstoreServiceContext from "../bookstore-service-context";


export const App = () => {
    const bookstoreService = new BookstoreService()
    return (
        <ErrorBoundary>
            <BookstoreServiceContext.Provider value={bookstoreService}>
                Restore app
            </BookstoreServiceContext.Provider>
        </ErrorBoundary>
    )
}