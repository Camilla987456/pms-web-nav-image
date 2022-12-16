import React from "react";
import Image from "next/image";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="sw-footer sw-footer-type-1 mt-50">
        <div className="sw-footer-overlay">
          <div id="footer-top" className="container">
            <div className="row">
              <div className="mb-20 col-lg-4">
                {/* footer logo and info */}
                <div className="sw-footer-info">
                  {/* logo link */}
                  <a href="#." className="sw-logo sw-purple mb-15">
                    {/* logo img */}
                    <img
                      src="/static/img/business/logo/logo.png"
                      alt="Project Management Solutions"
                    />
                  </a>
                  {/* logo link end */}
                  {/* info */}
                  {/* <div>We are project managemnt specialists</div> */}
                </div>
                <a
                  rel="noopener"
                  href="https://www.instagram.com/pms_lk/"
                  target="_blank"
                >
                  <BsInstagram
                    color="#e95950"
                    style={{ marginRight: "20px" }}
                    size={30}
                  />
                </a>
                <a
                  rel="noopener"
                  href="https://www.facebook.com/projectmanagementsolutionslk"
                  target="_blank"
                >
                  <BsFacebook
                    color="#4267B2"
                    style={{ marginRight: "20px" }}
                    size={30}
                  />
                </a>
                <a
                  rel="noopener"
                  href="https://www.linkedin.com/company/project-management-solutions-pvt-ltd/"
                  target="_blank"
                >
                  <BsLinkedin
                    color="#0077b5"
                    style={{ marginRight: "20px" }}
                    size={30}
                  />
                </a>
              </div>
              {/* footer logo and info end */}
              <div className="col-md-2">
                {/* footer list title */}
                <h6 className="mb-20 sw-purple">Menu</h6>
                {/* footer list 1 */}
                <ul className="sw-footer-list sw-purple">
                  {/* footer link */}

                  {/* footer link */}

                  {/* footer link */}
                  <li>
                    <a href="/schedule" className="sw-opas">
                      Schedule
                    </a>
                  </li>
                  {/* footer link */}
                  <li>
                    <a href="/courses" className="sw-opas">
                      Courses
                    </a>
                  </li>
                  {/* footer link */}
                  <li>
                    <a href="/about" className="sw-opas">
                      About
                    </a>
                  </li>
                  {/* footer link */}
                  <li>
                    <a href="/contact" className="sw-opas">
                      Contact
                    </a>
                  </li>
                </ul>
                {/* footer list 1 end */}
              </div>

              <div className="col-lg-2">
                <Image
                  width="130"
                  height="80"
                  src="/static/img/business/google.png"
                  alt="Google Rating"
                />
              </div>
              <div className="col-lg-2">
                <Image
                  width="100"
                  height="100"
                  src="/static/img/business/awards.png"
                  alt="PMS Awards"
                />
              </div>
            </div>
            <div className="terms sw-opas text-center">
              PMI®, PMP®, CAPM®, PBA®, RMP®, PMBOK® and ACP®, are registered
              trademarks of the Project Management Institute, Inc. The PMI®
              Registered Education Provider logo is a registered mark of the
              Project Management Institute, Inc. Project Management Solutions
              (Pvt) Ltd, # 22 , Kirulapone Avenue, Colombo 05, Sri Lanka
              Prince2, Prince2 Foundation, Prince2 Practitioner are registered
              trademarks of AXELOS in the United Kingdom and/or other countries.
              Our courses are not certified, accredited, affiliated with, nor
              endorsed by the AXELOS.
            </div>
          </div>
          {/* {/* footer bottom */}
          <div className="sw-footer-bottom">
            <div className="container">
              {/* {/* copyright */}
              <div className="sw-white">
                © 2022. PMS.lk. All rights reserved.
              </div>
              {/* {/* author */}
              <div className="sw-purple"></div>
            </div>
          </div>
        </div>
        {/* {/* footer bottom end */}
      </footer>
    </React.Fragment>
  );
};

export default Footer;
