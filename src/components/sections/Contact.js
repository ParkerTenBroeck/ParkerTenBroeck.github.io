import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button'
import TextArea from '../elements/TextArea'

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const contact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'contact section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'contact-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'contact-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="contact-slogan">
            <h3 className="m-0 mb-32">
              Get In Touch
            </h3>
            <p className="mb-32">
              Fill in the form to get in touch.
            </p>
              <p class="text-xs mb-32 ml-8" style={{'display':'flex', 'justifyContent':'flex-start', 'alignItems':'center'}}>
                <svg style={{'display': 'block','marginRight':'8px','marginLeft':'0px','height': '100%'}} 
                     stroke="currentColor" 
                     fill="currentColor" 
                     stroke-width="0" 
                     viewBox="0 0 12 16" 
                     height="16px" 
                     width="16px" 
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z">
                  </path>
                </svg>
                <span>Ontario, Canada</span>
              </p>
              <p class="text-xs mb-0 ml-8" style={{'display':'flex', 'justifyContent':'flex-start', 'alignItems':'center'}}>
              <svg style={{'minWidth':'16px','display': 'block','marginRight':'8px','marginLeft':'0px','height': '100%'}} 
                   stroke="currentColor" 
                   fill="currentColor" 
                   stroke-width="0" 
                   viewBox="0 0 512 512" 
                   height="16px" 
                   width="16px" 
                   xmlns="http://www.w3.org/2000/svg">
                <rect width="416" height="320" x="48" y="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="40" ry="40"></rect>
                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112">
                </path>
                </svg>
                <span>parkertenbroeck@gmail.com</span>
              </p>
          </div>
          <div className="contact-action">
            <Input className='mb-16' style={{'borderRadius':'8px'}} id="contact-name" type="string" label="Subscribe" labelHidden placeholder="Your Name">

            </Input>
            <Input className='mb-16' style={{'borderRadius':'8px'}} id="contact-email" type="email" label="Subscribe" labelHidden placeholder="Your Email">

            </Input>
            <Input className='mb-16' style={{'borderRadius':'8px'}} id="contact-subject" type="string" label="Subscribe" labelHidden placeholder="Subject">
            </Input>
            <TextArea className='mb-16' type='textarea' style={{'justifyContent':'top','minHeight':'96px','borderRadius':'8px'}} id="contact-message" size='xl' type="string" label="Subscribe" labelHidden placeholder="Message">
            </TextArea>
            <Button onClick={emailTimeBaby}  style={{'width':'100%', 'borderRadius':'8px'}} color="secondary" label="Subscribe" labelHidden>
              Send a message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function emailTimeBaby(){
  var name = document.getElementById('contact-name').value;
  var email = document.getElementById('contact-email').value;
  var subject = document.getElementById('contact-subject').value;
  var message = document.getElementById('contact-message').value;
  actuallySendEmail(name, email, subject, message);
}

function actuallySendEmail(name, email, subject, message){
  var payload = {"name": escape(name), "email": escape(email), "subject":escape(subject), "message":escape(message)};
  console.log(payload);

  var xhr = new XMLHttpRequest();
  var request = "mailto:parkertenbroeck@gmail.com?subject="+
    payload['subject']+":Contact%20Request%20From%20'" + 
    payload['name'] + "'%20Best%20Email%20'"+ 
    payload['email']+"'&body=" + 
    payload['message'];

    window.open(request);
}

contact.propTypes = propTypes;
contact.defaultProps = defaultProps;

export default contact;