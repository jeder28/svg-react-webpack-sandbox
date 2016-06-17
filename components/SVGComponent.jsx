import React from 'react';
const Isvg = require('react-inlinesvg');
import styles from '../src/css/freelanceCorner';

class SVGComponent extends React.Component {
  render () {
    return (
      <div className="svg-container">
        <Isvg className={this.props.title} src={this.props.path}>
        </Isvg>
      </div>
    )
  }
}

export default SVGComponent;
