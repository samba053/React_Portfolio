import project1 from "../assets/Names/project-1.jpg.png";
import project2 from "../assets/Names/project-2.jpg.jpg";
import project3 from "../assets/Names/project-3.jpg.jpg";
import project4 from "../assets/Names/project-4.jpg.jpg";
import project5 from "../assets/Names/project-5.jpg";


export const HERO_CONTENT = `A recent graduate from R.V.R & J.C College of Engineering with a solid foundation in full-stack development. An enthusiastic explorer committed to continuous learning and personal growth. Equipped with a problem-solving mindset, strong communication skills, critical thinking abilities, patience, persistence, and adaptability, supported by a consistent educational trajectory. A self-motivated and proactive individual seeking a Software Engineer role to contribute and expand skills within a dynamic team.`;

export const ABOUT_TEXT = `I’m Sambasivarao, a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. As a Computer Science graduate, I’ve focused on mastering front-end technologies like JavaScript and React.js, which I’ve applied in various hands-on projects. My journey in web development began with a deep curiosity about how things work and has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments, solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`

export const EXPERIENCES = [
 
  {
    year: "May 2023 - Jul 2023",
    role: "Machine Learning Intern",
    company: "Spypro Hack You -Center of Excellence",
    description: `Developed a Credit Card Fraud Detection system, utilizing various machine learning algorithms and techniques.
                   Collaborated with a team to optimize the detection model for real-time fraud prevention applications.`,
    technologies: ["Python", "Machine Learning","mySQL"],
  },
  {
    year: "Jan 2022 - May 2022",
    role: "Web Developer",
    company: "Internshala.",
    description: `Gained hands-on experience in web development, focusing on building responsive and user-friendly web applications, working with senior developers to enhance functionality.
                  Applied best practices to improve development efficiency and application performance.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  }
];
export const EDUCATION = [
{
    Qualification: "B.TECH , 2021-2024",
    Branch:"Computer Science & Engineeing (CSE)",
    Institute: "R.V.R & J.C College of Engineering,Chowdavaram,Gunutr-AP",
    Board:"Acharya Nagarjuna University (ANU)",
    CGPA:"7.76 CGPA"
    
  },
  {
    Qualification: "DIPLOMA, 2018-2021",
    Branch:"Computer Engineering (CME)",
    Institute: "M.B.T.S Government Polytechnic College,Nallapadu,Gunutr-AP",
    Board:"State Board Of Technical Education AP (SBTET)",
    CGPA:"75.26 %"
    
  },
  {
    Qualification: "SSC, 2017-2018",
    Institute: "Z P High School (Government) Yanamadala,Gunutr-AP",
    Board:"Board Of Secondary Education Of Andra- Pradesh (BSEAP)",
    CGPA:"9.0 GPA"
    
  },
 
];

export const PROJECTS = [
  {
    title: "Food Munch"  ,
    
    image: project1,
    description:
      "Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers etc. Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website. Different bootstrap classes for responsiveness through mobile-first approach.",
    technologies: ["HTML", "CSS", "Bootsstrap"],
  },
  {
    title: "Healthcare chatbot for infectious disease prediction",
    image: project2,
    description:
      "Developed an intelligent chatbot to predict infectious diseases based on user-provide symptoms, offering disease descriptions, precautions, and severity calculations using decision tree algorithms.Interpreted user symptoms and provided accurate disease predictions with a comprehensive description and necessary precautions. Implemented decision tree algorithms to analyze symptoms and calculate the severity of the predicted disease.",
    technologies: ["Pyhon","Machine Learning"],
  },
  {
    title: "E-Commerce Application",
    image: project3,
    description:
      "Developed and deployed an e-commerce platform using React, Vite, and Redux, enhancing user experience and increasing retention by 25%.Implemented dynamic routing with React Router for smooth navigation, boosting average session duration by 30%. Integrated key features like product browsing, cart management, and user authentication, resulting in a 40% increase in completed transactions.",
    technologies: ["HTML", "CSS", "React", "Javascript","Vite","Redux","React Router","Tailwind CSS"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  }
];

export const CONTACT = {
  address: "Kavuri Hills, Madhapur, Hyderabad, Telengana - 500081",
  phoneNo: "+91 9618956349 ",
  email: "sambathodeti@gmail.com",
};