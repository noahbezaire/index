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
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";




export default function ContactUs() {
  const [firstNameFocus, setFirstNameFocus] = React.useState(undefined);
  const [lastNameFocus, setLastNameFocus] = React.useState(undefined);
  const [emailFocus, setEmailFocus] = React.useState(undefined);
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("contact-page");
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  }, []);
  return (
    <>
      <div className="wrapper" ref={wrapper}>
          <Container>
            <Row className="mt-5 mb-4 pt-5">
              <Col className="ml-auto mr-auto text-center mt-5" md="8">
                <h1 className="title">
                  Get in Touch
                </h1>
                <h4 className="desc">
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto" md="10">
                <Form
                  className="p-3"
                  id="contact-form-1"
                  method="post"
                  role="form"
                >
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <label>First name</label>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": firstNameFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            aria-label="First Name..."
                            placeholder="First Name..."
                            type="text"
                            onFocus={(e) => setFirstNameFocus(true)}
                            onBlur={(e) => setFirstNameFocus(false)}
                          />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Last name</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": lastNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Last Name..."
                              placeholder="Last Name..."
                              type="text"
                              onFocus={(e) => setLastNameFocus(true)}
                              onBlur={(e) => setLastNameFocus(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label>Email address</label>
                      <InputGroup
                        className={classnames({
                          "input-group-focus": emailFocus
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Address..."
                          type="text"
                          onFocus={(e) => setEmailFocus(true)}
                          onBlur={(e) => setEmailFocus(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>Your message</label>
                      <Input
                        id="message-1"
                        name="message"
                        rows="6"
                        placeholder="Message Body..."
                        type="textarea"
                      />
                    </FormGroup>
                    <Row>
                      <Col className="ml-auto" md="6">
                        <Button
                          className="btn-round pull-right"
                          color="brand"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
}
