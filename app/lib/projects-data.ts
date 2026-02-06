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
        type: "programming", title: "get", description: "A simple Bukkit plugin that uploads the held item's data to hastebin", link: "/programming/get", date: "12-04-2024", status: "in-progress"
    },
    {
        type: "programming", title: "ferrum", description: "Simple Python Project Package Manager (SPPPM); Install packages for your user with a single line of code.", link: "/programming/ferrum", date: "10-01-2025", status: "completed"
    },
    // combined
    {
        type: "combined", title: "TI-0", description: "A Hardware-Software project that involves siphoning power and resources from a raspberry Pi zero to power a Ti-84 CE through a USB-Mini Cable.", link: "/combined/ti-0", date: "09-29-25", status: "planned"
    }
];

export const programmingProjects = projects.filter(p => p.type === "programming");
export const engineeringProjects = projects.filter(p => p.type === "engineering");
export const combinedProjects = projects.filter(p => p.type === "combined");
