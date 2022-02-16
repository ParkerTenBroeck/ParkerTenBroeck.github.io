import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Scrollbars } from 'react-custom-scrollbars';


const globalScroll = () =>{
  window.dispatchEvent(new Event('scroll'));
}

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="left" className="reveal-from-bottom" />

      <main className="site-content">
        <Scrollbars id="Main-ScrollBar" style={{position:"absolute", overflowX:"hidden"}}
        renderThumbVertical={({ style, ...props }) =>
        <div {...props} style={{ ...style, backgroundColor: 'rgba(80,80,80, 0.5)',borderRadius:'inherit'}}/>
      }
      onScroll={globalScroll}>
          {children}
          <Footer />
        </Scrollbars>
      </main>
  </>
);

export default LayoutDefault;  