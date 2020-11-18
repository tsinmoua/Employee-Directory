import React from "react";

function SearchForm(props) {
  return (
    <form>
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
    </form>
  );
}

export default SearchForm;
