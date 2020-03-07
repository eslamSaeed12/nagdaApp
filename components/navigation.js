import { Component, Fragment } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import NagdaaLogo from "../public/media/logoNagda.svg";
import LogoRectengle from "../public/media/logoRectengle.svg";
import { connect } from "react-redux";
import Link from "next/link";

class AppNavBar extends Component {
  static getInitialProps({ store, ctx }) {}

  componentDidMount() {
    console.log(this.props.state);
  }

  render() {
    if (this.props.state.activeLink === "home") {
      return (
        <Fragment>
          <Navbar expand="lg" className="py-4">
            <Container>
              <div className="">
                <Navbar.Brand href="/home" className="d-flex flex-row">
                  <div className="position-relative">
                    <img src={LogoRectengle} className="" />
                    <img
                      src={NagdaaLogo}
                      className="position-absolute nagaaLogo"
                    />
                  </div>
                  <h2 className="text-muted mt-4 mr-2 Cairo-bold nagda-brand-h2">
                    نجدة
                  </h2>
                </Navbar.Brand>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="mr-auto text-lg-right text-center mt-3">
                  <Link href="/home">
                    <a
                      className={`${
                        this.props.state.activeLink == "home" ? "active" : ""
                      } nav-link`}
                    >
                      الرئيسية
                    </a>
                  </Link>

                  <a
                    href="/web-app"
                    className={`${
                      this.props.state.activeLink == "app" ? "active" : ""
                    } nav-link`}
                  >
                    تطبيق الويب
                  </a>

                  <Link href={"/who-we-are"}>
                    <a
                      className={`${
                        this.props.state.activeLink == "who-we-are"
                          ? "active"
                          : ""
                      } nav-link`}
                    >
                      من نحن
                    </a>
                  </Link>

                  <Link href={"/faq"}>
                    <a
                      className={`${
                        this.props.state.activeLink == "faq" ? "active" : ""
                      } nav-link`}
                    >
                      اسئلة مكرره
                    </a>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Navbar expand="lg" className="py-4">
          <Container>
            <div className="">
              <Navbar.Brand href="/home" className="d-flex flex-row">
                <div className="position-relative">
                  <img src={LogoRectengle} className="" />
                  <img
                    src={NagdaaLogo}
                    className="position-absolute nagaaLogo"
                  />
                </div>
                <h2 className="text-muted mt-4 mr-2 Cairo-bold nagda-brand-h2">
                  نجدة
                </h2>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="mr-auto text-lg-right text-center mt-3">
                <Link href="/home">
                  <a
                    className={`${
                      this.props.state.activeLink == "home" ? "active" : ""
                    } nav-link secondary-nav-link`}
                  >
                    الرئيسية
                  </a>
                </Link>

                <a
                  href="/web-app"
                  className={`${
                    this.props.state.activeLink == "app" ? "active" : ""
                  } nav-link secondary-nav-link`}
                >
                  تطبيق الويب
                </a>

                <Link href={"/who-we-are"}>
                  <a
                    className={`${
                      this.props.state.activeLink == "who-we-are"
                        ? "active"
                        : ""
                    } nav-link secondary-nav-link `}
                  >
                    من نحن
                  </a>
                </Link>

                <Link href={"/faq"}>
                  <a
                    className={`${
                      this.props.state.activeLink == "faq" ? "active" : ""
                    } nav-link secondary-nav-link`}
                  >
                    اسئلة مكرره
                  </a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

const stateToProps = state => {
  return {
    state: state
  };
};

export default connect(stateToProps)(AppNavBar);
