import styled from 'styled-components';

export const Background = styled.div`
  width: 22%;
  height: 100vh;
  background-color: #f3eee8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const Image = styled.div`
  width: 100%;
  max-height: 25.898305084745765vh;
  height: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

export const Caption = styled.div`
  width: 100%;
  height: 7.126466753585397vh;
  background-color: #f6f6f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 10px;

  h3 {
    color: #000000;
    font-size: 0.7463541666666666vw;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.6161458333333334vw;
    color: #a5a5a5;
    font-weight: 500;
  }
`;

export const Comments = styled.div`
  width: 100%;
  height: 45.670143415906125vh;
  background-color: #f6f6f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
`;

export const Comment = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    width: 35%;
    font-size: 0.78125vw;
    font-weight: 700;
    margin-right: 5px;
  }

  p {
    width: 65%;
    font-size: 0.78125vw;
  }
`;

export const CommentBox = styled.form`
  width: 90%;
  height: 4.023989569752282vh;
  outline: none;
  background-color: #f6f6f2;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
  padding: 0 0.5rem 0 1rem;
  transition: 0.5s ease all;

  &:hover {
    border: 1.5px solid #e45257;
  }

  input {
    width: 80%;
    height: 100%;
    outline: none;
    border: none;
    background: none;
  }

  button {
    width: 20%;
    height: 100%;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    border-left: 1px solid #c4c4c4;

    &:disabled {
      color: #c4c4c4;
    }
  }
`;

export const Icons = styled.div`
  width: 100%;
  height: 3.311342894393742vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    i {
      font-size: 1.3927083333333333vw;
      color: #c4c4c4;
    }
  }
`;

export const User = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: 500;
    font-size: 1vw;
    color: #000000;
  }
`;

export const UserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 1500px) {
    width: 30px;
    height: 30px;
  }
`;
