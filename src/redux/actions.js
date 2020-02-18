import { ADD_TO_CART, SEARCH_PRODUCT, RESET_IS_SEARCH } from './actionTypes'

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
export const resetIsSearch = () => ({
  type: RESET_IS_SEARCH
})