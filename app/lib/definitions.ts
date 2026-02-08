export type Project = {
    type: "engineering" | "programming" | "design" | "combined" | "camp" | "school" | "other" ;
    title: string;
    description: string;
    link: string;
    date: string;
    status: "completed" | "in-progress" | "planned";

}

export type Experience = {
    type: "camp" | "school" | "other" ;
    title: string;
    description: string;
    link: string;
    date: string;
    status: "completed" | "in-progress" | "planned";
}