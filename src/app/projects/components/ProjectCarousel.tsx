// Icons imports
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { VscPlay } from "react-icons/vsc";
import { FaAngular, FaReact } from "react-icons/fa";
import {
    SiFirebase,
    SiFastapi,
    SiSupabase,
    SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import Image from "next/image";
import { GradOutline } from "@/app/components";

export function ProjectCard(props: ProjectCardProps) {
    const {
        projectName,
        projectDescription,
        projectImage,
        projectLink,
        projectTechStack,
        deployUrl,
    } = props;

    const getTechStackIcon = (techStack: string, index: number) => {
        switch (techStack) {
            case "React":
                return <FaReact key={index} size={"1.5rem"} color="#7dd8fc" />;
            case "Node":
                return <VscPlay key={index} size={"1.5rem"} color="#5d9a42" />;
            case "Angular":
                return (
                    <FaAngular key={index} size={"1.5rem"} color="#b5162e" />
                );
            case "Firebase":
                return (
                    <SiFirebase key={index} size={"1.5rem"} color="#e98711" />
                );
            case "Nextjs":
                return (
                    <TbBrandNextjs
                        key={index}
                        size={"1.5rem"}
                        color="#000000"
                    />
                );
            case "Fastapi":
                return (
                    <SiFastapi key={index} size={"1.5rem"} color="#000000" />
                );
            case "Supabase":
                return (
                    <SiSupabase key={index} size={"1.5rem"} color="#65ce91" />
                );
            case "Tailwind":
                return (
                    <SiTailwindcss
                        key={index}
                        size={"1.5rem"}
                        color="#62bdf9"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex-1 group transition-all flex flex-col justify-between p-10 gsmContainer relative min-w-[22rem] h-[18rem] rounded-lg hover:ring-1">
            <Image
                src={projectImage}
                alt=""
                width={10000}
                height={10000}
                className="absolute top-0 left-0 z-10 w-full h-full rounded-lg opacity-20"
            ></Image>

            <GradOutline />

            <div className="relative z-20 flex flex-col justify-between h-full rounded-lg">
                <div className="flex">
                    <h3 className="text-lg font-medium">{projectName}</h3>
                    <div className="flex gap-2 ml-auto">
                        {deployUrl != "" && (
                            <VscPlay
                                onClick={() => {
                                    window.open(deployUrl);
                                }}
                                className="cursor-pointer "
                                size={"1.5rem"}
                            />
                        )}
                        <BsGithub
                            onClick={() => {
                                window.open(projectLink);
                            }}
                            className="cursor-pointer "
                            size={"1.5rem"}
                        />
                    </div>
                </div>
                <p className="text-sm text-gray-300">{projectDescription}</p>
                <div className="flex justify-center gap-4">
                    {projectTechStack.map((techStack, index) =>
                        getTechStackIcon(techStack, index)
                    )}
                </div>
            </div>
        </div>
    );
}

export function ProjectsCarousel({
    projectsList,
}: {
    projectsList: ProjectCardProps[];
}) {
    const [startIndex, setStartIndex] = useState(0);

    return (
        <div className="flex flex-col gap-8 py-10 overflow-x-scroll overflow-y-scroll lg:flex-row">
            {projectsList.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
}
