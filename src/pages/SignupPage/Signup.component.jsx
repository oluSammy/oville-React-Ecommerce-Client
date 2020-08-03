import React from 'react';
import './Signup.styles.scss';

//UI Components
import NavBar from '../../components/NavBar/Navbar.components';

///React router
import { Link, withRouter } from 'react-router-dom';

//React icons
import { AiOutlineMail, AiOutlineMeh } from 'react-icons/ai';
import { RiLockPasswordLine, RiLoginBoxLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

//Sweetalert
import swal from 'sweetalert';

//firebase
import { auth, firestore } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPass: '',
        emailError: '',
        passwordError: '',
        confirmPassError: '',
        isCreatingNewUser: false
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {

        event.preventDefault();
        this.setState({ ...this.state, emailError: '', passwordError: '', confirmPassError: '' })
        const { email, password, confirmPass, name } = this.state;

        if(password !== confirmPass) {
            this.setState({...this.state, confirmPassError: "Passwords do not match"})
            return;
        } else {
            try {
                this.setState({ ...this.state, isCreatingNewUser: true });
                const newUser = await auth.createUserWithEmailAndPassword(email, password);
                this.setState({ ...this.state, isCreatingNewUser: false });
                console.log(newUser.user.uid)
                await firestore.collection('users').doc(`${newUser.user.uid}`).set({
                    name,
                    email,
                    password
                });
                this.props.history.goBack();
            } catch (error) {
                this.setState({ ...this.state, isCreatingNewUser: false });
                if(error.code === 'auth/weak-password'){
                    this.setState({...this.state, passwordError: 'Password should be at least 6 characters'});
                } else if (error.code === 'auth/email-already-in-use') {
                    this.setState({...this.state, emailError: 'Email already in use'})
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
                        text: "An Error ocurred, Try again",
                        icon: "warning",
                        button: "ok",
                    });
                }
                console.log(error);
            }
        }
        console.log(this.state);
    }

    render() {
        return (
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
                                <form onSubmit={this.handleSubmit}>
                                    <div className="signup__form--group">
                                            <AiOutlineMeh className="signup__form--icon"/>
                                            <input onChange={this.handleChange}
                                                className="signup__form--input" 
                                                type="text" name="name" id="name" 
                                                placeholder="Name" required 
                                                style={{marginBottom: '1.5rem'}}
                                            />
                                    </div>
                                    <div className="signup__form--group">
                                        <AiOutlineMail className="signup__form--icon"/>
                                        <input onChange={this.handleChange}
                                            className="signup__form--input" 
                                            type="email" name="email" id="email" 
                                            placeholder="Email" required 
                                        />
                                    </div>
                                    <p className="signup__error">{this.state.emailError}</p>

                                    <div className="signup__form--group">
                                        <RiLockPasswordLine className="signup__form--icon"/>
                                        <input onChange={this.handleChange}
                                            className="signup__form--input" 
                                            type="password" name="password" id="password" 
                                            placeholder="Password" required 
                                        />
                                    </div>
                                    <p className="signup__error">{this.state.passwordError}</p>

                                    <div className="signup__form--group">
                                        <RiLockPasswordLine className="signup__form--icon"/>
                                        <input onChange={this.handleChange}
                                            className="signup__form--input" 
                                            type="password" name="confirmPass" id="confirmPass" 
                                            placeholder="Confirm Password" required 
                                        />
                                    </div>
                                    <p className="signup__error">{this.state.confirmPassError}</p>

                                    {
                                        !this.state.isCreatingNewUser ? 
                                            <button className="signup__form--submit signup__form--btn" type="submit"> 
                                                <span style={{marginTop: '4px', marginRight: '5px'}}> <RiLoginBoxLine/> </span> <span>Sign Up</span>  
                                            </button>
                                        : 
                                            <button className="signup__form--submit signup__form--btn" type="submit" disabled> 
                                                <span style={{marginRight: '1.5rem'}}>Registering</span>  
                                                <Loader
                                                    type="Circles"
                                                    color="#ffffff"
                                                    height={15}
                                                    width={15}
                                                    timeout={0} 
                                                    style={{marginTop: '.5rem'}}                                  
                                                /> 
                                            </button>
                                    }

                                    
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
        )
    }
} 


export default withRouter(SignUp);