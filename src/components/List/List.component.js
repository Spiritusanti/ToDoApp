import React from 'react';
import ListItem from '../ListItem/ListItem.component';
import './List.styles.scss';

const List = ({ toDos }) => {
    return (
        <div className="ListItems">
            <h2>To Do List</h2>
            <div className='todos-container'>
                {
                    toDos.map((toDo, i) => {
                    return <ListItem key={i} toDo={toDo} />
                    })
                }
            </div>
        </div>
    );
}

export default List;