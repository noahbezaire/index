/*!

=========================================================
* BLK Design System PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Content() {
  return (
    <>
      <div className="section section-content" data-background-color="black">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="6">
              <div className="section-description">
                <h1 className="title">Co-Operative Education</h1>
                <h5 className="category text-danger mb-5">
                  <strong>#1 Coop Program</strong>
                </h5>
                <p className="description">
                  {`We took into consideration multiple use cases and came up with some specific areas for you. If you need elements such as tables, comments, description areas, tabs and many others, we've got you covered. They're beautiful and easy to use for the end user navigating your website.`}
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="image-container">
                <img
                  alt="..."
                  className="img img-raised rounded img-blog rellax"
                  data-rellax-speed="4"
                  src={require("assets/img/presentation-page/content1.png")}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}
