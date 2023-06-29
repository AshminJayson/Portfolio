"use client";

import { FooterCatch } from "../components";
import { PageWrapper } from "../components/PageWrapper";
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
                <p className="text-center text-gray-300">
                    Scroll to see some more of what I&apos;ve built
                </p>
                <FooterCatch blind="I wanna be ⚙️⚒️🔨🛠️ tech agnostic in my endeavours" />
            </div>
        </PageWrapper>
    );
}
