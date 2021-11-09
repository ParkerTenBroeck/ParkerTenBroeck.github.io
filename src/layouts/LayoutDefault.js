import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Scrollbars } from 'react-custom-scrollbars';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="left" className="reveal-from-bottom" />

      <main className="site-content">
        <Scrollbars id="Main-ScrollBar" style={{position:"absolute", overflowX:"hidden"}}>
          {children}
          <Footer />
        </Scrollbars>
      </main>
  </>
);

export default LayoutDefault;  