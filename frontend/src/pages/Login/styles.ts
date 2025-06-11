import styled from 'styled-components';


export const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
`;

export const LoginDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 31.125rem;
    width: 47.28rem;   
    box-shadow: 0px 100px 200px rgba(0, 0, 0, 0.25);
    border-radius: 1.25rem;
`;

export const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    width: 100%;
    border-radius: 1.25rem 0 0 1.25rem;
`;

export const LeftDiv = styled.div`
    background-color: #CC6237;
    border-radius: 1.25rem;
    margin: 0.6rem;
    height: 95%;
    position: relative;
    width: 100%;
`;

export const PersonImg = styled.img`
    position: absolute;
    width: 22.31rem;
    bottom: -1.2rem;
    left: -2.65rem;
    height: auto;
`;

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1.25rem;
    padding-top: 3rem;
    gap: 1.4rem;
`;

export const Input = styled.input`
    border-radius: 6.25rem;
    width: 18.68rem;
    height: 2.5rem;
    margin-top: 0.4rem;
    background-color: #F6F6F6;
    border: none;
    padding-left: 1rem;

    border: none;
    outline: none;
    flex: 1;
`;

export const SendButton = styled.button`
    width: 18.68rem;
    height: 2.5rem;
    background-color: #CC6237;
    margin-top: 1rem;
    border-radius: 6.25rem;
    color: white;
    font-size: 1rem;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #B85A2F;
    }
`;

export const ViewPasswordButton = styled.button`
    border: none;
    background-color: #F6F6F6;
    cursor: pointer;
`;

export const PasswordInputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 18.68rem;
    padding: 0 10px;
    border-radius: 6.25rem;
    background-color: #F6F6F6;
    gap: 8px;
`;