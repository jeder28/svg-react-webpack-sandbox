import React from 'react';
const Isvg = require('react-inlinesvg');

class SVGComponent extends React.Component {
  render () {
    return (
      <div className="svg-container">
        <Isvg className={props.title} src={props.path}>
        </Isvg>
      </div>
    )
  }
}

export default SVGComponent;
