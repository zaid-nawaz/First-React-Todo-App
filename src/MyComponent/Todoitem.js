import React from 'react'

export const Todoitem = (props) => {
    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className="btn btn-primary" onClick={()=>{props.ondelete(props.todo)}}>Delete</button>
        </div>
    )
}
