import React, { Component } from "react";
import Container from "./Container/Container";
import Row from "./Row/Row";
import Col from "./Col/Col";
import Search from "./Search/Search";
import Jumbotron from "./Jumbotron/Jumbotron";
import Table from "./Table/Table";
import SearchAPI from "../utils/API";

class MainPage extends Component {
  state = {
    result: [],
    search: "",
    searchResult: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    SearchAPI()
      .then(res => {
        this.setState({ result: res.data.results })
        // console.log(this.state.result);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value.toLowerCase();
    const name = event.target.name;
    this.setState({
      [name]: value
    }, () => {
      // console.log(this.state.search);
      this.searching()
    });
  };

  // Format API date to MM/DD/YYYY
  newDate = (date) => new Date(date);

  searching = () => {
    let resultFromAPI = this.state.result;
    let searchTerm = this.state.search

    const checkInput =
      resultFromAPI.filter((employee) =>
        (
          (employee.name.first).toLowerCase() + " " +
          (employee.name.last).toLowerCase() + " " +
          (employee.phone) + " " +
          (employee.email) + " " +
          (`${this.newDate(employee.dob.date).getMonth() + 1}/${this.newDate(employee.dob.date).getDate()}/${this.newDate(employee.dob.date).getFullYear()}`)
        ).includes(searchTerm)
      )
    // console.log(searchTerm);
    // console.log(checkInput);

    this.setState({ searchResult: checkInput })
  }

  // Sorts A-Z
  sortFunctionASC = (state, field1, field2) => {
    let sorted = state.sort((a, b) =>
      (a[field1][field2] > b[field1][field2]) ? 1 : -1)

    this.setState({ searchResult: sorted })
    // console.log(state);
    // console.log(field1);
    // console.log(field2);
  }

  // Sorts Z-A
  sortFunctionDESC = (state, field1, field2) => {
    let sorted = state.sort((a, b) =>
      (a[field1][field2] > b[field1][field2]) ? 1 : -1).reverse()

    this.setState({ searchResult: sorted })
  }

  // Handles sort button clicks
  handleButtonClick = (event) => {
    event.preventDefault()
    const btnName = event.currentTarget.getAttribute("data-value")

    let resultFromAPI = this.state.result;
    let searchTerm = this.state.searchResult;

    if (btnName === "first-asc") {
      // console.log("clicked");
      // console.log(btnName);
      if (this.state.search === "") {
        this.sortFunctionASC(resultFromAPI, "name", "first");
      } else {
        this.sortFunctionASC(searchTerm, "name", "first");
      }

    } else if (btnName === "last-asc") {

      if (this.state.search === "") {
        this.sortFunctionASC(resultFromAPI, "name", "last");
      } else {
        this.sortFunctionASC(searchTerm, "name", "last");
      }

    } else if (btnName === "first-desc") {

      if (this.state.search === "") {
        this.sortFunctionDESC(resultFromAPI, "name", "first");
      } else {
        this.sortFunctionDESC(searchTerm, "name", "first");
      }

    } else if (btnName === "last-desc") {

      if (this.state.search === "") {
        this.sortFunctionDESC(resultFromAPI, "name", "last");
      } else {
        this.sortFunctionDESC(searchTerm, "name", "last");
      }

    }
  }

  render() {
    return (
      <Container>
        <Jumbotron
          heading="Employee Directory"
          heading2=""
        />
        <Row>
          <Col size="lg-12">
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
            />
          </Col>

          <Col size="lg-12">
            <Table
              employees={this.state.search === "" ? this.state.result : this.state.searchResult}
              onClick={this.handleButtonClick}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;