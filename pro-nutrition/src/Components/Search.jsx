/* eslint-disable react/prop-types */
import { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
    <div id='search'>

        <input id='searchbox' type='text' placeholder='Search Here...' onChange={(e)=>this.props.handleSearch(e.target.value)}/>

    </div>
    )
  }
}
