import { Provider } from "react-redux";
import React from "react";
import { useState } from "react";
import ListProducts from "./componentes/listProducts";
import Product from "./componentes/product";
import store from './store';

const App = () => {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <Provider store={store}>
        <ListProducts></ListProducts>
        <Product></Product>
      </Provider>
    </div>
  );
}

export default App;
