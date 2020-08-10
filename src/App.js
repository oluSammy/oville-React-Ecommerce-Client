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
import NotFound from './pages/NotFoundPage/NotFound.component';

//react router
import { Route, Switch, Redirect } from 'react-router-dom';

//firebase 
import { auth } from './firebase/firebase.utils';

//redux
import { setUser } from './Redux/user/user.actions';
import { connect } from 'react-redux';
import { selectUserSlice } from './Redux/user/user.selectors';
import { asyncGetCategory } from './Redux/category/category.actions';
import { asyncGetProductsHighlights } from './Redux/products/products.actions';


class App extends React.Component {
  
  async componentDidMount() {
    const { setCurrentUser, getCategories, getHighlights } = this.props;
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    await getHighlights();
    await getCategories();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/:id" component={ShopPage} />

          {/* redirects to home if user is signed in */}
          <Route exact path="/signin" render={
            () => this.props.currentUser  ?
              (<Redirect to="/" />) :
              <Signin/>
          } />

          {/* redirects to home if user is signed in */}
         <Route exact path="/SignUp" render={
            () => this.props.currentUser  ?
              (<Redirect to="/" />) :
              <SignUp/>
          } />
          
          <Route exact path="/product/:id" component={ProductDetailPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/purchase/:id" component={PurchasePage} />
          <Route exact path="/search/:id" component={SearchPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user)),
  getCategories: () => dispatch(asyncGetCategory()),
  getHighlights: () => dispatch(asyncGetProductsHighlights())
})

const mapStateToProps = state => ({
  currentUser: selectUserSlice(state)
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
