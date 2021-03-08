import styled from "styled-components/macro";

export const Container = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const Top = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 0;
`;

export const Avatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (max-width: 1500px) {
    width: 160px;
    height: 160px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Username = styled.h3`
  font-size: 1.1vw;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

export const Stats = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 1.1vw;
    font-weight: 500;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }
`;

export const Totals = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  width: 65px;
  height: 65px;
  background: ${({ theme }) => theme.feedBody};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  @media (max-width: 1600px) {
    width: 50px;
    height: 50px;
  }

  i {
    font-size: 1.65vw;
    color: ${({ theme }) => theme.text};
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 0.9vw;
    font-weight: 700;
    margin-bottom: 3px;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 0.7vw;
    font-weight: 500;
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
  font-size: 1.15vw;
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
    ${({ theme }) => theme.feedBody}

    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 15px;
  }
`;

export const Post = styled.a`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 1rem;
  cursor: pointer;

  @media (max-width: 1500px) {
    width: 120px;
    height: 120px;
    margin: 0.7rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
