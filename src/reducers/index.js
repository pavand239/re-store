import {updateCartItems} from "./update-cart-items";
import {updateBookList} from "./update-book-list";

export const reducer = (state, action) => ({
    bookList:updateBookList(state,action),
    shoppingCart:updateCartItems(state,action)
})