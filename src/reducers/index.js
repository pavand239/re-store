const initialState = {
    books:[],
    loading:true,
    error:null,
    items:[
        {
            id:1,
            title:'book 1',
            author:'author 1',
            count:2,
            total:40
        },
        {
            id:2,
            title:'book 2',
            author:'author 2',
            count:1,
            total:20
        }
    ],
    orderTotal:60
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books:[],
                loading:true,
                error:null
            };
        case 'FETCH_BOOKS_SUCCES':
            return {
                ...state,
                books: action.payload,
                loading:false,
                error:null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books:[],
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}