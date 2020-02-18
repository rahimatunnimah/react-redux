import { ADD_TO_CART, SEARCH_PRODUCT, RESET_IS_SEARCH } from '../actionTypes'

const initialState = {
  query: '',
  addedItems: [],
  isSearching: false
}

export default function (state = initialState, action) {
  if (action.type === ADD_TO_CART) {
    // memfilter id dari product untuk selanjutnya ditambahkan ke dalam addedItem
    const { id } = action.payload
    const addedItem = state.allProducts.find(product => product.id === id)

    // check if the action id exists in the addedItems
    const existedItem = state.addedItems.find(item => item.id === id)
    if (existedItem) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    } else {
      addedItem.quantity = 1
      // calculating the total
      const newTotal = state.total + addedItem.price

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
    }
  } else if (action.type === SEARCH_PRODUCT) {
    const { query } = action.payload
    return {
      ...state,
      isSearching: true,
      query: query
    }
  } else if (action.type === RESET_IS_SEARCH) {
    return {
      ...state,
      isSearching: false
    }
  }
  return state
}