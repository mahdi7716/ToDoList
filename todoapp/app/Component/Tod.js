"use client"
import React, { useEffect, useState } from 'react'
import "./todo.css"
import {AiOutlineDelete} from 'react-icons/ai'
import { BsCheckLg } from "react-icons/bs";
import { stringify } from 'postcss';
function Todo () {
    const [isCompleteScreen , setisCompleteScreen]=useState(false);
    const [allTodos , setTodos] = useState ([]);
    const [newTittle ,setNewTittle ] = useState("");
    const [newDescraption , setNewDescraption] =useState("");
    const [completeTodo , setCompleteTodo ] = useState([]);
    

    const handleAddTodo =() =>{
        let newTodoItem ={
            tittle:newTittle,
            descraption :newDescraption
        }
        let updatedTodoArr =[...allTodos];
        updatedTodoArr.push (newTodoItem);
        setTodos(updatedTodoArr);
        localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
    };

    const handleDeleteTodo =index =>{
        let reducedTodo=[...allTodos];
        reducedTodo.splice(index)

        localStorage.setItem('todolist', JSON.stringify (reducedTodo));
        setTodos(reducedTodo);
    }

    useEffect(()=>{
        let saveTodo = JSON.parse (localStorage.getItem('todolist'));
        if(saveTodo){
            setTodos(saveTodo)
        }
    },[])
    return(
    <div className='App'>
    <h1>My Todos</h1>
    <div className='todo-wrapper'>
     <div className='todo-input'>
        <div className='todo-input-item'>
            <label>Tittle</label>
            <input type="text" placeholder='Whts the task title' value={newTittle} onChange={(e)=>setNewTittle(e.target.value)}/>
            </div>
            <div className='todo-input-item'>
            <label>Descraption</label>
            <input type="text" placeholder='Whts the task title' value={newDescraption} onChange={(e)=>setNewDescraption(e.target.value) }/>
            </div>
            <div className='todo-input-item'></div>
            <button type="button"className='primaryBtn' onClick={handleAddTodo}>Add </button>
            </div>
     
        <div className='btn-area'>
            <button 
            className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} 
            onClick={()=>setisCompleteScreen(false)}>Todo</button>
            <button
             className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
            onClick={()=>setisCompleteScreen(true)}>Completed</button>
        </div>
        <div className='todo-list'>
           {allTodos.map((item , index)=>{
            return(
                <div className='todo-list-item' key={index}>
                <div>
                <h3>{item.tittle}</h3>
                <p>{item.descraption}</p>
                </div>
                <div>
                <AiOutlineDelete className='icon'   onClick={() => handleDeleteTodo (index)}/>
                <BsCheckLg className='check-icon'/>
                </div>
            </div> 
           
            )
           })}
        </div>
        </div>
        <div>
     </div>

     </div>
  );
}

export default Todo;