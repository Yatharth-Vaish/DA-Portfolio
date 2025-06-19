import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Experience.css";

const experienceItems = {
   "Innodata INC.": {
    jobTitle: " Data Analyst @",
    duration: " OCT 2024– Present",
    desc: [
      "Managed end-to-end ML training data pipelines with over 95% accuracy, streamlining ETL workflows across cross-functional teams. Improved data quality and processing efficiency, enabling faster and more reliable model development.",
      "Automated reporting tasks and QA workflows, reducing delivery time by 30% and minimizing manual errors. Enabled faster insights and improved overall process efficiency across teams."
    ]
  },
  " Happieloop Technologies– India": {
    jobTitle: " Data Analyst Intern @",
    duration: " AUG 2023– JAN 2024",
    desc: [
      "Used SQL and A/B testing to analyze customer behavior and identify retention strategies. Insights led to an 18% boost in user retention. Demonstrated strong data-driven impact during internship at Happieloop Technologies.",
      "Designed and automated dynamic Power BI dashboards to monitor key performance indicators, reducing reporting time by 25% and enabling faster, data-driven decision-making.",
      "Collaborated with various stakeholders and firms to forge strategic partnerships to amplify the app's reach and impact"
    ]
  },
 
  
  
};

const JobList = () => {
  const [value, setValue] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 600);
  const keys = Object.keys(experienceItems);
  
  const contentRef = useRef(null);
  const listsRef = useRef({});
  const oldValueRef = useRef(value);
  
  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth < 600);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleTabChange = (index) => {
    const oldIndex = oldValueRef.current;
    
    if (oldIndex === index) return;
    
    oldValueRef.current = index;
    
    const currentPanel = document.querySelector('.joblist-panel');
    
    if (currentPanel) {
      gsap.to(currentPanel, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setValue(index);
          animateJobDetails();
          
          const newPanel = contentRef.current.querySelector(`.joblist-panel:nth-child(${index + 1})`);
          if (newPanel) {
            gsap.fromTo(newPanel, { opacity: 0 }, { opacity: 1, duration: 0.3 });
          }
        }
      });
    } else {
      setValue(index);
      animateJobDetails();
    }
  };
  
  const animateJobDetails = () => {
    const listItems = contentRef.current?.querySelectorAll('.job-description li');
    
    if (listItems?.length) {
      gsap.set(listItems, { opacity: 0, x: 20 });
      
      gsap.to(listItems, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  };
  
  useEffect(() => {
    animateJobDetails();
  }, []);
  
  return (
    <div className={`joblist-root ${isHorizontal ? "horizontal" : "vertical"}`}>
      <div className={`joblist-tabs ${isHorizontal ? "horizontal" : "vertical"}`}>
        {keys.map((key, i) => (
          <button
            key={key}
            className={`joblist-tab${value === i ? " active" : ""}`}
            onClick={() => handleTabChange(i)}
          >
            {isHorizontal ? `0${i+1}.` : key}
          </button>
        ))}
      </div>
      
      <div className="joblist-content" ref={contentRef}>
        {keys.map((key, i) =>
          value === i ? (
            <div key={key} className="joblist-panel">
              <span className="joblist-job-title">
                {experienceItems[key]["jobTitle"] + " "}
              </span>
              <span className="joblist-job-company">{key}</span>
              <div className="joblist-duration">
                {experienceItems[key]["duration"]}
              </div>
              <ul className="job-description">
                {experienceItems[key]["desc"].map((descItem, j) => (
                  <li key={j}>{descItem}</li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default JobList;