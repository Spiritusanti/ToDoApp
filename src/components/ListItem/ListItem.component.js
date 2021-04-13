import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import './ListItem.styles.scss';


const ListItem = ({ toDo }) => {
    return (
        <div className='listItem'>
            <h2 className='task'>{toDo.task}</h2>
            <div className='info-container'>
                <h2 className='date'>Date: {toDo.date}</h2>
                <p className='description'>Description: {toDo.description}</p>
            </div>
            <div className='actions-container' >
                <CustomButton text={'complete'} />
                <CustomButton text={'remove'} />
            </div>
        </div>
    );
}


export default ListItem;