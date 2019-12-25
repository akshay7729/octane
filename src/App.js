import React from 'react';
import Main from './Components/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './Store/reducer';
import './Styles/App.scss';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
