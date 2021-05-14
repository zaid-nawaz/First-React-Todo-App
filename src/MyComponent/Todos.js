import React from 'react'
import {Todoitem} from "./Todoitem";
export const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className='text-center my-3'>todos list</h3>
            {props.todos.length===0? "No todos to display":
            props.todos.map((todo)=>{
                return <Todoitem todo={todo} key={todo.sno} ondelete={props.ondelete}/>
            })}
            
   
        </div>
    )
}
