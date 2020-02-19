import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './components/Login'
import Register from './components/Register'


const AppWithRouter = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} /> {/* localhost:3000/ */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  </Provider>
  );

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

serviceWorker.unregister();
