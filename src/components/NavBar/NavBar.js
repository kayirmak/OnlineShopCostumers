import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="menu">
                <div><img className="logo-navbar" src="https://scontent.ffru7-1.fna.fbcdn.net/v/t1.0-9/31124243_1774239902633172_1669066257351049216_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=pNj8vZB9EDkAX_RbF-X&_nc_ht=scontent.ffru7-1.fna&oh=4ddf8e60de0bd419a29c8397c2efc41d&oe=5EFD52D9"></img></div>
                <ul className="menu-item">
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/man">Man</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contacts">Contacts</NavLink></li>
                </ul>
                <div className="menu-icons">
                    <i className="fa fa-search"></i>
                    <i className="fa fa-user"></i>
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </div>
        );
    }
}

export default NavBar;
