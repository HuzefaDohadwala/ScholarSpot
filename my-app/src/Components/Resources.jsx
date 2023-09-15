import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from 'react';
import './Resource.css'

const Resources = () => {
  useEffect(() => {
    let targetElements = document.querySelectorAll(".test_name1, .test_name2, .test_words1, .test_words12, .test_words21, .test_words22, .test_words11"); // Added .test_words11

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function checkVisibility() {
        for (let el of targetElements) {
            if (isInViewport(el) && !el.classList.contains('faded-in')) { // Checking if the element doesn't have 'faded-in' class
                el.style.opacity = "1";
                el.classList.add('faded-in');  // Adding the class to the element
            }
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Call once to check initial visibility

    // Clean-up the event listener on component unmount
    return () => window.removeEventListener('scroll', checkVisibility);
}, []);
  return (
    <>
    <div className="home_section2 items-center justify-center">
        <div className="sec_head2 text-center mt-10 font-bold text-5xl mb-10">
            <h1>
            Connect. Collaborate.
            </h1>
        </div>
        <div className="sec_head2 text-center font-bold text-5xl mb-10">
            <h1>
            Conquer Your Educational Goals.
            </h1>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 p-6 bg-gray-100 h-80">
    <div class="relative pb-56% rounded shadow overflow-hidden">
        <iframe class="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
    <div class="col-span-2 bg-white p-6 rounded shadow">
        <h2 class="text-2xl font-semibold mb-4">Video Title</h2>
        <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Vivamus euismod, turpis in luctus dapibus, urna justo ullamcorper magna, nec cursus libero justo nec dui.
        </p>
    </div>
</div>
<div class="grid grid-cols-3 gap-4 p-6 bg-gray-100 h-80">
    <div class="col-span-2 bg-white p-6 rounded shadow">
        <h2 class="text-2xl font-semibold mb-4">Video Title</h2>
        <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Vivamus euismod, turpis in luctus dapibus, urna justo ullamcorper magna, nec cursus libero justo nec dui.
        </p>
    </div>
    <div class="relative pb-56% rounded shadow overflow-hidden">
        <iframe class="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
</div>

<div className="mt-8 p-5 bg-discord-blue rounded-lg shadow-md flex items-center mb-4">
            <img src="/path-to-discord-logo.png" alt="Discord Logo" className="w-14 h-14 mr-5"/>
            <div className="flex-1">
                <h3 className="text-2xl font-semibold text-balck">Join Our Discord Community!</h3>
                <p className="text-black mt-2">
                    Connect with peers, get instant updates, and discuss all things related to our content. Don't miss out!
                </p>
            </div>
            <a href="YOUR_DISCORD_INVITE_LINK" className="py-2 px-4 bg-white text-discord-blue font-bold rounded">Join Now</a>
        </div>

        <Accordion defaultActiveKey="0" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
  <Accordion.Item eventKey="0" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>Accordion Item #1</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="1" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>Accordion Item #2</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Accordion defaultActiveKey="0" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
  <Accordion.Item eventKey="0" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>Accordion Item #1</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="1" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>Accordion Item #2</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Accordion defaultActiveKey="0" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
  <Accordion.Item eventKey="0" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>Accordion Item #1</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="1" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>Accordion Item #2</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<div className="disc2">
    <div className="disc2_semic11"></div>
    <div className="disc2_semic12"></div>
    <div className="disc2_semic13"></div>
    <div className="disc2_semic14"></div>
    <div className="disc2_testimony">
    <div className="test1">
        <p className="test_words11">
        "For years, I felt trapped in my own thoughts, thinking I was alone in my struggles. Discovering this platform became a beacon of hope. The resources and community here have genuinely made a difference in my life. It's reassuring to know I'm not alone on this journey."
        </p>
        <h2 className="test_name1">-Alex M., Chicago, IL</h2>
        </div>
        <div className="test1">
        <p className="test_words12">
        "I've always been wary of seeking support online, but this platform changed my perspective. The insightful articles, various therapy options, and connections I've made here have been a game-changer. It's more than a website; it's a community where I feel understood."
        </p>
        <h2 className="test_name1">-Priya S., Los Angeles, CA</h2>
    </div>
    <div className="test2">
        <p className="test_words21">
        "Mental health challenges can be a winding, uncertain path, but this platform has been my compass. The guidance, clarity, and support I've received here are unparalleled. The professionals are genuinely compassionate, and I can't express how grateful I am."
        </p>
        <h2 className="test_name2">-Alex M., Chicago, IL</h2>
        </div>
        <div className="test2">
        <p className="test_words22">
        "Before I found this platform, I felt like I was navigating a maze without a map. Now, armed with invaluable strategies and resources, I feel more in control of my mental health. Each time I visit, I'm reminded that it's okay to seek help and that I'm part of a larger, supportive community."
        </p>
        <h2 className="test_name2">-Priya S., Los Angeles, CA</h2>
    </div>
    </div>
    </div>

    </>
  )
}

export default Resources