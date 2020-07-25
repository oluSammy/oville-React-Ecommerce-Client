import React from 'react';
import './Signup.styles.scss';
import NavBar from '../../components/NavBar/Navbar.components';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineMeh } from 'react-icons/ai';
import { RiLockPasswordLine, RiLoginBoxLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => (
    <div className="signup">
        <NavBar/>
        <div className="signup__page-bg">
            <div className="signup__bg">
                <div className="signup__box">
                    <div className="signup__header">
                        <h2 className="signup__header--login">Sign Up</h2>
                        <span className="signup__header--span">Already have an account?</span>
                        <Link to="/signin" className="signup__header--signup">Login</Link>
                    </div>
                    <div className="signup__form">
                        <form action="#">
                            <div className="signup__form--group">
                                    <AiOutlineMeh className="signup__form--icon"/>
                                    <input 
                                        className="signup__form--input" 
                                        type="text" name="name" id="name" 
                                        placeholder="Name" required 
                                    />
                            </div>
                            <div className="signup__form--group">
                                <AiOutlineMail className="signup__form--icon"/>
                                <input 
                                    className="signup__form--input" 
                                    type="email" name="email" id="email" 
                                    placeholder="Email" required 
                                />
                            </div>
                            <div className="signup__form--group">
                                <RiLockPasswordLine className="signup__form--icon"/>
                                <input 
                                    className="signup__form--input" 
                                    type="password" name="password" id="password" 
                                    placeholder="Password" required 
                                />
                            </div>
                            <div className="signup__form--group">
                                <RiLockPasswordLine className="signup__form--icon"/>
                                <input 
                                    className="signup__form--input" 
                                    type="password" name="confirmPass" id="confirmPass" 
                                    placeholder="Confirm Password" required 
                                />
                            </div>
                            <button className="signup__form--submit signup__form--btn" type="submit"> 
                                <span style={{marginTop: '4px', marginRight: '5px'}}> <RiLoginBoxLine/> </span> <span>Sign Up</span>  
                            </button>
                        </form>
                        <button className="signup__form--google signup__form--btn">
                            <FcGoogle style={{marginTop: '4px', marginRight: '5px'}}/>
                            Signup with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default SignUp;