// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} width='100' />;
  }
}

export default Image;