import React, { PropTypes } from 'react';

export default class NewItems extends React.Component {
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;

    console.log('The name value is ' + name + 'the description value is ' + description);

    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });

  }



  render() {
    return (
      <div>
        <input ref='name' placeholder='Name' />
        <input ref='description' placeholder='Description' />

        {/* Remember to add .bind(this) */}
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}
