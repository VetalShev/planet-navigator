import React, {Component} from 'react';
import LayoutDefault from "../components/layoutDefault";

class About extends Component {
  render() {
    return (
      <LayoutDefault match={this.props.match}>
        Some useful information about the author.
      </LayoutDefault>
    );
  }
}

export default About;