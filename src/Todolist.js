import React from 'react';
import {Todo} from './Todo';

export class Todolist extends React.Component {
    constructor (props){
          super(props);
    }

    render(){
          const todos = [{text:"Learn React", priority:5, dueDate: 30},
                    {text:"Learn about APIs", priority:4, dueDate: 30  },
                    {text:"write TODO App", priority:3, dueDate: 30 }];

           const todoitems = todos.map((todo) =>
             <Todo text={todo.text} priority={todo.priority} dueDate={todo.dueDate} />

           );
          return (
                <ul> {todoitems} </ul>
           );
    }


}