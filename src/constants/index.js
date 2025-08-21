import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  proshore,
  wildoasis,
  visionboard,
  fastreactpizza,
  everestwalk,
  codewing,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Plugin Development",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Codewing Solutions",
    icon: codewing,
    iconBg: "#ffffff",
    date: "Aug 2025 - Present",
    points: [
      "Understand the WordPress eco-system and its core architecture.",
      "Worked on adding new features to existing plugins to extend functionality.",
    ],
  },
  {
    title: "Frontend Developer (Internship)",
    company_name: "Everestwalk Groups",
    icon: everestwalk,
    iconBg: "#ffffff",
    date: "May 2025 - Aug 2025",
    points: [
      "Understand the project structure, existing codebase, and application flow of ongoing projects to contribute effectively.",
      "Fixing, updating, redesigning and implementing client-requested UI and layout changes.",
      "Integrating APIs.",
      "Used Git/GitHub for version control: created branches, managed pull requests, and resolved merge conflicts.",
      "Communicated regularly with team members to ensure smooth coordination and workflow.",
      "Reached out to senior developers when stuck and learned by reviewing their code and solutions.",
    ],
  },
  {
    title: "Frontend Developer (Internship)",
    company_name: "PROSHORE 🚀 High-Performance Dev Teams with Purpose",
    icon: proshore,
    iconBg: "#05005c",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Built signup & dashboard pages of Vision Board with Redux, Formik, and Yup for validation, integrating RESTful APIs.",
      "Optimized performance using React best practices and managed Git/GitHub workflows.",
      "Collaborated in an Agile team with daily stand-ups and iterative development.",
      "Worked with a mentor to refine code quality and implement feedback.",
    ],
  },
];

const projects = [
  {
    name: "The Wild Oasis",
    description:
      "The Wild Oasis is a full-stack hotel management application built with React, Supabase, and Styled Components. It allows hotel staff to manage bookings, guests, and cabins efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "styled_components",
        color: "pink-text-gradient",
      },
    ],
    image: wildoasis,
    source_code_link: "https://github.com/binayakChhetri/The-Wild-Oasis",
    live_demo_link: "https://hotel-mgmt-sys.netlify.app/",
  },
  {
    name: "Vision Board",
    description:
      "Vision Board is a project management web app I contributed to as a frontend developer during my internship, built with React, TypeScript, and Tailwind CSS, designed to help teams plan, track, and collaborate effectively.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: visionboard,
    source_code_link:
      "https://github.com/binayakChhetri/Project-management-tool",
  },
  {
    name: "Fast React Pizza",
    description:
      "Fast React Pizza is a pizza ordering platform built with React, featuring real-time data integration, navigation, advanced state management using Redux, and a responsive design for a smooth user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fastreactpizza,
    source_code_link: "https://github.com/binayakChhetri/fast-react-pizza",
    live_demo_link: "https://pizza-and-advance-react.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
