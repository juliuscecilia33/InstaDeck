import styled from "styled-components/macro";

export const Container = styled.div`
  width: 65%;
  height: 100vh;
  overflow: hidden;
  background-color: #f6f6f2;
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
  width: 100%;
  height: 84%;
  display: flex;
  justify-content: center;
  margin-top: 9.155645981688709vh;
  padding-top: 1.6276703967446593vh;
`;

export const Layout = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.7rem;

  &::-webkit-scrollbar {
    width: 0.4166666666666667vw;
    background-color: #f6f6f2;

    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 15px;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 1.5rem;
`;

export const Link = styled.a`
  color: #c4c4c4;
  transition: all 0.3s ease;

  &:hover {
    color: black;
  }

  &:focus {
    color: black;
  }

  h3 {
    font-size: 1.25vw;
    font-weight: 500;
    margin-right: 2.5vw;
  }
`;
