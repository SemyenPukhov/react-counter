import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { logIn }  from '../../actions/userActions.js'
import './styles.css';


class Login extends Component {

    // showInput() {
    //     console.log(this.mailInput.value);
    //     console.log(this.passwordInput.value);
    // }

    render() {
        return (
            <div className="login-form-wrapper">
                <div className="login-inputs-wrapper">
                    <input ref={mailNode => {this.mailInput = mailNode;}} type="mail" placeholder="Enter your email"/>
                    <input ref={passwordNode => {this.passwordInput = passwordNode;}} type="password" placeholder="Enter your password"/>
                    <button onClick={() => {this.props.logIn({mail: this.mailInput.value, password: this.passwordInput.value});}}>Log In</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logIn: user => dispatch(logIn(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);