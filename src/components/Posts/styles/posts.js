import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 186px;
    height: 44px;
    background-color: ${({ theme }) => theme.upload};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fffffc;
    font-family: Roboto;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 5rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: 0.5s ease all;

    &:hover {
      background-color: ${({ theme }) => theme.uploadHover};
    }
  }
`;
