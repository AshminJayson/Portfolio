"use client";

import { FooterCatch, GradOutline } from "../components";
import { PageWrapper } from "../components";
import { motion } from "framer-motion";

interface MessageBoxProps {
    message: string;
    blind: string;
    index: number;
}

function MessageBox({ message, blind, index }: MessageBoxProps) {
    const getFlexPos = () => {
        if (index % 2 == 0) return "self-start";
        else return "self-end";
    };
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
            exit={{ opacity: 0, x: 100 }}
            className={`max-w-2xl select-none ${getFlexPos()} z-30 p-6 rounded-lg group gsmContainer hover:ring-1`}
        >
            <GradOutline />
            <div className="relative z-20 flex flex-col gap-4">
                <p>{message}</p>
                <p className="ml-auto text-xs text-gray-800 dark:text-gray-400">
                    {blind}
                </p>
            </div>
        </motion.div>
    );
}

const Messages = [
    {
        message:
            "I'm presently a 3rd year Data Science student at Mar Athanasius College of Engineering Kothamangalam tredding my way through course work while also dipping my toes in any technology I can find.",
        blind: "Sometimes you just wish you had a lot less classes",
    },
    {
        message:
            "I've been building web apps for around a year and would love to keep on building cooler and much more use web applications.",
        blind: "It's certainly been a fun ride",
    },
    {
        message:
            "I'm on the lookout for amazing opportunities to build freelance projects and also gain exposure through internships.",
        blind: "Opportunities here I come",
    },
];

export default function About() {
    return (
        <PageWrapper>
            <div className="flex flex-col gap-8">
                {Messages.map((content, index) => (
                    <MessageBox
                        key={index}
                        message={content.message}
                        blind={content.blind}
                        index={index}
                    />
                ))}
                <FooterCatch blind="I'm also super into conversation that make me go whaaa- 😲" />
            </div>
        </PageWrapper>
    );
}
