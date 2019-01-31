import React from 'react';
import {Todo} from './Todo';

export class Todolist extends React.Component {
    constructor (props){
          super(props);
    }

    render(){
          const todos = this.props.items;
           const todoitems = todos.map((todo) =>
             <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate} />

           );
          return (
                <ul> {todoitems} </ul>
           );
    }


}