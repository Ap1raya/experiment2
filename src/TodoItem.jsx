// src/TodoItem.jsx
import React, { useState } from 'react';

// 🔽 รับ props ทั้งหมดที่จำเป็น
function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // เราจะเพิ่มฟังก์ชันแก้ไขในขั้นตอนต่อไป
  // const handleSave = () => { ... };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>
      <div>
        <button className="edit-btn">แก้ไข</button>
        <button onClick={() => deleteTodo(todo.id)}>ลบ</button>
      </div>
    </li>
  );
}

export default TodoItem;