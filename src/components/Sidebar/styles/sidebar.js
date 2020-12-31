import styled from 'styled-components/macro';

export const Container = styled.div`
    position: sticky;
    left: 0;
    width: 13%;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.a`
    margin: 0;
    padding: 0;
    background: none;
    outline: none;
    border: none;

    img {
        width: 3.3333333333333335vw;
        height: auto;
    }
`;

export const Tabs = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.6276703967446593vh 0;
`;

export const Tab = styled.button`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: none;
    border: none;
    color: #c4c4c4;
    outline: none;
    cursor: pointer;
    transition: ease 0.3s all;

    i {
        width: 20%;
        font-size: 1.6145833333333333vw;
        margin-right: .5rem;
    }

    h3 {
        width: 30%;
        font-weight: 500;
        font-size: 0.9375vw;
    }

    &:hover {
        background-color: rgba(242, 241, 239, 1);
        color: black;
    }

    &:focus {
        background-color: rgba(242, 241, 239, 1);
        color: black;
    }
`;

export const Account = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    padding: 2.517802644964395vh 0;
`;

export const AccountBar = styled.div`
    display: flex;
    flex-direction: column;
    height: 10%;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 0.5rem 0;
    height: 45%;

    h3 {
        font-weight: 400;
        font-size: 1.25vw;
    }

    img {
        width: 2.0833333333333335vw;
        height: auto;
    }
`;

export const Bottom = styled.div`

`;

export const Border = styled.div`
    width: 100%;
    height: 1px;
    background: #C4C4C4;
`;

export const Profiles = styled.div`
    width: 100%;
    height: 75%;
`;

export const Profile = styled.div`
    width: 100%;
    height: 23%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 .5rem;
    margin-bottom: 1.6276703967446593vh;
    background-color: rgba(242, 241, 239, 1);

    img {
        width: 54px;
        height: 54px;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const Label = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.h3`
    font-size: 1.0416666666666667vw;
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.3rem;
`;

export const DisplayName = styled.p`
    font-size: 0.7291666666666666vw;
    font-weight: 400;
    color: #A5A5A5;
    margin: 0;
`;

export const AccountFooter = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
        height: 50%;
        font-size: 0.625vw;
        font-weight: 400;
        color: #C2C2C2;
    }
`;

export const SignInOrUp = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 0.5rem;
`;

export const Option = styled.a`
    margin: 0;
    padding: 0;
    background: none;
    outline: none;
    border: none;

    h3 {
        font-size: 0.9375vw;
        font-weight: 400;
        color: #000000;
    }
`;