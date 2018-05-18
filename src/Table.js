import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from './Button';

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;

    const isSearched = (searchTerm) => (item) =>
      !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      <div className="table">
        <div className="table-header">
          <span style={{ width: '40%' }}>Title</span>
          <span style={{ width: '20%' }}>Author</span>
          <span style={{ width: '15%' }}>Comments Count</span>
          <span style={{ width: '10%' }}>Points</span>
          <span style={{ width: '15%' }}>Action</span>
        </div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID} className="table-row">
            <span style={{ width: '40%' }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: '20%' }}>{item.author}</span>
            <span style={{ width: '15%' }}>{item.num_comments}</span>
            <span style={{ width: '10%' }}>{item.points}</span>
            <span style={{ width: '15%' }}>
              <Button onClick={() => onDismiss(item.objectID)}
                className="button-inline">
                Dismiss
              </Button>
            </span>
          </div>
        )}
      </div>
    );
  }
}


export default Table;