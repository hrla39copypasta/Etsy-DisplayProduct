import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ThumbnailDisplay from './left-content/ThumbnailDisplay.jsx';
import DisplayImage from './left-content/DisplayImage.jsx';
import Description from './right-content/Description.jsx';


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: {}
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount(){
    this.getProducts()
  }

  getProducts() {
    axios.get('/product-display')
    .then((results) => {
      this.setState({
        products: results.data,
        currentProduct: results.data[0]
      }, () => {
        console.log(this.state.products)
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className= "Main">

        <div className = "left-container">
          <div className = "display">
            <ThumbnailDisplay />
            <DisplayImage />
          </div>
        </div>

        <div className = "right-container">
          <Description products = {this.state.currentProduct} />
        </div>

      </div>
    )
  }

}