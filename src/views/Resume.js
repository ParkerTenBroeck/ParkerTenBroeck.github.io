import React from 'react';
// import sections
import {ReactComponent as SuitcaseSVG} from './../assets/images/icons/suitcase.svg';
import {ReactComponent as CalendarSVG} from './../assets/images/icons/calendar.svg';
import {ReactComponent as AwardSVG} from './../assets/images/icons/award.svg';
import {ReactComponent as CertificateSVG} from './../assets/images/icons/certificate.svg';
import {ReactComponent as UsersSVG} from './../assets/images/icons/users.svg';
import {ReactComponent as BookSVG} from './../assets/images/icons/book.svg';


const Home = () => {

  return (
    <>
    <section id="resume" className="section">
      <div className="container card-tile tiles-item-inner">
        <div className="card-inner">
          <t1  className="text-lg">
          <BookSVG 
          className="mr-4 text-color-secondary"
                alt="book"
                width="32px"
                height="32px"
                style = {{display: "inline-block",
                  fontStyle: "normal",
                  lineHeight: "0",
                  textAlign: "center",
                  textTransform: "none",
                  verticalAlign:"-0.256em"}}>
          </BookSVG>
          Profile Of Skills</t1>
            <div className="container">
              <div className="">

              </div>
              <div className="mt-16 top-border"> 
                <p className="text-l">Stuff</p>
              </div>
            </div>
        </div>
      </div>
      <div className="container tiles-item-inner card-tile">
        <div className="card-inner">
          <t1  className="text-lg">
          <CertificateSVG 
          className="mr-4 text-color-secondary"
                alt="certificate"
                width="32px"
                height="32px"
                style = {{display: "inline-block",
                  fontStyle: "normal",
                  lineHeight: "0",
                  textAlign: "center",
                  textTransform: "none",
                  verticalAlign:"-0.256em"}}>
          </CertificateSVG>
          Education</t1>
            <div className="container">
              <div className="">

              </div>
              <div className="mt-16 top-border"> 
                <p className="text-l">Stuff</p>
              </div>
            </div>
        </div>
      </div>
      <div className="container tiles-item-inner  card-tile">
        <div className="card-inner">
          <t1  className="text-lg">
          <SuitcaseSVG 
          className="mr-4 text-color-secondary"
                alt="suitcase"
                width="32px"
                height="32px"
                style = {{display: "inline-block",
                  fontStyle: "normal",
                  lineHeight: "0",
                  textAlign: "center",
                  textTransform: "none",
                  verticalAlign:"-0.256em"}}>
          </SuitcaseSVG>
          Experience</t1>
            <div className="container">
              <div className="">

              </div>
              <div className="mt-16 top-border"> 
                <p className="text-l">
                <CalendarSVG 
          className="mr-4 text-color-secondary"
                alt="calendar"
                width="16px"
                height="16px"
                style = {{display: "inline-block",
                  fontStyle: "normal",
                  lineHeight: "0",
                  textAlign: "center",
                  textTransform: "none",
                  verticalAlign:"-0.05em"}}>
          </CalendarSVG>
                  Date</p>
              </div>
            </div>
        </div>
      </div>
      <div className="container tiles-item-inner  card-tile">
        <div className="card-inner">
          <t1  className="text-lg">
          <UsersSVG 
          className="mr-4 text-color-secondary"
                alt="users"
                width="32px"
                height="32px"
                style = {{display: "inline-block",
                  fontStyle: "normal",
                  lineHeight: "0",
                  textAlign: "center",
                  textTransform: "none",
                  verticalAlign:"-0.256em"}}>
          </UsersSVG>
          Volunteer Experience And Community Involvement</t1>
            <div className="container">
              <div className="">

              </div>
              <div className="mt-16 top-border"> 
                <p className="text-l">Stuff</p>
              </div>
            </div>
        </div>
      </div>
      <div className="container tiles-item-inner  card-tile">
      <div className="card-inner">
          <t1  className="text-lg">
          <AwardSVG 
          className="mr-4 text-color-secondary"
                alt="users"
                width="32px"
                height="32px"
                style = {{display: "inline-block",
                  fontStyle: "normal",
                  lineHeight: "0",
                  textAlign: "center",
                  textTransform: "none",
                  verticalAlign:"-0.256em"}}>
          </AwardSVG>
          Accomplishments</t1>
            <div className="container">
              <div className="">

              </div>
              <div className="mt-16 top-border"> 
                <p className="text-l">Stuff</p>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;