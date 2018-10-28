import React, { Component } from 'react';
import './styles.css';

class Registration extends Component {

    addUserToLocalStorage() {
        console.log(this.firstNameNode.value);
        console.log(this.lastNameNode.value);
        console.log(this.mailNode.value);
        console.log(this.passwordNode.value);
        console.log(this.confirmPasswordNode.value);
    }
// <input ref={node => {this.input = node;}} />
// <button onClick={() => {this.props.addTodo(this.input.value); this.input.value = "";}}>AddToDo</button>


    render() {
        return (
            <div className="registration-wrapper">
                <input ref={firstNameNode => {this.firstNameNode = firstNameNode}} type="text" name="firstName" placeholder="Enter your first name" />
                <input ref={lastNameNode => {this.lastNameNode = lastNameNode}} type="text" name="lastName" placeholder="Enter your last name" />
                <input ref={mailNode => {this.mailNode = mailNode}} type="mail" name="mail" placeholder="Enter your email" />
                <input ref={passwordNode => {this.passwordNode = passwordNode}} type="password" placeholder="Enter your password" />
                <input ref={confirmPasswordNode => {this.confirmPasswordNode = confirmPasswordNode}} type="password" placeholder="Confirm your password" />
                <button onClick={() => this.addUserToLocalStorage()}>Registration</button>
            </div>
        );
    }
}

export default Registration;