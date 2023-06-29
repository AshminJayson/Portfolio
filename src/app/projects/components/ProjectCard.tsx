import { GradOutline } from "@/app/components";
import { BsGithub } from "react-icons/bs";
import { FaReact, FaAngular } from "react-icons/fa";
import {
    SiNodedotjs,
    SiFirebase,
    SiFastapi,
    SiSupabase,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiMysql,
    SiFlask,
    SiNextdotjs,
} from "react-icons/si";
import { VscPlay } from "react-icons/vsc";
import Image from "next/image";

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
                return <FaReact key={index} size={"1.7rem"} color="#7dd8fc" />;
            case "Nodejs":
                return (
                    <SiNodedotjs key={index} size={"1.7rem"} color="#5d9a42" />
                );
            case "Angular":
                return (
                    <FaAngular key={index} size={"1.7rem"} color="#b5162e" />
                );
            case "Firebase":
                return (
                    <SiFirebase key={index} size={"1.7rem"} color="#e98711" />
                );
            case "Nextjs":
                return (
                    <SiNextdotjs key={index} size={"1.7rem"} color="#000000" />
                );
            case "Fastapi":
                return (
                    <SiFastapi key={index} size={"1.7rem"} color="#c5dfdb" />
                );
            case "Supabase":
                return (
                    <SiSupabase key={index} size={"1.7rem"} color="#65ce91" />
                );
            case "Tailwind":
                return (
                    <SiTailwindcss
                        key={index}
                        size={"1.7rem"}
                        color="#62bdf9"
                    />
                );
            case "MongoDB":
                return (
                    <SiMongodb key={index} size={"1.7rem"} color="#071e2b" />
                );
            case "Express":
                return (
                    <SiExpress key={index} size={"1.7rem"} color="#ffffff" />
                );
            case "Flask":
                return <SiFlask key={index} size={"1.7rem"} color="#ffffff" />;
            case "Mysql":
                return <SiMysql key={index} size={"1.7rem"} color="#30758f" />;
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
                className="absolute top-0 left-0 z-30 w-full h-full rounded-lg opacity-20"
            ></Image>

            <GradOutline />

            <div className="relative z-20 flex flex-col justify-between h-full gap-2 rounded-lg">
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
                <div className="flex items-center justify-center gap-4">
                    {projectTechStack.map((techStack, index) =>
                        getTechStackIcon(techStack, index)
                    )}
                </div>
            </div>
        </div>
    );
}
