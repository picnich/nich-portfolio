const projectName = "batch"
const imagePrefix = `/images/work/${projectName}/`

export const content = {
    title: "Batch",
    // link: "https://alexeitopounov.com/",
    heroImage: `${imagePrefix}cover_image--${projectName}.png`,
    projectTypes: [
        "Product Design", "iOS Mobile Design", "Visual Design"
    ],
    projectTools: [
        "Figma", "Design System"
    ], 
    content: {
        overview: "The Batch, known for the ultimate bachelor party planning experience, is enhancing its platform with a new Lists feature. This addition empowers planners to efficiently create, organize, and assign items for various lists, elevating the overall planning experience.",
        challenge: [
            "Our BATCH planners have many uses for a list. They need a checklist of party planning items, but also need to be able to create custom lists for them and the party members (grocery list, packing list, etc.). Our planners need to be able to easily create, manage, and assign items on a variety of programmable and custom lists. ",
            "We crafted a resilient and straightforward solution that proved exceptionally effective. Through our research, we discovered that users favored a seamless, native experience, prompting us to embrace and align with standard iOS conventions.",        ]
    },
    images: [
        {
            name: 'App Screens',
            image: `${imagePrefix}${projectName}_img__01.png`
        },
        {
            name: 'New Checklist Screens',
            image: `${imagePrefix}${projectName}_img__02.png`
        },
        {
            name: 'Screens Grid',
            image: `${imagePrefix}${projectName}_img__03.png`
        },
        {
            name: 'Component State Breakdown',
            image: `${imagePrefix}${projectName}_img__04.png`
        },
        {
            name: 'New Checklist Screens',
            image: `${imagePrefix}${projectName}_img__05.png`
        },
        

    ]
}