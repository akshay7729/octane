import React, {useState,useEffect} from 'react'
import { Col, Row, Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faShoppingBag, faBookmark, faCircle, faTag } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'

const PDP = (props) => {
    const [load, setLoad] = useState(false);
    const [geterrorState, setErrorState] = useState('');
    const reduxPdpState = useSelector(state => state.currentPdp);
    const reduxPdpDispatch = useDispatch();
    useEffect(() => {
        axios.post('https://demo4999203.mockable.io/products-list')
        .then(response => {
            const responseData = [...response.data];
            const pdpData = responseData.filter(pdp => {
                return pdp && pdp.id === props.match.params.prod
            });
            console.log('pdpData',pdpData);
            reduxPdpDispatch({
                type: 'ON_PDP_LOAD',
                payload: pdpData
            })
            setLoad(true);
        })
        .catch(error => {
            setErrorState(error.message);
            console.log('error pdp',geterrorState);
        });
    },[])
    if(load){
        return (
            <div className="container">
            {
                reduxPdpState && reduxPdpState.map((pdp,index) => {
                    return (
                        <Row className="pdp pt-5" key={index}>
                            <Col md="5" className="pdpInner">
                                <div className="pdpInnerData">
                                    <Card className="pdpProdImg">
                                        <img width="100%" src={pdp.primaryImg} className="card-top-img" alt="hello" />
                                    </Card>
                                </div>
                            </Col>
                            <Col md="7" className="pdpInner">
                                <div className="pdpInnerData">
                                    <Card className="border-0">
                                        <CardBody className="pl-0 pt-0">
                                            <CardTitle className="font-weight-bold">{pdp.brand} - {pdp.version}</CardTitle>
                                            <CardText className="pdpName">{pdp.name}</CardText>
                                            <hr />
                                            <CardText className="pdpPrice">
                                                <span className="pdpPriceNew"><FontAwesomeIcon icon={faRupeeSign} /> {parseFloat(pdp.price - (pdp.price)*(pdp.basicDiscount)/100).toFixed(2)} </span>
                                                <span className="pdpPriceOld pl-4"><FontAwesomeIcon icon={faRupeeSign} /> {parseFloat(pdp.price).toFixed(2)}</span>
                                            </CardText>
                                            <CardText className="abLightGrey">*Additional tax may apply</CardText>
                                            <div className="w-100">
                                                <ul className="prod-desc-list pb-4">
                                                    {
                                                        pdp.descPoints.map((list,index) => {
                                                            return(
                                                                <li key={index}> 
                                                                    <FontAwesomeIcon icon={faCircle} /> <span className="pl-2">{list}</span>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            {pdp.offers.length ? 
                                                <div>
                                                    <CardText className="pdpCategoriesHeading font-weight-bold text-uppercase">Best offers For this product</CardText> 
                                                    <div className="pb-4">
                                                        <ul className="pl-0 pdpBestOffers">
                                                            {
                                                                pdp.offers.map((offer) => {
                                                                    return(
                                                                        <li key={offer.id}><FontAwesomeIcon icon={faTag} /> <span className="pl-1">{offer.offer}</span></li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                :<div></div>}
                                            <CardText className="pdpCartWishList">
                                                <span className="pdpAddToCartBtn">
                                                    <Button className="border-0">
                                                        <FontAwesomeIcon icon={faShoppingBag} />
                                                        <span className="pl-2">Add to Cart</span>
                                                    </Button>
                                                </span>
                                                <span className="pl-3 pdpAddToWishListBtn">
                                                    <Button>
                                                        <FontAwesomeIcon icon={faBookmark} />
                                                        <span className="pl-2">Add to Wishlist</span>
                                                    </Button>
                                                </span>
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    )
                })
            }
            </div>
        )
    }else{
        return (
            <div></div>
        )
    }
    
}

export default PDP