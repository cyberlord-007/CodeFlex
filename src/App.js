import React,{Component} from 'react'
import './App.scss';
import Header from './Header'
import Card from './Card'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCheck, faCode, faUser} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

library.add( faCheckSquare, faCoffee, faCheck, faCode, faUser)


class App extends Component{
  state={
    input:'',
    user:''
}

handleChange = (e) => {
  this.setState({
      input: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault();
  axios.get(`https://codeforces.com/api/user.info?handles=${this.state.input}&apikey=abba23cc433155235fe3d3b452ce0a79c5c30b9a`)
  .then(res => {
    this.setState({
      user: res.data.result[0]
  })
  })
  this.setState({
    input:null
  })
}
  render(){
    return(
      <div>
        <Header />
        <div className='search-area'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='      Enter Codeforces handle...' onChange={this.handleChange} value={this.state.input}></input>
                </form>
            </div>
            <Card rating={this.state.user.rating} imgurl={this.state.user.titlePhoto} fname={this.state.user.firstName} lname={this.state.user.lastName} handle={this.state.user.handle} rank={this.state.user.rank} country={this.state.user.country}
            maxRating={this.state.user.maxRating}/>
      </div>
    )
  }
}

export default App;
