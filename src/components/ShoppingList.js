import React,{useState,useEffect} from 'react'
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {useDispatch,useSelector} from 'react-redux';
import {getItems,addItem,deleteItem} from '../actions/itemActions';

const ShoppingList = (props) => {
    console.log(props);
    const items=useSelector(state=>state.item.items);

    const dispatch=useDispatch();
    const getAllItems=()=>dispatch(getItems());
    const addNewItem=(item)=>dispatch(addItem(item));
    const deleteAnItem=(itemId)=>dispatch(deleteItem(itemId));

    return (
        <Container>
            <Button
                color="dark"
                style={{marginBottom:"2rem"}}
                onClick={
                    ()=>{
                        const name=prompt('Enter Name');
                        if(name){
                            //setItems([...items,{id:uuid(),name}]);
                            addNewItem({id:uuid(),name});
                        }
                    }
                }
            >
                Add Item
            </Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({id,name})=>(
                        <CSSTransition key={id} timeout={500} classNames="fade">
                              <ListGroupItem>
                                  <Button 
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={()=>{
                                            //setItems(items.filter(item=>item.id!==id))
                                            deleteAnItem(id);
                                        }}
                                  >
                                      &times;
                                  </Button>
                                  {name}
                                </ListGroupItem>  
                        </CSSTransition>
                    )
                    )}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

// ShoppingList.propTypes={
//     getItems:PropTypes.func.isRequired,
//     item:PropTypes.object.isRequired
// }



export default ShoppingList;
