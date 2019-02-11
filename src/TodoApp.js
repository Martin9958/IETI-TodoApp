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
        <form onSubmit={this.handleSubmit}>
          <div>

              <label htmlFor="new-todo">
                Task:
                <input
                    id="new-todo"
                    onChange={(e)=> this.setState({text:e.target.value})}
                    value={this.state.text}
                 />
              </label>
          </div>
          <div>
              <label htmlFor="priority">
                 Priority:
                  <input
                    id="priority"
                    onChange={(e)=> this.setState({priority:e.target.value})}
                    value={this.state.priority}
                  />
              </label>
          </div>
          <div>
              <label htmlFor="priority">
                Date:
                  <input
                    id="dueDate"
                    onChange={(e)=> this.setState({dueDate:e.target.value})}
                    value={this.state.dueDate}
                  />
               </label>
          </div>
          <button>
            Add To do #{this.state.items.length + 1}
          </button>
        </form>
        <h4 class = "light-blue">Register To do</h4>
        <Todolist items={this.state.items} />
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
    this.setState(State => ({
      items: State.items.concat(newItem),
      text: '',
      priority: '',
      dueDate: ''
    }));
  }
}