import React from 'react'
import ReactDOM from 'react-dom'
import Home from './screens/Home'
import Detail from './screens/Detail'
import Categories from './screens/Categories'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/detail" exact={true} component={Detail} />
            <Route path="/categories" exact={true} component={Categories} />
        </Switch>
    </ BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));