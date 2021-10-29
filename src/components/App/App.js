import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginaOtto Pizzeria",
  address: "1010 Paddington",
  city: "Flavortown",
  state: "NY",
  zipcode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business]; 

class App extends React.Component {

  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }
  
  render() {
    return (
      <div className = "App">
        <SearchBar searchYelp = { this.searchYelp} />
        <BusinessList businesses= {businesses} />
      </div>
    );
  }
  
}

export default App;
