import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FcGraduationCap, FcIdea, FcBriefcase, FcGoogle, FcAcceptDatabase, FcStatistics } from "react-icons/fc";
import "../styles/Timeline.css";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    title: "KIET Group Of Institutions.",
    description: "Completed B.Tech in Computer Science (2020–2024) with a strong foundation in algorithms, data structures, and software development. Gained hands-on experience in AI/ML, full-stack projects, and published a patent-backed research paper.",
    year: "Aug 2020 - July 2024",
    type: "education" 
  },
  {
    title: "Exposure to NASA HERC",
    description: "During my time at KIET , In 2023 as Vice-Captain and 2024 as Captain,leading TEAM INTERSTELLARS at NASA HERC proved that passion defies domains-this CS student helped drive India to global top 10,turning crashes into combacks.",
    year: "Sep 2022 - Jan 2024",
    type: "startup",
    learnMoreLink: "#experience", 
    learnMoreText: "View Experience"
  },
  {
    title: "Decision to Pivot to Data Analytics",
    description: "Realized my passion for data analytics and decided to pivot my career towards becoming a Data Analyst, focusing on data-driven decision making.",
    year: "Sept 2023 - Feb 2024",
    type: "career",
  },
  {
    title: "Data Analysis Certificate",
    description: "Completed a comprehensive program covering data cleaning, statistical analysis, and data visualization using tools like Excel, SQL, and Python. Gained hands-on experience turning raw data into actionable business insights.",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/NNOW56ZIS19Z",
    a: "https://coursera.org/share/3edc2f476f4f0fd6d4fea3de4f4403ad",
    b: "https://coursera.org/share/0ec678f5ea92d4c3023db6d3946a7d6e",
    c: "https://coursera.org/share/1b3a999e08c8cbbc7e4bca492d3ebfeb",
    d: "https://coursera.org/share/300ccf65352daf095631a716ffede26c",
    e: "https://coursera.org/share/7abfda1f534a798c40e5a1042c711675",
    f: "https://coursera.org/share/20970a6cb4804718c226ce6ae0d5bb0b",

  },
  {
    title: "First Data Projects",
    description: "Built my first portfolio projects (Covid-19 and Cyclistic), analyzing real-world datasets using Excel, MySQL and creating visualizations with Tableau.",
    year: "Sep 2024 - Dec 2024",
    type: "project"
  },
  {
    title: " Indian Institute of Technology, Jodhpur.(Part-Time)",
    description: "Pursuing a part-time BS in Artificial Intelligence and Data Science at IIT Jodhpur, combining academic learning with real-world experience. Relevant coursework includes Data Analytics, Statistical Methods, and Algorithmic Thinking—foundations for strong analytical problem-solving.",
    year: "Dec 2024 - Aug 2028",
    type: "education" 
  },
  {
    title: "Advanced Data Analysis & Storytelling",
    description: "Deepened my skills in advanced data analysis techniques, delving deeper into advanced SQL queries,  and diving into Python to unlock even more powerful ways to explore, manipulate, and tell stories with data.",
    year: "Jan 2025 - Present",
    type: "statistics",
    learnMoreLink: "#projects",
    learnMoreText: "View Projects"
  }
];

export default function Timeline() {
  const timelineWrapRef = useRef(null);
  const timelineItemsRef = useRef([]);
  
  useEffect(() => {
    timelineItemsRef.current = timelineItemsRef.current.filter(Boolean);
    
    const ctx = gsap.context(() => {
      gsap.fromTo("#timeline .section-title", 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#timeline .section-title",
            start: "top 90%",
            toggleActions: "restart none none reverse" 
          }
        }
      );
      
      gsap.fromTo("#timeline-progress-line", 
        { height: "0%" },
        { 
          height: "100%", 
          ease: "none",
          scrollTrigger: {
            trigger: timelineWrapRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1
          }
        }
      );
      
      timelineItemsRef.current.forEach((item, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        const content = item.querySelector('.timeline-content');
        const dot = item.querySelector('.timeline-dot');
        const date = item.querySelector('.timeline-date');
        
        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%", 
            toggleActions: "restart none none reverse"
          }
        });
        
        itemTl.fromTo(content,
          { x: direction * 100, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.5, 
            ease: "power2.out" 
          }
        ).fromTo(dot,
          { scale: 0, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.3,
            ease: "back.out(1.7)" 
          },
          "-=0.3" 
        ).fromTo(date,
          { opacity: 0, y: 10 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.3,
            ease: "power2.out" 
          },
          "-=0.2"
        );
      });
    });
    
    return () => ctx.revert();
  }, []);

  const renderIcon = (type) => {
    switch (type) {
      case 'education': return <FcGraduationCap className="timeline-icon" />;
      case 'startup': return <FcIdea className="timeline-icon" />;
      case 'career': return <FcBriefcase className="timeline-icon" />;
      case 'google': return <FcGoogle className="timeline-icon" />;
      case 'project': return <FcAcceptDatabase className="timeline-icon" />;
      case 'statistics': return <FcStatistics className="timeline-icon" />;
      default: return null;
    }
  };

  return (
    <div id="timeline">
      <div className="section-header">
        <span className="section-title">My Journey to Data</span>
      </div>
      
      <div className="timeline-wrapper" ref={timelineWrapRef}>
        <div className="timeline-progress">
          <div id="timeline-progress-line"></div>
        </div>
        
        <div className="timeline-items">
          {milestones.map((item, idx) => (
            <div 
              key={idx} 
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              ref={el => timelineItemsRef.current[idx] = el}
            >
              <div className="timeline-dot">
                {renderIcon(item.type)}
              </div>
              
              <div className="timeline-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                
                <div className="timeline-actions">
                  {item.certificateUrl && (
                    <a href={item.certificateUrl} className="timeline-link" target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  )}
                   {item.a && (
                    <a href={item.a} className="timeline-link" target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  )}
                   {item.b && (
                    <a href={item.b} className="timeline-link" target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  )}
                   {item.c && (
                    <a href={item.c} className="timeline-link" target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  )}
                   {item.e && (
                    <a href={item.e} className="timeline-link" target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  )}
                   {item.f && (
                    <a href={item.f} className="timeline-link" target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  )}
                   
                  
                  {item.learnMoreLink && (
                    <a href={item.learnMoreLink} className="timeline-link">
                      {item.learnMoreText}
                    </a>
                  )}
                </div>
              </div>
              <span className="timeline-date">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}