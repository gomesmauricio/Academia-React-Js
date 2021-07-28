import { useFormik } from 'formik';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Container from '../../componentes/Container';

// import { Container } from './styles';

function Login() {
  const formik = useFormik({
    initialValues:{
      login: "",
      password: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })
  return (
    <Container
      title="Login"
      size="sm"
    >
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
      <Form.Label>Login</Form.Label>
        <Form.Control 
        id="login"
        name="login"
        placeholder="Coloque o seu melhor login" 
        onChange={formik.handleChange}
        />       
        </Form.Group>        
        <Form.Group className="mb-5">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        id="password"
        name="password"
        type="password"
        placeholder="Sua Senha"
        onChange={formik.handleChange}
        />
        </Form.Group>
        <Button variant="primary" type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;