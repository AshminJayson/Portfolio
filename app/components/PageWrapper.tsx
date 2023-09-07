"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Position {
    x: string;
    y: string;
}

const Images: string[] = [
    "/images/Ellipse 1.png",
    "/images/Ellipse 2.png",
    "/images/Ellipse 3.png",
    // "/images/Ellipse 4.png",
    // "/images/Ellipse 5.png",
    "/images/Ellipse 6.png",
];
const validPositions: Position[] = [
    { x: "-10vw", y: "-20vh" },
    { x: "-10vw", y: "-10vh" },
    { x: "10vw", y: "30vh" },
    { x: "30vw", y: "50vh" },
    { x: "60vw", y: "20vh" },
    { x: "70vw", y: "10vh" },
];

export function PageWrapper({ children }: { children: React.ReactNode }) {
    const getRandomPosition = () => {
        return validPositions[
            Math.floor(Math.random() * validPositions.length)
        ];
    };

    const [clicked, setClicked] = useState<number>(0);
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
        >
            {Images.map((url, index) => (
                <motion.div
                    key={index}
                    className="absolute z-10 overflow-hidden"
                    initial={{ opacity: 0, y: 0 }}
                    animate={
                        clicked >= 0
                            ? {
                                  opacity: 1,
                                  y: getRandomPosition().y,
                                  x: getRandomPosition().x,
                                  transition: {
                                      duration: 3,
                                  },
                              }
                            : {}
                    }
                    onClick={() => setClicked((clicked) => clicked + 1)}
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
