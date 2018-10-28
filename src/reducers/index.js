// const initialState = {todos: [], filter: "ALL"};
//
// let nextTodo = 0;
// const rootReducer = (state = initialState, action) =>{
//     switch(action.type) {
//         case "ADD_TODO":
//             if (action.payload !== "")
//                 return {
//                     ...state, todos: [{text: action.payload, id: nextTodo++, completed: false}, ...state.todos]
//                 };
//         case "TOGGLE_TODO":
//             return {
//                 ...state, todos: state.todos.map((todo) => todo.id === action.payload ?
//                     {
//                         ...todo, completed: !todo.completed
//                     } : todo)
//             };
//     }
//     return state;
// }
// export default rootReducer;

import { combineReducers } from 'redux';

import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    todoReducer,
    userReducer,
});

export default rootReducer;