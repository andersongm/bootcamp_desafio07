// Function like a reducer
export default function cart(state = [], action) {

    console.tron.log(state);

    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.item];

        default:
            return state;
    }
}
