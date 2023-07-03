"use client";

import { TypeAnimation } from "react-type-animation";
import { FooterCatch, GradOutline } from "../components";
import { PageWrapper } from "../components/";
import { useEffect, useState } from "react";
import { EmailModal } from "./components";
import { Toaster, toast } from "sonner";
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";

function LinkRouter({ url }: { url: string }) {
    return (
        <span
            className="ml-2 cursor-pointer"
            onClick={() => {
                if (url.endsWith("@gmail.com")) window.open(`mailto:${url}`);
                else window.open(url);
            }}
        >
            <TypeAnimation cursor={false} sequence={[`${url}`]} />
        </span>
    );
}

const socialUrls = {
    email: "ashminjayson10@gmail.com",
    github: "https://github.com/AshminJayson/",
    linkedin: "https://www.linkedin.com/in/ashmin-jayson/",
    twitter: "https://twitter.com/JaysonAshmin",
    whatsapp: "http://wa.me/+919072738970",
};

export default function Connect() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [messageCode, setMessageSentCode] = useState<string>("");

    useEffect(() => {
        switch (messageCode) {
            case "success":
                toast.success("Message sent in a ⚡");
                break;
            case "error":
                toast.error("Something bad happened to the message 🙅‍♂️");
                break;
        }

        setMessageSentCode("");
    }, [messageCode]);
    return (
        <PageWrapper>
            <div className="relative z-20 flex flex-col justify-between gap-8 mx-auto max-w-max">
                <h3 className="mt-10 text-2xl font-semibold text-center">
                    Let&apos;s get in touch
                </h3>
                <div className="mx-auto rounded-lg group gsmContainerLight dark:gsmContainerDark hover:ring-1 lg:min-w-[42rem]">
                    <GradOutline />
                    <div className="relative z-20 flex flex-col gap-6 p-8">
                        <p className="flex items-center justify-start">
                            <AiOutlineMail
                                size={20}
                                className="mr-3 cursor-pointer"
                                onClick={() => window.open(socialUrls.email)}
                            />
                            Mail me at <LinkRouter url={socialUrls.email} />
                        </p>
                        <p className="flex items-center justify-start">
                            <FaLinkedin
                                size={20}
                                className="mr-3 cursor-pointer"
                                onClick={() => window.open(socialUrls.linkedin)}
                            />
                            Connect on LinkedIn?{" "}
                            <LinkRouter url={socialUrls.linkedin} />
                        </p>
                        <p className="flex items-center justify-start">
                            <FaTwitter
                                size={20}
                                className="mr-3 cursor-pointer"
                                onClick={() => window.open(socialUrls.twitter)}
                            />
                            Tweet and a follow??{" "}
                            <LinkRouter url={socialUrls.twitter} />
                        </p>
                        <p className="flex items-center justify-start">
                            <FaGithub
                                size={20}
                                className="mr-3 cursor-pointer"
                                onClick={() => window.open(socialUrls.github)}
                            />
                            Do checkout my projects on{" "}
                            <LinkRouter url={socialUrls.github} />
                        </p>
                        <p className="flex items-center justify-start">
                            <AiOutlineWhatsApp
                                size={20}
                                className="mr-3 cursor-pointer"
                                onClick={() => window.open(socialUrls.whatsapp)}
                            />
                            You know what? I trust you with this{" "}
                            <LinkRouter url={socialUrls.whatsapp} />
                        </p>
                        <button
                            onClick={() => {
                                setOpenModal(true);
                            }}
                            className="text-gray-800 dark:text-gray-100 hover:text-transparent bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text"
                        >
                            Click to tell me something quick ❗
                        </button>
                    </div>
                </div>
                <FooterCatch blind="Note: Ask for feedback only if you'll consider it ‼️" />
            </div>
            <EmailModal
                parentSignal={openModal}
                setParentSignal={setOpenModal}
                setMessageSentCode={setMessageSentCode}
            />
            <Toaster richColors position="bottom-center" />
        </PageWrapper>
    );
}
