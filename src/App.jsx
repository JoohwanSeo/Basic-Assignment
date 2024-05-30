import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputItem = (e) => {
    setTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setContent(e.target.value);
  };

  const hadleClickSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      return alert(" 정보를 입력해 주세요. ");
    }

    const newTodos = {
      id: crypto.randomUUID(),
      title,
      content,
      completed: false,
    };

    setTodos([...todos, newTodos]);
    setTitle("");
    setContent("");
  };

  const handleCompletedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  const handleDelTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <form onSubmit={hadleClickSubmit}>
        <label htmlFor="title">제목</label>
        <input type="text" value={title} onChange={handleInputItem} />
        <label htmlFor="content">내용</label>
        <input type="text" value={content} onChange={handleInputContent} />
        <button type="submit">저장</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title} - {todo.content}
            <button onClick={() => handleCompletedTodo(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDelTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
