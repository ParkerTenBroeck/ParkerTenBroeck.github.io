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
          <div className="mb-32">
            <p  className="text-lg">
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
            Profile Of Skills</p>
          </div>
          <div className="container">
              <div className="">
              </div>
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">Programing</p>
                <ul className="text-xxs">
                  <li>Highly fluent in Java with intermediate skills in C/C++ and MIPS Assembly.</li>
                  <li>Basic Web Development using HTML, CSS, JavaScript for frontend and PHP, SQL for backend.</li>  
                </ul>
              </div>
          </div>
          <div className="container">
              <div className="top-border">
              </div>
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">Software / Productivity Tools</p>
                <ul className="text-xxs">
                  <li>Comfortable using the Microsoft Office Suite tools such as Excel, Word, PowerPoint, and Outlook.</li>
                  <li>Familiar with communication and planning software such as Trello and Slack.</li>  
                </ul>
              </div>
          </div>
          <div className="container">
              <div className="top-border">
              </div>
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">Computer Engineering</p>
                <ul className="text-xxs">
                  <li>Developed a SAP 1 CPU architecture with custom ISA as a high school sophomore.</li>
                  <li>Developed a MIPS CPU architecture with custom ISA as a high school senior.</li>  
                </ul>
              </div>
          </div>
          <div className="container">
              <div className="top-border">
              </div>
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">Team Building / Management</p>
                <ul className="text-xxs">
                  <li>Excellent problem-solving skills both in a team setting and independently.</li>
                  <li>Well-rounded project management skills from CO-OP experiences and personal projects.</li>  
                </ul>
              </div>
          </div>
        </div>
      </div>
      
      
      
      <div className="container tiles-item-inner card-tile">
        <div className="card-inner">
          <div className="mb-32">
            <p  className="text-lg">
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
            Education</p>
          </div>
          <div className="container">
            <div className="mt-16 mr-16 ml-16"> 
              <p className="text-sm mb-16">Bachelor of Electrical and Computer Engineering</p>
              <p className="mb-16">
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
                <span className="text-xs text-color-secondary">Fall 2020 - Winter 2021</span>
              </p>
              <p className="text-xxs">The University of Windsor, Windsor, Ontario</p>
            </div>
          </div>
          <div className="container top-border">
            <div className="mt-16 mr-16 ml-16"> 
              <p className="text-sm mb-16">Ontario Secondary School Graduate Diploma – High Honours</p>
              <p className="mb-16">
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
                <span className="text-xs text-color-secondary">2016 - 2020</span>
              </p>
              <p className="text-xxs">Governor Simcoe Secondary School, St. Catharines, Ontario</p>
            </div>
          </div>
          
        </div>
      </div>
      
      
      
      <div className="container tiles-item-inner  card-tile">
        <div className="card-inner">
          <div className="mb-32">
            <p  className="text-lg">
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
            Experience</p>
          </div>
          <div className="container">
            <div className="mt-16 mr-16 ml-16"> 
              <p className="text-sm mb-16">Software Developer</p>
              <p className="mb-16">
                <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                <span className="text-xs text-color-secondary">Sept 2019 - </span><span className="background-color-secondary text-xs text-color-black medium-rounded-border pl-4 pr-4">Present</span>
              </p>
              <p className="text-xxs">Governor Simcoe Secondary School, St. Catharines, Ontario</p>
              <ul className="text-xxs">
                <li>Developed and currently maintaining the MIPS virtual processor and assembler.</li>  
              </ul>
            </div>
          </div>
          <div className="container top-border">
            <div className="mt-16 mr-16 ml-16"> 
              <p className="text-sm mb-16">1114 Simbotics Student Team Lead</p>
              <p className="mb-16">
                <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                <span className="text-xs text-color-secondary">2016 - 2020</span>
              </p>
              <p className="text-xxs">Governor Simcoe Secondary School, St. Catharines, Ontario</p>
              <ul className="text-xxs">
                <li>Student lead FIRST Robotics Competition.</li>
                <li>Helped design, manufacture, and wire both the competition and practice robot.</li>
                <li>Demonstrate effective communication skills, collaborating with mentors and other teams.</li>  
              </ul>
            </div>
          </div>
          <div className="container top-border">
            <div className="mt-16 mr-16 ml-16"> 
              <p className="text-sm mb-16">Cashier</p>
              <p className="mb-16">
                <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                <span className="text-xs text-color-secondary">2017 - 2018</span>
              </p>
              <p className="text-xxs">Tina’s Niagara Selection, St. Catharines, Ontario</p>
              <ul className="text-xxs">
                <li>Retail sales, handling cash and transactions.</li>
                <li>Customer service.</li>
                <li>Stocking food and creating/maintaining food displays.</li>  
              </ul>
            </div>
          </div>
          <div className="container top-border">
            <div className="mt-16 mr-16 ml-16"> 
              <p className="text-sm mb-16">Student Summer Maintenance Position</p>
              <p className="mb-16">
                <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                <span className="text-xs text-color-secondary">June 2021 - Aug 2021</span>
              </p>
              <p className="text-xxs">Municipal Works, City of St. Catharines, Ontario</p>
              <ul className="text-xxs">
                <li>Maintained and cleaned parks and sports fields in the city of St. Catharines.</li>
                <li>Operated Heavy Lawn cutting/trimming equipment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      
      
      <div className="container tiles-item-inner  card-tile">
        <div className="card-inner">
          <div className="mb-32">
            <p  className="text-lg">
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
            Volunteer Experience And Community Involvement</p>
          </div>
            <div className="container">
              
            <div className="container">
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">AV Tech Crew</p>
                <p className="mb-16">
                  <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                  <span className="text-xs text-color-secondary">2016 - 2020</span>
                </p>
                <p className="text-xxs">Governor Simcoe Secondary School, Simbotics 1114, St. Catharines, Ontario</p>
              </div>
            </div>
            <div className="container top-border">
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">Vollyball</p>
                <p className="mb-16">
                  <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                  <span className="text-xs text-color-secondary">2018 - 2019</span>
                </p>
                <p className="text-xxs">Rapids Volleyball, St. Catharines, Ontario</p>
              </div>
            </div>
            <div className="container top-border">
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">City Maintenance / City Involvement</p>
                <p className="mb-16">
                  <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                  <span className="text-xs text-color-secondary">June 2021 - Aug 2021</span>
                </p>
                <p className="text-xxs">Municipal Works, City of St. Catharines, Ontario</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      
      
      <div className="container tiles-item-inner  card-tile">
      <div className="card-inner">
        <p  className="text-lg">
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
            Accomplishments</p>
          <div className="container">
            <div className="container">
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">High School Tech Award</p>
                <p className="mb-16">
                  <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                  <span className="text-xs text-color-secondary">2020</span>
                </p>
                <p className="text-xxs">Governor Simcoe Secondary School, St. Catharines, Ontario</p>
              </div>
            </div>
            <div className="container top-border">
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">FIRST Dean's List Semi-Finalist</p>
                <p className="mb-16">
                  <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                  <span className="text-xs text-color-secondary">2019</span>
                </p>
                <p className="text-xxs">Simbotics 1114</p>
              </div>
            </div>
            <div className="container top-border">
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">World Championship Rank 1, Finalist</p>
                <p className="mb-16">
                  <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                  <span className="text-xs text-color-secondary">2019</span>
                </p>
                <p className="text-xxs">Detroit, MI, Curie Division, Team 1114</p>
              </div>
            </div>
            <div className="container top-border">
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">FIRST Ontario Provincial Championship Winner</p>
                <p className="mb-16">
                  <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                  <span className="text-xs text-color-secondary">2019</span>
                </p>
                <p className="text-xxs">Ontario, Science Division, Team 1114</p>
              </div>
            </div>
            <div className="container top-border">
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">STEMley Cup Championship</p>
                <p className="mb-16">
                  <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                  <span className="text-xs text-color-secondary">2018</span>
                </p>
                <p className="text-xxs">Team 1114</p>
              </div>
            </div>
            <div className="container top-border">
              <div className="mt-16 mr-16 ml-16"> 
                <p className="text-sm mb-16">World Championship Subdivision Finalist</p>
                <p className="mb-16">
                  <CalendarSVG className="mr-4 text-color-secondary" alt="calendar" width="16px" height="16px" style = {{display: "inline-block", fontStyle: "normal", lineHeight: "0", textAlign: "center", textTransform: "none", verticalAlign:"-0.05em"}}></CalendarSVG>
                  <span className="text-xs text-color-secondary">2017</span>
                </p>
                <p className="text-xxs">St. Louis MO, Darwin Division, Team 1114</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;