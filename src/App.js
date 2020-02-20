import React, {Component} from 'react';
import fork from './fork.svg';
import report from './report.svg';
import add from './add.svg';
import menu from './menu-button.svg';
import search from './search.svg';
import { connect } from 'react-redux';
import { searchProduct, editQty } from '../src/redux/actions'
import Product from './components/Product'
import AddProduct from './components/AddProduct'
import { Badge, Button } from 'reactstrap'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        modal: false
    }
}

handleClickOpen () {
  this.setState({
    modal: true
  });
};

handleClose (){
  this.setState({
    modal: false
  });
};
  render(){
    return (
      <div className='main-app'> 
        <nav className="navbar">
          <ul>
            <li>
              <img src={menu} className="menu" alt="menu"/>
            </li>
            <li>
              <div className="navbar_logo">HappyShop</div>
            </li>
            <li>
              <input type="text" name="" className="search" placeholder="search" onChange={this.props.searchProduct}></input>
              <img src={search} className="icon_search" alt="menu"/>
            </li>
          </ul>
      </nav>
      <div id="left-sidebar">
        <div className="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul>
          <li><img src={fork} className="fork" alt="menu"/></li>
          <li><img src={report} className="report" alt="menu"/></li>
          <li><img src={add} className="add" alt="menu" onClick={() => this.handleClickOpen()}/></li>
          <AddProduct handleClickOpen={() => this.handleClickOpen()} handleClose={() => this.handleClose()} modal={this.state.modal}/>
        </ul>
      </div>
      <Product />
      <div id='right-sidebar'>
        <nav className='navbar_cart'>
          <div className='navbar_keranjang'>
              cart <Badge color="info" pill>{this.props.addedItems.length}</Badge>
          </div>
        </nav>
        <div className='cart-content'>
            {this.props.addedItems.map((element, index) => (
                <div className="added-products" key={index}>
                <img alt="product-item" src={element.image} style={{ height: '50px', width: '50px'}}/>
                <Button color="success" id='plus-cart' onClick={() => this.props.editQty(element.id, true)}>+</Button>
                Rp. {element.quantity * element.price}
                <Button color="success" id='minus-cart' onClick={() => this.props.editQty(element.id, false)}>-</Button>
                {element.quantity}
            </div>
            ))}
            <p>Total : Rp. {this.props.total}</p>
        </div>
    </div>
      </div>
    );

  }
}
const mapStateToProps = state => ({
  addedItems: state.products.addedItems,
  total: state.products.total
})

const mapDispatchToProps = (dispatch) => {
  return {
    searchProduct: q => {
      dispatch(searchProduct(q.target.value))
    },
    editQty: (id, isIncrement)=> {
      dispatch(editQty(id, isIncrement))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
