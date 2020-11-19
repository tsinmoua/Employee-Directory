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

  // When this component mounts, get the employees
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
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    }, () => {
      // console.log(this.state.search);
      this.searching()
    });
  };

  // onKeyDown = event => {
  //   if (event.keyCode === 8) {
  //     console.log('delete');
  //     const value = event.target.value;
  //     const name = event.target.name;

  //     this.setState({
  //       [name]: value
  //     }, () => {


  //     });

  //     console.log(this.state.search);

  //       const resultFromAPI = this.state.result;
  //       const searchTerm = this.state.search

  //       const checkFirstName = resultFromAPI.filter((employee) =>
  //         ((employee.name.first).toLowerCase()).includes(searchTerm)
  //       ).map(filteredName => filteredName)

  //       console.log(checkFirstName);

  //       this.setState({ result: checkFirstName })
  //   }
  // }

  searching = () => {
    const resultFromAPI = this.state.result;
    const searchTerm = this.state.search

    console.log(resultFromAPI);

    const checkFirstName = resultFromAPI.filter((employee) =>
      ((employee.email).toLowerCase()).includes(searchTerm)
    )
    // .map(filteredName => filteredName)
    // console.log(checkFirstName);

    this.setState({ searchResult: checkFirstName })
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


// render() {
//   return (
//     <Container>
//       <Row>
//         <Col size="md-8">
//           <Card
//             heading={this.state.result.Title || "Search for a Movie to Begin"}
//           >
//             {this.state.result.Title ? (
//               <MovieDetail
//                 title={this.state.result.Title}
//                 src={this.state.result.Poster}
//                 director={this.state.result.Director}
//                 genre={this.state.result.Genre}
//                 released={this.state.result.Released}
//               />
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Card>
//         </Col>
//         <Col size="md-4">
//           <Card heading="Search">
//             <SearchForm
//               value={this.state.search}
//               handleInputChange={this.handleInputChange}
//               handleFormSubmit={this.handleFormSubmit}
//             />
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }