import React from 'react';
import './SearchPage.styles.scss';
import NavBar from './../../components/NavBar/Navbar.components';
import Product from './../../components/Product/Product.component';

import { withRouter } from 'react-router-dom';
import { firestore } from '../../firebase/firebase.utils';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


class SearchPage extends React.Component {

    state = {
        searchResult: null,
        isSearching: false,
        isEmpty: false
    }

    async componentDidMount() {
        const { match: {params: { id }} } = this.props;
        const queryRef = firestore.collection('products');
        this.setState({...this.state, isSearching: true});
        const search = await queryRef.where('productName', '==', `${id}`).get();
        // console.log(search);
        if(search.empty) {
            console.log('not found');
            this.setState({ ...this.state, isEmpty: true, isSearching: false });
        } else {
            this.setState({ ...this.state, searchResult: search, isSearching: false });
            console.log(this.state.searchResult);
        }
    }

    async componentDidUpdate(prevProps) {
        const { match: { params: { id } } } = this.props;
        if(id !== prevProps.match.params.id) {
            const queryRef = firestore.collection('products');
            this.setState({...this.state, isSearching: true});
            const search = await queryRef.where('productName', '==', `${id}`).get();
            // console.log(search);
            if(search.empty) {
                console.log('not found');
                this.setState({ ...this.state, isEmpty: true, isSearching: false });
            } else {
                this.setState({ ...this.state, searchResult: search, isSearching: false });
                console.log(this.state.searchResult);
            }
        }
    }

    render() {
        const { match: {params: { id }} } = this.props;
        const { searchResult, isSearching, isEmpty } = this.state;

        return(
            <div className="search-page">
                <div className="search-page__nav">
                    <NavBar/>
                </div>
                <div className="search-page__results">
                    { 
                        isSearching ?
                            <Loader
                                type="ThreeDots"
                                color="#03045e"
                                height={70}
                                width={70}
                                style={{margin: 'auto auto', width: '30%', marginTop: '15%', marginBottom: '15%'}}               
                            /> :
                        isEmpty ? 
                            <h2 className="search-page__heading">
                                {id} not found
                            </h2> 
                        : 
                            <h2 className="search-page__heading">
                                Showing results for {id}
                            </h2>
                    }
                    
                    
                     <div className="search-page__items">
                     {
                        isSearching ? '':

                        searchResult ? searchResult.docs.map(doc => {
                            const { productName, imgUrl, price, description } = doc.data()
                            const productData = { productName, imgUrl, price, description }
                            return <div style={{marginBottom: '1.4rem'}}>
                                        <Product key={doc.id} productId={doc.id} productData={productData} />
                                    </div>
                        }
                             
                             
                        ): ''

                    }
                        {/* <div style={{marginBottom: '1.4rem'}}>
                            <Product />
                        </div>
                        
                        <div style={{marginBottom: '1.4rem'}}>
                            <Product />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchPage);