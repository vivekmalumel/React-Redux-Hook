import React,{useState,useEffect} from 'react'
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {useDispatch,useSelector} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions';

const ShoppingList = (props) => {
    console.log(props);
    const items=useSelector(state=>state.item.items);

    const dispatch=useDispatch();
    const getAllItems=()=>dispatch(getItems());
    const deleteAnItem=(itemId)=>dispatch(deleteItem(itemId));

    return (
        <Container>
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
