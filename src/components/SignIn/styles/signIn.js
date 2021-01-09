import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const DisplaySec = styled.div`
  width: 65%;
  height: 100%;
  background: #f3eee8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DisplayLogo = styled.div`
  margin-top: 1.5vh;

  img {
    width: 4.166666666666667vw;
    height: auto;
  }
`;

export const DisplayImage = styled.div`
  margin-top: 10vh;

  img {
    width: 54.895833333333336vw;
    height: auto;
    border-radius: 10px;
    box-shadow: -3px 10px 10px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const InputSec = styled.div`
  width: 35%;
  height: 100%;
  background: #f6f6f2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
  text-align: center;
  padding-top: 2rem;

  h2 {
    font-size: 3vw;
    font-weight: 600;
    color: #000000;
  }

  span {
    color: #e45257;
  }
`;

export const InputArea = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Inputs = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const InputText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1vw;
    font-weight: 500;
    color: #000000;
    margin-bottom: 0.6rem;
  }

  input {
    width: 30.96875vw;
    height: 5.5158697863682605vh;
    background: #f3eee8;
    border: #e5e5e5 solid 1px;
    border-radius: 10px;
    outline: none;
    padding-left: 1rem;
    transition: 0.3s ease-in-out all;
    font-family: "Roboto", sans-serif;
    font-size: 1.15vw;

    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 1.15vw;
      font-size: 400;
      color: #c4c4c4;
    }

    &:focus {
      border: #e45257 solid 1.5px;
    }
  }
`;

export const ButtonAgreement = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 0.8vw;
    font-weight: 400;
    color: #c4c4c4;
    text-align: center;
    line-height: 1.3;

    span {
      text-decoration: underline;
    }
  }
`;

export const CreateAcc = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    width: 17.78125vw;
    height: 5.8158697863682605vh;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    background: #e45257;
    border: none;
    border-radius: 10px;
    box-shadow: -5px 7px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    &:disabled {
      background: #c4c4c4;
    }

    h3 {
      font-weight: 500;
      font-size: 1.2625vw;
      color: #ffffff;
    }
  }
`;

export const NoAccount = styled.h2`
  h2 {
    font-size: 0.9vw;
    font-weight: 400;
    color: #000000;
    text-align: center;
    line-height: 1.6;

    span {
      color: #e45257;
      font-weight: 500;
    }
  }
`;
