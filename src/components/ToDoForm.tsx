import * as React from 'react';
import { useRef, useState } from 'react';
import shortid from 'shortid';
import { TodoFormInterface, TodoInterface } from '../interface';

const ToDoForm = (props: TodoFormInterface) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [values, setValues] = useState('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValues(event.target.value);
    }

    function handleInputEnter(event: React.KeyboardEvent) {
        if(event.key === 'Enter') {
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                name: values,
                isCompleted: false,
            }
            props.handleTodoCreate(newTodo)
            if(inputRef && inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }

    return (
        <div className='todo-form'>
            <input className='todo-form__input' ref={inputRef}
                   type='text'
                   placeholder='Enter new todo'
                   onChange={event => handleInputChange(event)}
                   onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}

export default ToDoForm;