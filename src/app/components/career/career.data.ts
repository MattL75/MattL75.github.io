import { CareerSection } from './career.models';

export const careerData: CareerSection[] = [
    {
        title: 'Employment', experiences: [
            {
                image: '../../../assets/onespan.png',
                company: 'OneSpan',
                description: 'Development work on OneSpan Sign using React, GraphQL and Expressjs, among other techs. A lot of our efforts are focused on making the application accessible for all. The ability to constantly evolve and learn from incredibly qualified developers is what sets OneSpan apart in my eyes. The office is beautiful and stacked with free food, drinks and the like. Highly recommend this company.',
                closingWords: 'A great place to develop my skills. Thanks to Dan for giving me a shot.',
                timeFrame: 'Jan 2020 – Present',
                title: 'Specialist Software Developer'
            },
            {
                image: '../../../assets/ineatlogo.png',
                company: 'Ineat Group',
                description: 'A few months after my internship at Soluteo, the company was purchased by Ineat Group. Having lots of friends remaining there, they convinced me to make Ineat my first full job. I was hired as the definitive Angular expert, since by this point I had led multiple projects with it and had even contributed to the framework myself. I ultimately left to pursue other opportunities in subfields of computer science that interested me.',
                closingWords: 'A very fun and dynamic place to work. Thanks to everybody, but special mentions for MJ and Christophe.',
                timeFrame: 'Sep 2019 – Jan 2020',
                title: 'Full Stack Developer'
            }
        ]
    },
    {
        title: 'Internships', experiences: [
            {
                image: '../../../assets/sap.png',
                company: 'SAP',
                description: 'One of the most fulfilling and draining experiences of my life. I was hired to work on an Angular component library serving hundreds of thousands of SAP customers. A couple months in, I was effectively leading the development and architectural efforts while also becoming the de-facto Angular expert of the office. Naturally, I got mixed up in loads of politics and even got to interview candidates as an intern.',
                closingWords: 'I learned how to be a professional here. No regrets at all. Thanks to Deno, Inna, Irla and Ven in particular.',
                timeFrame: 'Jan 2019 – Aug 2019',
                title: 'Software Developer Intern'
            },
            {
                image: '../../../assets/soluteo.png',
                company: 'Soluteo',
                description: 'The start of this internship was a bit of a trial by fire. I made the most of it, though. I kept my head down and produced. I worked on an internal generic framework which included Spring and Angular components. This also marked my first dive into Angular component libraries, which would end up being very useful later on. For better or for worse, I learned a tremendous amount of stuff during this internship.',
                closingWords: 'Greatly enjoyed my time at Soluteo! Thanks to the entire team, but a special thanks to MJ and Alain.',
                timeFrame: 'Jan 2018 – Apr 2018',
                title: 'Frontend Developer Intern'
            },
            {
                image: '../../../assets/scigilianlogo.png',
                company: 'Scigilian Software',
                description: 'At Scigilian, I was effectively working as a full stack developer. It was my first experience in a professional workplace, and boy was it a good one. The atmosphere was cozy and stress-free while the people truly felt like they cared. Daily scrums and modern technology made for incredibly rewarding web application development. The stack was composed of Angular, Spring, Node, Keycloak, Flyway and Hibernate, among other techs.',
                closingWords: 'I couldn\'t have asked for a better first internship. Big thanks to Quay, Jean and Jerry for giving me a shot!',
                timeFrame: 'May 2017 – Aug 2017',
                title: 'Software Developer Intern'
            }
        ]
    },
]
