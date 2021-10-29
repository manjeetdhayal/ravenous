import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    //this.handleLocationChange = this.handleLocationChange.bind(this);
    //this.handleSearch = this.handleSearch.bind(this);

    //member variable of an object is created using this.var_name

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "reviewCount",
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    // to prevent the default action of clicking a link from trigging at the end of the method we add event.preventDefault()
    event.preventDefault(); 
  }

  get renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[`${sortByOption}`];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={this.sortByOptions[`${sortByOption}`]}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          // Add an onClick attribute to the <li> element. Set it equal to handleSortByChange.bind(). Pass in two arguments to .bind(): this and sortByOptionValue.
          //This will allow us to both bind to the current value of this (as we usually do in the constructor()) but also bind the current sortByOptionValue as the first argument to the method call, ensuring the method is called with the appropriate value when clicked.
        >
         
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions}</ul>{" "}
          {/* Note as we used getter method we can use this.renderSortByOptions else we must use this.renderSortByOptions()*/}
        </div>
        <div className="SearchBar-fields">
          <input 
          onChange = {this.handleTermChange.bind(this)}
          placeholder="Search Businesses" />
          <input 
          onChange = {this.handleLocationChange.bind(this)}
          placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick = {this.handleSearch.bind(this)}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
