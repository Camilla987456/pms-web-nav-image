import React from "react";

import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import ".././node_modules/nprogress/nprogress.css";
// import { useRouter } from 'next/router'

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = ({ courses }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // const router = useRouter();

  const menu = () => {
    let courseTypes = [
      ["agile", "Agile"],
      ["projectManagement", "Project Management"],
      ["communityProjects", "Community Projects"],
      ["softSkills", "Soft Skills"],
      ["businessManagement", "Business Analysis"],
    ];

    return courseTypes.map((type) => {
      let filteredCourses = courses.filter(
        (cs) => cs.type == type[0] && cs.moniker != ""
      );
      if (filteredCourses.length > 0) {
        return (
          <div className="col">
            <h5>{type[1]}</h5>
            {filteredCourses.map((course) => {
              if (course.title != "") {
                return (
                  <Link href={`/courses/${course.moniker}`}>
                    {course.title}
                  </Link>
                );
              }
            })}
          </div>
        );
      }
    });
  };

  return (
    <React.Fragment>
      <div className="sw-menu sw-menu-fixed">
        <div className="container">
          <div id="branding" className="sw-menu-content">
            <Link href={"/"} className="sw-logo">
              <img
                height="70"
                src="/static/img/business/logo/logo.png"
                alt="Project Management Solutions"
              />
            </Link>

            <div className="sw-menu-right" style={{ display: "contents" }}>
              <nav>
                <ul className="main-menu">
                  <li className="menu-item current-menu-parent">
                    <Link href={"/"}>Home</Link>
                  </li>

                  <li className="menu-item current-menu-parent">
                    {/* <a href="/about">About</a> */}
                    <Link href={"/about"}>About</Link>
                  </li>
                  <li className="menu-item">
                    <Link href={"/schedule"}>Schedule</Link>
                  </li>
                  <li id="navbar" className="menu-item current-menu-parent">
                    <Link href={"/courses"}>Courses</Link>
                    <div id="navbar-menu">
                      <div className="container">
                        <div
                          style={{ marginTop: "20px", marginBottom: "20px" }}
                          className="row"
                        >
                          {menu()}
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <li id="navbar2" className="menu-item current-menu-parent">
                    <Link href={"/solutions"}>
                      <a>Solutions</a>
                    </Link>
                 
                  </li> */}

                  <li className="menu-item current-menu-parent">
                    <Link href={"/blog"}>Blog</Link>
                  </li>
                  {/* <li className="menu-item current-menu-parent">
                <a href="/register">Register</a>
              </li> */}
                  <li className="menu-item">
                    <Link href={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </nav>

              {/* <div id="hamburger-icon" className="sw-open-menu">
                <div className="sw-menu-button">
                  <div className="sw-burger">
                    <span></span>
                  </div>
                </div>
              </div> */}

              <div className="sw-menu-social-links">
                <div className="row text-center">
                  <a
                    href="#."
                    target="_blank"
                    data-toggle="tooltip"
                    title="0772511711"
                  >
                    <h6 style={{ color: "grey" }}>Call us on</h6>
                    <h5>+94772511711</h5>
                  </a>
                </div>
              </div>
            </div>
            <div id="hamburger-icon">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
              <ul class="mobile-menu">
                <li className="menu-item current-menu-parent">
                  <Link href={"/"}>Home</Link>
                </li>

                <li className="menu-item current-menu-parent">
                  {/* <a href="/about">About</a> */}
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="menu-item">
                  <Link href={"/schedule"}>Schedule</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
