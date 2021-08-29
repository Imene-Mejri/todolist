import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({data,Delethandle,donehandler}) {
    return (
        <div className='todolist'>
            {data.map(el=> <ToDo  el={el} Delethandle={Delethandle} donehandler={donehandler}/>)}
        </div>
    )
}
