import React from 'react';
import SVGComponent from './SVGComponent';
import svgList from '../src/svgs/index';

class App extends React.Component {

  handleClick(item) {
    let currentItem = document.getElementsByClassName('active')[0];
    let newItem = document.getElementsByClassName(item.className)[0];
    let classes = currentItem.className.split(' active');
    classes.push('inactive');

    // Sometimes .join() will join with commas when clicking fast
    // Saving the instance as a new variable helps prevent this
    let newClasses = classes.join(' ');
    currentItem.className = newClasses;
    currentItem.style.display = 'none';

    classes = item.className + ' svg-container active';
    newItem.className = classes;
    newItem.style.display = "flex";
  }

  render () {
    let className;
    return (
      <div>
        <h1>SVG Sandbox</h1>
        {
          svgList.map((item, i) => {
            if (i === 0) {
              className = item.className + ' svg-container active';
            }
            else {
              className = item.className + ' svg-container inactive';
            }
            return (
              <div className={className} key={i}>
                <SVGComponent path={item.path}/>
              </div>
            );
          })
        }
        <div className='categories'>
          <ul>
            {
              svgList.map((item, i) => {
                return (
                  <li onClick={this.handleClick.bind(this, item)} key={i}>{item.title}</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
