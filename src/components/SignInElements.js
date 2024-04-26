import styled from 'styled-components';
import env from "react-dotenv";
import axios from "axios";

const apiUrl = env.APIURL;


export const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;


export const LoginBox = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;


export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`;


export const InputGroup = styled.div`
    margin-bottom: 1rem;
`;


export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`;


export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #cccccc;
    border-radius: 4px;
`;


export const ActionGroup = styled.div`
    margin-top: 1rem;
`;


export const ContinueButton = styled.button`
    padding: 0.75rem;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;


export const CreateAccountLink = styled.a`
    cursor: pointer;
`;


export const CreateAccountButton = styled.button`
    background-color: #007bff;
    color: #fff;
    width: 45%;
    margin: 2%;
    padding: 5% 8%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: auto;
    justify-content: center;
`;


export const CreateAccountButtonContainer = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const CreateAccountHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; 
`;


export const FormBox = styled.div`
    margin: 5%;
    position: relative;
    width: 30%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


export const InputBox = styled.input`
    width: 100%;
    margin-bottom: 4%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;


export const StateBox = styled.select`
    margin-bottom: 15px;
    margin-left: 10px;
    padding: 10px;
`;


export const sendAccountData = async (newUserData) => {
    try {
        const response = await axios.post(`${apiUrl}/newCustomer`, newUserData);
        return response.data;
    }
    catch (error) {
        throw new Error('Error creating new account: ', error);
    }
};