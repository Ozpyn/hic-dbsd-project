

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

const ActionGroup = styled.div`
  margin-top: 1rem;
`;

const ContinueButton = styled.button`
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

const LoginPage = () => {
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
  
      // Simulate authentication logic
      if (email.value === 'student@kent.edu' && password.value === '12345') {
        // Redirect to homepage
        navigate('/'); // Assuming your home route is defined as "/"
      } else {
        alert('Invalid credentials');
      }
    };

  return (
    <LoginPageContainer>
      <LoginBox>
        <h1>Sign In</h1>
        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </InputGroup>
          <ActionGroup>
            <ContinueButton href="/">Continue</ContinueButton>
          </ActionGroup>
        </LoginForm>
      </LoginBox>
    </LoginPageContainer>
  );
};

export default LoginPage;
