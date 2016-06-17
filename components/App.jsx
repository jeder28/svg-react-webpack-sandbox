import React from 'react';
import SVGComponent from './SVGComponent'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>SVG Sandbox</h1>
        <SVGComponent title='freelancerCorner' path='../src/svgs/freelancerCorner.svg'/>
      </div>
    )
  }
}

export default App;
