const projectName = "katch"
const imagePrefix = `/images/work/${projectName}/`

export const content = {
    title: "Katch",
    // link: "https://alexeitopounov.com/",
    heroImage: `${imagePrefix}cover_image--${projectName}.png`,
    projectTypes: [
        "Product Design", "iOS Mobile Design", "Visual Design"
    ],
    projectTools: [
        "Art Direction", "Figma"
    ], 
    content: {
        overview: "Revolutionizing knowledge work for venture capitalists and tech founders, Katch provides flexible calendar management and seamless 1:1 meetings across organizations.",
        challenge: [
            "The primary challenge faced by Katch centered around enhancing their calling feature to meet the demands of a target audience that heavily relies on frequent and efficient communication. The objective was to elevate the user experience by introducing robust features such as audio messaging, aligning with the preferences of the target audience. ",
            "Our solution not only tackled the challenge of optimizing the calling feature but also incorporated innovative features like audio messaging to provide an enriched communication experience for venture capitalists and tech founders. As a result, Katch is now equipped to offer a comprehensive solution that caters to the unique needs of its user base, positioning itself as a leader in facilitating efficient knowledge work collaboration.",        ]
    },
    images: [
        {
            name: 'Project Screens',
            image: `${imagePrefix}${projectName}_img__01.png`
        },
        {
            name: 'Voice Message Component',
            image: `${imagePrefix}${projectName}_img__02.png`
        },
        {
            name: 'Home Screen',
            image: `${imagePrefix}${projectName}_img__03.png`
        },
        {
            name: 'Contact Screen',
            image: `${imagePrefix}${projectName}_img__04.png`
        },
        {
            name: 'Call Screens',
            image: `${imagePrefix}${projectName}_img__05.png`
        },
        

    ]
}