import Layout from "../components/Layout";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import BrandSlider from "../components/sliders/Brands";
import Feedback from "../components/sliders/Feedback";
import { getGoogleReviews } from "../actions/reviews";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Head from "next/head";
import { DOMAIN } from "../config";

const About = ({ reviews }) => {
  const head = () => (
    <Head>
      <title>About Us | Project Management Solutions</title>
      <meta
        name="description"
        content={
          "PMS is an established, dynamic and performance driven training and consultancy services provider for private, static and community development sectors. Learn more here."
        }
      />
      <meta
        name="keywords"
        content={
          "project management courses,pmp sri lanka,pms,agile courses,web development,mobile app develepment,machine learning,web design sri lanka,web development sri lanka,rpa sri lanka"
        }
      />
      <link rel="canonical" href={`${DOMAIN}/about`} />
      <meta
        property="og:title"
        content={`About Us | Project Management Solutions`}
      />
      <meta
        property="og:description"
        content={
          "PMS is an established, dynamic and performance driven training and consultancy services provider for private, static and community development sectors. Learn more here."
        }
      />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" href={`${DOMAIN}/about`} />
      <meta property="og:site_name" content={`Project Management Solutions`} />
    </Head>
  );
  return (
    <React.Fragment>
      {head()}
      <Layout>
        {/* banner */}

        <div className="sw-banner sw-banner-sm">
          {/* <img  alt="banner" className="sw-banner-image"/> */}
          {/* overlay */}
          <div className="sw-overlay sw-overlay-left-1-cs">
            <div className="container sw-d-flex">
              {/* main title frame */}
              <div className="sw-main-title sw-main-title-left sw-top-header-fix">
                {/* title */}
                <h1 className="sw-white">About us</h1>
              </div>
              {/* main title frame end */}
            </div>
          </div>
          {/* overlay end */}
        </div>
        {/* banner end */}

        <main id="sw-content">
          <div className="sw-over-frame sw-up">
            <div className="container">
              {/* breadcrumbs */}
              <ul className="sw-breadcrumb p-30-30">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="#.">About</a>
                </li>
                {/* <li><a href="#sw-content">About our team</a></li> */}
              </ul>
              {/* breadcrumbs end */}
            </div>
          </div>

          <div className="container">
            <div className="row p-60-0">
              <div className="col-lg-12">
                <div className="sw-bt sw-bt-right">
                  <svg width="100%">
                    <text
                      x="0"
                      y="140px"
                      fontSize="150px"
                      stroke="#3e3e41"
                      strokeWidth="4"
                      fill="transparent"
                    >
                      {/* section title */}
                      About
                    </text>
                  </svg>
                </div>
              </div>

              <div className="col-lg-6">
                <div>
                  {/* title */}
                  <h4 className="mb-30">Who we are?</h4>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="sw-about-text">
                  <p>
                    Project Management Solutions is a Project Management
                    Training and Consultancy firm that offers a range of
                    training and consultancy services. We are the pioneer
                    project management solutions provider in Sri Lanka armed
                    with the top notch PM specialists.
                  </p>
                  <br />
                  <p>
                    {" "}
                    PMS provides superior project management training and
                    professional development programs to advance organizational
                    and individual project performance. Our programs deliver a
                    project management learning experience that has immediate
                    impact, focusing on the knowledge, skills, and attributes
                    required to build project team member competency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row p-30-30">
              <div className="col-lg-12">
                <div className="sw-bt sw-bt-right">
                  <svg width="100%">
                    <text
                      x="0"
                      y="140px"
                      fontSize="150px"
                      stroke="#3e3e41"
                      strokeWidth="4"
                      fill="transparent"
                    >
                      {/* section title */}
                      Features
                    </text>
                  </svg>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="mb-30">
                  {/* title */}
                  <h4 className="mb-30">Why PMS?</h4>
                </div>
              </div>

              <ul>
                <li>
                  <p>
                    Centralized coordination of your scheduling and training
                    needs.
                  </p>
                </li>
                <li>
                  <p>
                    Consistent and convenient services for a complete training
                    solution.
                  </p>
                </li>
                <li>
                  <p>Custom curriculum development and delivery.</p>
                </li>
                <li>
                  <p>
                    On-site training for your employees, customers or partners
                    or at one of our convenient locations
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="sw-over-frame p-0"> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                {/* title */}
                <h4 className="mb-30">PMS Faculty</h4>

                {/* Text */}
                <div className="mb-15">
                  <p>
                    The PMS training team has over fifteen (15) years of PM
                    experience. PMS instructors are thoroughly trained and
                    certified in their respective area(s) of expertise and
                    provide the highest level of quality, interactive and
                    productive learning experience for students. Our instructors
                    are regularly tested and students complete an evaluation of
                    each instructor at the end of each course. We require our
                    instructors to maintain a 90 percent or higher student
                    approval rating.
                  </p>
                </div>
                {/* button */}
                <Link
                  href={"/contact"}
                  style={{ color: "white" }}
                  className="sw-btn sw-lg-btn sw-round-btn sw-solid-btn sw-color-2-btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              {/* video */}
              <div className="sw-ilustration-frame">
                {/* video cover */}
                <img src="/static/img/business/banner2.jpeg" alt="Team" />
                {/* expirience circle */}
                {/* <div className="sw-puls-1"></div>
                    <div className="sw-puls-2"></div> */}
                {/* <div className="sw-img-overlay">
                      <div className="sw-expirience-circle">
                        <span>13</span>

                        <div className="sw-y-o-e">Years</div>
                      </div>
                    </div> */}
                {/* expirience circle  end */}
              </div>
              {/* video end */}
            </div>
          </div>

          {/* </div> */}

          <div id="sw-brand-slider-hide" className="container">
            <div className="row p-30-0">
              <div className="col-lg-12">
                {/* title */}
                <h4 style={{ marginBottom: "50px", marginTop: "50px" }}>
                  Where our students come from
                </h4>

                <BrandSlider />
              </div>
            </div>
          </div>

          <div style={{ paddingBottom: "10px" }} className="container">
            <div className="row p-60-0">
              <div className="col-lg-12">
                <div className="sw-bt sw-bt-right">
                  <svg width="100%">
                    <text
                      x="0"
                      y="140px"
                      fontSize="150px"
                      stroke="#3e3e41"
                      strokeWidth="4"
                      fill="transparent"
                    >
                      Testimonials
                    </text>
                  </svg>
                </div>
              </div>
              <Feedback reviews={reviews} />
              <br />
              <br />
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export async function getStaticProps(context) {
  const reviews = await getGoogleReviews();
  return {
    props: { reviews }, // will be passed to the page component as props
  };
}

export default About;
