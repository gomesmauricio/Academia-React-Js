import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Styled } from './styles';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import NavBar from '../componentes/NavBar';


// import { Container } from './styles';

function Routes() {
  return (
    <Styled.AppLayout>
      <NavBar />
      <Styled.PageLayout>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Redirect from="*" to={NotFound} />
        </Switch>
      </Styled.PageLayout>
    </Styled.AppLayout>
  );
}

export default Routes;