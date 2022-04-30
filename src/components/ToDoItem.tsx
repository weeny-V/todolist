import * as React from 'react';
import { TodoItemInterface } from '../interface';

const TodoItem = (props: TodoItemInterface) => {

    return (
        <div className='todo-item'>
            <div onClick={() => props.handleTodoComplete(props.todo.id)}>
                {props.todo.isCompleted
                    ?(<span className='todo-item-checked todo-item__checkbox'>✔</span>)
                    : (<span className='todo-item-unchecked todo-item__checkbox'/>)
                }
            </div>
            <div className='todo-item__input-wrapper'>
                <input className='todo-item__input' value={props.todo.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props.handleTodoUpdate(event, props.todo.id)}
                />
            </div>
            <div className='item-remove'
            onClick={() => props.handleTodoRemove(props.todo.id)}>⨯</div>
        </div>
    )
}

export default TodoItem;