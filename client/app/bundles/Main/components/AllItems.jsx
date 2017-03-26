import React, { PropTypes } from 'react';
import Item from '../components/Item';


export default class AllItems extends React.Component {

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  onUpdate(item) {
    this.props.onUpdate(item);
  }

  render() {
    var items= this.props.items.map((item) => {
      return (
        <div key={item.id}>

          {/* Remember to add .bind(this) */}
          <Item item={item}
                       handleDelete={this.handleDelete.bind(this, item.id)}
                       handleUpdate={this.onUpdate.bind(this)}/>
        </div>
      )
    });

    return(
      <div>
        {items}
      </div>
    )
  }
}
