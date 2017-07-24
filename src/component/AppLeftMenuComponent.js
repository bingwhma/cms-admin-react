import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class AppLeftMenu extends Component {
    render() {
        return (

            <div className="sidebar content-box" style={{ display: 'block' }}>
                <ul className="nav">
                    <li><a href="index.html"><i className="glyphicon glyphicon-home"></i> Dashboard</a></li>
                    <li><a href="calendar.html"><i className="glyphicon glyphicon-calendar"></i> Calendar</a></li>
                    <li><a href="stats.html"><i className="glyphicon glyphicon-stats"></i> Statistics (Charts)</a></li>
                    <li className="current"><Link  to="/main/tabs"><i className="glyphicon glyphicon-list"></i> Tables</Link></li>
                    <li><a href="buttons.html"><i className="glyphicon glyphicon-record"></i> Buttons</a></li>
                    <li><a href="editors.html"><i className="glyphicon glyphicon-pencil"></i> Editors</a></li>
                    <li><a href="forms.html"><i className="glyphicon glyphicon-tasks"></i> Forms</a></li>
                    <li className="submenu">
                        <a href="#">
                            <i className="glyphicon glyphicon-list"></i> Pages
                            <span className="caret pull-right"></span>
                        </a>
                        <ul>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="signup.html">Signup</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        );
    }
}

export default AppLeftMenu;
