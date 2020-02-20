import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {  Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

const ModalExample = (props) => {
  const {
    className,
    handleClickOpen,
    handleClose,
    modal 
  } = props;
  
  const [categories, setCategories] = useState([]);

  
useEffect(()=>{
    axios.get('http://3.83.235.171:8002/api/v1/category')
    .then(res => {
        setCategories(res.data.result
        )
  })
    .catch(err => {
      console.log(err)
  })      
}, [])
const [values, setValues] = React.useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: '',
    id_category: 1
  });
  const handleChange = props => event => {
    setValues({ ...values, [props]: event.target.value });
  };
  const postProduct = () => {
    axios.post('http://3.83.235.171:8002/api/v1/product', values)
    .then(res => {
      console.log(res.data.result)
    })
    .catch(err => {
        console.log(err)
    })
  }

    return (
      <div>
        <Modal isOpen={modal} toggle={handleClickOpen} className={className}>
          <ModalHeader>Add Product</ModalHeader>
          <ModalBody>
          <Form>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="email" name="name" id="exampleEmail" value={values.name} onChange={handleChange('name')}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Description</Label>
          <Input type="email" defaultValue="" name="description" id="exampleEmail" value={values.description} onChange={handleChange('description')}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Price</Label>
          <Input type="email" name="price" id="exampleEmail" value={values.price} onChange={handleChange('price')}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Stock</Label>
          <Input type="email" name="stock" id="exampleEmail" value={values.stock} onChange={handleChange('stock')}/>
        </FormGroup>
        <FormGroup>
        <Label for="exampleSelect">Category</Label>
        <Input type="select" name="category" id="exampleSelect" >
          {categories.map(data=>(
              <option key={data.id}>{data.name}</option>
          ))}
        </Input>
        </FormGroup>     
        <FormGroup>
        <Label for="exampleFile">Image</Label>
        <Input type="file" name="file" id="exampleFile" value={values.image}/>
        </FormGroup>
      </Form>
       </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{handleClose(); postProduct()}}>Add</Button>{' '}
            <Button color="secondary" onClick={() => handleClose()}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
   );
}

export default ModalExample;