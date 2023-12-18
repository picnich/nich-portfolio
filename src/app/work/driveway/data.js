const projectName = "driveway"
const imagePrefix = `/images/work/${projectName}/`

export const content = {
    title: "Driveway",
    // link: "https://alexeitopounov.com/",
    heroImage: `${imagePrefix}cover_image--${projectName}.png`,
    projectTypes: [
        "Product Design", "Visual Design", "Web Design"
    ],
    projectTools: [
        "Figma", "Design System"
    ], 
    content: {
        overview: "Driveway records your workflows and turns them into sharable step-by-step  guides, demos, and walkthroughs. Upon examining Driveway's MVP, we identified opportunities for enhancing their guide-sharing process, ultimately contributing to an improved user experience.",
        challenge: [
            "In response to Driveway's innovative MVP, our team conducted an analysis to identify opportunities for refining the guide-sharing process and enhancing the overall user experience. We focused on streamlining the creation and sharing of step-by-step guides, demos, and walkthroughs. By implementing strategic improvements, we aimed to empower users with a more intuitive and efficient platform for recording and disseminating their workflows. ",
            "Our solution not only addressed the identified pain points in the existing guide-sharing process but also paved the way for Driveway to establish itself as a leader in simplifying workflow documentation and collaboration. The refined user experience is expected to boost user engagement and satisfaction, making Driveway an indispensable tool for individuals and teams seeking effective and user-friendly solutions for workflow management.",        ]
    },
    images: [
        {
            name: 'Old Share Modal',
            image: `${imagePrefix}${projectName}_img__01.png`
        },
        {
            name: 'Updated Top Bar',
            image: `${imagePrefix}${projectName}_img__02.png`
        },
        {
            name: 'Updated Modal - Invite',
            image: `${imagePrefix}${projectName}_img__03.png`
        },
        {
            name: 'Updated Modal - Export',
            image: `${imagePrefix}${projectName}_img__04.png`
        },
        {
            name: 'Before vs. After',
            image: `${imagePrefix}${projectName}_img__05.png`
        },
        

    ]
}