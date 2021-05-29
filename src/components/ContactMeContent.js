import React from "react";
import { Row, Col, Image, Media } from 'react-bootstrap';
import { AiOutlineSmile } from "react-icons/ai";
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoLogoLinkedin, IoLogoGithub, IoLogoStackoverflow, IoThumbsUpSharp } from "react-icons/io5";
import profile from '../images/profile2.jpg';

const ContactMeContent = ({ props }) => {
  return (
    <>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center', verticalAlign: 'center' }}>
            Hello World <AiOutlineSmile size={42} />
          </h2>
        </Col>
      </Row>
      <Row>
        <Col lg={3} sm={12}>{' '}</Col>
        <Col lg={3} sm={12}>
          <Image src={profile} responsive thumbnail />
        </Col>
        <Col lg={3} sm={12}>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <IoCallOutline size={42} />
              <a href="tel:+61413201841">+61413201841</a>
            </li>
            <li>
              <IoMailOutline size={42} />
              <a href="mailto:cjcdeleon@gmail.com">cjcdeleon@gmail.com</a>
            </li>
            <li>
              <IoLocationOutline size={42} />
                  Sydney, Australia
                </li>
            <li>
              <a href="https://www.linkedin.com/in/carlos-jaime-de-leon-a6771b2a/">
                <IoLogoLinkedin size={42} />
              </a>
              <a href="https://github.com/cjcdeleon">
                <IoLogoGithub size={42} />
              </a>
              <a href="https://stackoverflow.com/users/849256/carlos-jaime-c-de-leon?tab=topactivity">
                <IoLogoStackoverflow size={42} />
              </a>
            </li>
          </ul>
        </Col>
        <Col lg={3} sm={12}>{' '}</Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center', verticalAlign: 'center' }}>
            Thanks the visit <IoThumbsUpSharp size={42} />
          </h2>
        </Col>
      </Row>
    </>
  );
}

export default ContactMeContent;
