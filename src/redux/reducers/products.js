import { ADD_TO_CART, SEARCH_PRODUCT, RESET_IS_SEARCH, SET_PRODUCTS, SET_REFRESH, EDIT_QTY } from '../actionTypes'

const initialState = {
  query: '',
  allProducts: [],
  addedItems: [],
  total: 0,
  isSearching: false,
  isRefresh:false
}

export default function (state = initialState, action) {
  if (action.type === ADD_TO_CART) {
   
    const { id } = action.payload
    const addedItem = state.allProducts.find(product => product.id === id)

    const existedItem = state.addedItems.find(item => item.id === id)
    if (existedItem) {
      const newAddedItems = state.addedItems.filter(item => item.id !== existedItem.id)
      return {
        ...state,
        addedItems: newAddedItems,
        total: state.total - (addedItem.price * addedItem.quantity)
      }
    } else {
      addedItem.quantity = 1
    
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
  } else if (action.type === SET_PRODUCTS){
    const { products } = action.payload
    return {
      ...state,
      allProducts: products
    }
  } else if (action.type === RESET_IS_SEARCH) {
    return {
      ...state,
      isSearching: false
    }
  } else if (action.type === SET_REFRESH){
    return{
      ...state,
      isRefresh: true
    }
  } else if (action.type === EDIT_QTY){
    const {id, isIncrement } = action.payload
    const editedItem = state.addedItems.find(item => item.id === id)
    if(isIncrement){

      editedItem.quantity += 1
      const newTotal = state.total + editedItem.price
      
      return {
        ...state,
        total: newTotal
      }
    } else{
      editedItem.quantity -= 1
      const newTotal = state.total - editedItem.price
      
      return {
        ...state,
        total: newTotal
      }
    }
  }
  return state
}