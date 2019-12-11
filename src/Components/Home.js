import React from 'react';
import Slider from './Carousel/Carousel'
import { withRouter } from 'react-router-dom'

const Home = (props) => {
    console.log('home props',props)
    return (
        <div className="container">
            <Slider />
        </div>
    )
}

export default withRouter(Home)