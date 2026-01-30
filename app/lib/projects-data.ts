import { Project } from './definitions';

export const projects: Project[] = [
    // engineering
    {
      type: "engineering",
      title: "Engineering Summative, Quarter One",
      description: "Engineering 1 Puzzle Cube Project.",
      link: "/engineering/summative-q1",
      date: "12-15-2025",
      status: "completed",
    },
    {
        type: "engineering",
        title: "Engineering Summative, Quarter Two",
        description: "Engineering 1 Binder Project, otherwise known as the Engineering Summative for Quarter Two.",
        link: "/engineering/summative-q2",
        date: "01-23-2026",
        status: "completed"
    },
    // programming
    {
        type: "programming", title: "get", description: "A simple Bukkit plugin that uploads the held item's data to hastebin", link: "/programming/get", date: "12-04-2024", status: "completed"
    },
    {
        type: "programming", title: "ferrum", description: "Simple Python Project Package Manager (SPPPM); Install packages for your user with a single line of code.", link: "/programming/ferrum", date: "10-01-2025", status: "completed"
    }
];

export const programmingProjects = projects.filter(p => p.type === "programming");
export const engineeringProjects = projects.filter(p => p.type === "engineering");
