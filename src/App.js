// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addTodo } from './actions/index'
// import { toggleTodo } from './actions/index'
//
//
// //window.store = store;
// // store.subscribe(() => console.log('Look ma, Redux!!'));
// // window.addArticle = addArticle;
// // console.log(store.getState());
// class App extends Component {
//     constructor(state) {
//         super(state);
//         this.state = {
//             link: "",
//         }
//     }
//     changeActiveLink(link) {
//         this.setState({
//             ...this.state, link: link
//         });
//     }
//     countCompleted() {
//         let count = 0;
//         this.props.todos.forEach((todo) =>
//             todo.completed ? count++ : count
//         );
//         return count;
//     }
//   render() {
//       window.state = this.state;
//       const list = this.props.todos.filter((todo) => this.props.filter === "ALL" || (this.props.filter === "ACTIVE" && !todo.completed));
//     window.list = list;
//     return (
//       <div className="App">
//           <h1>Hello world</h1>
//           <input ref={node => {this.input = node;}} />
//           <button onClick={() => {this.props.addTodo(this.input.value); this.input.value = "";}}>AddToDo</button>
//           <ul>
//               {this.props.todos.map((todo) => <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}} onClick={() => this.props.toggleTodo(todo)}>{todo.text}</li>)}
//           </ul>
//           <ol>
//               <li onClick={() => this.changeActiveLink("1")}><a  style={{borderBottom: this.state.link === "1" ? "red 2px solid" : "none"}} href="#">Link1</a></li>
//               <li onClick={() => this.changeActiveLink("2")}><a  style={{borderBottom: this.state.link === "2" ? "red 2px solid" : "none"}} href="#">Link2</a></li>
//               <li onClick={() => this.changeActiveLink("3")}> <a  style={{borderBottom: this.state.link === "3" ? "red 2px solid" : "none"}} href="#">Link3</a></li>
//           </ol>
//           <h2>Todos completed {this.countCompleted()}</h2>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = state => {
//     return {
//         todos: state.todos,
//         filter: state.filter,
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//        addTodo: todo => dispatch(addTodo(todo)),
//        toggleTodo: todo => dispatch(toggleTodo(todo))
//     };
// };
//
// export default connect(mapStateToProps,  mapDispatchToProps)(App);
