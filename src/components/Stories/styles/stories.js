import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 65%;
  height: 9%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f2;
  border-bottom: 1px solid #c4c4c4;
`;

export const List = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.7833333333333335vw;
`;

export const Story = styled.div`
  width: 4.752604166666667vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1.7833333333333335vw;
  cursor: pointer;

  @media (max-height: 750px) {
    p {
      display: none;
    }
  }

  &:nth-last-child(-n + 2) {
    img {
      width: 61px;
      height: 61px;
      border-radius: 10px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) grayscale(100%);
      margin-bottom: 0.3rem;

      @media (max-height: 750px) {
        width: 55px;
        height: 55px;
      }

      @media (max-width: 1500px) {
        width: 50px;
        height: 50px;
      }
    }

    p {
      font-weight: 400;
      font-size: 0.5510416666666666vw;
      color: #000000;
    }

    @media (max-width: 1500px) {
      p {
        display: none;
      }
    }

    @media (max-height: 750px) {
      p {
        display: none;
      }
    }
  }

  img {
    width: 61px;
    height: 61px;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-bottom: 0.3rem;

    @media (max-height: 750px) {
      width: 55px;
      height: 55px;
    }

    @media (max-width: 1500px) {
      width: 50px;
      height: 50px;
    }
  }

  p {
    font-weight: 400;
    font-size: 0.5510416666666666vw;
    color: #000000;
  }

  @media (max-width: 1500px) {
    p {
      display: none;
    }
  }
`;

export const SettingsList = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SearchBox = styled.form`
  width: 14.276041666666668vw;
  height: 50%;
  background: #f3eee8;
  border: 1.5px solid #c4c4c4;
  border-radius: 10px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease all;

  @media (max-width: 1500px) {
    height: 40%;
  }

  &:hover,
  &:active,
  &:focus {
    border: 1.5px solid #e45257;
  }

  button {
    width: 25%;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      color: #c4c4c4;
      font-size: 1.2322916666666667vw;
    }
  }

  input {
    width: 75%;
    height: 100%;
    background: none;
    border: none;
    outline: none;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: #c4c4c4;
    font-size: 1.3927083333333333vw;
    margin-right: 1.7833333333333335vw;
    cursor: pointer;
    transition: 0.5s ease all;

    &:hover {
      color: #000000;
    }
  }
`;
