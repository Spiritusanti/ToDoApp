import React from 'react';
import { ACTIONS } from '../../pages/ToDoPage/ToDoPage';
import CustomButton from '../CustomButton/CustomButton.component';
import './ListItem.styles.scss';



const ListItem = ({ todo, dispatch }) => {
    return (
        <div className='listItem' style={{color : todo.complete ? " rgb(7, 245, 7)" : "black"}}>
            <h2 className='task'>{todo.name}</h2>
            <div className='info-container'>
                <p>Lorem ipsum I don't know</p>
            </div>
            <div className='actions-container' >
                <CustomButton text={'complete'} handleClick={() =>  {dispatch({type: ACTIONS.TOGGLE_TODO, payload:{id:todo.id}})}} />
                <CustomButton text={'remove'} handleClick={() =>  {dispatch({type: ACTIONS.DELETE_TODO, payload:{id:todo.id}})}} />
            </div>
        </div>
    );
}


export default ListItem;