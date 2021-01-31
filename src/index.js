import './styles.css';

// import {Todo} from './classes/todo.class.js';
// import{TodoList}from './classes/todo-list.class.js'

import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHTML(todo));

console.log('todos',todoList.todos);