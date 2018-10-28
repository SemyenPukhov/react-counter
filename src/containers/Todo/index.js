import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../../actions/todoActions';
import './styles.css';

class Todo extends Component {
    render() {
        const list = this.props.todos.filter((todo) => this.props.filter === "ALL" || (this.props.filter === "ACTIVE" && !todo.completed));
        return (
            <div className="todo-wrapper">

                <div className="todo-input-wrapper">
                    <input ref={node => {this.input = node;}} />
                    <button onClick={() => {this.props.addTodo(this.input.value); this.input.value = "";}}>AddToDo</button>
                </div>

                <div className="todo-list">
                    <ul>
                        {this.props.todos.map((todo) => <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}} onClick={() => this.props.toggleTodo(todo)}>{todo.text}</li>)}
                    </ul>
                </div>

                <div className="todo-view-butons">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
        filter: state.todoReducer.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addTodo(todo)),
        toggleTodo: todo => dispatch(toggleTodo(todo))
    };
};

export default connect(mapStateToProps,  mapDispatchToProps)(Todo);
