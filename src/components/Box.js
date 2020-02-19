import React, {Component} from 'react';
import './Box.css'

class Box extends Component{
    // constructor(props){
    //     super(props)
    // }
   
    render(){
        return(
            <div className='box'>
                <img className='product-image' alt={this.props.product.name} src={this.props.product.image} style={{ height: '200px', width: '250px'}}/>
                <p className='boxmini'>{this.props.product.name}</p>
                <b className='boxharga'>{this.props.product.price}</b>
                <div className='tombol'>
                    <button className='btn_btn1'onClick={this.props.isOpen}>Edit</button>
                    <button className='btn_btn2'onClick={this.props.clickConfirmDelete}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Box
