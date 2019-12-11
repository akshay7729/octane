import React from 'react'
import Header from './Header/Header'
import Home from './Home'
import PLP from './Listing/plp'
import {Route} from 'react-router-dom'

const Main = (props) => {
    return (
        <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/:id" exact component={PLP} />
        </div>
    )
}

export default Main