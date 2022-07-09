import React from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  console.log(location);
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-4">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-4" placeholder="Email" />
          <Form.Control className="mt-4" placeholder="Password" />
          <Button className="mt-4" variant={"outline-secondary"}>
            {isLogin ? "LogIn" : "SignIn"}
          </Button>
          {isLogin ? (
            <p>
              I don`t have an account yet!
              <NavLink to={REGISTRATION_ROUTE}>Create an account!</NavLink>
            </p>
          ) : (
            <p>
              I have an account already!
              <NavLink to={LOGIN_ROUTE}>Please, logIn!</NavLink>
            </p>
          )}
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
