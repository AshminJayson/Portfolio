// Icons imports
import { useRef, useState } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

import { ProjectCard } from ".";

export function ProjectsCarousel({
    projectsList,
}: {
    projectsList: ProjectCardProps[];
}) {
    const containerRef = useRef<any>();
    const [isLeftmostEnd, setLeftmostEnd] = useState<boolean>(true);
    const [isRightmostEnd, setRightmostEnd] = useState<boolean>(false);

    const handleScroll = () => {
        const container = containerRef.current;
        const isEnd =
            container?.scrollLeft + container.clientWidth >=
            container.scrollWidth - 100;

        const isStart = container.scrollLeft === 0;

        setLeftmostEnd(isStart);
        setRightmostEnd(isEnd);
        console.log(isEnd);
    };

    return (
        <div className="flex items-center gap-4">
            <div
                className={`hidden lg:block hover:-translate-x-1 transition-all ${
                    isLeftmostEnd ? "invisible" : ""
                }`}
                onClick={() => {
                    containerRef.current.scroll({
                        left: containerRef.current.scrollLeft - 400,
                        behavior: "smooth",
                    });
                }}
                onMouseEnter={() => {
                    containerRef.current.scroll({
                        left: containerRef.current.scrollLeft - 400,
                        behavior: "smooth",
                    });
                }}
            >
                <FaCaretLeft size={30} />
            </div>
            <div
                ref={containerRef}
                className="flex flex-col gap-4 px-10 py-10 overflow-x-scroll overflow-y-scroll transition-all duration-700 lg:flex-row"
                onScroll={handleScroll}
            >
                {projectsList.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <div
                className={`hidden lg:block hover:translate-x-1 transition-all ${
                    isRightmostEnd ? "invisible" : ""
                }`}
                onClick={() => {
                    containerRef.current.scroll({
                        left: containerRef.current.scrollLeft + 400,
                        behavior: "smooth",
                    });
                }}
                onMouseEnter={() => {
                    containerRef.current.scroll({
                        left: containerRef.current.scrollLeft + 400,
                        behavior: "smooth",
                    });
                }}
            >
                <FaCaretRight size={30} />
            </div>
        </div>
    );
}
