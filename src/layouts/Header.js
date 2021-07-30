import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
import Menu from '../helpers/Menu';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paddinglessContainer: {
      padding: '0'
    },
}));

function Header() {
    const classes = useStyles();

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
        <div className={`nav ${show && 'nav__white'}`}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className='nav__contents'>
                            <img 
                                className='nav__logo'
                                src="/ubi.png"
                                alt=""
                            />
                            <Menu changeColor={show} />
                            <div className='nav__right'>
                                <div className='nav__large'>
                                    <div className='nav__userClickable'>
                                        <img 
                                            className='nav__userAvatar'
                                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                            alt=""
                                        /> 
                                        <span className={`nav__userLabel ${show && 'nav__elementBlack'}`}>Hi, Miko</span>
                                    </div>
                                    <SettingsIcon className={`nav__settings ${show && 'nav__elementBlack'}`} />
                                </div>

                                <div className='nav__mobile'>
                                    <img className='nav__userAvatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                        alt=""
                                    />
                                    <MenuIcon className={`nav__settings ${show && 'nav__elementBlack'}`}/>
                                </div> 
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header

