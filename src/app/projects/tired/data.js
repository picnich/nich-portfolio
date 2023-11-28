const projectName = "tired"
const imagePrefix = `/images/work/${projectName}/`

export const content = {
    title: "Tired Labs",
    link: "https://tired.tv/",
    heroImage: `${imagePrefix}cover_image--${projectName}.png`,
    projectTypes: [
        "Web Development"
    ],
    projectTools: [
        "Shopify", 
        "JS", 
        "CSS Animations"
    ], 
    content: {
        overview: "Tired Labs, premier lifestyle brand based in Toronto approached me to design & develop their eCommerce experience. The objective was to provide a clean experience and ensure easy navigation while providing flexibility for effortless updates.",
        development: [
            "Leveraging the robust and flexible capabilities of Shopify, I developed a responsive storefront using liquid templates, custom JS and css.",
            "I thoroughly enjoyed the process of crafting the homepage, where I introduced an engaging feature that allows users to interact dynamically with the brand. With each click, an image seamlessly appears at a random position on the screen, forming an overlaid pattern that mirrors the distinctive overlapping style synonymous with the brand's aesthetic."
        ],
    },
    images: [
        {
            name: 'Home Mockup',
            image: `${imagePrefix}${projectName}_img__01.png`
        },
        {
            name: 'Product Photography',
            image: `${imagePrefix}${projectName}_img__02.png`
        },
        {
            name: 'Mobile Mockup',
            image: `${imagePrefix}${projectName}_img__03.png`
        },
        {
            name: 'Detail Page',
            image: `${imagePrefix}${projectName}_img__04.png`
        },
        {
            name: 'Product Photography',
            image: `${imagePrefix}${projectName}_img__05.png`
        },
        {
            name: 'Homepage Animation',
            image: `${imagePrefix}${projectName}_img__06.png`
        },
        {
            name: 'Product Photography',
            image: `${imagePrefix}${projectName}_img__07.png`
        },
    ]
    
}