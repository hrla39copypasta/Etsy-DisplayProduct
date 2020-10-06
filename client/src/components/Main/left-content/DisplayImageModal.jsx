import React from 'react';
import reactDOM from 'react-dom';
import styled from 'styled-components';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Zoom from 'react-img-zoom';

const PDDisplayImageModalBody = styled.div `
  margin: 3% auto;
  width: 65%;
  padding: 20px;
  display: flex;
`;

const PDDisplayImageImg = styled.img `
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-height: 650px;
  max-height: 650px;
  max-width: 100%;
  border-radius: 2%;
  object-fit: contain;


`;


const PDGoLeft = styled.button `
  position: absolute;
  left: 0;
  text-align: center;
  top: 50%;
  background-color: white;
  border-radius: 100%;
  font-size: 26px;
  outline: none;
  display: grid;
  place-items: center;
  padding: 9px 11px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.10, 1.10);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.21);
  }

`;

const PDGoRight = styled.button `
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  background-color: white;
  border-radius: 100%;
  font-size: 26px;
  outline: none;
  display: grid;
  place-items: center;
  padding: 9px 11px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.10, 1.10);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.21);
  }

`;

const PDDisplayImageLeftContainer= styled.div `
  max-height: 630px;
  width: 100%
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  overflow-y: hidden;
`;

const PDDisplayImageSlide = styled.div `
  max-height: 600px;
  width: 859px;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;

`;

const PDDisplayImageThumbnail = styled.img `
  max-width: 60px;
  min-height: 60px;
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 5px;
  border-radius: 10%;
`;



export default class DisplayImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      modalPhotoIndex: this.props.currPhotoIndex,
      isZoomed: false
    }

  }

  zoomIn() {
    this.setState({
      isZoomed: true
    }, () => {
      console.log('zoomed IN')
    });
  }

  zoomOut() {
    this.setState({
      isZoomed: false
    }, () => {
      console.log('zoomed out')
    });
  }

  handleLeftClick() {
    if (this.state.modalPhotoIndex === 0) {
      this.setState({
        modalPhotoIndex: this.props.arrOfPhotos.length - 1
      })
      return;
    }
    this.setState({
      modalPhotoIndex: this.state.modalPhotoIndex - 1
    }, () => {
      console.log(this.state.modalPhotoIndex)
    })
  }

  handleRightClick() {
    if (this.state.modalPhotoIndex === this.props.arrOfPhotos.length - 1) {
      this.setState({
        modalPhotoIndex: 0
      })
      return;
    }
    this.setState({
      modalPhotoIndex: this.state.modalPhotoIndex + 1
    }, () => {
      console.log(this.state.modalPhotoIndex)
    })
  }

  changeModalPhotoIndex (number) {
    this.setState({
      modalPhotoIndex: number
    })
  }



  render(){

    return (

      <PDDisplayImageModalBody>
          <PDDisplayImageSlide  onClick={() => this.state.isZoomed ? this.zoomOut() : this.zoomIn()}>
            <PDDisplayImageImg src={this.props.arrOfPhotos[this.state.modalPhotoIndex]} ></PDDisplayImageImg>

            <PDGoLeft onClick={() => this.handleLeftClick()} ><FiChevronLeft className="PDGoLeftIconZoomed"/></PDGoLeft>

            <PDGoRight onClick={() => this.handleRightClick()} ><FiChevronRight className="PDGoRightIconZoomed"/></PDGoRight>
          </PDDisplayImageSlide>

          <div>
              {
                this.props.arrOfPhotos.map((photo, index) => {
                  return (

                    <PDDisplayImageThumbnail
                    onClick={() => this.changeModalPhotoIndex(index)}src={photo} key={index}></PDDisplayImageThumbnail>

                  )
                })
              }

          </div>

      </PDDisplayImageModalBody>


      )
    }
  }
