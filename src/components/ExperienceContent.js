import React, { useState } from "react";
import { Row, Col, Card, Button, Collapse, Image } from 'react-bootstrap';
import { AiOutlineCluster, AiOutlineUser, AiOutlineCalendar, AiOutlineCalculator, AiOutlineEnvironment, AiOutlineCheckSquare } from 'react-icons/ai';
import azeusLogo from '../images/azeus.png';
import sunlifeLogo from '../images/sunlife.jfif';
import macquarieLogo from '../images/macquarie.jfif';
import anzLogo from '../images/anz.jfif';
import tyroLogo from '../images/tyro.png';
import suncorpLogo from '../images/suncorp.png';

const data = [
  {
    "company":"Suncorp Group",
    "logo":suncorpLogo,
    "dates":["05/2019 - Present"],
    "lengths":["2years"],
    "locations":"Sydney, Australia",
    "roles":"Software Engineer (w/ Devops)",
    "desc":"Building and continually enhancing Insurance Sales Apps to enable customers to get a quote and buy motor, home, health and business insurance. Finally for the first time in my career, able to use cool new tech stack: ReactJS + Redux, Groovy and Jenkins Pipeline, Ansible, AWS EC2/S3/Cloudformation and Openshift.",
    "highlights":  [
      "converted static AWS EC2s into Auto-Scaling Groups using AWS Cloudformation",
      "migrated backend APIs from AWS EC2 to Openshift",      
      "rewrite Spring Webflow UI to ReactJS UI",
      "replaced callback API downstream Avaya to Genesys"
    ]
  },
  {
    "company":"ANZ Bank",
    "logo":anzLogo,
    "dates":["01/2017 - 05/2019"],
    "lengths":["11months"],
    "locations":"Sydney, Australia",
    "roles": "Java SQL Vaadin Developer",
    "desc":"Worked on a Risk data aggregation + calculation web app built with Spring Boot partitioned as Microservices, SQL Server 2008, Java 8 and Vaadin 7 for UI.",
    "highlights":  [
      "increased usage of Java 8 not only in backend but in UI as well with Vaadin",
      "improved code quality with betterment of unit testing skills with use of Junit, AssertJ, Mockito, Selenium and JaCoCo",
      "in the Microservices world, better understanding of REST, OAuth + JWT, Swagger and Spring Boot",
      "gained business knowledge on contingent collateral and risk weight calculations"
    ]
  },
  {
    "company":"Tyro Payments",
    "logo":tyroLogo,
    "dates":["10/2017 - 11/2017"],
    "lengths":["1.5months"],
    "locations":"Sydney, Australia",
    "roles":"Java Web Developer",
    "desc":"Took a huge risk & ventured the world of strict full-time pair-programming (wholeday, everyday). Unfortunately, full-time pairing took its toll and I was unable to perform at full capacity.",
    "highlights":  [
      "recovered from this setback and persevered with my Java career",
      "got a short glimpse of the Payment domain and experienced albeit shortly, extreme Agile programming"
    ]
  },
  {
    "company":"Macquarie Group",
    "logo":macquarieLogo,
    "dates":["04/2010 - 01/2016", "04/2016 - 10/2016"],
    "lengths":["5years 9months", "7months"],
    "locations":"Makati City, Philippines and Sydney, Australia",
    "roles": "Java SQL ExtJS Unix Developer",
    "desc":"Worked on Java Web apps developed with Spring, Hibernate, jQuery, ExtJS for Macquarie's risk management department. Over 6 years, primarily worked in Java however had exposure to a variety of technologies such as: maintaining legacy reports & jobs written in SQL + Unix, writing ad-hoc SQL scripts, integrating, customizing and deploying vendor products. Last project was a greenfield app for trade lifecycle reporting which was built on Spring Boot, Microservices, MarkLogic (NoSQL), ReactJS and Bootstrap.",
    "highlights":  [
      "promoted to Manager on Apr 2013",
      "awarded on March 2012 with 'RMG Awards: Delivery and Drive' for singlehandedly analyzing / developing the fix for the bank's integration errors due to ASIC's regulatory webservice upgrade and providing manual workaround that prevented regulatory breach and penalties",
      "awarded on November 2012 with 'RMG Awards: Delivery and Drive' for successfully leading / delivering a major development project on schedule even with understaffed team (3 members)",
      "awarded on May 2014 with 'RMG Awards: Client Commitment, Highest Standards, Delivery and Drive' for successfully implementing the IT solutions as envisioned by business users thereby realizing the efficiency gains in business process, if not going beyond expectations",
      "managed and deployed the upgrade of vendor application Actimize Risk Case Manager (RCM); it was highly successful as compared to previous upgrades which had numerous post production issues",
      "member of the pioneer dev team for Sailpoint IIQ (IAM) that was deployed to Sydney, Australia for 5 months; assigned as lead customized reports and connector developer; success of this project paved to growth of hiring developers in Manila"
    ]
  },
  {
    "company":"Sun Life Financial Philippines",
    "logo":sunlifeLogo,
    "dates":["04/2007 - 04/2010"],
    "lengths":["3years"],
    "locations":"Makati City, Philippines",
    "roles":"Java Struts SQL Developer",
    "desc":"Worked as a Java, Web and SQL Developer who implemented business requirements that revolve in insurance domain. Primarily used Spring, Struts, Hibernate but also worked on maintaining legacy apps written in plain JSP + Servlets + JDBC and a Point-of-Sale (POS) payment gateway.",
    "highlights":  [
      "promoted to Analyst Java Developer on Nov 2008",
      "analyzed and fixed synchronization issue in Payment Portal that causes double charging of users' credit card (issue existed since 2003); reduced 90% of support calls related to reversing credit card charges",
      "analyzed and improved Agents' Web App daily average of ~317 SQLExceptions to ~10 (issue existed since 2004); reduced 97 % of excessive database exceptions that were the root cause of system's major erratic behaviour",
      "proposed, designed and implemented a Error Feedback module for Agents' Web App that stores users' error reports accompanied with system generated screenshots; increased 60% of support team's turnaround time by helping them track error reports and providing them accurate data through the screen snapshots"
    ]
  },
  {
    "company":"Azeus Systems Philippines Ltd",
    "logo":azeusLogo,
    "dates":["06/2006 - 11/2006"],
    "lengths":["6months"],
    "locations":"Ortigas City, Philippines",
    "roles":"Junior Developer",
    "desc":"Worked as a Java Junior Developer under the tutelage of senior mentors for this CMMI Level-5 software firm",
    "highlights":  [
      "passed the notorious test/interview of this CMM5 company and secured 1 of 8 junior developer slots allotted for the year 2006",
      "passed the bootcamp training (Java, SQL) with high marks"
    ]
  }
]

const ExperienceItemEntry = ({ company, logo, dates, lengths, locations, roles, desc, highlights, borderType }) => {
  const [open, setOpen] = useState(false);	
	return (
    <>
		<Card border={borderType ? borderType : 'warning'}  style={{display: 'revert'}}>
      <Card.Header as="h5">
        <Image src={logo} style={{float: 'right'}}></Image>
        <p><AiOutlineCluster/>{company} - <AiOutlineEnvironment/>{locations}</p>
                
      </Card.Header>
			<Card.Body>
				<Card.Title >          
          <AiOutlineUser/>{roles}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {dates.map((d, index) => <Row><Col><AiOutlineCalendar/>{d}</Col> <Col><AiOutlineCalculator/>({lengths[index]})</Col></Row>)}
        </Card.Subtitle>
				<Card.Text>
					{desc}
    			</Card.Text>
				<Card.Text>
          <Collapse in={open}>
            <div id="{company}-highlights">
              <ul>
              {highlights.map(h => <li>{h}</li>)}
              </ul>
            </div>
          </Collapse>
          <Button onClick={() => setOpen(!open)}>{open ? 'Hide ' : 'Show '}Highlights</Button>
    		</Card.Text>
			</Card.Body>
		</Card>
    <br/>
    </>
	)
};

const generateArchivedExperienceItemEntry = () => {
	const entries = [<Row><Col><h2>Previous</h2></Col></Row>];
	for (let i = 1; i < data.length; i+=2) {
		if (i+1 < data.length) {
			entries.push(<Row><Col sm={12} lg={6}><ExperienceItemEntry {...data[i]} /></Col><Col sm={12} lg={6}><ExperienceItemEntry {...data[i+1]} /></Col></Row>)
		} else {
    entries.push(<Row><Col sm={12} lg={6}><ExperienceItemEntry {...data[i]} /></Col><Col sm={12} lg={6} style={{textAlign: 'center', verticalAlign: 'center'}}><AiOutlineCheckSquare size='70'/><p>Wow you read all that - thanks! <br/>You reached the end of the Experience section</p></Col></Row>)
		}
	}
	return entries;
}
const ExperienceContent = ({ props }) => {
	return (
		<>
			<Row>
					<Col>
						<h2>Current</h2>
						<ExperienceItemEntry {...data[0]} borderType="success"/>
					</Col>
			</Row>      
			{generateArchivedExperienceItemEntry()}
		</>
	);
}

export default ExperienceContent;
