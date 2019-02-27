import React from 'react';
import LayoutDefault from './layoutDefault';

class SuggestionBox extends React.Component {

  render() {
    return (
      <LayoutDefault match={this.props.match}>
        - Suggestion list <br/>
        - New suggestion box
      </LayoutDefault>
    );
  }

}

export default SuggestionBox;