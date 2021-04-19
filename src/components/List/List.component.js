import React from 'react';
import ListItem from '../ListItem/ListItem.component';
import './List.styles.scss';

const List = ({ todos, dispatch }) => {
    return (
        <div className="ListItems">
            <h2>To Do List</h2>
            <div className='todos-container'>
                {
                    todos.map((todo) => {
                    return <ListItem key={todo.id} todo={todo} dispatch={dispatch}/>
                    })
                }
            </div>
        </div>
    );
}

export default List;