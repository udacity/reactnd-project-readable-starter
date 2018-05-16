import React, { Component } from 'react';

class Sort extends Component {
  state = {
    sort:"",
    reverse:false
  }
  applySort = (key) => {
    let reverse = false
    if(key === this.state.sort){
      reverse = ! this.state.reverse
    }
    this.props.onSort(key, reverse)
    this.setState({sort: key, reverse: reverse})
  }
  render(){
    return (
      <div className='sort'>
        Sort by:
        {this.props.options.map(([key,value]) => (
          <button
            className={'sort-button'
              + (this.state.sort === key ? ' selected' : '')
              + (this.state.reverse ? ' reverse' : '') }
            key={key}
            onClick={() => this.applySort(key)}
          >
            {value}
          </button>
        ))}
      </div>
    )
  }
}

export default Sort
