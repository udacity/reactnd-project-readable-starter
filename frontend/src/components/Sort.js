import React, { Component } from 'react';

class Sort extends Component {
  sortBy = {key:"", reverse:false}
  applySort = (key) => {
    if(key !== this.sortBy.key){
      this.sortBy.reverse = false
    } else {
      this.sortBy.reverse = ! this.sortBy.reverse
    }
    this.sortBy.key = key
    this.props.onSort(this.sortBy.key, this.sortBy.reverse)
  }
  render(){
    return (
      <div className='sort'>
        Sort by:
        {this.props.options.map(([key,value]) => (
          <button key={key} onClick={() => this.applySort(key)}>
            {value}
          </button>
        ))}
      </div>
    )
  }
}

export default Sort
