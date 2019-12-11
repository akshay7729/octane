import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row
  } from 'reactstrap';

const PLP = () => {
    return (
        <div className="container-fluid pt-5">
            <Col xs="12">
            <Row>
                <Col md="3">asdasd</Col>
                <Col md="9">
                    <Link className="plp-prod">
                        <Card>
                            <Row>
                            <Col md="4">
                                <CardImg 
                                    top 
                                    width="100%" 
                                    src="/assets/iphones/1.jpg" 
                                    alt="Card image cap"
                                    className="plp-prod-img"
                                />
                            </Col>
                            <Col md="8">
                                <CardBody>
                                    <CardTitle>iphone 11 Pro (256 GB)</CardTitle>
                                    <CardSubtitle><FontAwesomeIcon icon={faRupeeSign} /> 64,999</CardSubtitle>
                                    <CardText>
                                        <ul>
                                            <li>spec 1</li>
                                            <li>spec 2</li>
                                            <li>spec 3</li>
                                            <li>spec 4</li>
                                        </ul>
                                    </CardText>
                                </CardBody>
                            </Col>
                            </Row>
                        </Card>
                    </Link>
                    <Link className="plp-prod">
                        <Card>
                            <Row>
                            <Col md="4">
                                <CardImg 
                                    top 
                                    width="100%" 
                                    src="/assets/iphones/1.jpg" 
                                    alt="Card image cap"
                                    className="plp-prod-img"
                                />
                            </Col>
                            <Col md="8">
                                <CardBody>
                                    <CardTitle>iphone 11 Pro (256 GB)</CardTitle>
                                    <CardSubtitle><FontAwesomeIcon icon={faRupeeSign} /> 64,999</CardSubtitle>
                                    <CardText>
                                        <ul>
                                            <li>spec 1</li>
                                            <li>spec 2</li>
                                            <li>spec 3</li>
                                            <li>spec 4</li>
                                        </ul>
                                    </CardText>
                                </CardBody>
                            </Col>
                            </Row>
                        </Card>
                    </Link>
                    <Link className="plp-prod">
                        <Card>
                            <Row>
                            <Col md="4">
                                <CardImg 
                                    top 
                                    width="100%" 
                                    src="/assets/iphones/1.jpg" 
                                    alt="Card image cap"
                                    className="plp-prod-img"
                                />
                            </Col>
                            <Col md="8">
                                <CardBody>
                                    <CardTitle>iphone 11 Pro (256 GB)</CardTitle>
                                    <CardSubtitle><FontAwesomeIcon icon={faRupeeSign} /> 64,999</CardSubtitle>
                                    <CardText>
                                        <ul>
                                            <li>spec 1</li>
                                            <li>spec 2</li>
                                            <li>spec 3</li>
                                            <li>spec 4</li>
                                        </ul>
                                    </CardText>
                                </CardBody>
                            </Col>
                            </Row>
                        </Card>
                    </Link>
                
                </Col>
            </Row>
            </Col>
        
        </div>
    )
}

export default PLP