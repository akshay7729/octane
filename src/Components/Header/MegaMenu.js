import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const MegaMenu = (props) => {

    const megaMenuStateHook = useSelector(state => state.megaMenu);
    const megaMenuDispatch = useDispatch();
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        Axios.get('http://demo4999203.mockable.io/octane/mega-menu')
        .then(res => {
            setLoad(true);
            megaMenuDispatch(
                {
                    type : 'ON_MEGA_NAV_LOAD',
                    payload: res.data 
                }
            );
        })
        .catch(err => {
            setError(err.message);
            console.log('mega menu error',error);
        })
    },[]);

    if(load){
        return (
            <div className="mega-menu">
                <ul className="level-1 d-flex justify-content-center">
                    {megaMenuStateHook.map((menu,index) => {
                        return (
                            <li className="level-1-list" key={index}>
                                <Link 
                                    className="level-1-link"
                                    to={menu.url}
                                >{menu.name}</Link>
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
                                                    <Link to="/">
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
                                                    </Link>
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

export default MegaMenu;