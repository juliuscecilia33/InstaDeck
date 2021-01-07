import styled from "styled-components/macro";

export const Container = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6.704654895666132vh 0;
`;

export const Image = styled.a`
  margin-bottom: 1.017293997965412vh;
  cursor: pointer;

  img {
    max-width: 450px;
    width: 100%;
    max-height: 450px;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const Footer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 0.8333333333333334vw;
    font-weight: 400;
  }
`;

export const AvatarImage = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 1500px) {
    width: 25px;
    height: 25px;
  }
`;

export const Buttons = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;

  a {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }

  i {
    font-size: 1.0416666666666667vw;
    color: #c4c4c4;
    margin-right: 0.7rem;
  }

  p {
    font-size: 0.625vw;
    color: #c4c4c4;
    font-weight: 700;
  }
`;
