import heroImage from '../assets/hero-image.jpg';
import aboutImage from '../assets/about-image.jpg';
import resume from '../assets/resume.pdf';

export const heroData = {
    name: "Badsha Sheikh",
    title: "MERN Stack Developer",
    subtitle: "Crafting beautiful and functional web applications with a passion for clean code and user-centric design.",
    status: "Available for Work",
    image: heroImage,
    resume: resume,
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/Badsha012",
            icon: "code" // Using 'code' or 'github' if available in material symbols, usually 'code' or 'terminal' is a good fallback, or 'public'
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/md-badsha-sheikh/",
            icon: "work" // 'work' or 'business' for LinkedIn
        },
        {
            name: "Email",
            url: "mailto:mdbadshasheikh2022@gmail.com",
            icon: "mail"
        }
    ]
};

export const skillsData = {
    technical: [
        { name: 'JavaScript', level: '90%', icon: 'code' },
        { name: 'React.js', level: '85%', icon: 'code' },
        { name: 'Node.js', level: '80%', icon: 'dns' },
        { name: 'Express.js', level: '85%', icon: 'dns' },
        { name: 'MongoDB', level: '75%', icon: 'database' },
        { name: 'Next.js', level: '80%', icon: 'code' },
        { name: 'TypeScript', level: '70%', icon: 'code' },
        { name: 'RESTful APIs', level: '85%', icon: 'http' },
    ],
    soft: [
        'Problem Solving', 'Communication', 'Team Collaboration', 'Time Management', 'Adaptability', 'Attention to Detail'
    ],
    tools: [
        'VS Code', 'Git', 'GitHub', 'Vercel', 'Postman', 'Figma', 'npm'
    ]
};

import englishJanalaImage from '../assets/english-janala.png';
import taxiBurgerImage from '../assets/taxi-burger.png';
import emergencyServiceImage from '../assets/emergency-service.png';
import freshMartImage from '../assets/fresh-mart.png';
import fitnessProjectImage from '../assets/fitness-project.png';
import localFoodLoversImage from '../assets/local-food-lovers.png';
import nextJsTypescriptImage from '../assets/nextjs-typescript.png';
import mernStackImage from '../assets/mern-stack.png';

export const projectsData = [
    {
        title: "Local Food Lovers",
        description: "A community platform for food enthusiasts to share reviews and discover top-rated local dishes.",
        image: localFoodLoversImage,
        tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        links: {
            demo: "https://soft-speculoos-46237b.netlify.app/",
            github: "https://github.com/Badsha012/Local_Food_Loers_Network_Client_Side"
        }
    },
    {
        title: "Fitness Club",
        description: "A comprehensive fitness platform featuring workout videos, health tips, and membership options to help you stay in shape.",
        image: fitnessProjectImage,
        tags: ["React", "Tailwind CSS", "Vercel"],
        links: {
            demo: "https://project04-sable.vercel.app/",
            github: "https://github.com/Badsha012/project04"
        }
    },
    {
        title: "Fresh Mart",
        description: "An online grocery store offering fresh produce and daily essentials with a user-friendly shopping experience.",
        image: freshMartImage,
        tags: ["React", "Tailwind CSS", "E-commerce"],
        links: {
            demo: "https://fresh-mart-lac.vercel.app/",
            github: "#"
        }
    },
    {
        title: "Emergency Service",
        description: "A directory of government emergency services in Bangladesh, providing quick access to critical contact numbers.",
        image: emergencyServiceImage,
        tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
        links: {
            demo: "https://badsha012.github.io/Emergency-_Service/",
            github: "https://github.com/Badsha012/Emergency-_Service"
        }
    },
    {
        title: "Taxi Burger",
        description: "A digital menu card and ordering system for a burger restaurant, featuring a dynamic and appetizing UI.",
        image: taxiBurgerImage,
        tags: ["React", "Tailwind CSS", "Vercel"],
        links: {
            demo: "https://texi-burger.vercel.app/",
            github: "https://github.com/Badsha012/texi_burger"
        }
    },
    {
        title: "English Janala",
        description: "A comprehensive English learning platform designed to help users improve their language skills through interactive lessons and resources.",
        image: englishJanalaImage,
        tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        links: {
            demo: "https://english-janala-rho.vercel.app/",
            github: "https://github.com/Badsha012/english_janala"
        }
    },
];

export const aboutData = {
    title: "About Me",
    description: [
        "I am a passionate MERN Stack Developer with expertise in building modern web applications. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I create scalable and efficient solutions that solve real-world problems.",
        "My journey in web development started with a curiosity about how websites work, which evolved into a deep passion for creating intuitive and responsive user interfaces. I enjoy the challenge of turning complex problems into simple, elegant solutions."
    ],
    image: aboutImage,
    skills: ['JavaScript', 'C++', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'Tailwind CSS']
};

export const educationData = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "City University",
        duration: "2022 - Present",
        description: "Currently pursuing a degree with a focus on Web Development and Database Management."
    },
    {
        degree: "Full Stack Web Development",
        institution: "Programming Hero",
        duration: "2025 - Present",
        description: "Comprehensive training in MERN stack and modern web development practices."
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Shipyard School & College, B.N. Khulna",
        duration: "2018 - 2020",
        description: "Completed higher secondary education with a strong foundation in Science, Physics, and Mathematics."
    }
];

export const articlesData = [
    {
        title: "Why Choose the MERN Stack for Your Next Web Project?",
        date: "June 3, 2025",
        readTime: "10 min read",
        preview: "The MERN stack is a popular web development framework that combines four powerful technologies: MongoDB, Express.js, React, and Node.js. Learn why it's the best choice for your next project.",
        image: mernStackImage,
        tags: ["MERN Stack", "Web Development", "JavaScript"],
        link: "https://medium.com/@badshasheikh034/why-choose-the-mern-stack-for-your-next-web-project-bangla-english-mixed-version-2c203ce07cc4?postPublishedType=initial"
    },
    {
        title: "Building Modern Web Apps: TypeScript and Next.js Together",
        date: "Dec 05, 2025",
        readTime: "5 min read",
        preview: "Explore how TypeScript and Next.js combine to create robust, scalable, and high-performance web applications. Learn about the benefits of static typing, server-side rendering, and the latest features in the Next.js ecosystem.",
        image: nextJsTypescriptImage,
        tags: ["Next.js", "TypeScript", "Web Dev"],
        link: "https://medium.com/@badshasheikh034/building-modern-web-apps-typescript-and-next-js-together-51455e603237?postPublishedType=initial"
    }
];

export const contactData = {
    email: "mdbadshasheikh2022@gmail.com",
    phone: "+8801998414834",
    location: "Savar, Dhaka-1340, Bangladesh",
    social: [
        { name: 'GitHub', url: 'https://github.com/Badsha012', icon: 'code' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/md-badsha-sheikh/', icon: 'work' },
        { name: 'Email', url: 'mailto:mdbadshasheikh2022@gmail.com', icon: 'mail' }
    ]
};

export const footerData = {
    copyright: "© 2025 Badsha Sheikh. All rights reserved.",
    links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" }
    ]
};
