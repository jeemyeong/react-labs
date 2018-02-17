import React, { Component } from 'react';
import axios from 'axios';
import _ from 'partial-js';
class App extends Component {
  render() {
    return (
      <div>
        App
      </div>
    );
  }
}
const url = "http://www.httpbin.org/ip"
// _.go(url,
//   _.all(
//     _.pipe(axios.get, res => res, _.log),
//     _.pipe(axios.get, res => res.data, _.log),
//     _.pipe(axios.get, res => res.data.origin, _.log),
//   ),
//   (item1, item2, item3) => {
//     _.log(item1)
//     _.log(item2)
//     _.log(item3)
//   }
// )
Promise.all([
  axios.get(url).then((response) => _.log(response)),
  axios.get(url).then((response) => _.log(response.data)),
  axios.get(url).then((response) => _.log(response.data.origin)),
])

// axios.get("http://www.httpbin.org/ip").then(() => _.log("HELLO"))
export default App;