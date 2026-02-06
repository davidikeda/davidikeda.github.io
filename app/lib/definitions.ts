export type Project = {
    type: "engineering" | "programming" | "design" | "combined" | "other";
    title: string;
    description: string;
    link: string;
    date: string;
    status: "completed" | "in-progress" | "planned";

}