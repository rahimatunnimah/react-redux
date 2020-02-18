import React, {Component} from 'react';
import fork from './fork.svg';
import report from './report.svg';
import add from './add.svg';
import menu from './menu-button.svg';
import search from './search.svg';
import { connect } from 'react-redux';
import { searchProduct } from '../src/redux/actions'
import Product from './components/Product'
import './App.css';

class App extends Component {
  render(){
    return (
      <div> 
        <nav className="navbar">
          <div className="navbar_logo">HappyShop</div>
         
            <img src={menu} className="menu" alt="menu"/>
            <input type="text" name="" className="search" placeholder="search" onChange={this.props.searchProduct}></input>
            <img src={search} className="icon_search" alt="menu"/>
          
      </nav>
      <nav className='navbar_cart'>
        <div className='icon_keranjang'>cart</div>
      </nav>
      <div id="sidebar">
        <div className="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
          <li><img src={fork} className="fork" alt="menu"/></li>
          <li><img src={report} className="report" alt="menu"/></li>
          <li><img src={add} className="add" alt="menu"/></li>
        </ul>
      </div>
      <Product />
      </div>
    );

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchProduct: q => {
      dispatch(searchProduct(q.target.value))
    }
  }
}
export default connect(null, mapDispatchToProps)(App)
