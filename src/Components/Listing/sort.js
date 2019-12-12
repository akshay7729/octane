import React from 'react'

const Sort = (props) => {
    return(
        <div className="pt-2 pb-2 d-flex sort">
            <div className="pr-4 text-uppercase">Sort By :</div>
            <div className="pr-3 sort-opt" onClick={props.rel}>Relevence</div>
            <div className="pr-3 sort-opt" onClick={props.asc}>Price - Low to High</div>
            <div className="pr-3 sort-opt" onClick={props.desc}>Price - High to Low</div>
        </div>
    )
}

export default Sort