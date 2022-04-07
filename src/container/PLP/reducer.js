const initialState = {
  products: [],
};

// Use the initialState as a default value
export default function plpReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'PRODUCT_FETCH_SUCCEEDED':
        console.log(action.payload);
    break;
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
