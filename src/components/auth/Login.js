import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import auth from '../../Utilities/Auth';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    gridContainer: {
      margin: '0',
      width: '100%'
    },
    gridItem: {
        width: '100%',
        textAlign: 'center',
        padding: '10px 50px !important'
    }
}));
  
function Login(props) {
    const classes = useStyles();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        auth.login({
            email,
            password
        },
        props.history.push('/dashboard'));
    }

    return (
        <LoginWrapper>
            <LoginFormContainer>
                <form onSubmit={handleSubmit}>
                    <Grid
                        className={classes.gridContainer}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item className={classes.gridItem}>
                            <InputContainer>
                                <MailIcon className='input__icon'/>
                                <InputField
                                    placeholder="Email or Contact Number"
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    autocomplete="on"
                                />
                            </InputContainer>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <InputContainer>
                                <VpnKeyIcon className='input__icon'/>
                                <InputField
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    autocomplete="off"
                                />
                            </InputContainer>
                            <ForgotPassword href="#!">Forgot password?</ForgotPassword>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <ButtonSubmit type="submit">Login</ButtonSubmit>
                        </Grid>
                    </Grid>
                </form>
            </LoginFormContainer>

            <LoginImage/>
        </LoginWrapper>
    )
}

const LoginWrapper = styled.div`
    display: flex;
    width: 800px;
    background: #fbfbfb;
    min-height: 500px;
    margin: auto;
    box-shadow: 0 30px 60px 0 rgb(0 0 0 / 20%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    @media screen and (max-width: 992px) {
        width: 400px;
    }
`;

const LoginFormContainer = styled.div`
    flex: 0.5;
    position: relative;
    padding: 0;
    margin: auto;

    @media screen and (max-width: 992px) {
        flex: 1;
    }
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    border-radius: 5px;
    background: white;
    height: 50px;
`;

const InputField = styled.input`
    border: 0;
    outline: none;
    padding: 10px 15px;
    width: 70%;
    background-color: white;
`;

const ButtonSubmit = styled.button`
    padding: 10px 25px;
    border-radius: 5px;
    text-align: center;
    color: white;
    border: 0;
    background: #4b4bde;
    outline: none;
    width: 100%;
    cursor: pointer;
    margin-top: 20px;

    transition: 0.2s;
    &:hover {
        background: #272798
    }
`;

const LoginImage = styled.div`
    display: flex;
    background: #142b87;
    background-image: url('http://ubi-as.com/cdn/images/auth-image-v6.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    flex: 0.5;

    @media screen and (max-width: 992px) {
        display: none;
    }
`;

const ForgotPassword = styled.a`
    text-align: left;
    color: #4b4bde;
    text-decoration: none;
    font-size: .7rem;
    float: left; 
    margin-top: 5px;
    font-weight: 500;
`;

export default Login
