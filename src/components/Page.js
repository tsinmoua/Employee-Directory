import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Search from "./Search";
import Jumbotron from "./Jumbotron";
import Table from "./Table";
import API from "../utils/API";

class Page extends Component {
  state = {
    result: [],
    search: "",
    searchResult: []
  };

  // Format API date to MM/DD/YYYY
  newDate = (date) => new Date(date);

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.search()
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

  searching = () => {
    const resultFromAPI = this.state.result;
    const searchTerm = this.state.search

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
    // console.log(checkInput);

    this.setState({ searchResult: checkInput })
  }

  render() {
    return (
      <Container>
        <Jumbotron heading="Employee Directory" />
        <Row>
          <Col size="lg-12">
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              onKeyDown={this.onKeyDown}
            />
          </Col>
        </Row>

        <Row>
          <Col size="lg-12">
            <Table
              // employees={this.state.result} />
              employees={this.state.search === "" ? this.state.result : this.state.searchResult} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Page;