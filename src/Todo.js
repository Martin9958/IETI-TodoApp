import React from 'react';

export class Todo extends React.Component {
    constructor (props){
          super(props);
    }

    render(){
          return(
              <h4>To do:  {this.props.text}  - Priority :  {this.props.priority} - Date: {this.props.dueDate.format('DD-MM-YYYY')}</h4>
          );

    }


}
