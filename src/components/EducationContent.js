import React from "react";
import { Row, Col, Image } from 'react-bootstrap';
import { FaGraduationCap, FaCertificate, FaBook } from 'react-icons/fa';
import aws from '../images/aws.jpg';
import dlsu from '../images/dlsu.png';
import spring from '../images/spring.png';
import sunmicro from '../images/sunmicro.png';
import phoenix from '../images/phoenix.png';

const educationData = [
  {
    "category": "University",
    "details": "De La Salle University",
    "date": "2002 - 2006",
    "logo": dlsu,
    "notes": ["First Honors Dean's List 1st Term 2005 - 2006", "Second Honors Dean's List 3rd Term 2005 - 2006"]
  },
  {
    "category": "Certifications",
    "details": "AWS Certified Solutions Architect - Associate",
    "date": "June 2020 - 2023",
    "logo": aws,
    "notes": ["<a href='https://www.youracclaim.com/badges/d2e237fd-f194-45c3-b0f9-1345990641f4/linked_in_profile'>J2K6BEM2FMB1Q8CW</a>"]
  },
  {
    "category": "Certifications",
    "details": "SpringSource Certified Spring 3 Professional",
    "date": "August 2012",
    "logo": spring,
  },
  {
    "category": "Certifications",
    "details": "Sun Microsystems Certified Web Component Developer JEE5",
    "date": "February 2010",
    "logo": sunmicro,
  },
  {
    "category": "Certifications",
    "details": "Sun Microsystems Certified Java Programmer 1.4",
    "date": "November 2007",
    "logo": sunmicro,
  },
  {
    "category": "Trainings",
    "details": "Core Spring by SpringSource",
    "date": "July 9-12, 2012",
    "logo": spring,
  },
  {
    "category": "Trainings",
    "details": "Object Oriented Analysis and Design by Sun Microsystems",
    "date": "July 20-24, 2009",
    "logo": sunmicro,
  },
  {
    "category": "Trainings",
    "details": "Spring Framework by Phoenix One Knowledge Solutions",
    "date": "January 22-25, 2008",
    "logo": phoenix,
  },
  {
    "category": "Trainings",
    "details": "Programming in J2EE by Phoenix One Knowledge Solutions",
    "date": "July 30 - August 3, 2007",
    "logo": phoenix,
  },
];

const EducationItemEntry = ({ details, logo, date, notes }) => {
  return (
    <>
    <dl class="row border-left" style={{margin: '3px', marginBottom: '20px'}}>
        <dt class="col-sm-2">
          <Image src={logo} style={{height: '50px', width: '50px'}}/>
        </dt>
        <dd style={{ marginBottom: '10px' }} class="col-sm-10">
          <h6>{details}</h6>
          {' '}({date})
          {notes && 
            <ul>
              {notes.map(n => 
                <li>
                  <div dangerouslySetInnerHTML={{ __html: n }} />
                </li>)}
            </ul>
          }
        </dd>
    </dl>
    </>
  )
};

const EducationSubSection = ({ iconComponent, categoryValue }) => {
  return (
  <>
    <Col sm={12} lg={4}>
      <h2 style={{ textAlign: 'center', verticalAlign: 'center' }}>
        {React.createElement(iconComponent, { size: 70 })} {categoryValue}
      </h2>
      {educationData.filter(d => d.category === categoryValue).map(d => <EducationItemEntry {...d} />)}
    </Col>
  </>
  )
};

const ExpertiseContent = ({ props }) => {
  const sections = [
    {
      iconComponent: FaGraduationCap,
      categoryValue: "University",
    },
    {
      iconComponent: FaCertificate,
      categoryValue: "Certifications",
    },
    {
      iconComponent: FaBook,
      categoryValue: "Trainings",
    },
  ];
  return (
    <>
      <Row>
        {sections.map(s => <EducationSubSection {...s}/>)}
      </Row>
    </>
  );
}

export default ExpertiseContent;
