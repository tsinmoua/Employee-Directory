import React from "react";

function Search(props) {
  return (
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          className="form-control"
          placeholder="Search the Directory..."
          id="search"
        />
      </div>
  );
}

export default Search;
