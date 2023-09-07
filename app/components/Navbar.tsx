"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GradOutline } from "./Gradoutline";
import { MdSunny, MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const paths = new Map<string, number>([
    ["/", 0],
    ["/about", 1],
    ["/projects", 2],
    ["/connect", 3],
]);

export function Navbar() {
    const pathName = usePathname();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isLargeDevice, setIsLargeDevice] = useState<boolean>(false);
    const [colorMode, setColorMode] = useState<string>("");

    useEffect(() => {
        setActiveIndex(paths.get(pathName)!);
        if (window.innerWidth > 768) setIsLargeDevice(true);

        const getColorTheme = () => {
            if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                setColorMode("dark");
                document.documentElement.classList.add("dark");
            } else {
                setColorMode("light");
                document.documentElement.classList.remove("dark");
            }
        };

        getColorTheme();
        window.addEventListener("storage", getColorTheme);

        return () => {
            window.removeEventListener("storage", getColorTheme);
        };
    }, [pathName]);

    const changeColorMode = () => {
        if (colorMode === "dark") {
            setColorMode("light");
            localStorage.theme = "light";
        } else {
            setColorMode("dark");
            localStorage.theme = "dark";
        }

        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div className="group relative w-min mx-auto h-[5vh] z-20">
            {isLargeDevice && <GradOutline />}
            <div className="relative flex justify-center items-center gap-8 px-10 py-2 text-xs bg-black rounded-md group-hover:ring-[0.5px] gsmContainerLight dark:gsmContainerDark sm:gap-12 md:text-lg">
                <Link
                    className={`font-normal ${
                        activeIndex == 0
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`font-normal ${
                        activeIndex == 1
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="about"
                >
                    About
                </Link>
                <Link
                    className={`font-normal ${
                        activeIndex == 2
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="projects"
                >
                    Projects
                </Link>
                <Link
                    className={`font-normal ${
                        activeIndex == 3
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="connect"
                >
                    Connect
                </Link>
                {colorMode == "dark" && (
                    <MdOutlineDarkMode
                        className="transition-all cursor-pointer hover:rotate-45"
                        onClick={changeColorMode}
                    />
                )}
                {colorMode == "light" && (
                    <MdSunny
                        className="transition-all cursor-pointer hover:rotate-90"
                        onClick={changeColorMode}
                    />
                )}
            </div>
        </div>
    );
}
