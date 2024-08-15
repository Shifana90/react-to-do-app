import React, { useState } from 'react'
import {addData,deleteData, updateData} from '../features/todoSlice'
import {useDispatch, useSelector}from 'react-redux'
import './style.css'
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";


function Todo() {
    const todos=useSelector((state)=> state.todo)
    console.log(todos);
    
    const dispatch=useDispatch()
    const [text,setText]=useState('')
    const [isEdit,setIsEdit]=useState(false)

    const handlePush=()=>{
      
      dispatch(addData(text))
      setText('')
      
    }
    const handleEdit=(id)=>{
dispatch(updateData({data:text,id:id}))
setIsEdit(false)
setText('')
    }

  return (
    <div>
     
      <center>
      <h1>TO-DO-LIST</h1>
      <input value={text}  onChange={(e)=>setText(e.target.value)} type="text" />
      <button onClick={handlePush}>Add</button>
      {todos.map((data)=>{
        return(
          <div>
            {!isEdit? <li key={data.id}>{data.name}  <i onClick={()=>dispatch(deleteData(data.id))}><MdDeleteForever /></i>
          
          <i onClick={()=>setIsEdit(true)}><MdOutlineEdit /></i>
          </li>:<div>
            <input onChange={(e)=>setText(e.target.value)} type="text"  defaultValue={data.name}/>
            <button onClick={()=>handleEdit(data.id)}>save</button>
            </div>}
           
          </div>

        )
      })}
      </center>
     
    </div>
  )
}

export default Todo
