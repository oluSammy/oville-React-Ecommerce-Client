import React from 'react';
import './Signin.styles.scss';

//components
import NavBar from '../../components/NavBar/Navbar.components';

//react router
import { Link, withRouter } from 'react-router-dom';

//react icons
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine, RiLoginBoxLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

//firebase 
import { auth, googleProvider } from './../../firebase/firebase.utils';

//sweetalert
import swal from 'sweetalert';

class Signin extends React.Component {

    state = {
        email: '',
        password: '',
        isSigningIn: false,
        emailError: '',
        passwordError: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ ...this.state, isSigningIn: true, emailError: '', passwordError: '' });

        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password); // signin
            this.setState({ ...this.state, email: '', password: '', isSigningIn: false });
            this.props.history.goBack();    //back to previous page after signin

        } catch (error) {
            this.setState({ isSigningIn: false });

            //handle errors
            if (error.code === 'auth/user-not-found'){
                this.setState({...this.state, emailError: 'User Not Found'});  
            } 
            else if (error.code === 'auth/wrong-password'){
                this.setState({...this.state, passwordError: 'Incorrect Password'});  
            } else if (error.code === 'auth/network-request-failed'){
                swal({
                    title: "Network Error!",
                    text: "Check your network connection and try again",
                    icon: "warning",
                    button: "ok",
                });
            } else {
                swal({
                    title: "Error!",
                    text: "An Error occurred, try again",
                    icon: "warning",
                    button: "ok",
                });
            }
        }
    }

    handleChange =  event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });        
    }

    handleGoogleAuth = async () => {
        try {
           await auth.signInWithPopup(googleProvider);
           this.props.history.goBack();
        } catch (error) {
            if(error.code === 'auth/network-request-failed') {
                swal({
                    title: "Network Error!",
                    text: "Check your network connection and try again",
                    icon: "warning",
                    button: "ok",
                });
            }
            console.log(error);
        }
    }

    render() {
        return(
            <div className="signin">
                <NavBar/>
                <div className="signin__page-bg">
                    <div className="signin__bg">
                        <div className="signin__box">
                            <div className="signin__header">
                                <h2 className="signin__header--login">Log in</h2>
                                <Link to="/signup" className="signin__header--signup">New Customer? <span>Create Account</span> </Link>
                            </div>
                            <div className="signin__form">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="signin__form--group">
                                        <AiOutlineMail className="signin__form--icon"/>
                                        <input 
                                            onChange={this.handleChange} value={this.state.email}
                                            className="signin__form--input" 
                                            type="email" name="email" id="email" 
                                            placeholder="Email" required 
                                        />
                                    </div>
                                    <p className="signin__error">{this.state.emailError}</p>

                                    <div className="signin__form--group">
                                        <RiLockPasswordLine className="signin__form--icon"/>
                                        <input 
                                            onChange={this.handleChange} value={this.state.password}
                                            className="signin__form--input" 
                                            type="password" name="password" id="password" 
                                            placeholder="Password" required 
                                        />
                                    </div>
                                    <p className="signin__error">{this.state.passwordError}</p>

                                    {
                                        !this.state.isSigningIn ? 
                                            <button className="signin__form--submit signin__form--btn" type="submit"> 
                                                <span style={{marginTop: '4px', marginRight: '5px'}}> <RiLoginBoxLine/> </span> <span>Login</span>  
                                            </button> 
                                        :
                                            <button className="signin__form--submit signin__form--btn" type="submit" disabled> 
                                                <span style={{marginRight: '1rem'}}>wait</span> 
                                                <Loader
                                                    type="Circles"
                                                    color="#ffffff"
                                                    height={15}
                                                    width={15}
                                                    timeout={0}                                   
                                                /> 
                                            </button>
                                    }                                    
                                </form>
                                <button className="signin__form--google signin__form--btn" onClick={this.handleGoogleAuth}>
                                    <FcGoogle style={{marginTop: '4px', marginRight: '5px'}}/>
                                    Login with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Signin);