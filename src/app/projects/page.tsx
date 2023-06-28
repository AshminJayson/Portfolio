"use client";

import { FooterCatch } from "../components";
import { PageWrapper } from "../components/PageWrapper";
import { ProjectsCarousel } from "./components";

const ProjectsData: ProjectCardProps[] = [
    {
        projectName: "TypeForces",
        projectDescription:
            "⌨ Typing test with authentication and global scoreboard made using 💢 Angular and 🔥 Firebase",
        projectLink: "https://github.com/AshminJayson/TypeForces",
        deployUrl: "https://typeforces-speed.netlify.app/",

        projectImage:
            "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        projectTechStack: ["Angular", "Firebase"],
    },
    {
        projectName: "TypeForces",
        projectDescription:
            "⌨ Typing test with authentication and global scoreboard made using 💢 Angular and 🔥 Firebase",
        projectLink: "https://github.com/AshminJayson/TypeForces",
        deployUrl: "https://typeforces-speed.netlify.app/",
        projectImage:
            "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        projectTechStack: ["Angular", "Firebase"],
    },
    {
        projectName: "TypeForces",
        projectDescription:
            "⌨ Typing test with authentication and global scoreboard made using 💢 Angular and 🔥 Firebase",
        projectLink: "https://github.com/AshminJayson/TypeForces",
        deployUrl: "",

        projectImage:
            "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        projectTechStack: ["Angular", "Firebase"],
    },
];

export default function Projects() {
    return (
        <PageWrapper>
            <div className="flex flex-col gap-8">
                <h3 className="text-2xl font-semibold text-center">Projects</h3>
                <p className="text-center text-gray-400">
                    Here lies the tools and apps I&apos;ve built
                </p>
                <ProjectsCarousel projectsList={ProjectsData} />
                <FooterCatch blind="I wanna be tech agnostic in my endeavours." />
            </div>
        </PageWrapper>
    );
}
