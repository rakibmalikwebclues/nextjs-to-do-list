import React, {useState, useContext, useRef, useEffect} from 'react'
import {DataContext} from './DataProvider'



export default function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}])
        setTodoName('');
        todoInput.current.focus();
    }

    useEffect(() =>{
        todoInput.current.focus();
    },[])
    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="text" name="todos" id="todos" 
            required placeholder="What needs to be done?" ref={todoInput} onChange={e => setTodoName(e.target.value.toLowerCase())} value={todoName}
             />
            <button type="submit">Create</button>
        </form>
    )

}