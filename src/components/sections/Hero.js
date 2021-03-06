import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import FooterSocial from '../layout/partials/FooterSocial'
import LogoRound from '../layout/partials/LogoRound';
import { Link } from "react-router-dom";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Software Developer.", "Student.", "Cat Lover."];
    

    function setText(text){
      for(let element of document.getElementsByClassName('typeWritter')) element.innerHTML = text;
    }
    function setBlink(blink){
      if(blink){
        for(let element of document.getElementsByClassName('blink')) element.classList.add('blinking-animation');
      }else{
        for(let element of document.getElementsByClassName('blink')) element.classList.remove('blinking-animation');
      }
    }
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, erase, fnCallback) {
      // chekc if text isn't finished yet
      if (!erase && i < (text.length)) {
        // add next character to h1
       setText(text.substring(0, i+1));

       if(i + 1 === text.length){
        setBlink(true);
        setTimeout(function() {
          setBlink(false);
          typeWriter(text, i + 1,true, fnCallback)
        }, 800);
       }else{
          // wait for a while and call this function again for next character if its the last char then wait a little longer :)
          setTimeout(function() {
            typeWriter(text, i + 1,false, fnCallback)
          }, 100);
       }
      }else if(i > 0){
        setText(text.substring(0, i-1));
        // delete last char
        setTimeout(function() {
          typeWriter(text, i - 1, true , fnCallback)
        }, 40);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback
        fnCallback();
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (dataText.length <= i){
          //restart
          i = 0;
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, false, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container tiles-item-inner">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="reveal-from-bottom logo-round-above-container" data-reveal-offset="0" data-reveal-delay="100">
              <LogoRound/>
            </div>
            <h4 className="mt-0 mb-16 reveal-from-bottom" data-reveal-offset="0" data-reveal-delay="200">
              Parker TenBroeck
            </h4>
            <div className="container">
              <p className="text-xs reveal-from-bottom" data-reveal-offset="0" data-reveal-delay="400" style={{'marginBottom':'16px','display':'flex', 'justifyContent':'flex-start', 'alignItems':'center'}}>
                <svg style={{'display': 'block','marginRight':'8px','marginLeft':'0px','height': '100%'}} 
                     stroke="currentColor" 
                     fill="none" 
                     strokeWidth="0" 
                     viewBox="0 0 24 24" 
                     className="text-gray-700 dark:text-gray-500 mr-4 md:mt-0.5" 
                     height="1em" 
                     width="1em" 
                     xmlns="http://www.w3.org/2000/svg">
                       <path d="M14 11H10V13H14V11Z" fill="currentColor">
                         </path>
                         <path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" fill="currentColor">
                       </path>
                       </svg>
                <span className="typeWritter"></span>
                <span className="blink">|</span>
              </p>
              <p className="text-xs reveal-from-bottom" data-reveal-offset="0" data-reveal-delay="400" style={{'marginBottom':'16px','display':'flex', 'justifyContent':'flex-start', 'alignItems':'center'}}>
                <svg style={{'display': 'block','marginRight':'8px','marginLeft':'0px','height': '100%'}} 
                     stroke="currentColor" 
                     fill="currentColor" 
                     stroke-size="0" 
                     viewBox="0 0 12 16" 
                     height="1em" 
                     width="1em" 
                     xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z">
                  </path>
                </svg>
                <span>Ontario, Canada</span>
              </p>
              <p className="text-xs m-0 mb-32 reveal-from-bottom" style={{'textAlign':'left'}} data-reveal-offset="0" data-reveal-delay="600">
                My name is Parker TenBroeck. I'm an aspiring Software Developer, student, and cat lover.
                I thoroughly enjoy writing in Java, Rust, C and C++ with well-developed skills in JavaScript, Assembly(MIPS) and HTML. 
                My programming experience is predominantly from personal projects, with school work making up the rest.
                I enjoy taking part and contributing to the open-source community, publishing my work for others to use.
                I am also a well-developed leader with experience as a student team-lead on a world champion FRC(First Robotics Competition) Robotics team, Simbotics 1114.
                I have always wanted to work with computers to learn and contribute to technology. 
                Apart from that, when I'm not coding and the cold season's here, I love to head to the slopes and ski.
              </p>
              <div className="text-xxs reveal-from-bottom mb-16" style={{'textAlign':'left'}} data-reveal-offset="0" data-reveal-delay="800">
                <Link to="/resume/">
                  <Button size="sm" className="text-xxs" style={{'borderRadius':'20px'}} color="primary" >
                      See Resume
                  </Button>
                </Link>
              </div>
              <div className="reveal-from-bottom" data-reveal-offset="0"  data-reveal-delay="1000">
                <FooterSocial iconSize="28px" wide/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;