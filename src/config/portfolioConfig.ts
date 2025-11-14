export interface Skill {
    name: string;
    iconPath?: string;
    proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    yearsOfExperience?: number;
}

export interface SkillCategory {
    title: string;
    description: string;
    skills: Skill[];
    icon: string;
}

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    repoUrl?: string;
    tags?: string[];
    status?: 'Completed' | 'In Development' | 'Concept';
    featured?: boolean;
}

export interface Social {
    name: string;
    url: string;
    icon: string;
}

export interface Experience {
    company: string;
    position: string;
    duration: string;
    description: string[];
    technologies?: string[];
}

export interface Education {
    institution: string;
    degree: string;
    duration: string;
    details?: string;
}

export interface Achievement {
    title: string;
    description: string;
    year?: string;
}

export interface PortfolioConfig {
    name: string;
    title: string;
    about: {
        description: string;
        photoUrl: string;
        experience: Experience[];
        education: Education[];
    };
    skillCategories: SkillCategory[];
    projects: Project[];
    contact: {
        email: string;
        socials: Social[];
    };
}

export const portfolioConfig: PortfolioConfig = {
    name: "Teodor Todorov",
    title: "Laravel Backend Developer",
    about: {
        description: "Junior Back-End Developer with 6 months of professional experience in PHP/Laravel, MySQL/PostgreSQL. Proven ability to deliver production-ready features, optimize performance, and implement advanced architecture patterns. Passionate about writing maintainable code and collaborating on solutions that drive business value.",
        photoUrl: "/Me.png",
        experience: [
            {
                company: "1-Stream",
                position: "Junior Backend Developer",
                duration: "2025",
                description: [
                    "Developed and maintained Laravel applications serving 10,000+ users",
                    "Implemented RESTful APIs with comprehensive testing and documentation",
                    "Optimized database queries reducing page load times by 40%",
                    "Collaborated with cross-functional teams using Agile methodologies"
                ],
                technologies: ["Laravel", "PHP", "MySQL", "Redis", "Docker"]
            },
            {
                company: "Freelance Projects",
                position: "Full-Stack Developer",
                duration: "2023 - 2024",
                description: [
                    "Built custom web applications for small businesses",
                    "Integrated payment systems and third-party APIs",
                    "Delivered projects on time with 100% client satisfaction"
                ],
                technologies: ["WordPress", "Stripe API", "Econt API", "Speedy API"]
            }
        ],
        education: [
            {
                institution: "Plovdiv University",
                degree: "Linguistics with Business Administration",
                duration: "2021 - 2025",
                details: "Focus on learning English and Greek."
            },
            {
                institution: "SoftUni",
                degree: "Python",
                duration: "2023",
                details: "The small spark that started it all!"
            },
            {
                institution: "Udemy",
                degree: "PHP Certificate",
                duration: "2024",
                details: "Focus on learning a single technology that has interested me."
            },
            {
                institution: "Udemy",
                degree: "MySQL, Postgres",
                duration: "2024",
                details: "Absolutely necessary for back-end."
            }
        ]
    },
    skillCategories: [
        {
            title: "Backend Development",
            description: "Server-side technologies and frameworks I specialize in",
            icon: "🚀",
            skills: [
                { name: "Laravel", iconPath: "/laravel-svgrepo-com.svg", proficiency: "Advanced", yearsOfExperience: 1 },
                { name: "PHP", iconPath: "/php-1-logo-svgrepo-com.svg", proficiency: "Advanced", yearsOfExperience: 1 },
                { name: "MySQL", iconPath: "/MySQL.svg", proficiency: "Intermediate", yearsOfExperience: 1 },
                { name: "PostgreSQL", iconPath: "/postgresql-logo-svgrepo-com.svg", proficiency: "Intermediate" },
                { name: "REST APIs", iconPath: "/rest-api-svgrepo-com.svg", proficiency: "Advanced", yearsOfExperience: 1 },
                { name: "Redis", iconPath: "/Redis.svg", proficiency: "Intermediate" }
            ]
        },
        {
            title: "Frontend Development", 
            description: "Client-side technologies for modern web applications",
            icon: "💻",
            skills: [
                { name: "JavaScript", iconPath: "/javascript-svgrepo-com.svg", proficiency: "Intermediate", yearsOfExperience: 1 },
                { name: "React", iconPath: "/react-svgrepo-com.svg", proficiency: "Intermediate" },
                { name: "HTML5", iconPath: "/HTML5.svg", proficiency: "Advanced", yearsOfExperience: 2 },
                { name: "CSS3", iconPath: "/CSS3.svg", proficiency: "Intermediate", yearsOfExperience: 2 },
                { name: "Tailwind CSS", iconPath: "/Tailwind CSS.svg", proficiency: "Intermediate" }
            ]
        },
        {
            title: "Tools & DevOps",
            description: "Development tools and deployment technologies",
            icon: "⚙️",
            skills: [
                { name: "Git", iconPath: "/Git.svg", proficiency: "Advanced", yearsOfExperience: 1 },
                { name: "Docker", iconPath: "/docker-svgrepo-com.svg", proficiency: "Intermediate" },
                { name: "Linux", iconPath: "/Linux.svg", proficiency: "Intermediate" },
            ]
        },
        {
            title: "Currently Learning",
            description: "Technologies I'm actively exploring and improving",
            icon: "📚",
            skills: [
                { name: "Rust", iconPath: "/Rust.svg", proficiency: "Beginner" },
                { name: "TypeScript", iconPath: "/TypeScript.svg", proficiency: "Beginner" },
                { name: "React Native", iconPath: "/react-svgrepo-com.svg", proficiency: "Beginner" },
            ]
        }
    ],
    projects: [
        // Featured Projects
        {
            title: "Educational Study Management Platform",
            description: "Mobile application for PDF viewing, stylus note-taking, mindmap creation, and flashcard generation. Designed to enhance student learning workflows with intuitive touch interactions and cloud synchronization.",
            imageUrl: "https://placehold.co/600x400/0a0a0a/ff8c00?text=Study\\nPlatform",
            repoUrl: "#",
            tags: ["Mobile Development", "PDF Processing", "Cloud Sync", "UI/UX"],
            status: "In Development",
            featured: true
        },
        {
            title: "Construction Project Showcasing",
            description: "Web application that is specifically tailored to the needs of a local geodesy company.",
            imageUrl: "https://placehold.co/600x400/0a0a0a/ff8c00?text=Construction\\nProject",
            repoUrl: "#",
            tags: ["Laravel", "Livewire", "Business Logic", "CRM", "Cost Analysis", "MySQL"],
            status: "In Development",
            featured: true
        },
        {
            title: "Secure Remote Server Infrastructure",
            description: "Headless server solution built on Raspberry Pi with Tor routing for secure remote script execution. Implements advanced privacy protection and network security protocols for distributed computing tasks.",
            imageUrl: "https://placehold.co/600x400/0a0a0a/ff8c00?text=Security\\nServer",
            repoUrl: "#",
            tags: ["Raspberry Pi", "Linux", "Tor Network", "Security"],
            status: "Completed",
            featured: true
        },
        
        // Additional Projects
        {
            title: "Social Media Platform Clone",
            description: "Full-featured Twitter-like social platform with real-time feeds, user interactions, and content management.",
            imageUrl: "https://placehold.co/400x300/0a0a0a/ff8c00?text=Social\\nClone",
            repoUrl: "https://github.com/Teodor469/Laravel-Project",
            tags: ["Laravel", "Real-time", "Social Features"],
            status: "Completed",
            featured: false
        },
        {
            title: "YouTube Analytics Dashboard",
            description: "Data visualization platform for YouTube channel performance analysis with interactive charts and insights.",
            imageUrl: "https://placehold.co/400x300/0a0a0a/ff8c00?text=Analytics\\nBoard",
            repoUrl: "https://github.com/Teodor469/AutoTube",
            tags: ["Data Visualization", "APIs", "Analytics"],
            status: "Completed",
            featured: false
        },
        {
            title: "Laravel API Collection",
            description: "Comprehensive collection of RESTful APIs demonstrating various Laravel features and best practices.",
            imageUrl: "https://placehold.co/400x300/0a0a0a/ff8c00?text=API\\nCollection",
            repoUrl: "https://github.com/Teodor469/web-streams",
            tags: ["Laravel", "REST APIs", "Backend"],
            status: "Completed",
            featured: false
        }
    ],
    contact: {
        email: "teodor.todorov469@gmail.com",
        socials: [
            { name: "GitHub", url: "https://github.com/Teodor469", icon: "GH" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/teodor-todorov-29453338b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: "LI" },
        ]
    }
};