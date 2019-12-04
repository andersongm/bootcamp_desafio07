import produce from 'immer'; // Immer is utilized for to use state like an array

// Function like a reducer
export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                const { product } = action;
                draft.push(product);
            });

        // return produce(state, draft => {
        //     const productIndex = draft.findIndex(
        //         p => p.id === action.product.id
        //     );

        //     if (productIndex >= 0) {
        //         draft[productIndex].amount += 1;
        //     } else {
        //         draft.push({ ...action.product, amount: 1 });
        //     }
        // });
        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return state;
    }
}
