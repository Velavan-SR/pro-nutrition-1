import {Component} from 'react'
import './App.css'
import FoodBox from './Components/FoodBox'
import FoodData from './Components/FoodData'
import Search from './Components/Search'

class App extends Component{

constructor(props){

  super(props)

  this.state={
    search:""
  }

}

  handleSearch=(info)=>{
    this.setState({search:info})
  }

  render(){

    return(
      <>
      
      {/* <div id='search'>

        <input type='text' placeholder='Search Here...' onChange={(e)=>this.setState({search:e.target.value})}/>

      </div> */}

      <Search handleSearch={this.handleSearch}/>

      {
      
      FoodData.filter((el)=>{
        if(this.state.search==""){
          return el
        }else if(el.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())){
          return el
        }
      })
      
       
        .map((el)=>{
        return <div key={el.id}>
        <FoodBox food={el} count={this.count}/>
        </div>
    
        })
      } 
      
      
      </>

  )
}

}

export default App
