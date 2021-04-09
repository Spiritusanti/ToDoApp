import React from 'react';
import './ListItem.styles.scss';

const ListItem = ({ toDo }) => {
    return (
        <div className='listItem'>
            <h2>{toDo}</h2>
        </div>
    );
}


export default ListItem;