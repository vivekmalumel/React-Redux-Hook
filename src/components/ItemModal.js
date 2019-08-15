import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch} from 'react-redux';
import {addItem} from '../actions/itemActions'

const ItemModal=()=>{

    const [modal,setModal]=useState(false);
    const [name,setName]=useState('');
    const dispatch=useDispatch();
    const addNewItem=(item)=>dispatch(addItem(item));
    const toggle=()=>{
        setModal(!modal);
    }

    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addNewItem({name});
        setName('');
        toggle();
    }
    return(
        <div>
        <Button color="danger" onClick={toggle} style={{marginBottom:"2rem"}}>Add Item</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add New Item</ModalHeader>
          <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="item">Item</Label>
                        <Input type="text" name="name" id="item" placeholder="Add shopping Item" value={name} onChange={handleChange}/>
                    </FormGroup>
                    <Button color="dark" block style={{marginTop:"2rem"}}>Add Item</Button>
                </Form>
          </ModalBody>
        </Modal>
      </div>
    )
}

export default ItemModal;