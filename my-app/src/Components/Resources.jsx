import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from 'react';
import './Resource.css'
import discord from '../Images/discord.png'

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
  <div className="sec_head2 text-center mt-16 font-bold text-7xl mb-10">
    Connect. Collaborate.
  </div>
  <div className="sec_head2 text-center mt-16 font-bold text-7xl mb-10">
    Conquer Your Educational Goals.
  </div>
</div>

    <div class="grid grid-cols-3 gap-4 p-6 bg-gray-100 h-80">
    <div class="relative pb-56% rounded shadow overflow-hidden">
        <iframe class="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/wFq0NhUcQvA" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
    <div class="col-span-2 bg-white p-6 rounded shadow">
        <h2 class="text-2xl font-semibold mb-4">How to Study Abroad - Scholarships</h2>
        <p class="text-gray-600">
        Embarking on a journey to study abroad? Discover the secrets to securing scholarships that can make your dream of international education a reality! 🌍📚
<p>In this comprehensive video, we delve deep into the world of study abroad scholarships, providing you with invaluable insights and practical tips to fund your overseas education adventure. Whether you're a high school student planning ahead or a college student seeking opportunities, this guide is your passport to financial aid success.</p>
</p>
 </div>
</div>
<div class="grid grid-cols-3 gap-4 p-6 bg-gray-100 h-80">
    <div class="col-span-2 bg-white p-6 rounded shadow">
        <h2 class="text-2xl font-semibold mb-4">Effective Scholarship Essay</h2>
        <p class="text-gray-600">
        Are you struggling with the most common scholarship essay question: "Please tell us about yourself and why you are applying for this scholarship. How will this scholarship help your personal and professional goals?" 📝✨
<p>In this video, we've got you covered! We'll provide expert tips and a sample essay response to help you craft a compelling answer that will set you apart from the competition.</p>
</p>
</div>
    <div class="relative pb-56% rounded shadow overflow-hidden">
        <iframe class="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/tjXIfam5qLE" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    </div>
</div>

<div className="mt-8 p-5 bg-discord-blue rounded-lg shadow-md flex items-center mb-4">
            <img src={discord} alt="Discord Logo" className="w-16 h-16 mr-5"/>
            <div className="flex-1">
                <h3 className="text-2xl font-semibold text-balck">Join Our Discord Community!</h3>
                <p className="text-black mt-2">
                    Connect with peers, get instant updates, and discuss all things related to our content. Don't miss out!
                </p>
            </div>
            <a href="YOUR_DISCORD_INVITE_LINK" className="py-2 px-4 bg-white text-discord-blue font-bold rounded">Join Now</a>
        </div>

        <div className="disc2">
    <div className="disc2_semic11"></div>
    <div className="disc2_semic12"></div>
    <div className="disc2_semic13"></div>
    <div className="disc2_semic14"></div>
    <div className="disc2_testimony">
    <div className="test1">
        <p className="test_words11">
       "For years, I felt trapped in my own thoughts, thinking I was alone in my struggles. Discovering this platform became a beacon of hope. The resources and community here have genuinely made a difference in my life. It's reassuring to know I'm not alone on this journey."" </p>
        <h2 className="test_name1">-Alex M., Chicago, IL</h2>
        </div>
        <div className="test1">
        <p className="test_words12">
        "I stumbled upon this scholarship website during my senior year of high school, feeling lost and overwhelmed. The resources here guided me through the application process, and I'm now attending college debt-free. Thank you for being my guiding light!"
        </p>
        <h2 className="test_name1">-Priya S., Los Angeles, CA</h2>
    </div>
    <div className="test2">
        <p className="test_words21">
        "As a first-generation college student, I didn't have anyone to turn to for scholarship advice. This website became my go-to resource, connecting me with mentors who helped me win scholarships I never thought possible. Forever thankful!" </p>
        <h2 className="test_name2">-Alex M., Chicago, IL</h2>
        </div>
        <div className="test2">
        <p className="test_words22">
        "I thought scholarships were only for the academic elite until I found this platform. The diverse scholarship opportunities and success stories motivated me to keep applying. Today, I'm on my way to becoming a nurse without drowning in student loans. This website is a game-changer!"
        </p>
        <h2 className="test_name2">-Priya S., Los Angeles, CA</h2>
    </div>
    </div>
    </div>

        <Accordion defaultActiveKey="0" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
  <Accordion.Item eventKey="0" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>Who is eligible to apply for scholarships?</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
    This FAQ explains the common eligibility criteria for scholarships, including factors such as academic performance, financial need, and specific requirements based on the scholarship type.
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="1" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>What documents and information do I need to apply for scholarships?</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
    Transcripts,
    Letters of Recommendation,
    Scholarship Application Form,
    Essay or Personal Statement,
    Financial Information,
    Resume/CV,
    Standardized Test Scores,
    Proof of Citizenship/Residency,
    Portfolio/Work Samples (if applicable),
    Additional Documents (varies by scholarship).
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Accordion defaultActiveKey="2" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
  <Accordion.Item eventKey="0" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>What is the difference between scholarships, grants, and loans?</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
    This question explains the distinctions between various forms of financial aid and their implications for students.</Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="3" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>What are some tips for writing a strong scholarship essay or personal statement?</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
    This question can provide valuable insights into the art of crafting a compelling scholarship essay, offering advice on how to stand out to scholarship selection committees.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Accordion defaultActiveKey="4" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
  <Accordion.Item eventKey="0" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>Are there scholarships available for international students?</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
    Yes, we have scholarships available for both domestic and international students. Check the scholarship descriptions for specific eligibility details, as some may be open to students from around the world.</Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="5" style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', padding: '1rem' }}>
    <Accordion.Header style={{ fontSize: '1.25rem', padding: '0.5rem 1rem' }}>How can I stay updated on new scholarships added to the website?</Accordion.Header>
    <Accordion.Body style={{ padding: '1rem' }}>
    You can join our Discord server to get real-time updates, engage with our community, and receive notifications about the latest scholarship opportunities as soon as they are posted. We also recommend following us on social media for additional ways to stay connected and up-to-date.</Accordion.Body>
  </Accordion.Item>
</Accordion>



    </>
  )
}

export default Resources