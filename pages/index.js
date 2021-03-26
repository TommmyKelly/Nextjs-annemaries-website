import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import { Testimonials } from "data";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import TestimonialCard from "components/TestimonialCard";

export default function Home() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col
          className='d-flex  justify-content-center align-items-center '
          sm={12}
          md={12}
          lg={5}
        >
          <img className='mt-5 mt-md-5 mt-lg-0' src='/vercel.svg' alt='' />
        </Col>
        <Col sm={12} md={12} lg={7} className='mt-4 text-center'>
          <h1>Anne Marie’s Content Creations</h1>
          <p>
            Bespoke authentic high-quality content created with passion and
            drive.{" "}
          </p>
          <p>
            I have been developing content for businesses since 2016. My areas
            of expertise are medical, healthcare, health education course
            development, training materials, newsletters, trade articles, white
            papers, website development, website content, blogs, email
            campaigns, and much more.
          </p>
          <p>
            Having worked with some major global players, I totally get what a
            business needs in terms of content- that’s why I follow my golden
            rules of writing quality pieces, backed up by current evidence, and
            displayed with a sprinkle of passion. I will work for your business
            to a very high standard, and I have many excellent client
            testimonials to prove I play seriously.
          </p>
          <p>
            Your business needs to garb an audience specific to your niche, real
            the reader in, engage them, interest them, and help encourage them
            to look no further- you have what they need, even if they don’t know
            it yet!
          </p>
          <p>
            If you want to grow your business whatever the platform, give me a
            call or drop me a quick mail today and I will endeavour to reply
            immediately.
          </p>
          <p>
            Rates are reasonable, deadlines are always met, and quality content
            tailored to your business needs will be delivered.
          </p>
        </Col>
      </Row>
      <hr style={{ border: "1px solid white", height: 0 }} />
      <Row>
        {Testimonials.map((t) => (
          <Col sm={12} md={4}>
            <TestimonialCard t={t} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const ImgContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  border: 1px solid black;
`;
