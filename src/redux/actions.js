import { ADD_TO_CART, SEARCH_PRODUCT, RESET_IS_SEARCH, SET_PRODUCTS, SET_REFRESH, EDIT_QTY } from './actionTypes'

export const addToCart = (id) => ({
    type: ADD_TO_CART,
    payload: {
      id
    }
  })
  
export const searchProduct = (query) => ({
  type: SEARCH_PRODUCT,
  payload: {
    query
  }
}
)
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: {
    products
  }
}
)
export const resetIsSearch = () => ({
  type: RESET_IS_SEARCH
})
export const setIsRefresh = () => ({
  type: SET_REFRESH
})
export const editQty = (id, isIncrement) => ({
  type: EDIT_QTY,
  payload: {
    id, 
    isIncrement
  }
})