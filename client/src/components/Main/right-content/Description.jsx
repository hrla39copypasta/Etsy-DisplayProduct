import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { FaStar, FaBeer, FaCheck , FaTruck} from 'react-icons/fa';
import styled from 'styled-components';
import { TiShoppingCart } from "react-icons/ti";
import { IoMdHand } from "react-icons/io";


const PDRightContainer = styled.div `
padding-left: 20px;
padding-right: 20px;
`;

const PDSellerName = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 16px;
  font-weight: 300;
  color: #222222;
  line-height: 28px;
  cursor: pointer;
`;

const PDSalesRating = styled.span `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  color: #222222;
  line-height: 20px;
  cursor: pointer;
`;

const PDProductName = styled.div `
  font-family: 'Bitter', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  letter-spacing: 0.35px;
  line-height: 32px;
  color: #222222;
  margin-bottom: 6px;
`;

const PDBestSeller = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 400;
  color: #222222;
  line-height: 1;
  display: inline-block;
  word-break: break-word;
  line-height: 1;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 9px;
  padding-right: 9px;
  min-width: 25px;
  margin-right: 6px !important;
  border-radius: 100px;
  background-color: #FDEBD2;
  margin-bottom: 7x;
`;

const PDPriceInStock = styled.div `
  margin: 10px 0px;
  position: relative;
`;

const PDPrice= styled.span `
  font-family: "Graphik-Medium";
  font-style: normal;
  font-size: 28px;
  font-weight: 500;
  color: #222222;
  line-height: 32px;
`;

const PDInStock = styled.span `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 500;
  color: #222222;
  line-height: 18px;
  padding-left: 250px;
`;


const PDStyle = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #222222;
  line-height: 18px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PDSelectStyle = styled.option `
  width: 100%;
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  color: #222222;
  cursor: pointer;


`;


const PDDropDown = styled.select `
  width: 100%;
  box-shadow: 0 1px 6px 0 rgba(30, 30, 30, 0.10);
  display: block;
  height: 50px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 6px;
  background: #FFFFFF;
  border-style: solid;
  border-width: 1px;
  color: #222222;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.10);
  }
`;


const PDPersonalization = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #222222;
  line-height: 18px;
  margin-bottom: 4px;
`;

const PDPersonalizationInfo = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #595959;
  line-height: 18px;
  margin-bottom: 4px;
`;


const PDPeronsalizationInput = styled.textarea `
  appearance: none;
  box-shadow: 0 1px 6px 0 rgba(30, 30, 30, 0.10);
  display: block;
  height: 30px;
  outline: none;
  padding: 9px 0;
  min-width: 0;
  width: 100%;
  border-radius: 6px;
  background: #FFFFFF;
  border-style: solid;
  border-width: 1px;
  color: #222222;
  cursor: pointer;
  font-size: 16px;
  line-height: 28px;

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.10);
  }


`;


const PDAddToCart = styled.button `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  color: #ffffff;
  display: inline-block;
  padding: 10px 165px;
  border-radius: 100px;
  background-color: #222222;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.21);
    opacity: 0.9;
  }

  `;

const PDOtherCarts = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 500;
  color: #222222;
  line-height: 18px;
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex !important;
  align-items: center !important;


`;

const PDShipsFree = styled.span `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #222222;
  line-height: 18px;
  letter-spacing: 0.5px;
  margin-top: 10px;
  margin-bottom:15px;
  display: flex !important;
  align-items: center !important;
`;

const PDHandmade = styled.span `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #595959;
  line-height: 18px;
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex !important;
  align-items: center !important;
`;

const PDMaterialsTitle = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #595959;
  line-height: 18px;
  margin-top: 10px;

`;

const PDMaterialsBody = styled.div `
  font-family: 'Bitter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 32px;
  color: #222222;
  margin-bottom: 20px;
`;

const PDInfoTitle = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color:#595959;
  line-height: 18px;

`;

const PDInfoBody= styled.div `
  font-family: 'Graphik-Regular';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #222222;
`;

const PDCharacterCount = styled.div `
  text-align: right;
  margin-bottom: 10px;
`;







export default class Description extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      maxLength: 256,
      charactersLeft: 256
    }
    this.handleClick = this.handleClick.bind(this);
    this.getRating = this.getRating.bind(this);
  }

  handleClick() {
    console.log('clicked!!')
  }

  handleText(e) {
    this.setState({
      charactersLeft: this.state.maxLength - e.target.value.length
    }, () =>  {
      console.log(this.state.charactersLeft)
    })
  }


  getRating(rating) {
    if (rating === 1 || rating === 0) {
      return <FaStar />
    } else if (rating === 2) {
      return <span><FaStar /><FaStar /></span>
    } else if (rating === 3) {
      return <span><FaStar /><FaStar /><FaStar /></span>
    } else if (rating === 4) {
      return <span><FaStar /><FaStar /><FaStar /><FaStar /></span>
    } else if (rating === 5) {
      return <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
    }
  }


  render () {
    return (

        <PDRightContainer className="right-content">

        <PDSellerName onClick={() => {this.handleClick()}}>VanWoof</PDSellerName>

        <PDSalesRating onClick={() => {this.handleClick()}}>{this.props.products.sales} sales | </PDSalesRating>

        <PDSalesRating onClick={() => {this.handleClick()}}>{this.getRating(this.props.products.rating)}</PDSalesRating>
        <br></br><br></br>

        <PDProductName>{this.props.products.productName}</PDProductName>


        <PDBestSeller>BestSeller</PDBestSeller>
        <br></br>

        <PDPriceInStock>
          <PDPrice>${this.props.products.price}+ </PDPrice>

          <PDInStock><FaCheck /> In stock</PDInStock>
          </PDPriceInStock>


        <PDStyle>Style</PDStyle>

        <PDDropDown>
        <PDSelectStyle>Select a style</PDSelectStyle>
        <PDSelectStyle>Digital Only ($30)</PDSelectStyle>
        <PDSelectStyle>Canvas 8X10 ($50)</PDSelectStyle>
        <PDSelectStyle>Canvas 12X16 ($80)</PDSelectStyle>
        <PDSelectStyle>Canvas 18X24 ($100)</PDSelectStyle>
        <PDSelectStyle>Poster 8X10 ($45)</PDSelectStyle>
        <PDSelectStyle>Poster 12X16 ($50)</PDSelectStyle>
        <PDSelectStyle>Poster 18X24 ($90)</PDSelectStyle>
        </PDDropDown>

        <PDPersonalization>Add your personalization</PDPersonalization>

          <PDPersonalizationInfo>
            Your Pet - Please send me a picture of your pet using Etsy messaging.
            <br></br><br></br>
            Painting - Which number would you like your pet drawn as? If you would like something else let me know.
          </PDPersonalizationInfo>

          <PDPeronsalizationInput onChange={(e) => this.handleText(e)}> </PDPeronsalizationInput>
          <PDCharacterCount> {this.state.charactersLeft}</PDCharacterCount>


        <PDAddToCart>Add to cart</PDAddToCart>



        <PDOtherCarts>
        <TiShoppingCart size={60}/>
         <p> <strong>Other people want this.</strong> Over 20 people have this in their carts right now.</p>
          </PDOtherCarts>

        <PDShipsFree>
          <FaTruck size={40}/>
          <strong> Hooray! </strong>  This item ships free to the US.
          </PDShipsFree>

        <PDHandmade>
          <span style={{color: "black"}}>
          <IoMdHand size={30}/>
          </span>
          Handmade</PDHandmade>

        <PDMaterialsTitle>Materials </PDMaterialsTitle>
        <PDMaterialsBody> {this.props.products.materials}</PDMaterialsBody>

        <PDInfoTitle>Description</PDInfoTitle>
        <PDInfoBody>{this.props.products.info}</PDInfoBody>

        </PDRightContainer>

    )

  }
}


// {props.products.map((product, index) => {
//   return (
//     <Products changeCurrProduct={props.changeCurrProduct} product={product} key={index}/>
//   )
// })}


// {this.props.products.sellerName}
// {this.props.products.rating}