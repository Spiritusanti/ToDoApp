import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component'
import './ListItem.styles.scss';



const ListItem = ({ task }) => {
    return (
        <div className='listItem'>
            <h2 className='task'>{task.task}</h2>
            <div className='info-container'>
                <h2 className='date'>Date: {task.date}</h2>
                <p className='description'>Description: {task.description}</p>
            </div>
            <div className='actions-container' >
                <CustomButton text={'complete'} />
                <CustomButton text={'remove'} action={'remove'}/>
            </div>
        </div>
    );
}


export default ListItem;