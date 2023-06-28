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

        projectImage: "/images/projectimages/Typeforces.png",
        projectTechStack: ["Angular", "Firebase", "Tailwind"],
    },
    {
        projectName: "DSA Playbook",
        projectDescription:
            "🪄 Web application to learn basic Data Structures and 🛣️ Algorithms ",
        projectLink: "https://github.com/AshminJayson/DSA_Playbook",
        deployUrl: "https://dsa-playbook.vercel.app/",
        projectImage: "/images/projectimages/DSAPlaybook.png",
        projectTechStack: ["Nextjs", "Supabase"],
    },
    {
        projectName: "PomoOnAShell",
        projectDescription: "🌐Mini Social Network built on the MERN Stack",
        projectLink: "https://github.com/AshminJayson/FrendZy",
        deployUrl: "",
        projectImage: "/images/projectimages/PomoOnAShell.png",
        projectTechStack: ["React"],
    },
    {
        projectName: "FrendZy",
        projectDescription: "🔗 CLI Pomodoro Timer Built using React + Ink",
        projectLink: "https://github.com/AshminJayson/PomoOnAShell",
        deployUrl: "",
        projectImage: "/images/projectimages/Frendzy.png",
        projectTechStack: ["MongoDB", "Express", "React", "Nodejs"],
    },
    {
        projectName: "Banking System",
        projectDescription: "🏦💵 Micro Project on Mock-Up Banking System",
        projectLink: "https://github.com/AshminJayson/Banking_System",
        deployUrl: "",
        projectImage: "/images/projectimages/Banking_System.png",
        projectTechStack: ["Mysql", "Flask"],
    },
    {
        projectName: "Fate of the Job",
        projectDescription:
            "📜 Extracts data from your resume and lets OPEN AI 🤖 decide your fate",
        projectLink: "https://github.com/AshminJayson/FateOfTheJob",
        deployUrl: "",
        projectImage: "/images/projectimages/FateOfTheJob.png",
        projectTechStack: ["Nextjs", "Fastapi"],
    },
];

export default function Projects() {
    return (
        <PageWrapper>
            <div className="relative z-20 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-center">Projects</h3>
                <p className="text-center text-gray-300">
                    Here lies the tools and apps I&apos;ve built
                </p>
                <ProjectsCarousel projectsList={ProjectsData} />
                <p className="text-center text-gray-300">
                    Scroll to see some more of what I&apos;ve built
                </p>
                <FooterCatch blind="I wanna be ⚙️⚒️🔨🛠️ tech agnostic in my endeavours" />
            </div>
        </PageWrapper>
    );
}
