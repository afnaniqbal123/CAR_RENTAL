import React, { useContext, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import MenuLeft from "../UI/hamMenu";
import context from "../Layout/context";

const Header = () => {
  const { navOptions, Authentication } = useContext(context);
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container></Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                <div
                  className="logo footer__logo"
                  style={{ justifyContent: "right" }}
                >
                  <h1>
                    <Link
                      to="/home"
                      className=" d-flex align-items-center gap-2"
                    >
                      <i className="ri-car-line"></i>
                      <span>
                        Rent Car <br /> Service
                      </span>
                    </Link>
                  </h1>
                </div>
                {navOptions.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <Row>
                <Col lg="6" md="6" sm="6">
                  <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                    {Authentication.Auth ? (
                      <Link>
                        <MenuLeft />
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className=" d-flex align-items-center gap-1"
                        >
                          <i className="ri-login-circle-line"></i> Login
                        </Link>
                        <Link
                          to="/register"
                          className=" d-flex align-items-center gap-1"
                        >
                          <i className="ri-user-line"></i> Register
                        </Link>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
