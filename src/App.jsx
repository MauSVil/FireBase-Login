import React from 'react';
import { Provider } from 'react-redux';
import Login from './components/Login';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Application;
