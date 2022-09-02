// import logo from './logo.svg';
import './styles.css';
import React from "react";
import { AppUI } from './AppUI';
import { TodoProvider } from './TodoContext';



// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true},
//   { text: 'Tomar el curso de intro a react', completed: true},
//   { text: 'llorar con la llorona', completed: false},
// ]




function App() {


  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
