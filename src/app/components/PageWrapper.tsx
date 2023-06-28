"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Position {
    x: string;
    y: string;
}

const Images: string[] = [
    "/images/Ellipse 1.png",
    "/images/Ellipse 2.png",
    "/images/Ellipse 3.png",
    "/images/Ellipse 4.png",
    // "/images/Ellipse 5.png",
    "/images/Ellipse 6.png",
];
const validPositions: Position[] = [
    { x: "-10vw", y: "-10vh" },
    { x: "30vw", y: "30vh" },
    { x: "20vw", y: "60vh" },
    { x: "60vw", y: "20vh" },
    { x: "40vw", y: "10vh" },
];

export function PageWrapper({ children }: { children: React.ReactNode }) {
    const getRandomPosition = () => {
        return validPositions[
            Math.floor(Math.random() * validPositions.length)
        ];
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
        >
            {Images.map((url, index) => (
                <motion.div
                    key={index}
                    className="absolute overflow-y-hidden"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: 1,
                        y: getRandomPosition().y,
                        x: getRandomPosition().x,
                    }}
                    exit={{ opacity: 0, y: 0 }}
                >
                    <Image
                        src={url}
                        alt=""
                        width={10000}
                        height={10000}
                        className="w-[15rem]"
                    ></Image>
                </motion.div>
            ))}
            {children}
        </motion.div>
    );
}
