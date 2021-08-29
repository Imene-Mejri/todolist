import React from 'react'

export default function ToDo({el,Delethandle,donehandler}) {
    const deletetodod =()=>{
        Delethandle(el.id)

    }
    const Donetodo=()=>{
        donehandler(el.id)
    }
    return (
        <div className='ToDo'>

           <h3 style={el.isdone?{textDecoration:'line-through'}:{}}className='text'>{el.text}</h3> 
           <button onClick={deletetodod}>Del</button>
           <button onClick={Donetodo}>Done</button>
            
        </div>
    )
}
