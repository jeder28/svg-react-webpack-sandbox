import React from 'react';
import TweenMax from 'gsap';
import SVGComponent from './SVGComponent';

class FindWork extends React.Component {

  componentDidMount() {
    let magnifyGlass = React.findDOMNode(this.refs.magnifyGlass);
    let magnifiedContent = React.findDOMNode(this.refs.magnifiedContent);
    let tl = new TimelineMax();
    tl.to(magnifyGlass, 2, {x:'100px'});
    tl.to(magnifiedContent, 2, {backgroundPosition: '-150px center'}, '-=2');
    tl.to(magnifyGlass, 2, {x:'-30px'});
    tl.to(magnifiedContent, 2, {backgroundPosition: '0px center'}, '-=2');
  }

  render () {
    return (
      <div className="findWork active">
      <SVGComponent path='../src/svgs/findWork-01.svg'/>
        <div className="magGlassGroup">
          <div ref="magnifyGlass" className="magnifyGlass">
            <div className="handle">
              <div className="handle-detail"></div>
              <div className="handle-detail-2"></div>
              <div className="handle-detail-3"></div>
            </div>
            <div ref="magnifiedContent" className="magnifiedContent">
              <div className="inside-mag"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FindWork;
