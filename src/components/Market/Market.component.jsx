import React from 'react';
import './Market.styles.scss';

import ShopHighlight from '../Shop-Highlight/ShopHighlight.component';

const Market = () => (
    <div className="market">
        <ShopHighlight/>
        <ShopHighlight/>
        <ShopHighlight/>
    </div>
);

export default Market;