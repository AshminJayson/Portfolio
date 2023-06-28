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
        projectTechStack: ["Angular", "Firebase", "Tailwind"],
    },
    {
        projectName: "DSA Playbook",
        projectDescription:
            "🪄 Web application to learn basic Data Structures and 🛣️ Algorithms ",
        projectLink: "https://github.com/AshminJayson/DSA_Playbook",
        deployUrl: "https://dsa-playbook.vercel.app/",
        projectImage:
            "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        projectTechStack: ["Nextjs", "Supabase"],
    },
    {
        projectName: "PomoOnAShell",
        projectDescription: "🔗 CLI Pomodoro Timer Built using React + Ink ",
        projectLink: "https://github.com/AshminJayson/PomoOnAShell",
        deployUrl: "",
        projectImage:
            "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        projectTechStack: ["React"],
    },
];

export default function Projects() {
    return (
        <PageWrapper>
            <div className="relative z-20 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-center">Projects</h3>
                <p className="text-center text-gray-400">
                    Here lies the tools and apps I&apos;ve built
                </p>
                <ProjectsCarousel projectsList={ProjectsData} />
                <p className="text-center text-gray-400">
                    &lt; Scroll to see some more &gt;
                </p>
                <FooterCatch blind="I wanna be ⚙️⚒️🔨🛠️ tech agnostic in my endeavours" />
            </div>
        </PageWrapper>
    );
}
