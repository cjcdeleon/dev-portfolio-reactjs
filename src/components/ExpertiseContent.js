import React, { useState } from "react";
import { Row, Col, Badge } from 'react-bootstrap';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { VscDebugConsole } from "react-icons/vsc";

const techSkillsData = [
  {
    "category": "Most Recent + Significant",
    "styling": "primary",
    "details": [
      "AWS", "EC2", "S3", "Cloudformation", "ASG",
      "Openshift",
      "Jenkins pipeline", "Groovy",
      "Ansible", "Python",
      "ReactJs + Redux",
      "Cypress",
      "Devops",
    ]

  },
  {
    "category": "Primary Expertise",
    "styling": "success",
    "details": [
      "Java",
      "Spring Boot",
      "JPA + Hibernate",
      "SQL",
      "Javascript"
    ]
  },
  {
    "category": "Databases",
    "styling": "success",
    "details": [
      "Sybase15",
      "SQL Server 2008",
      "Oracle10g",
      "DB2v8",
      "MarkLogic8",
    ]
  },
  {
    "category": "Misc",
    "styling": "warning",
    "details": [
      "Maven",
      "Gradle",
      "Git",
      "Npm",
      "Unix Scripting",
      "Splunk",
    ]
  },
  {
    "category": "Archived Skills",
    "styling": "danger",
    "details": [
      "Vaadin",
      "ExtJS",
      "Jquery",
      "Bootstrap",
      "Struts",
      "CXF",
      "Axis",
      "JasperReports",
      "iText",
      "POI",
      "Java Comms API (POS epay)",
      "Sailpoint IIQ",
      "Actimize RCM",
      "IRESS",
      "Reuters Datascope",
      "FT Interactive",
      "Ingenium",
      "CVS",
      "SVN",
      "Remedy",
      "Control-M",
      "Ant",
    ]
  }
];

const domainSkillsData = [
  {
    "category": "General Insurance",
    "styling": "primary",
    "details": ["motor", "home", "business", "insurance quote apps"]
  },
  {
    "category": "Risk Management",
    "styling": "success",
    "details": ["tracking conflict of interest", "securities research and disclosures", "trade restrictions", "trade surveillance", "chinese walls"]
  },
  {
    "category": "Regulatory",
    "styling": "success",
    "details": ["long position reporting", "short position reporting", "antimoney-laundering (AML)", "counterterrorism financing(/CTF)"]
  },
  {
    "category": "Market Data",
    "styling": "warning",
    "details": ["equity (via Reuters) processing", "issued capital (via FT Interactive) processing"]
  },
  {
    "category": "Identity Access Mgt",
    "styling": "danger",
    "details": ["access aggregation", "automated certifications", "policy management", "provisioning"]
  },
  {
    "category": "Life Insurance",
    "styling": "danger",
    "details": ["application entry", "underwriting", "policy contracts", "billing", "e-premium pay(POS portal)"]
  },

];

const SkillsItemEntry = ({ category, styling, details }) => {
  return (
    <>
      <dl >
        <dt>{category}{': '}</dt>
        <dd style={{ marginBottom: '10px' }}>
          {details.map(item =>
            <Badge pill variant={styling ? styling : 'secondary'} style={{ margin: '2px' }}>
              {item}
            </Badge>)
          }
        </dd>
      </dl>
    </>
  )
};

const ExpertiseContent = ({ props }) => {
  return (
    <>
      <Row>
        <Col sm={12} lg={6}>
          <h2 style={{ textAlign: 'center', verticalAlign: 'center' }}>
            <VscDebugConsole size='70' /> Tech Skills
          </h2>
          {techSkillsData.map(d => <SkillsItemEntry {...d} />)}
        </Col>
        <Col sm={12} lg={6}>
          <h2 style={{ textAlign: 'center', verticalAlign: 'center' }}>
            <AiOutlineFundProjectionScreen size='70' /> Domain Knowledge
          </h2>
          {domainSkillsData.map(d => <SkillsItemEntry {...d} />)}
        </Col>
      </Row>
    </>
  );
}

export default ExpertiseContent;
