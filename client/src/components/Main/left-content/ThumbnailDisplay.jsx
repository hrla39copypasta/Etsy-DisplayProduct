import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const PDLeftContainer= styled.div `
  max-height: 630px;
  width: 100%
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  overflow-y: hidden;
`;

const PDSlide = styled.div `
  max-height: 625px;
  width: 99%
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PDThumbnail = styled.img `
  max-width: 60px;
  min-height: 60px;
  display: flex;
  cursor: pointer;
  align-items: center;
  opacity: 0.5;
  border: 1px white;
  margin-bottom: 2px;
  border-radius: 10%;

  &:hover {
    opacity: 1;
  }
`;


export default class ThumbnailDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (

      <div className="left-content-thumbnail">
        <PDLeftContainer>
          {
            this.props.arrOfPhotos.map((photo, index) => {
              return (

                <PDSlide>
                <PDThumbnail
                style={index === this.props.currPhotoIndex ? {opacity: "1", border: "2px solid black" } : {}}
                onClick={() => this.props.changeCurrPhotoIndex(index)}src={photo} key={index}></PDThumbnail>
                </PDSlide>

              )
            })
          }
        </PDLeftContainer>
        </div>
    )
  }

}

