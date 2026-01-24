import { Project } from './definitions';

export const projects: Project[] = [
    {
        type: "engineering",
        title: "Engineering Summative, Quarter Two",
        description: "Engineering 1 Binder Project, otherwise known as the Engineering Summative for Quarter Two.",
        link: "/engineering/summative-q2",
        date: "01-23-2026",
        status: "completed"
    },
];

export const programmingProjects = projects.filter(p => p.type === "programming");
export const engineeringProjects = projects.filter(p => p.type === "engineering");
