import React, { Component } from 'react';

class AppHeader extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="logo">
                                <h1><a href="index.html">Bootstrap Admin Theme</a></h1>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="input-group form">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                            <span className="input-group-btn">
                                                <button className="btn btn-primary" type="button">Search</button>
                                            </span>
	                                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="navbar navbar-inverse" role="banner">
                                    <nav className="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
                                        <ul className="nav navbar-nav">
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">My Account <b className="caret"></b></a>
                                                <ul className="dropdown-menu animated fadeInUp">
                                                    <li><a href="profile.html">Profile</a></li>
                                                    <li><a href="login.html">Logout</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
  }
}

export default AppHeader;