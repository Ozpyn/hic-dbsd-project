import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginPageContainer, LoginBox, LoginForm, InputGroup, Label, Input, ActionGroup, ContinueButton, CreateAccountLink } from '../components/SignInElements';
import { NavLink } from "../components/NavbarElements";


const LoginPage = () => {
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
  
        // Simulate authentication logic
        if (email.value === 'student@kent.edu' && password.value === '12345') {
            // Redirect to homepage
            navigate('/'); // Assuming your home route is defined as "/"
        } 
        else {
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
                        <ContinueButton href="/">Sign In</ContinueButton>
                        <p>or</p>
                        <ContinueButton>
                        <NavLink to="/create-account">Create Account</NavLink>
                        </ContinueButton>
                    </ActionGroup>
                </LoginForm>
            </LoginBox>
        </LoginPageContainer>
    );
};

export default LoginPage;
