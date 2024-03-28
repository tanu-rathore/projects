import * as actionTypes from '../actions/type';

//exported to store
export const todosReducers = (state = [], action) => { //state: previous value, action: new value that is to be updated

    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return [action.payload, ...state]
        case actionTypes.GETALL_TODO:
            return action.payload
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
            ))
        case actionTypes.UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
            ))
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id);
        
        default: 
            return state;
    }
}