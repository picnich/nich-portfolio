const projectName = "ryan"
const imagePrefix = `/images/work/${projectName}/`

export const content = {
    title: "Ryan Gerada",
    link: "https://ryangerada.com/",
    heroImage: `${imagePrefix}cover_image--${projectName}.png`,
    projectTypes: [
        "Web Development"
    ],
    projectTools: [
        "NextJS", 
        "Contentful", 
        "Framer-Motion"
    ], 
    content: {
        overview: "Ryan Gerada is a designer based in Toronto and specializing in brand identity, typography and advertising. I was approached develop his online design portfolio, full of thoughtful details and innovative work.",
        development: [
            "The site was built using NextJS and uses a Contentful CMS for easy, developer-free updates. We introduced smooth enter animations, noise backgrounds, and hover animations which make Ryan’s portfolio feel polished and keep the user engaged."
        ],
    },
    images: [
        {
            name: 'Home Mockup',
            image: `${imagePrefix}${projectName}_img__01.png`
        },
        {
            name: 'Project Photography',
            image: `${imagePrefix}${projectName}_img__02.png`
        },
        {
            name: 'Mobile Mockup',
            image: `${imagePrefix}${projectName}_img__03.png`
        },
        {
            name: 'Work Hero Animation',
            image: `${imagePrefix}${projectName}_img__04.png`
        },

        {
            name: 'Project Detail',
            image: `${imagePrefix}${projectName}_img__05.png`
        },
        {
            name: 'Project Design',
            image: `${imagePrefix}${projectName}_img__06.png`
        },
        {
            name: 'Project Design',
            image: `${imagePrefix}${projectName}_img__07.png`
        },
        {
            name: 'Tablet Animation',
            image: `${imagePrefix}${projectName}_img__08.png`
        },
    ]
}