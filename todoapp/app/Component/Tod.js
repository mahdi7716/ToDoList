import React from 'react'
import "./todo.css"

function Todo () {
    return(
    <div className='App'>
    <h1>My Todos</h1>
    <div className='todo-wrapper'>
     <div className='todo-input'>
        <div className='todo-input-item'>
            <label>Tittle</label>
            <input type="text" placeholder='Whts the task title'/>
            </div>
            <div className='todo-input-item'>
            <label>Descraption</label>
            <input type="text" placeholder='Whts the task title'/>
            </div>
            <div className='todo-input-item'></div>
            <button type="button"className='primaryBtn'>Add </button>
            </div>
     
        <div className='btn-area'>
            <button>Todo</button>
            <button>Completed</button>
        </div>
        <div className='todo-list'>
            <div className='"todo-list-item'>
                <h3>Task1</h3>
                <p>Description</p>
            </div>
        </div>
     </div>

     </div>
  );
}

export default Todo;