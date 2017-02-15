import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from '../client/components/layout/index'
import routes from '../client/routes/routes'


render((
    <Router history={hashHistory}>
        {routes}
    </Router>
), document.getElementById('app'));
