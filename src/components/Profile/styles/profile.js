import styled from "styled-components/macro";

export const Container = styled.div`
  width: 95%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 203px;
  height: 203px;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Username = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 24px;
    font-weight: 500;
  }

  p {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const Totals = styled.div`
  display: flex;
`;

export const Total = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  width: 71px;
  height: 71px;
  background: #f6f6f2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 40px;
    color: #000000;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 24px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    color: #c4c4c4;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #c4c4c4;
`;

export const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;

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

export const Post = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
