import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import './Product.css'
import { resetIsSearch } from '../redux/actions'
import ModalEdit from './ModalEdit'


class Product extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('http://3.83.235.171:8002/api/v1/product')
        .then(res => {
            this.setState({
                products:res.data.result.result
            })
      })
        .catch(err => {
          console.log(err)
      })      
    }

    searchProducts(){
        axios.get('http://3.83.235.171:8002/api/v1/product', {
            params: {
              name: this.props.query
            }
        })
        .then(res => {
            this.setState({
                products:res.data.result.result
            })

            this.props.resetIsSearch()
      })
        .catch(err => {
          console.log(err)
      })
    }
    render(){
        if(this.props.query && this.props.isSearching){
            this.searchProducts()
        }
        return(
            <div className='rectangle_product'>
                {this.state.products.map((data, index)=>(
                    <ModalEdit product={data} key={index}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    query: state.products.query,
    isSearching: state.products.isSearching
  })

const mapDispatchToProps = (dispatch) => {
    return {
      resetIsSearch: () => {
        dispatch(resetIsSearch())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Product)