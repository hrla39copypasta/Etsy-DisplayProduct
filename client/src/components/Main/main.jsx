import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ThumbnailDisplay from './left-content/ThumbnailDisplay.jsx';
import DisplayImage from './left-content/DisplayImage.jsx';
import Description from './right-content/Description.jsx';
import styled from 'styled-components';
import DisplayImageModal from './left-content/DisplayImageModal.jsx';
import Modal from './left-content/Modal.jsx';
import FavoritedModal from './left-content/FavoritedModal.jsx';



const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-column-gap: 15px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0px 0px;
`;

const PDLeftContent = styled.div `
  display: grid;
  grid-template-columns: 10% 90%;
  grid-column-gap: 5px;
  height: 640px;
`;

const PDRightContent = styled.div `
//
`;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currProduct: {},
      arrOfPhotos: [],
      currPhotoIndex: 0,
      isFavorited: false,
      isZoomed: false,
    }
    this.getProducts = this.getProducts.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.changeCurrPhotoIndex = this.changeCurrPhotoIndex.bind(this);
    this.favoritedModalPopUp = this.favoritedModalPopUp.bind(this);
    this.disableModal = this.disableModal.bind(this);
    this.zoomedModalPopUp = this.zoomedModalPopUp.bind(this);
  }


  componentDidMount() {
    this.getProducts()
    this.getPhotos()
  }

  getProducts() {
    const randomProduct = Math.floor(Math.random() * 101);
    axios.get('http://localhost:8002/product-display')
      .then((results) => {
        this.setState({
          products: results.data,
          currProduct: results.data[randomProduct]
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getPhotos() {
    axios.get('http://localhost:8002/photo-display')
      .then((results) => {
        const randomProduct = Math.floor(Math.random() * 101);
        this.setState({
          arrOfPhotos: [results.data[randomProduct].img, results.data[randomProduct].img1, results.data[randomProduct].img2, results.data[randomProduct].img3, results.data[randomProduct].img4, results.data[randomProduct].img5, results.data[randomProduct].img6, results.data[randomProduct].img7, results.data[randomProduct].img8]

        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleLeftClick() {
    if (this.state.currPhotoIndex === 0) {
      this.setState({
        currPhotoIndex: this.state.arrOfPhotos.length - 1
      })
      return;
    }
    this.setState({
      currPhotoIndex: this.state.currPhotoIndex - 1
    })
  }

  handleRightClick() {
    if (this.state.currPhotoIndex === this.state.arrOfPhotos.length - 1) {
      this.setState({
        currPhotoIndex: 0
      })
      return;
    }
    this.setState({
      currPhotoIndex: this.state.currPhotoIndex + 1
    })
  }

  changeCurrPhotoIndex(number) {
    this.setState({
      currPhotoIndex: number
    })
  }

  favoritedModalPopUp() {
    this.setState ({
      isFavorited: true
    })
  }

  zoomedModalPopUp(){
    this.setState({
      isZoomed: !this.state.isZoomed
    })
  }

  disableModal (e, ref) {

    e.preventDefault();
   if (ref === e.target) {
     this.setState({
       isFavorited: false,
       isZoomed: false
     })
   }
  }


  render() {
    return (

      <MainContainer>

        <PDLeftContent>
          <ThumbnailDisplay arrOfPhotos={this.state.arrOfPhotos} changeCurrPhotoIndex={this.changeCurrPhotoIndex} currPhotoIndex={this.state.currPhotoIndex} />

          <DisplayImage arrOfPhotos={this.state.arrOfPhotos} currPhotoIndex={this.state.currPhotoIndex} handleLeftClick={this.handleLeftClick} handleRightClick={this.handleRightClick} zoomedModalPopUp={this.zoomedModalPopUp} favoritedModalPopUp={this.favoritedModalPopUp}/>

          <Modal isZoomed={this.state.isZoomed} isFavorited={this.state.isFavorited} zoomedModalPopUp={this.zoomedModalPopUp}        favoritedModalPopUp={this.favoritedModalPopUp} disableModal={this.disableModal}>
            {this.state.isZoomed ? < DisplayImageModal arrOfPhotos={this.state.arrOfPhotos} currPhotoIndex={this.state.currPhotoIndex} changeCurrPhotoIndex={this.changeCurrPhotoIndex} handleLeftClick={this.handleLeftClick} handleRightClick={this.handleRightClick} /> : <FavoritedModal arrOfPhotos={this.state.arrOfPhotos} currProduct={this.state.currProduct}/>}
          </Modal>
        </PDLeftContent>

        <PDRightContent>
          <Description products={this.state.currProduct} />
        </PDRightContent>

      </MainContainer>
    )
  }

}
