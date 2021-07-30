import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Styled } from './styles';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import NavBar from '../componentes/NavBar';
import { useAuth } from '../Hooks/contexts/AuthProvider';



// import { Container } from './styles';

function Routes() {
  const { auth } = useAuth()
  return (
    <Styled.AppLayout>
      {auth && <NavBar />}
      <Styled.PageLayout>
        <Switch>
          <Route path="/" exact component={Login} />
          {auth && <Route path="/home" component={Home} />}
          <Redirect from="*" to={NotFound} />
        </Switch>
      </Styled.PageLayout>
    </Styled.AppLayout>
  );
}

export default Routes;