const initialState = {todos: [{text: "buy milk", id: 0, completed: false}], filter: "ALL"};

let nextTodo = initialState.todos.length;
export const todoReducer = (state = initialState, action) =>{
    switch(action.type) {
        case "ADD_TODO":
            if (action.payload !== "")
                return {
                    ...state, todos: [{text: action.payload, id: nextTodo++, completed: false}, ...state.todos]
                };
        case "TOGGLE_TODO":
            return {
                ...state, todos: state.todos.map((todo) => todo.id === action.payload ?
                    {
                        ...todo, completed: !todo.completed
                    } : todo)
            };
    }
    return state;
}
