import styled from "styled-components";

export const Background = styled.div`
  width: 22%;
  height: 100vh;
  background-color: ${({ theme }) => theme.detailedBar};
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
  ${"" /* width: 100%; */}
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
  background-color: ${({ theme }) => theme.feedBody};
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
  background-color: ${({ theme }) => theme.feedBody};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 1rem 1.5rem;
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
    color: ${({ theme }) => theme.text};
  }

  p {
    width: 65%;
    font-size: 0.78125vw;
    color: ${({ theme }) => theme.text};
  }
`;

export const CommentBox = styled.form`
  width: 90%;
  height: 4.023989569752282vh;
  outline: none;
  background-color: ${({ theme }) => theme.feedBody};
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
    color: #000000;

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
      color: ${({ theme }) => theme.icons};
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
    color: ${({ theme }) => theme.text};
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

export const ProfileData = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.7rem;
`;

export const TopProfile = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1500px) {
    width: 150px;
    height: 150px;
  }
`;

export const ProfileInput = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 100%;
  height: 65%;
`;

export const InputStuff = styled.div`
  width: 6.28125vw;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  input + label {
    width: 100%;
    height: 100%;
    font-size: 0.6vw;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    outline: none;
    color: #f1e5e6;
    background-color: #e45257;
    border-radius: 10px;
    transition: 0.5s all ease;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .no-js input + label {
    display: none;
  }

  input:focus + label,
  input.has-focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }

  input:focus + label,
  input.has-focus + label,
  input + label:hover {
    background-color: #722040;
  }

  input + label svg {
    width: 0.7vw;
    height: auto;
    vertical-align: middle;
    fill: currentColor;
    margin-top: -0.25em;
    /* 4px */
    margin-right: 0.25em;
    /* 4px */
  }
`;

export const UploadButton = styled.button`
  outline: none;
  text-decoration: none;
  border: none;
  color: #f1e5e6;
  background-color: #e45257;
  border-radius: 10px;
  transition: 0.5s all ease;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 6.28125vw;
  height: 40%;
  cursor: pointer;
  font-size: 0.6vw;
  font-weight: 700;

  &:hover {
    background-color: #722040;
  }

  &:disabled {
    background-color: #a5a5a5;
    cursor: default;
  }
`;

export const ProfileProgress = styled.progress`
  &[value] {
    appearance: none;

    width: 40%;
    height: 15%;
  }

  &[value]::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  &[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, #e45257, #e45257);

    border-radius: 10px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
    animation: animate-stripes 5s linear infinite;
  }
`;

export const DisplayName = styled.h2`
  font-size: 1.25vw;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.3rem;
`;

export const Status = styled.p`
  font-size: 0.8333333333333334vw;
  font-weight: 400;
  color: #c4c4c4;
  transition: 0.5s ease all;

  &:hover {
    color: #000000;
  }
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 0 2.0833333333333335vw;
  margin-top: 0.8333333333333334vw;
`;

export const Stat = styled.div`
  h3 {
    font-size: 1.25vw;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.625vw;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
  }
`;

export const Statistics = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vw;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;

  &:nth-of-type(1) {
    margin-bottom: 2.5vh;
  }
`;

export const Item = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
`;

export const SecondaryIcon = styled.div`
  width: 2.1770833333333335vw;
  height: 4.205493387589013vh;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.feedBody};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.2vh;

  i {
    font-size: 1.1666666666666667vw;
    color: black;
  }
`;

export const Number = styled.h2`
  font-size: 1.5229166666666667vw;
  margin-right: 0.7vh;
`;

export const Text = styled.div`
  p {
    font-size: 0.6291666666666666vw;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }
`;

export const Suggestions = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;

export const SuggestionsText = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  h2 {
    font-size: 1.25vw;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
  }

  h3 {
    font-size: 0.8333333333333334vw;
    font-weight: 400;
    color: #c4c4c4;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h3`
  width: 100%;
  height: 10%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #a5a5a5;
`;

export const Posts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 90%;
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
  width: 200px;
  height: 200px;
  border-radius: 10px;

  @media (max-width: 1500px) {
    width: 100px;
    height: 100px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
