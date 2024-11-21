export default function counterReducer(state = initialState, action: any ) {
    switch (action.type) {
        case 'add': 
        return Object.assign({}, state, {
            count: state.count + 1
        });
        case 'sub': 
        return Object.assign({}, state, {
            count: state.count - 1
        });
        default: return state;
    }
}

const initialState = {
    count: 0,
}