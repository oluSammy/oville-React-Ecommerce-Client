import React from 'react';
import './App.scss';

import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/ShopPage/ShopPage.Component';
import Signin from './pages/SigninPage/Signin.component';
import SignUp from './pages/SignupPage/Signup.component';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage.component';
import CartPage from './pages/CartPage/CartPage.components';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/product" component={ProductDetailPage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
