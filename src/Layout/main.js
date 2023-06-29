import React from "react"
import Movies from "../Components/Movies"
import Loader from "../Components/Loader";
import "../index.css"
import Search from "../Components/Search";
export default class Main extends React.Component{
  state={
    movies:[]
  }
  componentDidMount(){
    fetch('http://www.omdbapi.com/?apikey=41be66a8&s=panda')
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
  }
  searchMovie = (str, type = 'all')=>{
    fetch(`https://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
  }
  render(){
    return(
      <div className="container content">
        <Search searchMovie = {this.searchMovie}/>
      {this.state.movies.length ? (<Movies  movies={this.state.movies}/>) : <Loader/>}
      </div> 
      
      )
    }
  }