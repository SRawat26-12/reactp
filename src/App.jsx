import { useSelector,useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";

const App=()=>{
  const [mytsk,setMytsk]=useState("")
  const dispatch=useDispatch();
  const work=useSelector((state)=>state.todo.task);
  console.log(work);
   let sno=0;
  const ans=work.map((key)=>{
    sno++;
    return(
      <tr>
        <td>{sno}</td>
        <td>{key.data}</td>
      </tr>
    )
  })
  return(
    <>
    <h1>ToDo App</h1>
    Enter Task:<input type="text" value={mytsk} onChange={(e)=>setMytsk(e.target.value)}/>
    <button onClick={()=>dispatch(addTask({id:Date.now(),data:mytsk}))}>Add</button>
    <table border="1">
      <thead>
      <tr>
        <th>SNO.</th>
        <th>Work</th>
      </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </table>
    </>
  )
}
export default App;