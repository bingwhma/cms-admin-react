import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import CustTable from './CustTableComponent'
import AppLeftMenu from './AppLeftMenuComponent'

class AppMain extends Component {
    render() {
        return (

            <div>
                <div className="col-md-2">
                    <AppLeftMenu></AppLeftMenu>
                </div>
                <Router >
                    <div className="col-md-10">
                        <Route exact path="" component={CustTable} />
                        <Route path="main/tabs" component={CustTable} />
                    </div>
                </Router >
            </div>

        );
    }
}

export default AppMain;
