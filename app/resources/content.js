import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Mario',
    lastName:  'Segundo',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Fullstack Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Madrid',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about development, emerging technologies, and share insights on the intersection of coding, creativity, and problem-solving.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/elucifurr',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/mario-segundo-galindo',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:mario.segun@proton.me',
    },
]


const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Fullstack engineer</>,
    subline: <>I'm Mario, a fullstack engineer working as <InlineCode>Freelancer</InlineCode>, I develop efficient, scalable solutions. After hours, I work on personal projects and experiment with new technologies.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'mailto:mario.segun@proton.me'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Mario is a Spain-based software developer with a passion for turning complex problems into clean, efficient code. His work spans full-stack applications, interactive web experiences, and the intersection of development and innovation.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelance',
                timeframe: '2023 - Present',
                role: 'Fullstack Engineer',
                achievements: [
                    <>Developed and optimized the backend for the Nexus Banking platform, improving transaction speed by 25% and enhancing system reliability.</>,
                    <>Led the integration of Plaid and Dwolla APIs, enabling secure and seamless financial transfers for users.</>,
                    <>Designed and deployed microservices architecture using Docker and Kubernetes for improved scalability.</>                    
                ],
                images: [
                    {
                        src: '/images/projects/nexus/nexus-01.png',
                        alt: 'Nexus Banking Platform',
                        width: 16,
                        height: 10
                    }
                ]
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Cadiz',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'JS Mastery',
                description: <>Studied Next15.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Next.js',
                description: <>Developing dynamic and performant web applications with Next.js, leveraging server-side rendering and static site generation for optimal performance and SEO.</>,
                images: [
                    {
                        src: '/images/projects/nexus/nexus-01.png',
                        alt: 'Nexus Banking project image',
                        width: 16,
                        height: 10
                    },
                    {
                        src: '/images/projects/chefs-cookbook/cover-01.png',
                        alt: 'Chef\'s Cookbook project image',
                        width: 16,
                        height: 10
                    },
                ]
            },
            {
                title: 'React',
                description: <>Building sophisticated user interfaces with React, implementing complex state management, custom hooks, and optimizing component performance for seamless user experiences.</>,
                images: [
                    {
                        src: '/images/projects/movieflix/movieflix-01.png',
                        alt: 'Chef\'s Cookbook project image',
                        width: 16,
                        height: 10
                    },
                    {
                        src: '/images/projects/zafiro/zafiro-01.png',
                        alt: 'Zafiro project image',
                        width: 16,
                        height: 10
                    },
                ]
            },
            {
                title: 'PostgreSQL',
                description: <>Designing and optimizing robust database architectures with PostgreSQL, implementing complex queries, stored procedures, and ensuring data integrity through proper indexing and normalization.</>,
                images: [
                    {
                        src: '/images/projects/nexus/nexus-01.png',
                        alt: 'Nexus Banking project image',
                        width: 16,
                        height: 10
                    },
                ]
            },
            {
                title: 'MongoDB',
                description: <>Experience with MongoDB for building flexible, scalable NoSQL database solutions, including implementing data models, aggregation pipelines, and integrating with Next.js applications.</>,
                images: [
                    {
                        src: '/images/projects/chefs-cookbook/cover-01.png',
                        alt: 'Chef\'s Cookbook project image',
                        width: 16,
                        height: 10
                    },
                ]
            },
            {
                title: 'Tailwind CSS',
                description: <>Crafting responsive and modern user interfaces with Tailwind CSS, utilizing its utility-first approach for rapid development while maintaining consistent design systems and implementing custom design tokens.</>,
                images: [
                    {
                        src: '/images/projects/nexus/nexus-01.png',
                        alt: 'Nexus Banking project image',
                        width: 16,
                        height: 10
                    },
                ]
            },
            
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about development and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My project gallery',
    description: `A showcase of ${person.name}'s development projects`,
    images: [
        { 
            src: '/images/gallery/nexus-01.png', 
            alt: 'Nexus Banking Platform - Main Dashboard',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/nexus-02.png', 
            alt: 'Nexus Banking Platform - Transaction Interface',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/nexus-03.png', 
            alt: 'Nexus Banking Platform - Analytics View',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/nexus-04.png', 
            alt: 'Nexus Banking Platform - User Settings',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/movieflix-01.png', 
            alt: 'MovieFlix - Movie Search and Discovery Platform',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/chefs-cookbook-01.png', 
            alt: 'Chef\'s Cookbook - Recipe Sharing Platform',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/alojasur-web.png', 
            alt: 'Alojasur - Accommodation Booking Website',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/conilfix-web.png', 
            alt: 'ConilFix - Local Services Platform',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/rediseñoseo-web.png', 
            alt: 'RediseñoSEO - SEO Optimization Services',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/restaurantesierra-web.png', 
            alt: 'Restaurante Sierra - Restaurant Website',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/transportepro-web.png', 
            alt: 'TransportePro - Transportation Services Platform',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/zafiro-web.png', 
            alt: 'Zafiro - E-commerce Platform',
            orientation: 'horizontal'
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };