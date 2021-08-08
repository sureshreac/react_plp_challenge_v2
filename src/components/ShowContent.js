import React from 'react';
import './ShowContent.css';
import jsonResponse from './db.json'
import ProductList from './ProductList';

function ShowContent() {
    return (
        <div className="showcontent__menu">
          <div classname="product__list"><h4>Products Lists</h4></div>
          <ProductList item={jsonResponse}/>
        </div>
    )
}

export default ShowContent
