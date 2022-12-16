import Layout from "../components/Layout";

import React from "react";
import { BiEnvelope, BiPhoneCall, BiCurrentLocation } from "react-icons/bi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Head from "next/head";
import { DOMAIN } from "../config";

const Contact = () => {
  const head = () => (
    <Head>
      <title>Contact Us | Project Management Solutions</title>
      <meta
        name="description"
        content={
          "Contact us regarding any queries related to project management courses and IT solutions."
        }
      />

      <link rel="canonical" href={`${DOMAIN}/contact`} />
      <meta
        property="og:title"
        content={`Contact Us | Project Management Solutions`}
      />
      <meta
        property="og:description"
        content={
          "Contact us regarding any queries related to project management courses and IT solutions."
        }
      />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" href={`${DOMAIN}/contact`} />
      <meta property="og:site_name" content={`Project Management Solutions`} />
    </Head>
  );

  return (
    <React.Fragment>
      <Layout>
        {head()}

        <div className="sw-banner sw-banner-sm">
          {/* <img  alt="banner" className="sw-banner-image"/> */}
          {/* overlay */}
          <div className="sw-overlay sw-overlay-left-1-cs">
            <div className="container sw-d-flex">
              {/* main title frame */}
              <div className="sw-main-title sw-main-title-left sw-top-header-fix">
                {/* title */}
                <h1 className="sw-white">Contact Us</h1>
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
              <ul className="sw-breadcrumb p-30-30">
                <li>
                  <a href="#.">Home</a>
                </li>

                <li>
                  <a href="#sw-content">Contact us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="container">
            <div className="row p-60-60">
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
                      Contact
                    </text>
                  </svg>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="sw-icon-box mb-60">
                  {/* Update icon */}
                  <BiCurrentLocation size={30} />
                  {/* title */}
                  <h6 className="mb-10">Address</h6>
                  {/* text */}
                  <div>
                    Project Management Solutions (Pvt) Ltd <br /> # 22 ,
                    Kirulapone Avenue, <br /> Colombo 05, Sri Lanka
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sw-icon-box mb-60">
                  <BiEnvelope size={30} />
                  {/* title */}
                  <h6 className="mb-10">Email</h6>
                  {/* text */}
                  <div>info@pms.lk</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sw-icon-box mb-60">
                  <BiPhoneCall size={30} />
                  {/* title */}
                  <h6 className="mb-10">Hot Line</h6>
                  {/* text */}
                  <div>(+94) 0 77 2 511 711</div>
                </div>
              </div>
            </div>
            <div className="row p-30-60">
              <div className="col-md-8">
                <div className="sw-icon-box mb-120">
                  {/* title */}
                  <h6 className="mb-12">Location</h6>
                  {/* text */}
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.365784225123!2d79.8747535!3d6.8796474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77106101bd2f7b39!2sProject+Management+Solutions!5e0!3m2!1sen!2slk!4v1545207705391"
                      frameborder="0"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      id="fitvid0"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* <div classNameName="col-md-4">
              <div className="container">
                <div className="sw-main-contact-form bg-color-p-1">
                  <hr />

                  <h4 className="sw-white mb-30">Write us a message</h4>

                  <form className="form-horizontal" method="post" action="">
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          required
                          minLength="3"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          required
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          required
                          minLength="10"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          placeholder="Company *"
                          name="company"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="message" className="text-white">
                        Message
                      </label>
                      <div className="col-sm-12">
                        <textarea
                          required
                          className="form-control"
                          id="message"
                          name="message"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      style={{ backgroundColor: "rgb(255, 88, 0)" }}
                      className="sw-btn sw-lg-btn sw-solid-btn sw-color-2-btn"
                    >
                      Send <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
           */}
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default Contact;
