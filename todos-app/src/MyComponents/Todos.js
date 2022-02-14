import React from 'react'
import { TodoItem } from './TodoItem'


export const Todos = (props) => {
    return (
        <div className='container py-3 '> 
            <h3 className='text-center my-4'>Todo's List</h3>
            {props.todos.length===0? "No Todos to Display":
                props.todos.map((todo)=>{
                    return(
                        <> 
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                        <hr/>
                        </>
                    )
                })}
        </div>
    )
}