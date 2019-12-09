import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'
import Home from './Home'
import {Route} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Header />
            <Route path="/" exact component={Home} />
            {/* <Footer /> */}
        </div>
    )
}

export default Main