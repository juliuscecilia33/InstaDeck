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
    width: 212px;
    height: 50px;
    background: #e45257;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fffffc;
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 5rem;
  }
`;
