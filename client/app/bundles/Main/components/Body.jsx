import React, { PropTypes } from 'react';
import NewItems from '../components/NewItems';
import AllItems from '../components/AllItems';

export default class Body extends React.Component {
  /* ES6 uses the constructor to set initial state */
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  }

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }

  handleDelete(id) {
    $.ajax({
      url: '/api/v1/items/' + id,
      type: 'DELETE',
      success:() => {
        this.removeItemClient(id);
      }
    });
  }

  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });
    this.setState({ items: newItems });
  }

  handleUpdate(item) {
    $.ajax({
      url: '/api/v1/items/' + item.id,
      type: 'PUT',
      data: { item: item },
      success:() => {
        this.updateItems(item);
      }
    });
  }

  updateItems(item) {
    var items = this.state.items.filter((i) => { return i.id != item.id });
    items.push(item);

    this.setState({items: items });
  }

  render() {
    return (
      <div>
        {/* Remember to add .bind(this) */}
        <NewItems handleSubmit={this.handleSubmit.bind(this)}/>
        <AllItems items={this.state.items} handleDelete={this.handleDelete.bind(this)} onUpdate={this.handleUpdate.bind(this)}/>
      </div>
    );
  }
}
