import logo from './logo.svg';
import './App.css';
import { Header } from "./MyComponent/Header";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
import { Addtodo } from "./MyComponent/Addtodo";
import { About } from './MyComponent/About';
import React, {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null ){
    initTodo=[];
  }else{
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }


  const onDelete=(todo)=>{
   
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }));
    localStorage.setItem('todos',JSON.stringify(todos))
  }

  const addTodo = (title,desc) =>{
 
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
      
      
    }
    const myTodo = {
      sno :sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
  
  }

  
  

  const [todos, setTodos] = useState(initTodo);
  
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  return (
    <div className="App">
    <>
    <Router>
      <Header title='my todo list' searchBar={true}/>
      <Switch>
        <Route exact path='/' render={()=>{
            return(
              <>
            <Addtodo addTodo={addTodo}/>
            <Todos todos={todos} ondelete={onDelete}/>
              </>
            )
        }}></Route>
        <Route exact path='/about'>
          <About/>
        </Route>
   
      </Switch>
      <Footer/>
      </Router>
    </>
  
    </div>

  );
}

export default App;
