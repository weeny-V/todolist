import * as React from 'react';
import TodoItem from './ToDoItem';
import { TodoListInterface } from '../interface';

const ToDoList = (props: TodoListInterface) => {
    return (
        <div className='todo-list'>
            <ul className='todo-list__roster'>
                {props.todos.map((todo) => (
                    <li className='todo-list__item' key={todo.id}>
                        <TodoItem handleTodoUpdate={props.handleTodoUpdate}
                                  handleTodoRemove={props.handleTodoRemove}
                                  handleTodoComplete={props.handleTodoComplete}
                                  todo={todo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ToDoList;