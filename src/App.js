import React from 'react';
import './App.scss';

//UI page components
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/ShopPage/ShopPage.Component';
import Signin from './pages/SigninPage/Signin.component';
import SignUp from './pages/SignupPage/Signup.component';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage.component';
import CartPage from './pages/CartPage/CartPage.components';
import PurchasePage from './pages/PurchasePage/PurchasePage.components';
import SearchPage from './pages/SearchPage/SearchPage.component';

//react router
import { Route, Switch } from 'react-router-dom';

//firebase 
import { auth } from './firebase/firebase.utils';

//redux
import { setUser } from './Redux/user/user.actions';
import { connect } from 'react-redux';



class App extends React.Component {
  
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.props.setCurrentUser(user);
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product" component={ProductDetailPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps) (App);
