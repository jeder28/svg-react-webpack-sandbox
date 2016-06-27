import React from 'react';
import SVGComponent from './SVGComponent';

class App extends React.Component {

  handleClick(item) {
    let currentItem = document.getElementsByClassName('active')[0];
    let newItem = document.getElementsByClassName(item.className)[0];
    let classes = currentItem.className.split(' ');
    classes.pop();
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
    const findWorkItem = { title: 'Finding Work', className:'findWork', path: '../src/svgs/findWork.svg'};
    const buttonTitles = [
      { title: 'Taxes, Budgeting & Pricing', className: 'pricing', path: '../src/svgs/pricing.svg' },
      { title: 'Legal & Insurance Tips', className: 'legal', path: '../src/svgs/legalTips.svg' },
      { title: 'Work-Life Balance', className: 'balance', path: '../src/svgs/workLifeBalance.svg' },
      { title: 'The Gig Economy', className: 'gig', path: '../src/svgs/gigEconomy.svg' },
      { title: 'Freelancer\'s Corner', className: 'freelancerCorner', path: '../src/svgs/freelancerCorner.svg' },
      { title: 'Events & News', className: 'events', path: '../src/svgs/newsEvents.svg' }
    ];
    let className = findWorkItem.className + ' svg-container active';
    return (
      <div>
        <h1>SVG Sandbox</h1>
        <div className="findWork active">
          <div className="findWorkImgage">
            <div className="magnifyGlass">
              <div className="handle">
                <div className="handle-detail"></div>
                <div className="handle-detail-2"></div>
                <div className="handle-detail-3"></div>
              </div>
              <div className="magnifiedContent">
                <div className="inside-mag"/>
              </div>
            </div>
          </div>
        </div>
        {
          buttonTitles.map((item, i) => {
            className = item.className + ' svg-container inactive';
            return (
              <div className={className} key={i}>
                <SVGComponent path={item.path}/>
              </div>
            );
          })
        }
        <div className='categories'>
          <ul>
            <li onClick={this.handleClick.bind(this, findWorkItem)}>{findWorkItem.title}</li>
            {
              buttonTitles.map((item, i) => {
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
