import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Box from './Box'
import {  Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
const ModalExample = (props) => {
  const {
    className,
    product,
  } = props;
  
  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  
useEffect(()=>{
    axios.get('http://3.83.235.171:8002/api/v1/category')
    .then(res => {
        console.log(res)
        setCategories(res.data.result
        )
  })
    .catch(err => {
      console.log(err)
  })      
}, [])
const [values, setValues] = useState({
  name: product.name,
  description: product.description,
  price: product.price,
  stock: product.stock,
  id_category: 1
});
const handleChange = props => event => {
  setValues({ ...values, [props]: event.target.value });
};
const patchProduct = () => {
  axios.put('http://3.83.235.171:8002/api/v1/product/'+product.id, values, {
      headers:{
          "Access-Control-Allow-Origin": "PUT"
      }
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
      console.log(err)
  })
}
const deleteProduct = () => {
    axios.delete('http://3.83.235.171:8002/api/v1/product/'+product.id)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}
  
  const handleClickOpenConfirmDelete = () => {
    setConfirmDelete(true);
  };

  const handleCloseConfirmDelete = () => {
    setConfirmDelete(false);
  };

  const handleClickOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div>
        <Box product={product} isOpen={handleClickOpen} clickConfirmDelete={handleClickOpenConfirmDelete}/>
      <Modal isOpen={modal} toggle={handleClickOpen} className={className}>
        <ModalHeader toggle={handleClose}>Edit Product</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="email" name="name" id="exampleEmail" value={values.name} onChange={handleChange('name')} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Description</Label>
        <Input type="email" name="description" id="exampleEmail" value={values.description} onChange={handleChange('description')} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Price</Label>
        <Input type="email" name="price" id="exampleEmail" value={values.price} onChange={handleChange('price')} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Stock</Label>
        <Input type="email" name="stock" id="exampleEmail" value={values.stock} onChange={handleChange('stock')} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Category</Label>
        <Input type="select" name="category" id="exampleSelect" onChange={handleChange('id_category')}>
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
          <Button color="primary" onClick={()=>{handleClose();patchProduct()}}>Edit</Button>{' '}
          <Button color="secondary" onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={confirmDelete} className={className}>
        <ModalHeader >Delete Product</ModalHeader>
        <ModalBody>
          Are you sure delete this product?
        </ModalBody>
        <ModalFooter>
          <Button color="red" onClick={()=>{handleCloseConfirmDelete(); deleteProduct()}}>Delete</Button>{' '}
          <Button color="secondary" onClick={handleCloseConfirmDelete}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;