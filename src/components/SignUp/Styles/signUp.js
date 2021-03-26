import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const InputSec = styled.div`
  width: 35%;
  height: 100vh;
  background: #f6f6f2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImage = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 4vw;
    height: auto;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;

  h2 {
    font-size: 3vw;
    font-weight: 600;
    color: #000000;
  }

  h3 {
    color: #e45257;
    font-size: 0.8333333333333334vw;
    font-weight: 500;
  }
`;

export const RedLine = styled.div`
  width: 8.958333333333334vw;
  height: 2px;
  background: #e45257;
`;

export const InputArea = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
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

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    width: 31.96875vw;
    height: 5.8158697863682605vh;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    background: #e45257;
    border: none;
    box-shadow: -5px 7px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    cursor: pointer;

    &:disabled {
      background: #c4c4c4;
    }

    i {
      font-size: 1.3666666666666667vw;
      color: #ffffff;
      text-align: center;
      margin-right: 1.5rem;
    }

    h3 {
      font-weight: 500;
      font-size: 1.2625vw;
      color: #ffffff;
    }
  }
`;

export const Agreement = styled.h3`
  font-size: 0.8vw;
  font-weight: 400;
  color: #c4c4c4;
  text-align: center;

  span {
    text-decoration: underline;
  }
`;

export const HaveAccount = styled.h2`
  font-size: 0.9vw;
  font-weight: 400;
  color: #000000;

  span {
    color: #e45257;
    font-weight: 500;
    transition: 0.5s ease all;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DisplaySec = styled.div`
  width: 65%;
  height: 100vh;
  background: #f3eee8;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const DisplayLogo = styled.div`
  margin-top: 1.5vh;
  img {
    width: 4.166666666666667vw;
    height: auto;
  }
`;
