import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};
class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      term: "",
      location: "",
      sortBy: "best_match"
    };
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass (sortByOption) {
    if (sortByOption===this.state.sortBy){
      return "active";
    } else {
      return "";
    }
  }

  handleSortByChange (sortByOption) {
    this.setState({
      sortBy: sortByOption
    })
  }

  handleTermChange(event){
    this.setState({
      term: event.target.value //testing using inerHTML instead of e.target.value
    })
  }

  handleLocationChange(event){
    this.setState({
      location: event.target.value
    })
  }

  handleSearch(event){
    event.preventDefault();
    if(this.state.location !== ""){
      this.props.searchBar(this.state.term,this.state.location,this.state.sortBy)
    } else {
      alert("Please update your searching field");
    }
  }

  renderSortByOption(){
    return Object.keys(sortByOptions).map(sortByOption => { //Object.keys() return an array of of the given obj
      let sortByOptionValue = sortByOptions[sortByOption];
      return(
        <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}
        onClick={e => this.handleSortByChange(sortByOptionValue)}>{sortByOption}</li>
      );
    });
  }
  render () {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOption()};
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a href="#businessList" onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  };
};

export default SearchBar;
