import React, {useContext} from 'react'
import BookstoreServiceContext from '../bookstore-service-context'
export const withBookstoreService = (Wrapped) => (props) => {
    let bookstoreService = useContext(BookstoreServiceContext);
    return <Wrapped {...props}
                    bookstoreService={bookstoreService} />
}