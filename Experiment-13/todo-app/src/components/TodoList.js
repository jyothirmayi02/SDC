import React from 'react'; 
import TodoItem from './TodoItem'; 
 
function TodoList({ todos, toggleComplete, removeTodo }) { 
  return ( 
    <div> 
      {todos.map((todo, index) => ( 
        <TodoItem  
          key={index}  
          todo={todo}  
          index={index} 
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo} 
        /> 
      ))} 
    </div> 
  ); 
} 
 
export default TodoList;