var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('../components/Main');
var Home = require("../components/Home");
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattle = require('../containers/ConfirmBattleContainer');
var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='Player One' component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
            <Route path='battle'  component={ConfirmBattle} />
        </Route>
    </Router>
);

module.exports = routes;