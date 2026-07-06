import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiVite,
  SiEslint,
  SiExpo,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiNpm,
  SiTrello,
  SiGithubactions,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
} from 'react-icons/si';
import { TbTable, TbFileTypeXls, TbFileTypePdf, TbDatabase, TbUpload } from 'react-icons/tb';
import type { Skill, ExperienceItem, Project, EducationItem } from '../types';

// nxtwatch img 
import NWlogin from "../../assests/NxtwatchImgs/login.png"
import NWdark from "../../assests/NxtwatchImgs/darkmode.png"
import NWhome from "../../assests/NxtwatchImgs/home.png"
import NwGaming from "../../assests/NxtwatchImgs/gaming.png"
import NWtrending from "../../assests/NxtwatchImgs/trending.png"
import NWsaved from "../../assests/NxtwatchImgs/savedvideos.png"
import NWVideo from "../../assests/NxtwatchImgs/videoPlayer.png"


// thinkboard
import TBcreate from "../../assests/thinkboard/create.png"
import TBedit from "../../assests/thinkboard/edit.png"
import TBhome from "../../assests/thinkboard/home.png"

// chatty img
import CAlogin from "../../assests/chattyapp/login.png"
import CAsignup from "../../assests/chattyapp/signup.png"
import CAcontacts from "../../assests/chattyapp/contacts.png"
import CAsetting from "../../assests/chattyapp/settings.png"
import CAtheme from "../../assests/chattyapp/theme.png"
import CAchatroom from "../../assests/chattyapp/chattingroom.png"
import CAProfile from "../../assests/chattyapp/profile.png"

// tasty kitchen img
import TKlogin from "../../assests/tastyKitchenImg/login.png"
import TKcart from "../../assests/tastyKitchenImg/cart.png"
import TKhome from "../../assests/tastyKitchenImg/home.png"
import TKorderSucc from "../../assests/tastyKitchenImg/orderSuccess.png"
import TKproducts from "../../assests/tastyKitchenImg/products.png"
import TKresturantdetails from "../../assests/tastyKitchenImg/resturantdetails.png"








export const profile = {
  name: 'Satish Malaganti',
  role: 'Frontend Software Developer',
  location: 'Prathipadu, East Godavari, Andhra Pradesh, India',
  phone: '8247538108',
  email: 'satishmalaganti8247@gmail.com',
  linkedin: 'https://www.linkedin.com/in/satishmalaganti/',
  github: 'https://github.com/malagantisatish',
  resumeUrl: '/resume.pdf',
  summary:
    "Frontend developer with 2+ years building responsive, data-heavy web applications in React and TypeScript. I spend most of my time in AG Grid tables, file-handling flows, and the kind of UI work that has to stay fast under real data. I like clean component architecture, and I like it more when it actually ships.",
};

export const skills: Skill[] = [
  { name: 'React.js', category: 'Frontend', level: 95, icon: SiReact },
  { name: 'TypeScript', category: 'Frontend', level: 88, icon: SiTypescript },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 92, icon: SiJavascript },
  { name: 'Redux Toolkit', category: 'State', level: 85, icon: SiRedux },
  { name: 'HTML5', category: 'Frontend', level: 95, icon: SiHtml5 },
  { name: 'CSS3 / Sass', category: 'Frontend', level: 90, icon: SiCss },
  { name: 'Sass / SCSS', category: 'Frontend', level: 82, icon: SiSass },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90, icon: SiTailwindcss },
  { name: 'Vite', category: 'Frontend', level: 85, icon: SiVite },
  { name: 'ESLint', category: 'Frontend', level: 80, icon: SiEslint },
  { name: 'React Router', category: 'Frontend', level: 88, icon: SiReactrouter },
  { name: 'AG Grid', category: 'Data & Reporting', level: 90, icon: TbTable },
  { name: 'PDF Export (jsPDF)', category: 'Data & Reporting', level: 82, icon: TbFileTypePdf },
  { name: 'Excel Export (SheetJS)', category: 'Data & Reporting', level: 80, icon: TbFileTypeXls },
  { name: 'File / Image Upload', category: 'Data & Reporting', level: 85, icon: TbUpload },
  { name: 'React Native', category: 'Mobile', level: 70, icon: SiReact },
  { name: 'Expo', category: 'Mobile', level: 70, icon: SiExpo },
  { name: 'SQL', category: 'Database', level: 68, icon: TbDatabase },
  { name: 'Node.js', category: 'Tools', level: 65, icon: SiNodedotjs },
  { name: 'Express.js', category: 'Tools', level: 60, icon: SiExpress },
  { name: 'MongoDB', category: 'Database', level: 62, icon: SiMongodb },
  { name: 'JWT Auth', category: 'Tools', level: 75, icon: SiJsonwebtokens },
  { name: 'Git', category: 'Tools', level: 90, icon: SiGit },
  { name: 'GitHub', category: 'Tools', level: 90, icon: SiGithub },
  { name: 'GitLab', category: 'Tools', level: 75, icon: SiGitlab },
  { name: 'Postman', category: 'Tools', level: 80, icon: SiPostman },
  { name: 'npm', category: 'Tools', level: 88, icon: SiNpm },
  { name: 'Trello / Plane', category: 'Tools', level: 78, icon: SiTrello },
  { name: 'CI/CD Pipelines', category: 'Tools', level: 75, icon: SiGithubactions },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer',
    company: 'Terranxt',
    companyUrl: 'https://terranxt.com',
    location: 'Gurugram, Haryana',
    period: 'April 2024 — Current',
    points: [
      'Developed the pvNxt portal in React.js, TypeScript, and Redux Toolkit to connect consumers, EPC companies, and installers through the solar installation process, with a reusable component architecture and REST API integration.',
      'Designed scalable UIs with Redux Toolkit for global state, React Hooks for lifecycle handling, and client-side routing for seamless navigation.',
      'Built image and document upload modules with client-side validation and preview, wired to backend APIs for secure storage and retrieval.',
      'Shipped downloadable PDF reports and invoices with jsPDF / jsPDF-AutoTable, and Excel export for formatted spreadsheet reports from application data.',
      'Integrated AG Grid for interactive, high-performance data tables — sorting, filtering, pagination, and custom cell renderers across large datasets.',
      'Set up and maintained CI/CD pipelines for automated build, test, and deployment.',
      'Managed the admin portal with role-based auth, protected routes, and efficient API-driven data handling.',
      'Followed Git-based workflows — feature branching, pull requests, resolving merge conflicts in a collaborative team.',
      'Reviewed code and gave feedback on reusability, performance, and coding standards.',
      'Ran unit tests after features and fixes, tracked work in Trello and Plane, managed dependencies with npm.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: 'Aditya Engineering College, Surampalem',
    location: 'Andhra Pradesh',
    credential: 'B.Tech, Mechanical Engineering',
    metric: 'CGPA 7.01',
    date: 'Oct 2021',
  },
  {
    school: 'Pragati Junior College, Prathipadu',
    location: 'Andhra Pradesh',
    credential: 'Intermediate, M.P.C',
    metric: '89.9%',
    date: 'Apr 2017',
  },
  {
    school: 'Zilla Parishad High School, Prathipadu',
    location: 'Andhra Pradesh',
    credential: '10th Class, SSC',
    metric: 'CGPA 7.7',
    date: 'Apr 2015',
  },
];

export const accomplishments: string[] = [
  'Second prize, Mandal-level chess competition.',
];

export const languages: string[] = ['Telugu', 'English', 'Hindi'];

// NOTE: repoUrl values below are placeholders — swap them for your real GitHub repo
// links whenever you have them. Search "TODO: repo link" to find every spot.
export const projects: Project[] = [
  {
    name: 'Chatty',
    demoUrl: 'https://chatty-realtime-chat-app-tzo6.onrender.com/',
    repoUrl: 'https://github.com/malagantisatish/chatty_realtime-chat_app',
    description:
      'Real-time chat app with secure signup/login and instant messaging, built on WebSockets with JWT-based auth.',
    stack: ['React (Vite)', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'Zustand'],
    images: [
      CAlogin, CAsignup, CAcontacts, CAchatroom, CAsetting, CAtheme, CAProfile
    ],
  },
  {
    name: 'ThinkBoard',
    demoUrl: 'https://thinkboard-fullstack-application.onrender.com',
    repoUrl: 'https://github.com/malagantisatish/thinkboard_fullstack_application',
    description:
      'Full-stack MERN notes manager with CRUD operations, client-side routing, and JWT-based authentication.',
    stack: ['MongoDB', 'Express.js', 'React (Vite)', 'TypeScript', 'Node.js'],
    images: [
      TBhome, TBcreate, TBedit
    ],
  },
  {
    name: "Today's Tasks",
    demoUrl: 'https://expo.dev/accounts/satishvarma_82/projects/frontend/builds/a5a04bb6-6373-454f-a1df-d6e7b300340f',
    repoUrl: 'https://github.com/malagantisatish/reactnative-fullstack-todo-app', // TODO: repo link
    description:
      'Cross-platform to-do app on React Native (Expo) with Convex, real-time sync, and a dedicated settings module.',
    stack: ['React Native', 'Expo', 'Convex', 'React Navigation'],
    images: [],
  },
  {
    name: 'Tasty Kitchens',
    demoUrl: "https://satishminipro.ccbp.tech/login",
    repoUrl: 'https://github.com/malagantisatish/tasty-kitchen-mini-project',
    description:
      'Swiggy/Zomato-style food ordering app — browse restaurants, view details, manage a cart, and check out. Built to Figma mockups with a horizontal-scroll carousel and REST APIs for restaurant data.',
    stack: ['React.js', 'React Router', 'React Slick', 'Bootstrap', 'REST APIs', 'Figma'],
    images: [
      TKlogin,
      TKhome,
      TKproducts,
      TKresturantdetails,
      TKcart,
      TKorderSucc,
    ],
  },
  {
    name: 'Nxt Watch',
    demoUrl: 'https://msnxtwatch.ccbp.tech',
    repoUrl: 'https://github.com/malagantisatish/assignment-7',
    description:
      'A YouTube-style video platform with login, Trending/Gaming/Saved video sections, search, and a theme toggle. JWT-based auth with protected routes across all pages.',
    stack: ['React.js', 'React Router', 'REST APIs', 'JWT Auth', 'Local Storage', 'Bootstrap'],
    images: [
      NWlogin,
      NWhome,
      NWdark,
      NWtrending,
      NWVideo,
      NwGaming,
      NWsaved,
    ],
  },
];
