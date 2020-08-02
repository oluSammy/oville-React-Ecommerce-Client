import React from 'react';
import './Signin.styles.scss';

//components
import NavBar from '../../components/NavBar/Navbar.components';

//react router
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

//react icons
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine, RiLoginBoxLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

//firebase 
import { auth } from './../../firebase/firebase.utils';


class Signin extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.state);
        this.setState({ ...this.state, email: '', password: '' });

        await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
        this.props.history.goBack();
    }

    handleChange =  event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });        
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
                                    <div className="signin__form--group">
                                        <RiLockPasswordLine className="signin__form--icon"/>
                                        <input 
                                            onChange={this.handleChange} value={this.state.password}
                                            className="signin__form--input" 
                                            type="password" name="password" id="password" 
                                            placeholder="Password" required 
                                    />
                                    </div>
                                    <button className="signin__form--submit signin__form--btn" type="submit"> 
                                        <span style={{marginTop: '4px', marginRight: '5px'}}> <RiLoginBoxLine/> </span> <span>Login</span>  
                                    </button>
                                </form>
                                <button className="signin__form--google signin__form--btn">
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