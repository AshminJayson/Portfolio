"use client";

import { FooterCatch, PageWrapper } from "../components";
import { ProjectsCarousel } from "./components";
import { ProjectsData } from "./projects";

export default function Projects() {
    return (
        <PageWrapper>
            <div className="relative z-20 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-center">Projects</h3>
                <p className="text-center text-gray-300">
                    Here are the tools and apps I&apos;ve built
                </p>
                <ProjectsCarousel projectsList={ProjectsData} />
                <p
                    className="text-center text-gray-300 cursor-pointer"
                    onClick={() => {
                        window.open("https://www.github.com/AshminJayson");
                    }}
                >
                    Tap here to contribute to any of my projects or collaborate
                    on a new one !
                </p>
                <FooterCatch blind="I wanna be ⚙️⚒️🔨🛠️ tech agnostic in my endeavours" />
            </div>
        </PageWrapper>
    );
}
