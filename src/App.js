import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
//import ReactGA from 'react-ga';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Resume from './views/Resume';
import {scrollTo} from './layouts/LayoutDefault'

// Initialize Google Analytics
//ReactGA.initialize(process.env.REACT_APP_GA_CODE);


const trackPage = page => {
  //ReactGA.set({ page });
  //ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    handleLoad();

    const tmp = function(){
      handleLoad();
      window.removeEventListener("hashchange", tmp);
      window.removeEventListener("load", tmp);
    }
    window.addEventListener('hashchange', tmp, false);
    window.addEventListener("load", tmp);
  }, []);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/resume" component={Resume} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

const handleLoad = () => {
  let test = window.location.href.substring(window.location.href.lastIndexOf('#'), window.location.href.length);
  scrollTo(test);
}

export default App;