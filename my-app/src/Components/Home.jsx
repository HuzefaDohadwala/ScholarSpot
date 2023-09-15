import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home_section1 flex mt-4">
        <div className='flex-auto w-1/2 h-80 bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center'>
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">
                    Explore Top Scholarships
                </h1>
                <p className="mb-6">
                    Discover and apply to thousands of scholarships to help fund your education.
                </p>
                <button className="py-2 px-6 rounded-full bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition duration-300">
                    Sign Up
                </button>
            </div>
        </div>

        <div className='flex-auto w-1/2 flex items-center justify-center'>
            <h1>
                Image section
            </h1>
        </div>
      </div>

    <div className="home_section2 items-center justify-center">
        <div className="sec_head2 text-center mt-10 font-bold text-5xl mb-10">
            <h1>
                See Matches Based on Your Preference
            </h1>
        </div>
    </div>
    <div className="about3_container">
      <h1 className="about3_title text-center">Check out the filters below</h1>
      <div className="about3_top">
        <div className="about3_teleHealth">
          <div className="about3_iconCell">
          </div>
          <h1 className="about3_subtitle">Academic</h1>
          <p>
          Allow students to specify their academic interests, majors, or fields of study. 
          This helps them find scholarships that align with their educational goals.
          </p>
        </div>
        <div className="about3_peerCommunity">
          <div className="about3_iconCell">
          </div>
          <h1 className="about3_subtitle">Financial</h1>
          <p>
          Let students indicate their financial need or merit-based qualifications. 
          This helps match them with scholarships that cater to their financial situation or academic achievements.
          </p>
        </div>
        <div className="about3_annonymousChats">
          <div className="about3_iconCell">
          </div>
          <h1 className="about3_subtitle">Location</h1>
          <p>
          Enable students to filter scholarships by location or region, 
          which can be important if they want to study in a particular area or are restricted by geographical preferences.
          </p>
        </div>
      </div>
      <div className="about3_bottom">
        <div className="about3_experience">
          <div className="about3_iconCell">
          </div>
          <h1 className="about3_subtitle">Demographic</h1>
          <p>
          Allow students to specify their demographic information, such as gender, ethnicity, or disability status.
            This can help them find scholarships that target underrepresented groups.
          </p>
        </div>
        <div className="about3_premium">
          <div className="about3_iconCell">
          </div>
          <h1 className="about3_subtitle">Career Goals</h1>
          <p>
          Include an option for students to mention their career aspirations or future goals.
           This can be used to match them with scholarships related to their intended career paths or industries.
          </p>
        </div>
        <div className="about3_marketing">
          <div className="about3_iconCell">
          </div>
          <h1 className="about3_subtitle">Essay Prompts</h1>
          <p>
          Provide an option for students to choose scholarship essay prompts that align with their interests or experiences. 
            This allows them to focus on scholarships that resonate with them.
          </p>
        </div>
      </div>
    </div>
    
    <div className="home_section2 items-center justify-center">
        <div className="sec_head2 text-center mt-10 font-bold text-5xl mb-10">
            <h1>
                 View Open Scholarships
            </h1>
        </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
  <div class="border p-4 rounded">
    <div class="mb-2">
      {/* <img src="path-to-logo1.png" alt="Logo 1" class="w-24 h-24"> */}
    </div>
    <div class="mb-2 font-bold">Name 1</div>
    <div class="mb-2">Description 1</div>
    <div>Deadline: 1st Jan 2023</div>
  </div>
  <div class="border p-4 rounded">
    <div class="mb-2">
      {/* <img src="path-to-logo2.png" alt="Logo 2" class="w-24 h-24"> */}
    </div>
    <div class="mb-2 font-bold">Name 2</div>
    <div class="mb-2">Description 2</div>
    <div>Deadline: 2nd Jan 2023</div>
  </div>
  <div class="border p-4 rounded">
    <div class="mb-2">
      {/* <img src="path-to-logo3.png" alt="Logo 3" class="w-24 h-24"> */}
    </div>
    <div class="mb-2 font-bold">Name 3</div>
    <div class="mb-2">Description 3</div>
    <div>Deadline: 3rd Jan 2023</div>
  </div>
  <div class="border p-4 rounded">
    <div class="mb-2">
      {/* <img src="path-to-logo4.png" alt="Logo 4" class="w-24 h-24"> */}
    </div>
    <div class="mb-2 font-bold">Name 4</div>
    <div class="mb-2">Description 4</div>
    <div>Deadline: 4th Jan 2023</div>
  </div>
</div>


    </>
  )
}

export default Home
