import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div>
        <h3 class="ui block header">
          <SearchBar
            data={[
              {
                title: "Hello World",
                description: "This is an example data.",
                image: "https://via.placeholder.com/150",
                price: 100
              }
            ]}
          />
        </h3>
      </div>
    );
  }
}

export default Searchbar;
