import React from 'react';
import reactDOM from 'react-dom';
import styled from 'styled-components';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";



const PDDisplayImageModalBody = styled.div `
  margin: 3% auto;
  width: 65%;
  padding: 10px;
  display: flex;
  justify-content: center;
  object-fit: contain;

`;

const PDDisplayImageSlide = styled.div `
  height: 640px;
  width: 859px;
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
  border-radius: 2% 2% 2% 2%;
  overflow: hidden;
  background-position: 50% 50%;
  background-repeat: no-repeat;

    &:hover div{
      opacity: 0;
    }
`;

const PDDisplayImageImg = styled.div `
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-height: 100%;
  max-height: 100%;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 640px;
  width: 859px;
  background-position: 50% 50%;
  opacity: 1;
  background-image: none;

  &:hover {
    cursor: pointer;
    opacity: 0;
  }
`;

const PDThumbnailWrapper = styled.div `
  max-width: 280px;
  width: 40%;
  border-radius: 6px;
  min-width: 155px;
  align-items: center;
  object-fit: contain;
  width: 400px;
  height: 650px;
  overflow-y: scroll;
`;

const PDDisplayImageThumbnail = styled.img `
  width: 103px;
  height: 105px;
  cursor: pointer;
  border: 1px solid black;
  margin: auto 2px;
  border-radius: 10%;
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



export default class DisplayImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      modalPhotoIndex: this.props.currPhotoIndex,
      backgroundPosition: '0% 0%',
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
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
    })
  }

  changeModalPhotoIndex (number) {
    this.setState({
      modalPhotoIndex: number
    })
  }

  handleMouseMove (e) {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({
      backgroundPosition: `${x}% ${y}%`
    })
  }





  render(){
    return (

      <PDDisplayImageModalBody>

          <PDDisplayImageSlide
            style={{backgroundPosition: this.state.backgroundPosition,  backgroundImage: "url('" + this.props.arrOfPhotos[this.state.modalPhotoIndex] + "')"}}
            onMouseMove={this.handleMouseMove}>

            <PDDisplayImageImg
              className ="ModalImage"
              style={
                {backgroundImage: "url('" + this.props.arrOfPhotos[this.state.modalPhotoIndex] + "')"}}>
            </PDDisplayImageImg>

            <PDGoLeft onClick={() => this.handleLeftClick()} ><FiChevronLeft className="PDGoLeftIconZoomed"/></PDGoLeft>

            <PDGoRight onClick={() => this.handleRightClick()} ><FiChevronRight className="PDGoRightIconZoomed"/></PDGoRight>

          </PDDisplayImageSlide>


          <PDThumbnailWrapper className="thumbnailwrapper">
              {
                this.props.arrOfPhotos.map((photo, index) => {
                  return (
                    <PDDisplayImageThumbnail
                    ref={this.state.ref}
                    onClick={() => this.changeModalPhotoIndex(index)}src={photo} key={index}
                    style={(index + 1) % 3 === 0 ? {height: "218px", width: "218px"} : {}}
                    >
                    </PDDisplayImageThumbnail>
                  )
                })
              }
               </PDThumbnailWrapper>

      </PDDisplayImageModalBody>

      )
    }
  }
