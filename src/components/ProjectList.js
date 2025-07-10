import Code from "./codes/code";

const ProjectList = {
  PYTHON: [
    {
      name: "Driver-Drowsiness-Detection",
      image: "/assets/cyclistic.png",
      github: "https://github.com/Yatharth-Vaish/Driver-Drowsiness-Detection",
      dataset: "https://github.com/Yatharth-Vaish/Driver-Drowsiness-Detection/tree/main/data%20/images",
      tags: ["MySQL", "Excel", "Tableau", "Data Visualization", "Data Analysis"],
      files: [
        {
          name: "README.md",
          type: "info",
          content: "Developed a computer vision system to detect driver fatigue using real-time video input and facial landmark analysis. Implemented alert mechanisms to warn drowsy drivers, enhancing road safety through AI-driven monitoring.",
        },
        { name: "Driver Drowsiness Detection.ipynb", type: "code", content: Code("Cyclistic").cleaning, language: "python" },
        
      ],
    },

    {
      name: "LOAN PREDICTION",
      image: "/assets/nashville.png",
      github: "https://github.com/Yatharth-Vaish/Loan_Prediction",
      tags: ["MySQL", "Data Cleaning", "Data Transformation"],
      trainingDataset: "https://github.com/Yatharth-Vaish/Loan_Prediction/blob/main/loan-train.csv",
      files: [
        {
          name: "README.md",
          type: "info",
          content: "💸 Loan Prediction System Project is a machine learning-based system that predicts whether a loan application will be approved or rejected. It is designed to automate and improve the efficiency of the loan approval process in financial institutions.",
        },
        {
          name: "Loan-Eligibilty-Prediction.ipynb",
          type: "code",
          content: Code("Nashville"),
          language: "python",
        },
      ],
    },

    {
      name: "Sentiment-Analysis",
      image: "/assets/covid19.png",
      github: "https://github.com/Yatharth-Vaish/Sentiment-Analysis",
      dataset: "https://github.com/Yatharth-Vaish/Sentiment-Analysis/blob/main/Sentiment%20Analysis%20dataset.zips",
      tags: ["MySQL", "Excel", "Tableau", "Data Visualization", "Data Analysis"],
      files: [
        {
          name: "README.md",
          type: "info",
          content: "Implemented sentiment analysis using natural language processing to assess and categorize opinions in text data. This technology provides valuable insights into public sentiment, aiding businesses in understanding customer feedback, making informed decisions, and enhancing overall customer satisfaction and engagement.",
        },
        {
          name: "Sentiment Analysis using Flipkart reviews.ipynb",
          type: "code",
          content: Code("Covid19"),
          language: "sql",
        },
      ],
    },
    {
      name: "Customer Churn Analysis",
      image: "/assets/cc.webp",
      github: "https://github.com/Yatharth-Vaish/Customer-Churn-Analysis",
      tags: ["Python","Data Visualization", "Data Analysis"],
      files: [
        {
          name: "README.md",
          type: "info",
          content: "Developed a machine learning model to predict customer churn using historical data. Conducted data cleaning, exploratory analysis, and feature engineering to identify key factors influencing churn. Built and evaluated models like Logistic Regression and Random Forest to forecast churn risk and provide actionable retention insights..",
        },
        { name: "Churn Prediction Model.ipynb", type: "code", content: Code("A"), language: "python" },
        
      ],
    },



    
  ],
 
  PowerBI: [
    {
      name: "Sales-Analytics-Dahsboard-Power-Bi",
      image: "/assets/cyclisticviz.png",
      github: "https://github.com/Yatharth-Vaish/Sales-Analytics-Dahsboard-Power-Bi?tab=readme-ov-file#overview",
      tags: ["PowerBI", "Data Visualization"],
      files: [
        {
          name: "README.md",
          type: "info",
          content: "This project offers an in-depth analysis of an e-commerce enterprise leveraging Power BI tools. Key business metrics and trends are visualized through a comprehensive dashboard. The insights derived facilitate data-driven decision-making, aiding business growth. The project incorporates forecasting techniques for predictive analysis.",
        }
        
      ],
    },

    {
      name: "Covid-19 Data Visualization Dashboard",
      image: "/assets/covid19viz.png",
      tableau: "https://public.tableau.com/app/profile/rafsan.ahmed8668/viz/CovidDataVisualizationDashboard-May2024/Dashboard1",
      tags: ["Tableau", "Data Visualization"],
      files: [
        {
          name: "README.md",
          type: "info",
          content: "Developed a Tableau dashboard to visualize Covid-19 infection data across all the countries around the world. The dashboard also gives an overview of the global death count, continental death count, and a filtered view of percentage population infected by country.",
        },
        
        
      ],
    },
  ],
    SQL: [
    {
      name: "Fraud_Detection_SQL",
      image: "/assets/Fraud-Detection.png",
      github: "https://github.com/Yatharth-Vaish/Fraud-Detection",
      tags: ["SQL", "Python"],
      files: [
        {
          name: "README.md",
          type: "info",
          content: "Identify suspicious activity like rapid withdrawals or large transfers .Rank accounts by deviation from average behavior. Use JOINs and GROUP BYs to compare peer activity .Impact: Helps flag potentially fraudulent accounts early.",
        },
        { name: "schema.sql", 
         type: "code", 
         content: Code("N"), 
         language: "sql" },

      ],
    },

    {
      name: "Hospital Resource Utilization",
      image: "/assets/hospital.webp",
      github: "https://github.com/Yatharth-Vaish/Hospital-Resource-Utilization",
      tags: ["SQL", "Python"],
      files: [
        {
          name: "README.md",
          type: "info",
          content: "Hospital Database Management System (DBMS) is a comprehensive SQL project designed to streamline and optimize the management of hospital operations. This project aims to provide an efficient and user-friendly solution for storing, retrieving, and manipulating various types of healthcare-related data.",
        },
        { name: "Hospital DBMS Oracle SQL.pdf", 
         type: "code", 
         content: Code("S"), 
         language: "sql" },
      ],
    },
  ]
};

export default ProjectList;