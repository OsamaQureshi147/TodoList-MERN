import { useState, useEffect } from 'react';
import './App.css';
import TodoItems from './TodoItems';
import Icon from '@material-ui/core/Icon';
import { Card, CardContent } from '@material-ui/core';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState({
    item: '',
    isCompleted: false
  });


  useEffect(() => {
    const getTodos = () => {
      fetch('/api/todos')
        .then(res => res.json())
        .then(jsonRes => setTodoList(jsonRes))
    }
    getTodos();

  }, [])

  const onClick = (e) => {
    e.preventDefault();
    if (todoItem.item === "") {
      alert("Please fill something to be added!");
    }

    else {
      //--------------POST Request--------------------//
      fetch('http://localhost:5000/api/todos', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          item: todoItem.item,
          isCompleted: todoItem.isCompleted,
        }),
      })
        .then(res => res.text())
        .then(text => console.log(text))

      //--------------------------------------------- //
      todoList.push(todoItem);
      setTodoList([...todoList]);
      setTodoItem({
        item: '',
        isCompleted: false
      });
    }
  };
  const removeTodo = (index) => {
    let item = todoList[index].item;
    //--------------DELETE Request--------------------//
    fetch('http://localhost:5000/api/todos', {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        item,
      }),
    })
      .then(res => res.text())
      .then(text => console.log(text))

    //--------------------------------------------- //
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };
  const finishTodo = (index) => {
    //--------------PUT Request--------------------//
    fetch('http://localhost:5000/api/todos', {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        item: todoList[index].item,
        isCompleted: todoList[index].isCompleted ? false : true
      }),
    })
      .then(res => res.text())
      .then(text => console.log(text))

    //--------------------------------------------- //

    todoList[index].isCompleted = todoList[index].isCompleted ? false : true;
    setTodoList([...todoList]);
  };
  return (
    <div className="app__container">

      <div className="header__todo">
        <h1>TodoList Application</h1>
      </div>


      <div className='body__todo'>

        <div className='input__container'>
          <form className='form__container' onSubmit={onClick}>
            <input
              autoFocus
              placeholder='Add ToDo items'
              type='text'
              value={todoItem.item}
              onChange={(e) => setTodoItem({
                item: e.target.value,
                isCompleted: false
              })}
            />
            <Icon className='icon__button' type='button' color='primary' onClick={onClick}>
              add_circle
            </Icon>
          </form>
        </div>

        <Card className='items__container'>
          <CardContent>
            <h3>Todos</h3>
            <TodoItems todoList={todoList} removeTodo={removeTodo} finishTodo={finishTodo} />
          </CardContent>
        </Card>

      </div>


    </div>

  );
}

export default App;
