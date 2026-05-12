import { Project } from './definitions';
import { Experience } from './definitions';

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
    //{
    //    type: "engineering",
    //    title: "Wing design in onshape",
    //    description: "Wing design project in Onshape, this was a little side quest for a later project",
    //    link: "/engineering/wing-design-in-onshape",
    //    date: "03-1-2026",
    //    status: "completed"
    //}, Commented out for now
    {
        type: "engineering",
        title: "Engineering Summative, Quarter Three",
        description: "Engineering 1 Sweet Improvement Project, otherwise known as the Engineering Summative for Quarter Three.",
        link: "/engineering/summative-q3",
        date: "03-27-2026",
        status: "completed"
    },
    {
        type: "engineering",
        title: "Dada Art - Wrench",
        description: "A Dada art project where I created a wrench in cad, and then 3D printed it.",
        link: "/engineering/dada",
        date: "03-24-2026",
        status: "completed"
    },
    // programming
    {
        type: "programming", title: "quokka", description: "A Machine to Machine language (M2M) that allows the communication and allocation of resources over usb cables", link: "/programming/quokka", date: "01-30-2026", status: "in-progress"
    },
    {
        type: "programming", title: "get", description: "A simple Bukkit plugin that uploads the held item's data to hastebin", link: "/programming/get", date: "12-04-2024", status: "in-progress"
    },
    {
        type: "programming", title: "ferrum", description: "Simple Python Project Package Manager (SPPPM); Install packages for your user with a single line of code.", link: "/programming/ferrum", date: "10-01-2025", status: "completed"
    },
    // combined
    {
        type: "combined", title: "ti-0", description: "A Hardware-Software project that involves siphoning power and resources from a raspberry Pi zero to power a Ti-84 CE through a USB-Mini Cable.", link: "/combined/ti-0", date: "09-29-25", status: "planned"
    },
    {
        type: "combined", title: "toadstool", description: "An offseason robotics mini bot created for the 2026 season.", link: "/combined/toadstool", date: "4/25/26", status: "in-progress"
    }
];

export const experience: Experience[] = [
    {
        title: "UNC-Chapel Hill", type: "camp", description: "BattleBots Camp with VEX that I leaded and won", link: "/experience/unc-chapel-hill", date: "07-04-2024", status: "completed"
    },
    {
        title: "Oxford Summer Courses", type: "camp", description: "Summer Camp where I studied python and a sprinkle of html", link: "/experience/oxford-summer-courses", date: "07-31-2023", status: "completed"
    },

]

export const programmingProjects = projects.filter(p => p.type === "programming");
export const engineeringProjects = projects.filter(p => p.type === "engineering");
export const combinedProjects = projects.filter(p => p.type === "combined");
export const experienceTabs = experience;