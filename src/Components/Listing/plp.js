import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Col, Row } from 'reactstrap';
import axios from 'axios'

const PLP = () => {

    const [plpState, setPlpState] = useState([]);
    const [load, setLoad] = useState(false);
    const [geterror, setError] = useState('');

    useEffect(() => {
        axios.get('https://demo4999203.mockable.io/products-list')
        .then(response => {
            setPlpState(response.data);
            setLoad(true);
            console.log('response', response.data);
        })
        .catch(error => {
            setError(error.message);
            console.log('error', geterror);
        })
    },[])

    if(load){
        return (
            <div className="container-fluid pt-5">
                <Col xs="12">
                <Row>
                    <Col md="3">asdasd</Col>
                    <Col md="9">
                        {
                            plpState.map((product,index) => {
                                return(
                                    <Link to="/" className="plp-prod" key={index}>
                                    <Card>
                                        <Row>
                                        <div className="d-flex w-100">
                                            <div className="w-100 prod-image">
                                                <CardImg 
                                                    top 
                                                    width="100%" 
                                                    src="/assets/iphones/12.jpg" 
                                                    alt="Card image cap"
                                                    className="plp-prod-img w-100"
                                                />
                                            </div>
                                            <div className="w-100 d-flex">
                                                <CardBody className="w-100">
                                                    <CardTitle>{product.name} ({product.color})</CardTitle>
                                                    <div className="d-flex">
                                                        <div className="w-100">
                                                            <ul className="prod-desc-list">
                                                                {
                                                                    product.descPoints.map((list,index) => {
                                                                        return(
                                                                            <li key={index}> 
                                                                                <FontAwesomeIcon icon={faCircle} /> <span className="pl-2">{list}</span>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                        <div className="w-100 prod-price-sec">
                                                            <div className="text-center">
                                                                <div className="prod-price-current price-old">
                                                                    <FontAwesomeIcon icon={faRupeeSign} /> 
                                                                    <span className="pl-1 price-oldPrice">{parseFloat(product.price).toFixed(2)}</span>
                                                                </div>
                                                                <div className="prod-price-current price-new-price">
                                                                    <FontAwesomeIcon icon={faRupeeSign} /> 
                                                                    <span className="pl-1">{parseFloat(product.price - (product.price)*10/100).toFixed(2)}</span>
                                                                </div>
                                                                <div className="text-uppercase">No Cost EMI</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </div>
                                        </div>
                                        </Row>
                                    </Card>
                                </Link>        
                                )
                            })
                        }
                    </Col>
                </Row>
                </Col>
            
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}

export default PLP