import React from "react";
import { Box } from "./styled";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Box type="sm">Hello React</Box>
        <Box type="md">Hello React</Box>
        <Box type="lg">Hello React</Box>
      </React.Fragment>
    );
  }
}
export default App;
