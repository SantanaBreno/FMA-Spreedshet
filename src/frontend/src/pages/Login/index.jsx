import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input  from '../../components/Input';
import {
  LoginWrapper,
  Form,
  Button
} from './styles';


import Logo from '../../components/Logo';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <LoginWrapper>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </Form>
    </LoginWrapper>
  );
}

export default Login;
