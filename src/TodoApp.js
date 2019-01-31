import React from 'react';
import {Todolist} from './Todolist'



export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: '', dueDate: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <Todolist items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
            <input
                id="new-todo"
                onChange={(e)=> this.setState({text:e.target.value})}
                value={this.state.text}
             />
          </label>

          <label htmlFor="priority">
             Priority
          </label>
          <input
            id="priority"
            onChange={(e)=> this.setState({priority:e.target.value})}
            value={this.state.priority}
          />
          <label htmlFor="priority">
            Date
          </label>
          <input
            id="dueDate"
            onChange={(e)=> this.setState({dueDate:e.target.value})}
            value={this.state.dueDate}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
     e.preventDefault();
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority: '',
      dueDate: ''
    }));
  }
}