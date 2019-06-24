import { createStore } from 'redux';
import { items, product } from '../data/items';
const initialState = { items, product };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE':
      let index = state.items.indexOf(action.item);
      return {
        ...state,
        items: [...state.items.slice(0, index), ...state.items.slice(index + 1)]
      };
    case 'ADD':
      return {
        ...state,
        items: [action.product, ...state.items]
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
