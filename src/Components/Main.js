import React from 'react'
import Header from './Header/Header'
import Home from './Home'
import PLP from './Listing/plp'
import PDP from './Product/pdp'
import {Route, Switch} from 'react-router-dom'

const Main = (props) => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:id" exact component={PLP} />
                <Route path="/:id/:prod" exact component={PDP} />
            </Switch>
        </div>
    )
}

export default Main