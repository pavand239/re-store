const initialState = {
    books:[]
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'BOOK_LOADED':
            return action.payload;
        default:
            return state;
    }
}