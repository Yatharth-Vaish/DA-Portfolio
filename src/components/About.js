import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRefs = useRef([]);
  
  useEffect(() => {
    gsap.fromTo(".about-title",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    gsap.from(textRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section id="about" ref={aboutRef}>
      <div className="section-header">
        <span className="section-title about-title">About Me</span>
      </div>
      
      <div className="about-content">
        <div className="about-description">
          <p ref={el => textRefs.current[0] = el}>
           Hi, I’m Yatharth Vaish — a results-driven Data Analyst who turns data into strategic advantage. With expertise in Python, SQL, Power BI, and machine learning, I don’t just analyze data — I uncover insights that create measurable business impact. Whether it’s saving $500K by reducing customer churn, increasing ad engagement through predictive modeling, or accelerating healthcare outcomes with high-accuracy diagnostic tools, I bring a sharp analytical mindset and a bias for action.
          </p>
          
          <p ref={el => textRefs.current[1] = el}>
            At Innodata Inc., I lead automation efforts that have streamlined reporting and cut delivery times by 30%, while ensuring 95%+ accuracy in machine learning data pipelines. During my internship at Happieloop Technologies, my retention analysis and dashboard automation directly improved customer engagement and reduced manual workload by 25%.
          </p>
          
          <p ref={el => textRefs.current[2] = el}>
             I back my work with strong academic and professional credentials: certifications from Google, IBM, and Microsoft, and a BS in AI & Data Science from IIT Jodhpur, following a BTech in CS & IT. But what truly sets me apart is my ability to translate complex data into clear, compelling insights that drive decisions, fuel innovation, and move businesses forward.
          </p>
          
          <p ref={el => textRefs.current[3] = el}>
            I’m passionate about leveraging data to solve real-world problems, and I’m always seeking opportunities where I can contribute meaningfully, learn continuously, and build solutions that matter.
          </p>
          
        </div>
        <p className="about-timeline-link" ref={el => textRefs.current[5] = el}>
          <a href="#timeline">
            <span role="img" aria-label="timeline">🗺️ </span> 
            View my <span className="about-timeline-highlight">timeline</span> to learn more about my unique journey into data &rarr;
          </a>
        </p>     
        <div className="about-actions" ref={el => textRefs.current[6] = el}>
          <a href="/assets/yatharth.pdf" className="resume-button btn-effect" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;