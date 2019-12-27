import React from 'react';
import Main from './Components/Main';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import reducer from './Store/reducer';
import './Styles/App.scss';
import {BrowserRouter} from 'react-router-dom';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeEnhancers());

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
