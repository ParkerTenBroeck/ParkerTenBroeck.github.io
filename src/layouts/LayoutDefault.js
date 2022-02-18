import React, {Component} from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Scrollbars } from 'react-custom-scrollbars';
import { SpringSystem } from 'rebound';


const globalScroll = () =>{
  window.dispatchEvent(new Event('scroll'));
}

function clamp(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

export const getScrollY = () =>{
  return LayoutDefault.test.getScrollTop();
}

export const scrollTo = (e) => {
  let scroll = 0;
  try { 
    scroll = document.querySelector(e).getBoundingClientRect().top + getScrollY();
  } catch (error) {
    
  }
  scrollTop(scroll);
}

export const scrollTop = (top) => {
  const springSystem = new SpringSystem();
  const spring = springSystem.createSpring();
  spring.addListener({ onSpringUpdate: () => {
    const scrollbars =  LayoutDefault.test;
    const val = spring.getCurrentValue();
    scrollbars.scrollTop(val);
  } });

  const scrollbars = LayoutDefault.test;
  const scrollTop = scrollbars.getScrollTop();
  const scrollHeight = scrollbars.getScrollHeight();
  const val = clamp(top, 0, scrollHeight - window.innerHeight);

  spring.setCurrentValue(scrollTop).setAtRest();
  spring.setEndValue(val );

  const test = () => {
    if(Math.abs(Math.floor(clamp(spring.getCurrentValue(), 0, scrollHeight - window.innerHeight)) - scrollbars.getScrollTop()) < 1){
    }else{
      window.removeEventListener('scroll', test);
      spring.listeners = () => {};
    }
  }
  window.addEventListener('scroll', test);
}

export default class LayoutDefault extends Component {

  constructor(children, props, ...rest) {
    super(children, props, ...rest);
    this.children = children;
} 

static test;
 
    render() {

      let tmp= 
        <>
          <Header navPosition="left" className="reveal-from-bottom" />
    
            <main className="site-content">
              <Scrollbars ref="scrollbars"  id="Main-ScrollBar" style={{position:"absolute", overflowX:"hidden"}}
              renderThumbVertical={({ style, ...props }) =>
              <div {...props} style={{ ...style, backgroundColor: 'rgba(80,80,80, 0.5)',borderRadius:'inherit'}}/>
            }
            onScroll={globalScroll}>
              {this.children.children}
                <Footer />
              </Scrollbars>
            </main>
        </>
        
        LayoutDefault.test = this.refs.scrollbars;
        return tmp;
    }
}

//const LayoutDefault = ({ children }) => {



//}
//export default LayoutDefault;  