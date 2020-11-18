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
    search: ""
  };

  // When this component mounts, get the employees
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.search()
      .then(res => {
        this.setState({ result: res.data.results })
        console.log(this.state.result);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  // handleFormSubmit = event => {
  //   // Number 13 is the "Enter" key on the keyboard
  //   if (event.keyCode === 13) {
  //     // Cancel the default action, if needed
  //     event.preventDefault();
  //   };
  // }

    render() {
      return (
        <Container>
          <Jumbotron heading="Employee Directory" />
          <Row>
            <Col size="lg-12">
              <Search />
            </Col>
          </Row>

          <Row>
            <Col size="lg-12">
              <Table employees={this.state.result} />
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