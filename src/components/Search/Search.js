import React from "react";

function Search(props) {
  return (
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          onKeyDown={props.onKeyDown}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search the Directory..."
          id="search"
          autoFocus
        />
      </div>
  );
}

export default Search;
