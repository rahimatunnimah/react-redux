import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux'
// import Product from './components/Product'
import store from './redux/store'
import Login from './components/Login'
const AppWithRouter = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} /> {/* localhost:3000/ */}
      {/* <Route path="/product" component={Product} />  */}
      <Route path="/login" component={Login} />
    </Router>
  </Provider>
  );

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

serviceWorker.unregister();
