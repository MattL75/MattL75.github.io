interface Project {
    label: string;
    description: string;
    link: string;
    image: string;
}

export interface ProjectSection {
    title: string;
    projects: Project[];
}
