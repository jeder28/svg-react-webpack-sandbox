import React from 'react';
import SVGComponent from './SVGComponent'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>SVG Sandbox</h1>
        <SVGComponent title='family' path='../src/svgs/Family_Icon.svg'/>
      </div>
    )
  }
}

export default App;
