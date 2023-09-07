import { BsBarChartLine, BsPlayCircle, BsCircle } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

// Course
import courses1 from "./assets/courses1.png";
import courses2 from "./assets/courses2.png";
import courses3 from "./assets/courses3.png";
import courses4 from "./assets/courses1.png";
import courses5 from "./assets/courses2.png";

// Course Hero
import hero_course1 from "./assets/hero_courses1.png";
import hero_course2 from "./assets/hero_courses2.png";
import hero_course3 from "./assets/hero_courses3.png";

// Cooperation
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";

// Logo
import logo_eduskill from "./assets/logo_eduskill.png";

// Icon
import public_speaking from "./assets/focus_public_speaking.svg";
import career_oriented from "./assets/focus_career_oriented.svg";
import creative_thinking from "./assets/focus_creative_thinking.svg";

// Hero with Layer
import eduskill_1 from "./assets/bg_text_hero_eduskill_1.png";
import eduskill_2 from "./assets/bg_text_hero_eduskill_2.png";
import layer_1 from "./assets/first_hero_layer.png";
import layer_2 from "./assets/second_hero_layer.png";
import layer_3 from "./assets/third_hero_layer.png";

// Circle
import circular1 from "./assets/circular_teacher1.png";
import circular2 from "./assets/circular_teacher2.png";
import circular3 from "./assets/circular_teacher3.png";
import circular4 from "./assets/circular_teacher4.png";

// Reviews
import reviews1 from "./assets/reviews_1.png";
import reviews2 from "./assets/circular_teacher1.png";
import reviews3 from "./assets/reviews_1.png";

// 2nd Pages Class
import class1 from "./assets/pages/Courses/class1.png";
import class2 from "./assets/pages/Courses/class2.png";
import class3 from "./assets/pages/Courses/class3.png";
import class4 from "./assets/pages/Courses/class4.png";
import class5 from "./assets/pages/Courses/class5.png";
import class6 from "./assets/pages/Courses/class6.png";
// <-- Hero Class
import classHero1 from "./assets/pages/CoursesHero/classHero1.png";
import classHero2 from "./assets/pages/CoursesHero/classHero2.png";
import classHero3 from "./assets/pages/CoursesHero/classHero3.png";
import classHero4 from "./assets/pages/CoursesHero/classHero4.png";
import classHero5 from "./assets/pages/CoursesHero/classHero5.png";
import classHero6 from "./assets/pages/CoursesHero/classHero6.png";

// Recom
import recom1 from "./assets/pages/Courses/recom1.png";
import recom2 from "./assets/pages/Courses/recom2.png";
import recom3 from "./assets/pages/Courses/recom3.png";
// <-- Hero Recom
import recomHero1 from "./assets/pages/CoursesHero/recomHero1.png";
import recomHero2 from "./assets/pages/CoursesHero/recomHero2.png";
import recomHero3 from "./assets/pages/CoursesHero/recomHero3.png";

// Cover Video
import cover1 from "./assets/pages/CoverVideo/cover1.png";

// Recom learn 
import learn1 from "./assets/pages/Learn/learn1.png";
import learn2 from "./assets/pages/Learn/learn2.png";
import learn3 from "./assets/pages/Learn/learn3.png";

// Export navLinks for link href
export const navLinks = [
  {
    id: 1,
    href: "/", // Update the href to match the home route
    link: "Home",
  },
  {
    id: 2,
    href: "/courses", // Update the href to match the courses route
    link: "Courses",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Business",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Science",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Design",
    title: "Figma UI UX Design..",
    description:
      "Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat...",
    rating: 4.5,
    participants: "{16,325}",
    teacher: "John Doe",
    price: "50.000",
    heroes: hero_course1,
    year: "2001 Enrolled",
  },
  {
    id: 2,
    image: courses2,
    category: "Design",
    title: "Figma UI UX Design..",
    description:
      "Rancang Situs Web dan Aplikasi Seluler yang Disukai Pengguna Anda dan Kembali..",
    rating: 3.9,
    participants: "{832}",
    teacher: "John Doe",
    price: "59.000",
    heroes: hero_course2,
    year: "2001 Enrolled",
  },
  {
    id: 3,
    image: courses3,
    category: "Design",
    title: "Belajar bersama Shoaib..",
    description:
      "Pelajari cara menerapkan prinsip Pengalaman Pengguna (UX) ke desain ...",
    rating: 4.9,
    participants: "{125}",
    teacher: "John Doe",
    price: "79.000",
    heroes: hero_course3,
    year: "2001 Enrolled",
  },
  {
    id: 4,
    image: courses4,
    category: "Design",
    title: "Membangun User Inter..",
    description:
      "Pelajari cara menerapkan prinsip Pengalaman Pengguna (UX) ke desain ...",
    rating: 4.7,
    participants: "{125}",
    teacher: "John Doe",
    price: "79.000",
    heroes: hero_course1,
    year: "2001 Enrolled",
  },
  {
    id: 5,
    image: courses5,
    category: "AI Development",
    title: "AI Dev With Pyth.. ",
    description:
      "Pelajari cara menerapkan prinsip Pengalaman Pengguna (UX) ke desain ...",
    rating: 4.9,
    participants: "{125}",
    teacher: "John Doe",
    price: "79.000",
    heroes: hero_course2,
    year: "2001 Enrolled",
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5];

export const accordions = [
  {
    id: 1,
    title: "What is Skillex?",
  },
  {
    id: 2,
    title: "What can I learn from Skillex?",
  },
  {
    id: 3,
    title: "Can I teach on Skillex?",
  },
  {
    id: 4,
    title: "What is included in my Skillex membership?",
  },
];

export const eduskill = [logo_eduskill];

export const focus = [
  {
    id: "1",
    image: public_speaking,
    text: "Public Speaking",
  },
  {
    id: "2",
    image: career_oriented,
    text: "Career Oriented",
  },
  {
    id: "3",
    image: creative_thinking,
    text: "Creative Thinking",
  },
];

export const bg_eduskill_1 = [eduskill_1];
export const bg_eduskill_2 = [eduskill_2];

export const layers_1 = [layer_1];
export const layers_2 = [layer_2];
export const layers_3 = [layer_3];

export const circleTeacher = [
  {
    id: 1,
    name: "Theresa Webb",
    job: "Application Support Analyst Lead",
    position:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    icons: [<AiOutlineTwitter />, <AiFillLinkedin />], // Add the icons here
    image: circular1,
  },
  {
    id: 2,
    name: "Courtney Henry",
    job: "Director, Undergraduate Analytics and Planning",
    position: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    icons: [<AiOutlineTwitter />, <AiFillLinkedin />], // Add the icons here
    image: circular2,
  },
  {
    id: 3,
    name: "Albert Flores",
    job: "Career Educator",
    position: "Former PM for Linear, Lambda School, and On Deck.",
    icons: [<AiOutlineTwitter />, <AiFillLinkedin />], // Add the icons here
    image: circular3,
  },
  {
    id: 4,
    name: "Marvin McKinney",
    job: "Co-op & Internships Program & Operations Manager",
    position: "Former frontend dev for Linear, Coinbase, and Postscript.  ",
    icons: [<AiOutlineTwitter />, <AiFillLinkedin />], // Add the icons here
    image: circular4,
  },
];

export const reviewsEdu = [
  {
    id: 1,
    image: reviews1,
    name: "Jacob Jones",
    study: "Mahasiswa, Politeknik Elektronika Negeri Surabaya",
  },
  {
    id: 2,
    image: reviews2,
    name: "Halim",
    study: "Mahasiswa, Politeknik Elektronika Negeri Surabaya",
  },
  {
    id: 3,
    image: reviews3,
    name: "Jacob",
    study: "Mahasiswa, Politeknik Elektronika Negeri Surabaya",
  },
];

// <----------------------------------->

// 2nd Page Course.jsx
export const classEdu = [
  {
    id: 1,
    image: class1,
    category: "Back End",
    title: "Membangun Database",
    description:
      "Basis data atau sekumpulan data yang dikelola sedemikian rupa sesuai.....",
    rating: 4.2,
    participants: "{125}",
    teacher: "Esther Howard",
    price: "0",
    heroes: classHero1,
    year: "2001 Enrolled",
    discount: "FREE",
    namelink: "membangun-database",
    video: "https://www.youtube.com/watch?v=TngsP0kfAxg&list=PLc6SEcJkQ6DxQmmUzUilxRUNrJyeHDmX7",
    cover: cover1,
  },
  {
    id: 2,
    image: class2,
    category: "UI/UX",
    title: "Membuat Dashboard ...",
    description:
      "Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat...",
    rating: 4.3,
    participants: "{(16,325)}",
    teacher: "Jane Cooper",
    price: "50.000",
    heroes: classHero2,
    year: "2001 Enrolled",
    namelink: "membuat-dashboard",
    video: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
    cover: courses2,

  },
  {
    id: 3,
    image: class3,
    category: "Full Stack",
    title: "Belajar bersama Shoaib..",
    description:
      "Rancang Situs Web dan Aplikasi Seluler yang Disukai Pengguna Anda dan Kembali..",
    rating: 4.5,
    participants: "{832}",
    teacher: "Jenny Wilson",
    price: "59.000",
    heroes: classHero3,
    year: "2001 Enrolled",
    namelink: "belajar-bersama-shoaib",
    video: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
    cover: courses3,
  },
  {
    id: 4,
    image: class4,
    category: "Full Stack",
    title: "Web Development  mic...",
    description:
      "Rancang Situs Web dan Aplikasi Seluler yang Disukai Pengguna Anda dan Kembali..",
    rating: 4.5,
    participants: "{832}",
    teacher: "Jenny Wilson",
    price: "59.000",
    heroes: classHero4,
    year: "2001 Enrolled",
    namelink: "web-development",
        video: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
        cover: courses4,
  },
  {
    id: 5,
    image: class5,
    category: "Back End",
    title: "Dashboard Absensi Onl..",
    description:
      "Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat...",
    rating: 4.3,
    participants: "{16,325}",
    teacher: "Jane Cooper",
    price: "0",
    heroes: classHero5,
    year: "2001 Enrolled",
    discount: "FREE",
    namelink: "dashboard-absensi-online",
        video: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
        cover: courses5,
  },
  {
    id: 6,
    image: class6,
    category: "Front End",
    title: "Membangun Website...",
    description:
      "Pelajari cara menerapkan prinsip Pengalaman Pengguna (UX) ke desain ...",
    rating: 4.2,
    participants: "{125}",
    teacher: "Esther Howard",
    price: "79.000",
    heroes: classHero6,
    year: "2001 Enrolled",
    namelink: "membangun-website",
        video: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
        cover: courses1,
  },
  {
    id: 7,
    image: class5,
    category: "Design",
    title: "Figma UI UX Design..",
    description:
      "Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat...",
    rating: 4.5,
    participants: "{16,325}",
    teacher: "John Doe",
    price: "50.000",
    heroes: classHero5,
    year: "2001 Enrolled",
    namelink: "figma-ui-ux-design",
        video: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
        cover: courses1,
  },
  {
    id: 8,
    image: class1,
    category: "Design",
    title: "Figma UI UX Design..",
    description:
      "Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat...",
    rating: 4.5,
    participants: "{16,325}",
    teacher: "John Doe",
    price: "50.000",
    heroes: classHero1,
    year: "2001 Enrolled",
    namelink: "test",
        video: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
        cover: courses2,
  },
  {
    id: 9,
    image: class3,
    category: "Design",
    title: "Figma UI UX Design..",
    description:
      "Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat...",
    rating: 4.5,
    participants: "{16,325}",
    teacher: "John Doe",
    price: "50.000",
    heroes: classHero3,
    year: "2001 Enrolled",
    namelink: "test",
        video: "https://www.youtube.com/watch?v=z3slaXqmkT0&list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h",
        cover: courses3,
  },
];

// Recom Section of Course.jsx
export const recomEdu = [
  {
    id: 1,
    image: recom1,
    category: "Programming",
    title: "Belajar pemrograman u...",
    description:
      "Mari bergabung dengan kelas terkenal kami, ilmu yang diberikan pasti akan bermanfaat...",
    rating: 4.5,
    participants: "{16,325}",
    teacher: "Jane Cooper",
    price: "50.000",
    heroes: recomHero1,
    year: "2001 Enrolled",
  },
  {
    id: 2,
    image: recom2,
    category: "UX",
    title: "Belajar bersama Shoaib..",
    description:
      "Rancang Situs Web dan Aplikasi Seluler yang Disukai Pengguna Anda dan Kembali..",
    rating: 4.5,
    participants: "{832}",
    teacher: "Jenny Wilson",
    price: "59.000",
    heroes: recomHero2,
    year: "2001 Enrolled",
  },
  {
    id: 3,
    image: recom3,
    category: "Full Stack",
    title: "Membangun website ju..",
    description:
      "Membangun tampilan website penjualan online dari o hingga selesai ...",
    rating: 4.5,
    participants: "{125}",
    teacher: "Esther Howard",
    price: "79.000",
    heroes: recomHero3,
    year: "2001 Enrolled",
  },
];

// Learn
export const learn = [
  {
    id: 1,
    image: learn1,
    title: "1. Pengenalan Figma..",
    namelink: "test",
  },
  {
    id: 2,
    image: learn2,
    title: "2. Membuat pengatu..",
    namelink: "test",
  },
  {
    id: 3,
    image: learn3,
    title: "3. Whiteboard Figma..",
    namelink: "test",
  },
];

// export Video Learn
export const videoLearn = [
  {
    id: 1,
    icons: [<BsPlayCircle />], // Add the icons here
    title: "Menggunakan Tool figma",
    subtitle: "by Ardan fixaxi",
    namelink: "learn",
  },
  {
    id: 2,
    icons: [<BsPlayCircle />], // Add the icons here
    title: "Memulai desain pada fi..",
    subtitle: "by Gilang Ari",
    namelink: "test",
  },
  {
    id: 3,
    icons: [<BsPlayCircle />], // Add the icons here
    title: "Kolaborasi desain den..",
    subtitle: "by Indana Zulfinata",
    namelink: "test",
  },
];


export const taskLearn = [
  {
    id: 1,
    items: [
      {
        icons: [<BsCircle />], // Add the icons here
        title: "Buatlah Kata “Hello World”",
        subtitle: "by Indana Zulfinata",
      },
      {
        icons: [<BsCircle />], // Add the icons here
        title: "Buatlah WEB Perkenalan",
        subtitle: "by Indana Zulfinata",
      },
      {
        icons: [<BsCircle />], // Add the icons here
        title: "Hiaslah WEB perkenalanmu",
        subtitle: "by Indana Zulfinata",
      },
      {
        icons: [<BsCircle />], // Add the icons here
        title: "Berikan animasi sederhana",
        subtitle: "by Indana Zulfinata",
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        icons: [<BsCircle />], // Add the icons here
        title: "Kolaborasi dengan..",
        subtitle: "by Indana Zulfinata",
      },
      {
        icons: [<BsCircle />], // Add the icons here
        title: "Kolaborasi dan..",
        subtitle: "by Indana Zulfinata",
      },
    ],
  },
  // Add more objects with different IDs and their respective items
];


