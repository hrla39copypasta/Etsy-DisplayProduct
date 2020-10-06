import React from 'react';
import reactDOM from 'react-dom';
import styled from 'styled-components';

const PDFavoritedModalBody = styled.div `
  background-color: white;
  margin: 3% auto;
  width: 23%;
  padding: 20px;
`;

const PDAddToFavorites = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 12px;
  font-weight: 300;
  line-height: 19px;
  font-color: #595959;
  padding: 7px 5px;
`;


const PDTopLine = styled.div `
  color: #595959;
  content: "";
  flex: 1 1;
  border-bottom: 1px solid #000;
  margin: auto;

`;


const PDTitle = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  font-color: #222222;
  margin-top: 5px;
`;

const PDTitleInstructions = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  font-color: #222222;
  padding-bottom: 20px;
`;

const PDSignInEmail = styled.div `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  font-color: #222222;


`;

const PDEmailInput = styled.input `
  appearance: none;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(34, 34, 34, 0.1) inset;
  border-color: rgba(34, 34, 34, 0.15);
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  color: #222222;
  display: block;
  font-family: inherit;
  font-size: 16px;
  line-height: 28px;
  height: 35px;
  outline: none;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;
  width: 90%;
  min-width: 0;
  margin: 5px 0px;
`;

const PDContinueButton = styled.button `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  color: #ffffff;
  display: inline-block;
  padding: 10px 125px;
  border-radius: 100px;
  background-color: #222222;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 10px;
  min-width: 315px;
  max-width: 315px;
  outline: none;

  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);
    opacity: 0.9;
  }
`;

const PDTrouble = styled.div `
  text-align: center;
  transform: translate (-50%;-50%);
  color: #595959;
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.4;
  text-decoration: underline;
  padding-left: 12px;
  padding-right: 12px;
  float: none;
  position: relative;
  cursor: pointer;
`;

const PDLine = styled.div `
  color: #595959;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;

  &:before, &:after{
    color: #595959;
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #000;
    margin: auto;
  }

  &:before{
    color: #595959;
    margin-right: 10px;
  }

  &:after{
    color: #595959;
    margin-left: 10px;
  }
`;


const PDContinueWith = styled.button `
  font-family: "Graphik-Regular";
  font-style: normal;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  background-color: #ffffff;
  border-radius: 100px;
  color: #222222;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 5px;
  outline: none;
  min-width: 315px;
  max-width: 315px;
  padding-bottom: 10px;

  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);
  }

`;


const PDOr = styled.div `
  margin-left: -24px;
  margin-right: -24px;
`;



const PDTerms= styled.div `
  font-family: "Graphik-Regular";
  margin-top: 18px;
  color: #595959;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: normal;
  font-size: 12px;
`;

const PDIconImg = styled.img `
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-top: 15px;
`;


function FavoritedModal (props) {
    return (

        <PDFavoritedModalBody>

          <PDAddToFavorites>Add to favorites</PDAddToFavorites>

          <PDTopLine></PDTopLine>
      <PDTitle>Before you can do that...</PDTitle>
      <PDTitleInstructions>Sign in or register with your email address</PDTitleInstructions>
      <PDSignInEmail>
        Email address
      </PDSignInEmail>
      <PDEmailInput></PDEmailInput>
      <PDContinueButton>Continue</PDContinueButton>
      <br></br>
      <PDTrouble>Trouble signing in?</PDTrouble>
      <PDOr><PDLine>OR</PDLine></PDOr>

      <PDContinueWith>
        <PDIconImg src="https://img.icons8.com/color/96/000000/google-logo.png"></PDIconImg>
         Continue with Google

      </PDContinueWith>

      <PDContinueWith>
        <PDIconImg src="https://img.icons8.com/color/96/000000/facebook.png"></PDIconImg>
        Continue with Facebook
      </PDContinueWith>

      <PDContinueWith>
        <PDIconImg src="https://img.icons8.com/fluent-systems-filled/96/000000/mac-os.png"></PDIconImg>
        Continue with Apple
      </PDContinueWith>

      <PDTerms>By clicking Sign in or Continue with Google, Facebook, or Apple, you agree to Etsy's <u>Terms of Use</u> and <u>Privacy Policy</u>. Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</PDTerms>
        </PDFavoritedModalBody>

    )
  }

export default FavoritedModal;