interface Skill {
    label: string;
    rating: number;
}

export interface SkillsSection {
    title: string;
    skills: Skill[];
}
