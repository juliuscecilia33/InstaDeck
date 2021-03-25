import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease all;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: linear-gradient(
    102.43deg,
    rgba(32, 32, 32, 0.9) 0.49%,
    rgba(32, 32, 32, 0) 75.76%
  );
`;

export const Header = styled.div`
  width: 100%;
  height: 8vh;
  z-index: 4;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

export const MainSect = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  padding: 0 3rem;
  transition: 0.5s ease all;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: auto;
  }

  p {
    color: #fffffc;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease all;
`;

export const FillButton = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: linear-gradient(90deg, #f28775 0%, #e45257 105.13%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  color: #fffffc;
  cursor: pointer;
  transition: 0.5s ease all;

  i {
    color: #fffffc;
    font-size: 32px;
  }
`;

export const OutlinedButton = styled.button`
  width: 156px;
  height: 44px;
  background: none;
  border-radius: 20px;
  border: 3px solid #e45257;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  color: #fffffc;
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.5s ease background;

  &:hover {
    background: linear-gradient(90deg, #f28775 0%, #e45257 105.13%);
    border: none;
  }
`;

export const DisplaySect = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
`;

export const Image = styled.div`
  margin: 1rem 2rem;

  img {
    width: auto;
    height: 442px;
    filter: drop-shadow(0px 10px 60px rgba(57, 57, 57, 0.1));
    border-radius: 20px;
  }
`;

export const TextSect = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 4;
`;

export const TextSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 62px;
  color: #fffffc;
`;

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 50px;
  color: #fffffc;
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #c4c4c4;

  span {
    color: #e45257;
  }
`;

export const Message = styled.div`
  p {
    font-size: 14px;
    color: #c4c4c4;
    font-weight: normal;
    transition: 0.5s ease all;

    span {
      color: #e45257;

      &:hover {
        text-decoration: underline;
        text-decoration-color: #e45257;
      }
    }
  }
`;

export const QuoteSect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Quote = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fffffc;
`;

export const ProfilePic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 500;
    font-size: 13px;
    color: #fffffc;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: #fffffc;
  }
`;
