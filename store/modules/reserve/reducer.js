import { produce } from 'immer';

export default function reserve(state = [], action) {
    
    switch (action.type) {
        case 'ADD_RESERVE':
            return produce(state, draft => {
                const index = draft.findIndex(filme => filme.id === action.filme.id)
                if (index >= 0) {
                    draft[index].amount += 1
                } else {
                    draft.push({ ...action.filme, amount: 1 });
                }
            })
        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const index = draft.findIndex(filme => filme.id === action.id)
                
                if (index >= 0)
                    draft.splice(index, 1)

            })
        default:
            return state;
    }
}
