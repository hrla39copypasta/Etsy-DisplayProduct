import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import FavoritedModal from './FavoritedModal.jsx';
import DisplayImageModal from './DisplayImageModal.jsx';


const PDLeftContainer= styled.div `
  width: 100%;
  min-height: 640px;
  max-height: 640px;
  min-width: 100%;
  max-width: 100%;
  position: relative;
`;

 const PDSlide = styled.div `
  transition: 0.5s;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  min-height: 640px;
  max-height: 640px;
  min-width: 100%;
  max-width: 100%;
 `;

 const PDMainImage = styled.img `
  display: block;
  border-radius: 10%;
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
  min-height: 640px;
  max-height: 640px;
  min-width: 100%;
  max-width: 100%;
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


 const PDHeart = styled.button `
  position: absolute;
  text-align: center;
  border-radius: 100%;
  background-color: white;
  right: 0;
  top: 0;
  font-size: 22px;
  outline: none;
  padding: 6px 10px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);

  .PDHeartButton{
    position: relative;
    top: 4px;
  }

  &:hover {
    transform: scale(1.10, 1.10);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.21);
  }

 `;



export default class DisplayImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (

    <PDLeftContainer className="left-middle-content-displayProduct" >

     <PDSlide onClick={() => {this.props.zoomedModalPopUp()}}>
        <PDMainImage src={this.props.arrOfPhotos[this.props.currPhotoIndex]}></PDMainImage>
     </PDSlide>

      <PDGoLeft onClick={() => this.props.handleLeftClick()} ><FiChevronLeft className="PDGoLeftIcon"/></PDGoLeft>

      <PDGoRight onClick={() => this.props.handleRightClick()} ><FiChevronRight className="PDGoRightIcon"/></PDGoRight>

      <PDHeart onClick={() => {this.props.favoritedModalPopUp()}}><FiHeart className="PDHeartButton"/></PDHeart>

    </PDLeftContainer>

    )
  }

}

