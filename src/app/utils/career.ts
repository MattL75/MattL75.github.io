interface Experience {
    image: string;
    title: string;
    company: string;
    description: string;
    closingWords: string;
    timeFrame: string;
}

export interface CareerSection {
    title: string;
    experiences: Experience[];
}
