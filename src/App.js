
import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  const [data, setdata] = useState([
    { id: 1, text: 'hello it me',isdone:'false' },
    { id: 2, text: 'hooks',isdone:'false'  }
  ]);

const Delethandle=(ID)=>{
  setdata(
    data.filter(el=>el.id !==ID
    )
  )

}
const donehandler=(Id)=>{
  setdata(
    data.map(el=>el.id===Id?{...el,isdone:!el.isdone}:el)
  )

}
const addhandler=(newdata)=>{
  setdata([...data,newdata])

}
 
  return (
    <div className="App">

      <AddToDo addhandler={addhandler} />
      <ToDoList data={data} Delethandle={Delethandle} donehandler={donehandler}  />

    </div>
  );
}

export default App;
