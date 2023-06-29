import React from "react";
export default class Search extends React.Component {
  state = {
    search: "panda",
    type:"all"
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search,this.state.type);
    }
  };
  handleFilter= (e)=>{
    this.setState(()=> ({type: e.target.dataset.type}), ()=> {
      this.props.searchMovie(this.state.search,this.state.type)
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field ">
            <input
              type="search"
              className="validate"
              placeholder="Search"
              value={this.state.value}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              onClick={() => this.props.searchMovie(this.state.search , this.state.type )}
              className="btn search-btn "
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <label className="radio-label">
            <input 
            className="with-gap" 
            name="type" 
            type="radio"
            data-type="all"
            onChange={this.handleFilter}
            checked={this.state.type ==="all"}
            />
            <span>All</span>
          </label>
          <label className="radio-label">
            <input 
            className="with-gap" 
            name="type" 
            type="radio" 
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type ==="movie"}/>
            
            <span>Movies only</span>
          </label>
          <label className="radio-label">
            <input 
            className="with-gap" 
            name="type" 
            type="radio" 
            data-type="series"
            onChange={this.handleFilter}
            checked={this.state.type ==="series"}/>
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
