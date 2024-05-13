import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { CustomCarousel } from "../../components/costomCarousel/CustomCarousel";
import Container from "react-bootstrap/esm/Container";
import { Col, Row, Form } from "react-bootstrap";

import { CustomCard } from "../../components/customcad/CustomCard";

const Home = () => {
  return (
    <DefaultLayout>
      <CustomCarousel />

      {/* booklist */}
      <Container>
        <Row>
          <Col className="d-flex justify-content-between mt-5">
            <label htmlFor="">20 books found</label>
            <div>
              <Form.Control placeholder="search by book name" />
            </div>
          </Col>
        </Row>
        <hr />
        <Col>
          <CustomCard />
        </Col>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
