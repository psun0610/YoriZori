// TodoList.js

import React, { useState } from 'react';

const Recipe = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { text: inputText, pinned: false }]);
      setInputText('');
    }
  };

  const handleTogglePin = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].pinned = !updatedTodos[index].pinned;
    if (updatedTodos[index].pinned) {
      const pinnedTodo = updatedTodos.splice(index, 1);
      updatedTodos.unshift(pinnedTodo[0]);
    } else {
      const unpinnedTodo = updatedTodos.splice(index, 1);
      updatedTodos.push(unpinnedTodo[0]);
    }
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.pinned ? 'underline' : 'none' }}>
            <span>{todo.text}</span>
            <button onClick={() => handleTogglePin(index)}>{todo.pinned ? 'Unpin' : 'Pin'}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
