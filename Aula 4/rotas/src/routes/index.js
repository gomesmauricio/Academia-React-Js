import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Whoweare from '../pages/Whoweare';
import Contacts from '../pages/Contacts';
import Products from '../pages/Products';
import Navbar from '../components/Navbar';


function Routes() {
    return <div>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/whoweare" component={Whoweare} />
            <Route path="/products" component={Products} />
            <Route path="/contacts" component={Contacts} />           
        </Switch>
    </div>;
}

export default Routes;
