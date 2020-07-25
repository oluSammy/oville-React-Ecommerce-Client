import React from 'react';
import './Signin.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine, RiLoginBoxLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

const Signin = () => (
    <div className="signin">
        <NavBar/>
        <div className="signin__page-bg">
            <div className="signin__bg">
                <div className="signin__box">
                    <div className="signin__header">
                        <h2 className="signin__header--login">Log in</h2>
                        <Link to="/signup" className="signin__header--signup">Create Account</Link>
                    </div>
                    <div className="signin__form">
                        <form action="#">
                            <div className="signin__form--group">
                                <AiOutlineMail className="signin__form--icon"/>
                                <input 
                                    className="signin__form--input" 
                                    type="email" name="email" id="email" 
                                    placeholder="Email" required 
                                />
                            </div>
                            <div className="signin__form--group">
                                <RiLockPasswordLine className="signin__form--icon"/>
                                <input 
                                    className="signin__form--input" 
                                    type="password" name="password" id="password" 
                                    placeholder="Password" required 
                                />
                            </div>
                            <button className="signin__form--submit signin__form--btn" type="submit"> 
                                <span style={{marginTop: '4px', marginRight: '5px'}}> <RiLoginBoxLine/> </span> <span>Login</span>  
                            </button>
                            <button className="signin__form--google signin__form--btn">
                                <FcGoogle style={{marginTop: '4px', marginRight: '5px'}}/>
                                Login with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Signin;