import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Input  from '../../components/Input';

import {
  LoginWrapper,
  Form,
  Button
} from './styles';


import Logo from '../../components/Logo';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        username,
        password
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

      const { token } = response.data;

      localStorage.setItem('token', token);

      navigate('/home');
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }

  };

  return (
    <LoginWrapper>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Entrar</Button>
      </Form>
    </LoginWrapper>
  );
}

export default Login;
