const imagePrefix = '/images/work/ryan/project-img__ryan-'
const urlPrefix = '/work/'

export const data = [
    {
        name: 'Hero',
        image: `${imagePrefix}01.png`
    },
    {
        name: 'Case Study',
        image: `${imagePrefix}02.png`
    },
    {
        name: 'Mobile Homepage',
        image: `${imagePrefix}03.png`
    },
    {
        name: 'Animation',
        image: `${imagePrefix}04.png`
    },
    {
        name: 'BG - 2',
        image: `${imagePrefix}02--bg.png`
    },
    {
        name: 'BG - 3',
        image: `${imagePrefix}03--bg.png`
    },
]

export const content = {
    hero: {
        title: "Ryan Gerada",
        tags: [
            "Web Development"
        ],
        heroImage: "/images/work/ryan/hero__ryan.png"
    }, 
    description: {
        description: "The talented Toronto-based Graphic Designer, Ryan Gerada, approached me to redesign his design portfolio. The site was built using NextJS and a custom Contentful CMS for ease. Smooth enter animations, noise backgrounds, and hover animations are all big features which make Ryan’s portfolio feel advanced and highly-polished.", 
        tags: [
            "NextJS", 
            "Contentful", 
            "Framer-Motion"
        ], 
        link: "https://ryangerada.com/"
    }
}