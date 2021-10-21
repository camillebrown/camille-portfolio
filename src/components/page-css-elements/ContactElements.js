import styled from 'styled-components';

export const MainContainer = styled.div`
  z-index: 1;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 1024px) {
    height: 83vh;
  }

  @media screen and (max-width: 768px) {
    height: 90vh;
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    height: 115vh;
  }
`;

export const ContactContainer = styled.div`
  height: 71.5vh;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const ContactTitle = styled.h1`
  color: #df9c37;
  font-family: 'Lato', serif;
  letter-spacing: 2px;
  line-height: 16px;
`;

export const ContactSubtitle = styled.div`
  width: 90%;
  line-height: 1.1;
  color: #444443;
  font-family: 'Lora', serif;
  letter-spacing: 1.5px;
  margin: 0 auto;
`;

export const ContactForm = styled.form`
  margin: 70px auto;
  flex-wrap: wrap;
`;

export const TextInput = styled.input`
  width: 40%;
  line-height: 25px;
  color: #444443;
  background-color: transparent;
  backface-visibility: hidden;
  border: none;
  border-bottom: 1px solid #ebe9e5;
  letter-spacing: 1.5px;
  font-family: 'Lato', sans-serif;

  &::placeholder {
    color: color(#ebe9e5 a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  &:hover {
    outline: 0;
    border: none;
    border-bottom: 1px solid #000000;
    border-radius: 0;
  }
  &:focus {
    outline: 0;
    border: none;
    border-bottom: 1px solid #000000;
    border-radius: 0;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  line-height: 18px;
  color: #444443;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  border: none;
  border-bottom: 1px solid #ebe9e5;
  letter-spacing: 1.5px;
  font-family: 'Lato', sans-serif;
`;

export const SubmitBtn = styled.button`
  border: 1px solid #a5a5a5;
  background: white;
  font-family: 'Lato', sans-serif;
  margin: 20px auto;
  width: 30%;
  color: #444443;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: 'Lato', serif;
  letter-spacing: 2px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(68, 68, 67);
    color: white;
  }
`;
