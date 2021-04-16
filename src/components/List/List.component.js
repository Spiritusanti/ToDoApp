import React from 'react';
import ListItem from '../ListItem/ListItem.component';
import './List.styles.scss';

const List = ({ taskList }) => {
    return (
        <div className="ListItems">
            <h2>To Do List</h2>
            <div className='todos-container'>
                {
                    taskList.map((task, i) => {
                    return <ListItem key={i} task={task} />
                    })
                }
            </div>
        </div>
    );
}

export default List;