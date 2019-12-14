import React from 'react'

const PriceRange = (props) => {
    return (
        <React.Fragment>
            <div className="pt-3">{props.type} Price - {props.value}</div>
            <input 
                type="range" 
                min={props.min}
                max={props.max}
                value={props.value}
                onChange={props.handlePrice}
                className="range w-100"
            />
        </React.Fragment>
    )
}

export default PriceRange