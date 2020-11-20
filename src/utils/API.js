import axios from "axios";

function SearchAPI () {
  return axios.get("https://randomuser.me/api/?results=200&nat=us");
}
export default SearchAPI
