import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import UserProvider from "./contexts/user";
import './estilo.css';

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <div>
          <Header />
          <hr />
          <Outlet />
        </div>
      </UserProvider>
    </Provider>
  );
}

export default App;
