import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Mario',
        lastName:  'Segundo',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'Europe/Madrid',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: false,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
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
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
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
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true,
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'Freelance',
                    timeframe: t("about.work.experiences.Freelance.timeframe"),
                    role: t("about.work.experiences.Freelance.role"),
                    achievements: t("about.work.experiences.Freelance.achievements").split("|"),
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
            display: true,
            title: t("about.studies.title"),
            institutions: [
                {
                    name: 'University of Cadiz',
                    description: <>{t("about.studies.institutions.UniversityOfCadiz.description")}</>,
                },
                {
                    name: 'JS Mastery',
                    description: <>{t("about.studies.institutions.JSMastery.description")}</>,
                }
            ]
        },
        technical: {
            display: true,
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Next.js',
                    description: <>{t("about.technical.skills.Nextjs.description")}</>,
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
                    description: <>{t("about.technical.skills.React.description")}</>,
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
                    description: <>{t("about.technical.skills.PostgreSQL.description")}</>,
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
                    description: <>{t("about.technical.skills.MongoDB.description")}</>,
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
                    description: <>{t("about.technical.skills.TailwindCSS.description")}</>,
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
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
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

    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    }
};

export { createI18nContent };