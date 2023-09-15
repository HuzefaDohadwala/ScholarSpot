import React from "react";
import "./Home.css";
import { useEffect, useRef } from "react";
import academic from "../Images/academic.png";
import financial from "../Images/financial.png";
import location from "../Images/location.png";
import demographic from "../Images/demographic.png";
import goal from "../Images/goal.png";
import essay from "../Images/essay.png";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const cardsRef = useRef(null);

  const handleSignUpClick = () => {
    // Redirect to /signup1 when the button is clicked
    navigate('/signup1');
  };

  useEffect(() => {
    const fadeInElements = cardsRef.current.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
        } else {
          entry.target.style.opacity = "0";
        }
      });
    });

    fadeInElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup the observer on component unmount
    return () => {
      fadeInElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  return (
    <>
      <div className="home_section1 flex mt-4 overflow-hidden bg-[#e6e6fa]">
        <div className="flex-auto w-1/2 h-80 bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center transition-transform duration-500 hover:scale-105">
          <div className="text-center transform transition-opacity duration-500 hover:opacity-90 ">
            <h1 className="text-4xl font-semibold mb-4 tracking-tight ">
              Explore Top Scholarships
            </h1>
            <p className="mb-8 text-lg">
              Discover and apply to thousands of scholarships to help fund your
              education.
            </p>
            <button
      className="py-2 px-8 rounded-full bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg transition-transform transform duration-300 hover:scale-105"
      onClick={handleSignUpClick}
    >
      Sign Up
    </button>
          </div>
        </div>

        <div className="flex-auto w-1/2 h-80 flex items-center justify-center transition-transform duration-500 hover:scale-105">
          <div className="transform transition-opacity duration-500 hover:opacity-90">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Descriptive Alt Text"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>

      <div className="home_section2 items-center justify-center">
        <div className="sec_head2 text-center mt-16 font-bold text-7xl mb-10">
          See Matches Based on Your Preference
        </div>
      </div>
      <div className="about3_container">
        <h1 className="about3_title text-center">
          Check out the filters below
        </h1>
        <div className="about3_top">
          <div className="about3_teleHealth">
            <div className="about3_iconCell">
              <img src={academic} alt="logo" className="homeGridIcons" />
            </div>
            <h1 className="about3_subtitle">Academic</h1>
            <p>
              Allow students to specify their academic interests, majors, or
              fields of study. This helps them find scholarships that align with
              their educational goals.
            </p>
          </div>
          <div className="about3_peerCommunity">
            <div className="about3_iconCell">
              <img src={financial} alt="logo" className="homeGridIcons" />
            </div>
            <h1 className="about3_subtitle">Financial</h1>
            <p>
              Let students indicate their financial need or merit-based
              qualifications. This helps match them with scholarships that cater
              to their financial situation or academic achievements.
            </p>
          </div>
          <div className="about3_annonymousChats">
            <div className="about3_iconCell">
              <img src={location} alt="logo" className="homeGridIcons" />
            </div>
            <h1 className="about3_subtitle">Location</h1>
            <p>
              Enable students to filter scholarships by location or region,
              which can be important if they want to study in a particular area
              or are restricted by geographical preferences.
            </p>
          </div>
        </div>
        <div className="about3_bottom">
          <div className="about3_experience">
            <div className="about3_iconCell">
              <img src={demographic} alt="logo" className="homeGridIcons" />
            </div>
            <h1 className="about3_subtitle">Demographic</h1>
            <p>
              Allow students to specify their demographic information, such as
              gender, ethnicity, or disability status. This can help them find
              scholarships that target underrepresented groups.
            </p>
          </div>
          <div className="about3_premium">
            <div className="about3_iconCell">
              <img src={goal} alt="logo" className="homeGridIcons" />
            </div>
            <h1 className="about3_subtitle">Career Goals</h1>
            <p>
              Include an option for students to mention their career aspirations
              or future goals. This can be used to match them with scholarships
              related to their intended career paths or industries.
            </p>
          </div>
          <div className="about3_marketing">
            <div className="about3_iconCell">
              <img src={essay} alt="logo" className="homeGridIcons" />
            </div>
            <h1 className="about3_subtitle">Essay Prompts</h1>
            <p>
              Provide an option for students to choose scholarship essay prompts
              that align with their interests or experiences. This allows them
              to focus on scholarships that resonate with them.
            </p>
          </div>
        </div>
      </div>
      <div className="home_section2 items-center justify-center">
        <div className="sec_head2 text-center mt-16 font-bold text-7xl mb-10">
          View Open Scholarships
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 p-5" ref={cardsRef}>
        {/* Card 1 */}
        <div className="border p-4 rounded fade-in">
          <div className="mb-2">
            {/* <img src="path-to-logo1.png" alt="Logo 1" className="w-24 h-24"> */}
          </div>
          <div className="mb-2 text-xl font-extrabold">
            Society of Women Engineers
          </div>
          <div className="mb-2 text-base font-medium">
            Apply for a scholarship with a significant piece of work in one of
            five subject categories to earn up to a $50,000 scholarship.Open to
            All High Schoolers.{" "}
          </div>
          <div className="font-bold">Deadline: 1st Jan 2023</div>
        </div>

        {/* Card 2 */}
        <div className="border p-4 rounded fade-in">
          <div className="mb-2">
            {/* <img src="path-to-logo2.png" alt="Logo 2" className="w-24 h-24"> */}
          </div>
          <div className="mb-2 text-xl font-extrabold">
            United Negro College Fund (UNCF)
          </div>
          <div className="mb-2 text-base font-medium">
            The United Negro College Fund (UNCF) scholarships are available to
            minority students throughout the United States. A number of
            scholarship programs are offered through UNCF.
          </div>
          <div className="font-bold">Deadline: 2nd Jan 2023</div>
        </div>

        {/* Card 3 */}
        <div className="border p-4 rounded fade-in">
          <div className="mb-2">
            {/* <img src="path-to-logo3.png" alt="Logo 3" className="w-24 h-24"> */}
          </div>
          <div className="mb-2 text-xl font-extrabold">
            BigFuture Scholarships
          </div>
          <div className="mb-2 text-base font-medium">
            BigFuture rewards students who take steps to plan for life after
            high school. Sophomores and juniors can now qualify for $500 & $40k
            drawings this month by starting their career list or building their
            college list.
          </div>
          <div className="font-bold">Deadline: 3rd Jan 2023</div>
        </div>

        {/* Card 4 */}
        <div className="border p-4 rounded fade-in">
          <div className="mb-2">
            {/* <img src="path-to-logo4.png" alt="Logo 4" className="w-24 h-24"> */}
          </div>
          <div className="mb-2 text-xl font-extrabold">Scholarship America</div>
          <div className="mb-2 text-base font-medium">
            Explore a variety of scholarships and prizes on Scholarship America.
            In 2020, they served over 100,000 students and distributed over $273
            million. Open to All High Schoolers.
          </div>
          <div className="font-bold">Deadline: 4th Jan 2023</div>
        </div>
      </div>
    </>
  );
};

export default Home;
