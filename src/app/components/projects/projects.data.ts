import { ProjectSection } from './projects.models';

export const projectsData: ProjectSection[] = [
    {
        title: 'Personal',
        projects: [
            {
                label: 'Personal Website',
                description: 'You\'re looking at it! Meant as a digital resume so put on LinkedIn and the like. I\'m no UX designer, but I think I got it to look pretty good. If you have any suggestions, please open an issue and let me know!',
                link: 'https://github.com/MattL75/MattL75.github.io',
                image: '../../../assets/ineatlogo.png'
            },
            {
                label: 'Eternity',
                description: 'A project for COMP 354 at Concordia University, made in TypeScript with Angular. We had to implement the calculations for mathematical functions from scratch and write up a scientific calculator. My team and I were pretty happy with how it turned out. We got a pretty good grade, of course.',
                link: 'https://github.com/MattL75/eternity',
                image: '../../../assets/ineatlogo.png'
            },
            {
                label: 'Barnes-Hut Galaxy Simulation',
                description: 'A project for COMP 426 at Concordia University, made in C++. We had to implement the Barnes-Hut algorithm to simulate the stars of two galaxies of equal size colliding with each other. I was pretty proud of this one since it took me a long time and most other students did not have as good of a result.',
                link: 'https://github.com/MattL75/tbb-multicore-galaxies',
                image: '../../../assets/ineatlogo.png'
            },
            {
                label: 'Gooey Wars',
                description: 'My first ever project of significance, made in Java with Libgdx. We made this unique RTS game with some pretty basic sprites, but the gameplay is actually pretty fun and engaging! One of the requirements was to include scientific elements in the game, and our reactions between gooeys satisfied that greatly.',
                link: 'https://github.com/MattL75/gooey-wars',
                image: '../../../assets/ineatlogo.png'
            },
            {
                label: 'AI Unigram and Bigram Language Models',
                description: 'Part of the Comp 472 AI class at Concordia University, made in Java. The goal was to implement both a unigram and bigram language identification model. It was a fun experience and taught us a lot about AI, datasets, and the power of NLP.',
                link: 'https://github.com/MattL75/ai-language-models',
                image: '../../../assets/ineatlogo.png'
            },
            {
                label: 'Mur à Mur',
                description: 'Our entry to Sherbrooke Hackathon 2016 that won second place and the ZAP prize for a total of $1500 in winnings. The project is an android app that helps locals or tourists discover the murals of Sherbrooke by unlocking achievements and key locations on the map when a user finds a mural.',
                link: 'https://github.com/MattL75/mur-a-mur',
                image: '../../../assets/ineatlogo.png'
            }
        ]
    },
    {
        title: 'Open Source Contributions',
        projects: [
            {
                label: 'Fundamental NGX',
                description: 'Began as an intern on this project over at SAP, but quickly became the lead developer on it. I wrote many components from scratch, such as dialogs, tables, alerts, file uploader, virtual scroll and more. I also wrote the documentation site from scratch and wrote a custom processing engine based on TypeDoc to display generated information on our components. Even two years later, a lot of my work is still in use and appears in SAP production apps worldwide.',
                link: 'https://github.com/SAP/fundamental-ngx',
                image: '../../../assets/ineatlogo.png'
            },
            {
                label: 'Stencil',
                description: 'I am a big fan of web components in general and Stencil represents one of the friendliest ways of developing them. I would recommend the technology for anybody developing progressive web applications or cross-platform component libraries. I contributed significantly to their documentation site in particular.',
                link: 'https://github.com/ionic-team/stencil',
                image: '../../../assets/ineatlogo.png'
            },
        ]
    }
]
