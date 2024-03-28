import { createStore, combineReducers, applyMiddleware } from 'redux';
//combine reducers combines all reducers in a single reducer
import thunk from 'redux-thunk'; // thunk is a middleware
import { composeWithDevTools } from 'redux-devtools-extension';

import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';

const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store; //exported to index.js