import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DisplayImageModal from './DisplayImageModal.jsx';
import FavoritedModal from './FavoritedModal.jsx';


const PDModal = styled.div `
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
 `;


 export default class Modal extends React.Component {
  constructor(props) {
    super (props);
    this.state = {

    }
    this.ref = React.createRef();
  }



  render () {
    return (
      <div>
      <PDModal ref={this.ref} style={this.props.isZoomed || this.props.isFavorited ? {display: "block"} : {}} onClick={(e) => this.props.disableModal(e, this.ref.current)} >
        {this.props.children}
      </PDModal>
      </div>
    )
  }
 }