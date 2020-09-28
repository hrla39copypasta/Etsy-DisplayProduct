import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const Description = (props) => {
  // console.log('what is this:', props);
  return (
    <div>

      <div className="sellerName">{props.products.sellerName}</div>
      <div className="sales">{props.products.sales}</div>
      <div className="rating">{props.products.rating}</div>
      <h1 className="productName">{props.products.productName}</h1>
      <div className= "price">{props.products.price}</div>
      <div className= "style">{props.products.style}</div>
      <p className="materials">{props.products.materials}</p>
      <p className="info">{props.products.info}</p>

      {/* {props.products.map((product, index) => {
        return (
          <Products changeCurrProduct={props.changeCurrProduct} product={product} key={index}/>
        )
      })} */}
    </div>
  )
}

export default Description;