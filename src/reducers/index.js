const initialState = {
    books:[],
    loading:true,
    error:null,
    cartItems:[],
    orderTotal:0
}



const updateItems = (state,cartItems, item,idx, total) => {
    if (item.count <=0) {
        return {    
            ...state,
            orderTotal:total,
            cartItems: [...cartItems.slice(0,idx), 
                        ...cartItems.slice(idx+1)
                    ]
            }
    }

    if (idx===-1) {
        return {
            ...state,
            orderTotal:total,
            cartItems:[...cartItems,item]
            }
    } else {
        return {
            ...state,
            orderTotal:total,
            cartItems: [...cartItems.slice(0,idx), 
                        item, 
                        ...cartItems.slice(idx+1)
                       ]
            }
    }

}

const updateItem=(book,item={},quantity)=>{
    const {
        id=book.id,
        title=book.title,
        author=book.author,
        count=0,
        total=0
    } = item;
    return {
        id,
        title,
        author,
        count:count+quantity,
        total:total+book.price*quantity
    }

}
const updateOrder = (state,id,quantity) => {
    const {books,cartItems,orderTotal} = state;
    let book=books.find((book)=>book.id===id),
        idx=cartItems.findIndex((item)=>item.id===id),
        item=cartItems[idx],
        total=orderTotal+book.price*quantity;
    return updateItems(state,cartItems,updateItem(book,item, quantity),idx, total) 
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
            };
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state,action.payload,1)
        case 'BOOK_DEC_AT_CART':
            return updateOrder(state,action.payload,-1) 
        case 'BOOK_REMOVE_FROM_CART': 
            let count = state.cartItems.find((item)=>item.id===action.payload).count;
            return updateOrder(state,action.payload,-count) 
        default:
            return state;
    }
}