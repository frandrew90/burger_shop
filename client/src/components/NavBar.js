import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";
import { Navbar, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
            AreYouHungry
          </NavLink>
          {user.isAuth ? (
            <Nav className="ms-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"}>Administration</Button>
              <Button variant={"outline-light"} className="ms-2">
                LogOut
              </Button>
            </Nav>
          ) : (
            <Nav className="ms-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => user.setIsAuth(true)}
              >
                Authorization
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
