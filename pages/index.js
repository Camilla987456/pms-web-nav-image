import Layout from "../components/Layout";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import Swiper from "react-id-swiper";
import Feedback from "../components/sliders/Feedback";
import BrandSlider from "../components/sliders/Brands";
import { getGoogleReviews } from "../actions/reviews";
import Fade from "react-reveal/Fade";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Head from "next/head";
import { DOMAIN } from "../config";

const Index = ({ reviews }) => {
  const params = {
    slidesPerView: 3,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    spaceBetween: 30,
  };

  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
    getGoogleReviews();
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const head = () => (
    <Head>
      <title>
        Project Management Solutions | Project Management Training in Sri Lanka
      </title>
      <meta
        name="keywords"
        content="project management sri lanka, project management colombo, project management institute, project management courses in sri lanka, pmp sri lanka, pmi institute, pmi, pmp, agile project management"
      />
      <meta
        name="description"
        content="We are specialized in developing and delivering world class project management courses in Sri Lanka. PMS is a Global Registered Education Provider with Project Management Institute (PMI)® USA."
      />
      <link rel="canonical" href={`${DOMAIN}`} />

      <meta
        property="og:title"
        content={
          "Project Management Solutions | Project Management Training in Sri Lanka"
        }
      />
      <meta
        property="og:description"
        content={
          "We are specialized in developing and delivering world class project management courses in Sri Lanka. PMS is a Global Registered Education Provider with Project Management Institute (PMI)® USA."
        }
      />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}`} />
      <meta property="og:site_name" content={`Project Management Solutions`} />

      <meta property="og:image" content={`${DOMAIN}`} />
      <meta
        property="og:image:secure_url"
        content={`https://res.cloudinary.com/pmslk/image/upload/v1650179933/banner4-u_wb8sc6.png`}
      />
      <meta property="og:image:type" content="image/jpg" />
      {/* <meta property="fb:app_id" content={`${FB_APP_ID}`} /> */}
    </Head>
  );
  return (
    <React.Fragment>
      {head()}
      <Layout>
        {/* banner */}
        <div className="sw-banner">
          <div>
            <div className="carousel-inner">
              <div className="carousel-item active d-block w-100 sw-banner-image">
                <Image
                  layout="fill"
                  className="d-block w-100 sw-banner-image"
                  src="/static/img/banner4-u.webp"
                  alt="Project Managers"
                  priority
                  quality={60}
                />
              </div>
            </div>
          </div>
          {/* overlay */}
          <div className="sw-overlay sw-overlay-left-1">
            <div className="container sw-d-flex">
              {/* main title frame */}
              <div className="sw-main-title sw-main-title-left">
                {/* title */}
                <Fade>
                  <div className="home-title">
                    <h1 className="sw-white">
                      More than 1000 PMI® certificants since 2006
                    </h1>
                  </div>
                </Fade>
                {/* suptitle */}
                <div
                  id="home-suptitle"
                  className="sw-section-suptitle sw-t-shadow sw-opas sw-white mb-20"
                >
                  PMS has produced more than 1000 PMI® certificants since 2006.
                </div>
                {/* button */}
                <Link
                  href={"/courses"}
                  id="our-courses-btn"
                  className="sw-btn sw-lg-btn sw-solid-btn sw-color-1-btn">
                  
                    Our Courses
                  
                </Link>

                {/* button */}
                <Link
                  href={"/contact"}
                  id="ask-btn"
                  className="sw-btn sw-lg-btn sw-solid-btn sw-color-2-btn">
                  
                    Ask a Question
                  
                </Link>
              </div>
              {/* main title frame end */}
            </div>
          </div>
        </div>
        {/* banner end */}

        <main id="sw-content">
          <div className="row justify-content-center sw-over-frame sw-up">
            {/* introductory word */}
            <div className=" introductory-word text-left p-60-60">
              <div className="container">
                <h4 className="mb-20">We are Project Management Specialists</h4>
                {/* suptitle */}
                <div className="mb-10">
                  Project Management Solutions is an established, dynamic and
                  performance driven training and consultancy services provider
                  for private, public and community development sectors.{" "}
                </div>
                <div className="mb-10">
                  We are a well seasoned institute of project management
                  specialized in developing and delivering world class project
                  management and business management solutions. Our learning
                  solutions focus on wide variety of project management
                  methodologies and frameworks such as conventional project
                  management, agile, scrum, kanban and srumban.
                </div>

                <div className="mb-10">
                  PMS has earned a reputation as the leader in providing{" "}
                  <b>project management courses in Sri Lanka</b>.
                </div>
              </div>
            </div>

            {/* introductory word end */}
          </div>

          <div className="container">
            <div className="row p-60-0">
              <div className="col-lg-12">
                <div className="sw-bt">
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
                      Services
                    </text>
                  </svg>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 sw-as-center mb-60">
                    {/* title */}
                    <h4 className="mb-30">Our popular courses</h4>
                    {/* suptitle */}
                    <div className="sw-section-suptitle">
                      These are the most demanded certifications <br />
                      by multinational and fortune 500 companies.
                    </div>
                  </div>
                  <div className="col-lg-6 sw-as-end text-lg-right text-sm-left mb-60">
                    {/* hint */}
                    <button
                      aria-label="Previous"
                      onClick={goPrev}
                      className="sw-btn sw-icon-btn sw-md-btn sw-solid-btn sw-round-btn sw-color-1-btn sw-swiper-prev sw-services-swiper-prev"
                    >
                      <MdArrowBackIosNew size={20} />
                    </button>
                    <button
                      aria-label="Forward"
                      onClick={goNext}
                      className="sw-btn sw-icon-btn sw-md-btn sw-solid-btn sw-round-btn sw-color-1-btn sw-swiper-next sw-services-swiper-next"
                    >
                      <MdArrowForwardIos size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <Swiper {...params} ref={swiperRef}>
                  <div className="swiper-wrapper">
                    {/* card */}
                    <div className="sw-card">
                      {/* img frame */}
                      <Link
                        href="/courses/project-management-professional"
                        aria-label="Course Image"
                        className="sw-img">

                        <Image
                          layout="fill"
                          src="https://firebasestorage.googleapis.com/v0/b/repairit-58896.appspot.com/o/1.png?alt=media&token=84845935-2841-48c7-af78-a1eb2669be68"
                          alt="project management professional"
                          priority
                        />

                      </Link>
                      {/* img frame end */}
                      {/* description */}
                      <div className="sw-card-description">
                        {/* title */}
                        <Link href="/courses/project-management-professional" className="mb-10">

                          <h5>Project Management Professional (PMP)®</h5>

                        </Link>

                        {/* short description */}
                        <div>52.5 hrs/PDUs</div>
                        {/* button */}
                        <Link
                          href={"/courses/project-management-professional"}
                          className="sw-btn sw-md-btn sw-solid-btn sw-round-btn sw-color-1-btn">
                          
                            More Course Information
                          
                        </Link>
                      </div>
                      {/* description end */}
                    </div>
                    {/* card end */}
                  </div>
                  <div className="swiper-slide">
                    {/* card */}
                    <div className="sw-card">
                      {/* img frame */}
                      <Link
                        href="/courses/agile-certified-practitioner"
                        aria-label="Course Image"
                        className="sw-img">

                        <Image
                          layout="fill"
                          src="https://firebasestorage.googleapis.com/v0/b/repairit-58896.appspot.com/o/PMP.png?alt=media&token=e7633acc-07c2-45a5-b7d4-e9d89028213f"
                          alt="agile certified practitioner"
                          priority
                        />

                      </Link>

                      {/* img frame end */}
                      {/* description */}
                      <div className="sw-card-description">
                        {/* title */}
                        <Link href="/courses/agile-certified-practitioner" className="mb-10">

                          <h5>Agile Certified Practitioner PMI-ACP®</h5>

                        </Link>

                        {/* short description */}
                        <div>25 Hours</div>
                        {/* button */}
                        <Link
                          href="/courses/agile-certified-practitioner"
                          className="sw-btn sw-md-btn sw-solid-btn sw-round-btn sw-color-1-btn">
                          
                            More Course Information
                          
                        </Link>
                      </div>
                      {/* description end */}
                    </div>
                    {/* card end */}
                  </div>
                  <div className="swiper-slide">
                    {/* card */}
                    <div className="sw-card">
                      {/* img frame */}
                      <Link
                        href="/courses/competent-scrum-master"
                        aria-label="Course Image"
                        className="sw-img">

                        <Image
                          layout="fill"
                          src="https://firebasestorage.googleapis.com/v0/b/repairit-58896.appspot.com/o/5.png?alt=media&token=95ab3603-6623-40d1-b89b-7d2a42063852"
                          alt="competent scrum master"
                          priority
                        />

                      </Link>

                      {/* img frame end */}
                      {/* description */}
                      <div className="sw-card-description">
                        {/* title */}
                        <Link href="/courses/competent-scrum-master" className="mb-10">

                          <h5>Competent Scrum Master</h5>

                        </Link>

                        {/* short description */}
                        <div>20 hrs/PDUs</div>
                        {/* button */}
                        <Link
                          href="/courses/competent-scrum-master"
                          className="sw-btn sw-md-btn sw-solid-btn sw-round-btn sw-color-1-btn">
                          
                            More Course Information
                          
                        </Link>
                      </div>
                      {/* description end */}
                    </div>
                    {/* card end */}
                  </div>

                  <div className="swiper-slide">
                    {/* card */}
                    <div className="sw-card">
                      {/* img frame */}
                      <Link
                        href="/courses/professional-in-business-analysis"
                        aria-label="Course Image"
                        className="sw-img">

                        <Image
                          layout="fill"
                          src="https://firebasestorage.googleapis.com/v0/b/repairit-58896.appspot.com/o/7.png?alt=media&token=67bd4be2-0b74-4d21-9f79-1295afd1c12d"
                          alt="business analysis"
                        />

                      </Link>

                      {/* img frame end */}
                      {/* description */}
                      <div className="sw-card-description">
                        {/* title */}
                        <Link
                          href="/courses/certified-associate-in-project-management"
                          className="mb-10">

                          <h5>Professional In Business Analysis PMI-PBA®</h5>

                        </Link>

                        {/* short description */}
                        <div>35 Hrs/PDUs</div>
                        {/* button */}
                        <Link
                          href="/courses/professional-in-business-analysis"
                          className="sw-btn sw-md-btn sw-solid-btn sw-round-btn sw-color-1-btn">
                          
                            More Course Information
                          
                        </Link>
                      </div>
                    </div>
                    {/* card end */}
                  </div>
                  <div className="swiper-slide">
                    {/* card */}
                    <div className="sw-card">
                      {/* img frame */}
                      <Link
                        href="/courses/diploma-in-project-management"
                        aria-label="Course Image"
                        className="sw-img">

                        <Image
                          layout="fill"
                          src="https://firebasestorage.googleapis.com/v0/b/repairit-58896.appspot.com/o/3.png?alt=media&token=1685ca30-94b8-436e-ae64-458ac98f04f3"
                          alt="diploma in project management"
                        />

                      </Link>

                      {/* img frame end */}
                      {/* description */}
                      <div className="sw-card-description">
                        {/* title */}
                        <Link href="/courses/diploma-in-project-management" className="mb-10">

                          <h5>Diploma in Project Management</h5>

                        </Link>
                        {/* short description */}
                        <div>6 Months, 120 hrs/PDUs</div>
                        {/* button */}
                        <Link
                          href="/courses/diploma-in-project-management"
                          className="sw-btn sw-md-btn sw-solid-btn sw-round-btn sw-color-1-btn">
                          
                            More Course Information
                          
                        </Link>
                      </div>
                      {/* description end */}
                    </div>
                    {/* card end */}
                  </div>

                  {/* </div> */}
                </Swiper>
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* introductory word */}
          <div className="introductory-word text-left p-60-60">
            <div className="container">
              {/* title */}
              <h4 className="mb-30">Why Learn Project Management?</h4>
              {/* suptitle */}
              <div className="mb-10">
                Increasingly complex and changing business environment demands
                organizations to undertake more projects than ever. Most of the
                activities we undertake in organizations today are projects.
                Project management has become a central activity for many
                organizations.
              </div>
              <div className="mb-10">
                Today, the practice of project management is expanding to
                industries which were less projects oriented in the past. No
                matter how well your organization is structured, the success of
                the business will ultimately come down to the quality of its
                project execution.
              </div>
              <div className="mb-10">
                Hence, the global economy has become more project-oriented now.
              </div>
              <div className="mb-10">
                All organisations need to take project management seriously in
                order to survive and thrive. Organizations now want workers
                across all departments having some training in project
                management methods such as waterfall, agile, scrum, kanban,
                project cycle management etc.
              </div>
              <div className="mb-10">
                According to Project Management Institute USA statistics, by
                2027 employers will need 87.7 million individuals working in
                project management-oriented roles. PMI expect 22 million new
                jobs in project management around the world by 2027. This is a
                33% growth.
              </div>
              <div className="mb-10">
                Your degree program lays foundation for Certifications. PMI®
                certifications are globally recognized
              </div>

              <div className="text-center mt-50">
                <Image
                  height="100"
                  width="100"
                  src="/static/img/business/faces/avarta-home.jpg"
                  alt="Duminda Weeraratne"
                  className="sw-iw-avatar-2"
                />

                <div className="mb-10">Dr. Duminda Weeraratne</div>
                <div className="mb-10">
                  MBA (Sri J), PMP, PMI-RMP, PMI-ACP, CSM, PMI-PBA
                </div>
                <div className="mb-10">CEO</div>
              </div>
              {/* /.text-center END */}
            </div>
          </div>
          {/* introductory word end */}

          <div className="container">
            <div className="row p-30-0">
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
                <div className="mb-60">
                  {/* title */}
                  <Fade>
                    <h4 className="mb-30">Why choose us for PMI Exams ?</h4>
                    {/* suptitle */}
                    <div className="sw-section-suptitle">
                      We just don’t train you to sit for exams, we make sure
                      that you pass.
                    </div>
                    <div className="mb-10">
                      PMS has a study environment that encourage you to be well
                      prepared in advance to face the exams and our revision
                      program will give that final push you need to cross that
                      hurdle.
                    </div>
                  </Fade>
                </div>
              </div>

              <Fade top>
                <div className="col-lg-4 text-center">
                  <div className="card card-body sw-icon-box">
                    <div className="sw-img-box">
                      <Image
                        height="100"
                        width="100"
                        src="https://firebasestorage.googleapis.com/v0/b/repairit-58896.appspot.com/o/1-home.png?alt=media&token=279ef22a-5089-48a8-9e7d-20ff5f2f268f"
                        alt="icon"
                      />
                    </div>

                    {/* title */}
                    <p className="mb-10">More than 95% Passing Rate</p>
                    {/* text */}
                    <div></div>
                  </div>
                </div>
              </Fade>
              <Fade top>
                <div className="col-lg-4 text-center">
                  <div className="card card-body sw-icon-box">
                    <div className="sw-img-box">
                      <Image
                        height="100"
                        width="100"
                        src="https://firebasestorage.googleapis.com/v0/b/repairit-58896.appspot.com/o/2-home.png?alt=media&token=279ef22a-5089-48a8-9e7d-20ff5f2f268f"
                        alt="icon"
                      />
                    </div>
                    {/* title */}
                    <p className="mb-10">One-on-one guidance and coaching</p>
                    {/* text */}
                    <div></div>
                  </div>
                </div>
              </Fade>
              <Fade top>
                <div className="col-lg-4 text-center">
                  <div className="card card-body sw-icon-box">
                    <div className="sw-img-box">
                      <Image
                        height="100"
                        width="100"
                        src="https://firebasestorage.googleapis.com/v0/b/repairit-58896.appspot.com/o/3-home.png?alt=media&token=279ef22a-5089-48a8-9e7d-20ff5f2f268f"
                        alt="icon"
                      />
                    </div>
                    {/* title */}
                    <p className="mb-10">Quality Training (See Testimonials)</p>
                    {/* text */}
                    <div></div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          <div id="sw-brand-slider-hide" className="container">
            <div className="row p-30-0">
              <div className="col-lg-12">
                {/* title */}
                <h4 style={{ marginBottom: "50px" }}>
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
  // const courses = await getAllCourses();

  // console.log(courses);
  return {
    props: { reviews }, // will be passed to the page component as props
  };
}
export default Index;
