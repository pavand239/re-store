const updateItems = (cartItems, item, idx, total) => {
    if (item.count <=0) {
        return {    
            orderTotal:total,
            cartItems: [...cartItems.slice(0,idx), 
                        ...cartItems.slice(idx+1)
                    ]
            }
    }

    if (idx===-1) {
        return {
            orderTotal:total,
            cartItems:[...cartItems,item]
            }
    } else {
        return {
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
    const {bookList:{books},shoppingCart:{cartItems,orderTotal}} = state;
    let book=books.find((book)=>book.id===id),
        idx=cartItems.findIndex((item)=>item.id===id),
        item=cartItems[idx],
        total=orderTotal+book.price*quantity;
    return updateItems(cartItems,updateItem(book,item, quantity),idx, total) 
}

export const updateCartItems = (state, action) => {
    if (state === undefined) {
        return {
            cartItems:[],
            orderTotal:0
        }
    }
    switch (action.type) {    
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state,action.payload,1)
        case 'BOOK_DEC_AT_CART':
            return updateOrder(state,action.payload,-1) 
        case 'BOOK_REMOVE_FROM_CART': 
            let count = state.shoppingCart.cartItems.find((item)=>item.id===action.payload).count;
            return updateOrder(state,action.payload,-count) 
        default:
            return state.shoppingCart;
    }
}