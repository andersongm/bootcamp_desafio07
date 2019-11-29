// Function like a reducer
export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            // console.tron.log('Reducer:', action.item);
            console.tron.log('Reducer:', state);

            // console.tron.log(state.length);

            return [
                ...state,
                {
                    ...action.product,
                    amount: 1,
                },
            ];

        default:
            return state;
    }
}
