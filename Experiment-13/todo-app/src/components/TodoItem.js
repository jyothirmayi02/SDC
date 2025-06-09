import React from 'react'; 
 
function TodoItem({ todo, index, toggleComplete, removeTodo }) { 
  return ( 
    <div className={`todo ${todo.completed ? 'completed' : ''}`}> 
      <span>{todo.text}</span> 
      <div> 
        <button onClick={() => toggleComplete(index)}> 
          {todo.completed ? 'Undo' : 'Complete'} 
        </button> 
        <button onClick={() => removeTodo(index)}>Delete</button> 
      </div> 
    </div> 
  ); 
} 
 
export default TodoItem; 