import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { FaStar, FaBeer, FaCheck , FaTruck} from 'react-icons/fa';
import styled from 'styled-components';
import { TiShoppingCart } from "react-icons/ti";
import { IoMdHand } from "react-icons/io";
import Select from 'react-select'


const PDRightContainer = styled.div `
  padding-left: 20px;
  padding-right: 20px;
`;

const PDSellerName = styled.div `
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 300;
  color: #222222;
  line-height: 28px;
  cursor: pointer;
`;

const PDSalesRating = styled.span `
  font-f amily: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  color: #222222;
  line-height: 20px;
  cursor: pointer;
`;

const PDProductName = styled.div `
font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  letter-spacing: 0.35px;
  line-height: 32px;
  color: #222222;
  margin-bottom: 6px;
`;

const PDBestSeller = styled.div `
  font-family: 'Roboto', sans-serif;
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
font-family: 'Roboto', sans-serif;
  margin: 10px 0px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const PDPrice= styled.span `
  font-family: 'Graphik-Medium';
  font-style: normal;
  font-size: 30px;
  font-weight: bold;
  color: #222222;
  line-height: 35px;
`;

const PDInStock = styled.span `
font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 13px;
  font-weight: 500;
  color: #222222;
  line-height: 18px;
  padding-left: 250px;
`;


const PDStyle = styled.div `
font-family: 'Roboto', sans-serif;
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
font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  color: #222222;
  cursor: pointer;
`;


const PDDropDown = styled.select `
font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #222222;
  line-height: 18px;
  margin-bottom: 4px;
`;

const PDPersonalizationInfo = styled.div `
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #595959;
  line-height: 18px;
  margin-bottom: 4px;
`;

const PDPeronsalizationInput = styled.textarea `
  font-family: inherit;
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
  width: 100%;
  margin: 10px 0;
  background-color: #222222;
  padding: 10px;
  border-radius: 30px;
  font-size: 16px;
  outline: none;
  transition: all 150ms ease;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0 1px 12px 0 rgba(34,34,34,0.2);
    opacity: 0.9;
  }
  `;

const PDOtherCarts = styled.div `
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 13px;
  font-weight: 500;
  color: #222222;
  line-height: 18px;
  margin-top: 10px;
  margin-bottom:15px;
  display: flex !important;
  align-items: center !important;
  padding-left: 10px;
`;

const PDHandmade = styled.span `
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #595959;
  line-height: 18px;
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex !important;
  align-items: center !important;
  padding-left: 10px;
`;

const PDMaterialsTitle = styled.div `
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color: #595959;
  line-height: 18px;
  margin-top: 10px;
`;

const PDMaterialsBody = styled.div `
font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 32px;
  color: #222222;
  margin-bottom: 20px;
`;

const PDInfoTitle = styled.div `
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  color:#595959;
  line-height: 18px;

`;

const PDInfoBody= styled.div `
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #222222;
  max-height: 90px;
  opacity: linear-gradient(to bottom, 0.8, 0.1);

`;

const PDCharacterCount = styled.div `
font-family: 'Roboto', sans-serif;
  text-align: right;
  margin-bottom: 10px;
`;

const PDFadeOut = styled.div `
  max-height: 100px;
  position: relative;
  // overflow: hidden;
  margin-bottom: 10px;
`;

const options = [
  {value: '30', label: 'Select a style'},
  { value:'30', label:'Digital Only' },
  { value:'50', label:'Canvas 8X10'},
  { value:'80', label:'Canvas 12X16' },
  { value:'100', label:'Canvas 18X24' },
  { value:'45', label:'Poster 8X10' },
  { value:'50', label:'Poster 12X16' },
  { value:'90', label:'Poster 18X24' }
]



export default class Description extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      maxLength: 256,
      charactersLeft: 256,
      selectChoice: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.getRating = this.getRating.bind(this);
    this.handleChoice = this.handleChoice.bind(this);

  }

  handleClick() {
    console.log('clicked!!')
  }

  handleText(e) {
    this.setState({
      charactersLeft: this.state.maxLength - e.target.value.length
    }, () => {
      console.log(e)
    })
  }

  handleChoice(e) {
    this.setState({
      selectChoice: e.value
    }, () => {
      console.log(this.state.selectChoice)
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

        <PDSellerName onClick={() => {this.handleClick()}}>{this.props.products.sellerName}</PDSellerName>

        <PDSalesRating onClick={() => {this.handleClick()}}>{this.props.products.sales} sales | </PDSalesRating>

        <PDSalesRating onClick={() => {this.handleClick()}}>{this.getRating(this.props.products.rating)}</PDSalesRating>
        <br></br><br></br>

        <PDProductName>{this.props.products.productName}</PDProductName>

        <PDBestSeller>BestSeller</PDBestSeller>
        <br></br>

        <PDPriceInStock>
          <PDPrice>${this.state.selectChoice.length !== 0 ? this.state.selectChoice : this.props.products.price}+ </PDPrice>
          <PDInStock><FaCheck /> In stock</PDInStock>
        </PDPriceInStock>

        <PDStyle>Style</PDStyle>

        {/* <PDDropDown> */}
          {/* <PDSelectStyle>  */}
            <Select options={options} onChange={(e) => this.handleChoice(e)}/>
            {/* </PDSelectStyle> */}
        {/* </PDDropDown> */}

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
          <p><strong> Hooray! </strong>  This item ships free to the US.</p>
        </PDShipsFree>

        <PDHandmade>
          <span style={{color: "black"}}>
          <IoMdHand size={30}/>
          </span>
          Handmade
        </PDHandmade>

        <PDMaterialsTitle>Materials </PDMaterialsTitle>

        <PDMaterialsBody> {this.props.products.materials}</PDMaterialsBody>

        <PDInfoTitle>Description</PDInfoTitle>

        <PDFadeOut>
          <PDInfoBody>{this.props.products.info}</PDInfoBody> <br></br>
        </PDFadeOut>

        {/* <PDInfoBodyReadMore>Learn more about this item</PDInfoBodyReadMore> */}

      </PDRightContainer>
    )
  }

}


{/* <PDSelectStyle> Digital Only ($30)</PDSelectStyle>
          <PDSelectStyle >Canvas 8X10 ($50)</PDSelectStyle>
          <PDSelectStyle >Canvas 12X16 ($80)</PDSelectStyle>
          <PDSelectStyle>Canvas 18X24 ($100)</PDSelectStyle>
          <PDSelectStyle>Poster 8X10 ($45)</PDSelectStyle>
          <PDSelectStyle>Poster 12X16 ($50)</PDSelectStyle>
          <PDSelectStyle>Poster 18X24 ($90)</PDSelectStyle> */}