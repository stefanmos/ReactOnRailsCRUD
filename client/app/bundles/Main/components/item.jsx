import React, { PropTypes } from 'react';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  handleEdit() {
      if(this.state.editable) {
        var name = this.refs.name.value;
        var id = this.props.item.id;
        var description = this.refs.description.value;
        var item = {id: id , name: name , description: description};
        this.props.handleUpdate(item);
      }
      this.setState({ editable: !this.state.editable })
  }

  render() {
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h4>{this.props.item.name}</h4>;
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;

    return (
      <div className="column-12-12">
          <div className="column-4-12">{name}</div>
          <div className="column-4-12">{description}</div>
          <div className="column-4-12">
            <button className="button" onClick={this.props.handleDelete} >Delete</button>
            <button className="button" onClick={this.handleEdit.bind(this)}> {this.state.editable ? 'Submit' : 'Edit' } </button>
          </div>
      </div>
    );
  }
}
