import React from 'react'
import { render } from 'react-dom'
import { Router, Route, DefaultRoute, hashHistory, browserHistory, IndexRoute } from 'react-router'
import Main from '../client/components/layout/index'
import Home from '../client/components/dashboard/Home'

module.exports = (
    <Route path="/" component={Main}>
        {/*Each route is define with Route*/}
        <IndexRoute component={Home} />
    </Route>
);