import { GradOutline } from "@/app/components";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from "@emailjs/browser";

export function EmailModal({
    parentSignal,
    setParentSignal,
    setMessageSentCode,
}: {
    parentSignal: boolean;
    setParentSignal: React.Dispatch<React.SetStateAction<boolean>>;
    setMessageSentCode: React.Dispatch<React.SetStateAction<string>>;
}) {
    const divRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const divElement = divRef.current!;
        divElement.addEventListener("keydown", (e: KeyboardEvent) => {
            if (e.key === "Escape") setParentSignal(false);
        });
    }, []);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_MAIL_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID!,
                    formRef.current!,
                    process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY
                )
                .then(() => {
                    setMessageSentCode("success");
                })
                .catch(() => {
                    setMessageSentCode("error");
                });
        } catch (error) {
            setMessageSentCode("error");
        } finally {
            setParentSignal(false);
        }
    };

    return (
        <motion.div
            ref={divRef}
            tabIndex={0}
            className={`absolute top-0 flex justify-center items-center left-0 bg-white/80 dark:bg-black/80 h-screen w-screen z-30 ${
                parentSignal ? "visible" : "invisible"
            }`}
        >
            <AnimatePresence>
                {parentSignal && (
                    <motion.div
                        initial={{ x: 0, y: 200 }}
                        animate={{ x: 0, y: 0 }}
                        // exit={{ x: 0, y: 200 }}
                        className="flex flex-col p-8 rounded-lg gsmContainerLight dark:gsmContainerDark group min-w-[40vw]"
                    >
                        {parentSignal && <GradOutline />}
                        <div className="z-20">
                            <AiOutlineClose
                                className="ml-auto transition-all cursor-pointer hover:rotate-90"
                                onClick={() => {
                                    setParentSignal(false);
                                }}
                                size={"1.5rem"}
                            />
                            <p className="p-4 font-semibold text-center">
                                Hurry up and spit out your mind
                            </p>
                            <form
                                ref={formRef}
                                onSubmit={(e) => sendEmail(e)}
                                className="flex flex-col w-full gap-4 p-4"
                            >
                                <div className="flex">
                                    <span>📛</span>
                                    <input
                                        type="text"
                                        name="from_name"
                                        className="w-full px-2 py-1 bg-transparent outline-none dark:text-white focus:outline"
                                        placeholder="Kimi no namai wa?"
                                        required
                                    />
                                </div>
                                <div className="flex">
                                    <span>📨</span>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-2 py-1 bg-transparent outline-none dark:text-white"
                                        placeholder="You email perhaps?"
                                        required
                                    />
                                </div>
                                <div className="flex">
                                    <span>🦜</span>
                                    <textarea
                                        name="message"
                                        className="w-full px-2 py-1 bg-transparent outline-none dark:text-white"
                                        placeholder="So what'd you wanna talk about?"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="self-end hover:text-transparent bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text"
                                >
                                    Let it Fly 🕊️
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
