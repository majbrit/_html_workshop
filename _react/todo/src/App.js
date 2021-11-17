// imports
import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// show todo with buttons for done and removing
function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"     
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text} <p className="date">added on: {todo.date}</p></span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

// form for adding todos as the user
function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    var d = new Date();
    var date = d.toDateString();
    addTodo(value, date);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="primary mb-3"  type="submit">
      Submit
    </Button>
  </Form>
  );
}

// main function
function App() {
  // list of todos with their status
  const [todos, setTodos] = React.useState([
    {
      text: "Do homework",
      date: (new Date().toDateString()),
      isDone: false
    }
  ]);

  // add new todos
  const addTodo = (text, date) => {
    const newTodos = [...todos, { text, date }];
    setTodos(newTodos);
  };

  // mark todos as done
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  // delete todo
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;