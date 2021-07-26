import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {

    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, []);

    return (
        <div className={`nav ${show && 'nav__blue'}`}>
            <div className='nav__contents'>
                <img 
                    className='nav__logo'
                    src="/ubi.png"
                    alt=""
                />
                
                <div className='nav__right'>
                    <div className='nav__large'>
                        <div className='nav__userClickable'>
                            <img 
                                className='nav__userAvatar'
                                src="http://ubi-as.com/avatar/icons8-mouse-face-96.png"
                                alt=""
                            /> 
                            <span className={`nav__userLabel ${show && 'nav__elementWhite'}`}>Hi, Miko</span>
                        </div>
                        <SettingsIcon className={`nav__settings ${show && 'nav__elementWhite'}`} />
                    </div>

                    <div className='nav__mobile'>
                        <img className='nav__userAvatar' src="http://ubi-as.com/avatar/icons8-mouse-face-96.png"
                            alt=""
                        />
                        <MenuIcon className={`nav__settings ${show && 'nav__elementWhite'}`}/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Header

