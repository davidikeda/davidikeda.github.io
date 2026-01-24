export type Project = {
    type: "engineering" | "programming" | "design" | "other";
    title: string;
    description: string;
    link: string;
    date: string;
    status: "completed" | "in-progress" | "planned";
}