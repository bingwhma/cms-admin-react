import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class AppLogin extends Component {
    render() {
        return (

            <div className="col-md-4 col-md-offset-4">
                <div className="login-wrapper">
                    <div className="box">
                        <div className="content-wrap">
                            <h6>Sign In</h6>

                            <input className="form-control" type="text" placeholder="E-mail address" />
                            <input className="form-control" type="password" placeholder="Password" />
                            <div className="action">
                                <Link className="btn btn-primary signup" to="/main">Login</Link>
                            </div>
                        </div>
                    </div>

                    <div className="already">
                        <p>Don't have an account yet?</p>
                        <Link to="/main">Sign Up</Link>
                    </div>
                </div>
            </div>

        );
    }
}

export default AppLogin;
