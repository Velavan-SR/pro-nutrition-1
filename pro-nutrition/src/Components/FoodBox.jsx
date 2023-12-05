/* eslint-disable react/prop-types */
import  { Component } from 'react'
import List from './List'

export default class FoodBox extends Component {
  
  constructor(props){

    super(props)

    this.state={
        count:0,
        totalAmount:0
    }

  }
  

  handleCount = (e) =>{
    this.setState({count:e})
  }

  handleTotal = () =>{
    this.setState({totalAmount:this.state.count*this.props.food.cal})
  }

  handleReset = ()=>{
    this.setState({count:0,totalAmount:0})
  }
  
  
    render() {
    return (
      <div id='foodbox'>
        
        <img src={this.props.food.img}/>
        <h2>{this.props.food.name}</h2>
        <p>{this.props.food.cal}</p>

        <div id='flex'>
            <input type='number' min={0} value={this.state.count} placeholder='Enter Count' onChange={(e)=> this.handleCount(e.target.value)}/>
            <button onClick={this.handleTotal}>Add +</button>
        </div>

        <List count={this.state.count} name={this.props.food.name} cal={this.props.food.cal} totalAmount={this.state.totalAmount} handleReset={this.handleReset}/>

      </div>
    )
  }
}
