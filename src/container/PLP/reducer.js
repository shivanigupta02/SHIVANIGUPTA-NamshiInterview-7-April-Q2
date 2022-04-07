const initialState = {
  products: [],
};

// Use the initialState as a default value
export default function plpReducer(state = initialState, action) {
    console.log('reducer called')
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'SET_PRODUCTS':
        state.products = [...state.products, ...action.products];
        return JSON.parse(JSON.stringify(state));
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
