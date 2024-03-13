/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harsh Prasad's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Harsh Prasad",
    type: "website",
    url: "https://harshprasad06.github.io/personal-portfolio",
  },
};

//Home Page
const greeting = {
  title: "Harsh Prasad",
  logo_name: "Harsh Prasad",
  nickname: "Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1ByK6soRMap71bCi8vgkrrb-w1FvII_Du/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/harshprasad06",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/harshprasad06",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshprasad06/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:prasadharsh095@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/harshprasa58903",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/___harshu22/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
   
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using React Native and solo android apps",
        "⚡ Creating application backend in Node, Express & Django",
      ],
      softwareSkills: [
        {
          skillName: "Html",
          fontAwesomeClassname: "skill-icons:html",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "skill-icons:css",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
          style: {
            color: "#339933",
          },
        },
        
        {
          skillName: "Django",
          fontAwesomeClassname: "skill-icons:django",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying  on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server on GCP",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe PhotoShop",
          fontAwesomeClassname: "skill-icons:photoshop",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Coreldraw",
          fontAwesomeClassname: "file-icons:coreldraw-alt",
          style: {
            color: "green",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Animate",
          fontAwesomeClassname: "logos:adobe-animate",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
      profileLink:'https://leetcode.com/harshprasad06/'
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      // profileLink: "https://www.hackerrank.com/layman_brother",
      profileLink:'#'
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};
const degrees = {
  degrees: [
    {
      title: "Indian Institute of Computer Science Delhi",
      subtitle: "Diploma in Website Development",
      logo_path: "iics_logo.jpg",
      alt_name: "IICS Delhi",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Completed an intensive web developer course at IICS Institute, gaining proficiency in HTML, CSS, PHP, JS.",
        "⚡ Acquired practical skills in web development through hands-on projects and assignments.",
        "⚡ Developed a strong foundation in front-end and back-end technologies, ready to create dynamic and responsive websites.",
      ],
      website_link: "https://www.iicsindia.com/",
    },
    {
      title: "Delhi University",
      subtitle: "BA PROGRAMME",
      logo_path: "du_logo.png",
      alt_name: "Delhi University",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Graduated with a BA Programme from Delhi University, gaining a diverse and holistic education.",
        "⚡ Developed strong analytical and critical thinking skills through a wide range of subjects.",
        "⚡ Expanded my knowledge base and understanding of various disciplines, laying a strong foundation for my career.",
      ],
      website_link: "https://sol.du.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Html & CSS",
      subtitle: "- Harsh Prasad",
      logo_path: "iics_logo.jpg",
      // certificate_link:
        // "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "IICS INDIA",
      color_code: "#FFFFF7",
    },
    {
      title: "Javscript",
      subtitle: "- Harsh Prasad",
      logo_path: "iics_logo.jpg",
      // certificate_link:
        // "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "IICS INDIA",
      color_code: "#FFFFF7",
    },
    {
      title: "illustrator",
      subtitle: "- Harsh Prasad",
      logo_path: "iics_logo.jpg",
      // certificate_link:
        // "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#FFFFF7",
    },
    {
      title: "Python",
      subtitle: "- Harsh Prasad",
      logo_path: "iics_logo.jpg",
      // certificate_link:
        // "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#FFFFF7",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving Company as React and Recat Native Developer, Designer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
       
        {
          title: "React Native Developer",
          company: "Cyno pharmaceuticals ltd",
          company_url: "https://www.cyno.co.in/",
          logo_path: "cyno_logo.jpeg",
          duration: "Present",
          location: "Nirman Vihar, Delhi",
          description:
            "At Cyno Pharmaceuticals Ltd, I am responsible for developing mobile applications using React Native. My role involves working closely with the team to design, develop, and implement features that enhance the user experience. I also contribute to the overall architecture and design of the applications to ensure they meet the company's standards and requirements.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "React Native Developer",
          company: "Cyno pharmaceuticals ltd",
          company_url: "https://www.cyno.co.in/",
          logo_path: "cyno_logo.jpeg",
          duration: "Nov 2023 - Feb 2024",
          location: "Nirman Vihar, Delhi",
          description:
          "As a React Native Developer Intern at Cyno Pharmaceuticals Ltd, I am gaining valuable experience in mobile app development. My responsibilities include assisting in the development of React Native applications, collaborating with the team to implement new features, and learning best practices in software development. I am eager to contribute to the team and enhance my skills in a professional environment.",
          color: "#000000",
        },
        {
          title: "Web Developer Intern",
          company: "SriRam Soft Solution Pvt Ltd.",
          company_url: "https://www.sriramsoft.com/",
          logo_path: "sriram_logo.png",
          duration: "Aug 2023 - Sept 2023",
          location: "East Azad Nagar, Delhi",
          description:
            "As a Web Developer Intern at SriRam Soft Solution Pvt Ltd, I am gaining hands-on experience in web development. My responsibilities include working on various projects, learning new technologies, and collaborating with the team to develop and maintain web applications. I am enthusiastic about expanding my skills and contributing to the company's projects.",
          color: "#ee3c26",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Indian Insititue of Computer Science  Facilitator",
          company: "IICS",
          company_url: "https://www.iicsindia.com/",
          logo_path: "iics_logo.jpg",
          duration: "Jan 2022 -  Dec-2023",
          location: "Yaumuna Vihar, Delhi",
          description:
          "As a Volunteer Facilitator at the Indian Institute of Computer Science, I support and assist students in their learning activities. My role involves guiding students, answering their queries, and helping them understand complex concepts. I also contribute to creating a positive and engaging learning environment for the students.",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create React , React Native , HTML , CSS , JS , PHP , Django projects and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publish Projects",
  description:
    "All the publish projects",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Pehnawa Delhi",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Dynamic E-commerce Platform specialize in women's ethnic  wear, offering an extensive range of suits , sarees,and lehngas",
      url:
        "https://www.pehnawadelhi.com/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Go Books",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Dynamic E-commerce Platform specialize School Books Purchase site, the platform offered a user-friendly interface allowing user to browse and purchase books",
      url:
        "https://www.goschoolbooks.com/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Univeral Logistic",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Static Logistic site for present ,the platform offered a user-friendly interface allowing user to visit site.",
      url:
        "https://www.universalfreightlogistics.in/"
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Art of Anurag",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Static Portfolio site for present a painting artist ,the platform offered a user-friendly interface allowing user to visit site.",
      url:
        "https://www.artofanurag.com/",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harsh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, React Native, Python , Django and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Delhi , India",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/CodewithHarsh/@28.7048315,77.2781645,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd78f39ffb79:0x7071d48057040aac!8m2!3d28.7048268!4d77.2807394!16s%2Fg%2F11t40b1ypw?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
