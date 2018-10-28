import React, { Component } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="nav-link-wrapper">
                    <NavLink to="/todo" activeClassName="is-active">ToDo List</NavLink>
                    <NavLink to="/login" activeClassName="is-active">Log In</NavLink>
                    <NavLink to="/logup" activeClassName="is-active" >Log Up</NavLink>
                </div>
                <div className="active-user-wrapper">
                    {this.props.userData.isLogin ? "Hello, " + this.props.userData.userObj.userName : "Hello, guest"}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userReducer, //isLogin, loginError, userObj
    };
};

// export default connect (mapStateToProps)(Header);
// export default Header;

export default connect(mapStateToProps, null, null, {
    pure: false
})(Header)