import React from 'react';
const Isvg = require('react-inlinesvg');


class SVGComponent extends React.Component {
  render () {
    return (
      <Isvg src={this.props.path}/>
    )
  }
}

export default SVGComponent;
