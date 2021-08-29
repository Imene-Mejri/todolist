import React, {useState} from 'react'

export default function AddToDo({addhandler}) {

    const [input, setinput] = useState('')

    const inputhandler = (e) => {
        setinput(e.target.value
        )

    }
    const addtodo=()=>{
     addhandler({
         id:Math.random(),
         text:input,
    isdone:false}
     )
    }
    return (
      
            <div className="container">
                <input onChange={ inputhandler} id='input' type="text" 
                placeholder="write here" />
                <button onClick={ addtodo}>Add</button>
            </div>

      
    )
}
