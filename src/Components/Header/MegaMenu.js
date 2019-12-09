import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const MegaMenu = (props) => {

    const [megaMenuState, setMegaManuState] = useState([]); 
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        Axios.get('http://demo4999203.mockable.io/octane/mega-menu')
        .then(res => {
            console.log('res',res);
            setMegaManuState(res.data);
            setLoad(true);
        })
        .catch(err => {
            setError(err.message);
            console.log('error', error)
        })
    },[]);

    if(load){
        return (
            <div className="mega-menu">
                <ul className="level-1 d-flex justify-content-center">
                    {megaMenuState.map((menu,index) => {
                        return (
                            <li className="level-1-list" key={index}>
                                <a className="level-1-link" href={menu.url}>{menu.name}</a>
                                <div className="backdrop"></div>
                                <ul className="level-2 container">
                                {
                                    menu.level2 && menu.level2.map((subMenu, index) => {
                                        return(
                                            <li className="level-2-list" key={index}>
                                                <a className="level-2-link text-uppercase font-weight-bold" href="#">{subMenu.title}</a>
                                                <div className="dash"></div>
                                                {
                                                    subMenu.type === 'list' ?
                                                    <ul className="level-2-content">
                                                        {
                                                            subMenu.content && subMenu.content.map((con,index) => {
                                                                return(
                                                                    <li className="pb-2" key={index}>
                                                                        <a href="/">{con.name}</a>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul> :
                                                    <a href="/">
                                                        <Card>
                                                            <CardImg top width="100%" src="/assets/iphone.jpg" alt="Card image cap" />
                                                            <CardBody>
                                                            <CardTitle className="text-uppercase">The New iPhone 11 Pro</CardTitle>
                                                            <CardText>
                                                            <small className="text-muted">Get it today for 10% More Discount</small>
                                                                <small className="text-muted">*offer available till this sunday</small>
                                                            </CardText>
                                                            </CardBody>
                                                        </Card>
                                                    </a>
                                                }
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}

export default MegaMenu