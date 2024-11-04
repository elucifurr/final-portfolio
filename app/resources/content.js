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
    display: true,
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
        link: 'https://www.linkedin.com/mario-segundo-galindo',
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
        link: 'https://cal.com'
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
                    <>Led the integration of Plaid and Dwolla APIs, enabling secure and seamless financial transfers for users.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/nexus/nexus-01.png',
                        alt: 'Once UI Project',
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
                description: <>Developing dynamic and performant web applications with Next.js for optimal user experiences and scalability.</>,
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
                description: <>Creating responsive and interactive user interfaces with React for seamless user interactions.</>,
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
                title: 'MongoDB',
                description: <>Building flexible and scalable data structures with MongoDB to support dynamic content and user interactions.</>,
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
                description: <>Using Tailwind CSS for designing responsive and modern UIs that provide a consistent look across devices.</>,
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
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };