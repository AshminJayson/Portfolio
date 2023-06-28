"use client";

import { TypeAnimation } from "react-type-animation";
import { FooterCatch, GradOutline } from "./components";
import { PageWrapper } from "./components/PageWrapper";

function Introduction() {
    return (
        <div className="group gsmContainer self-center sm:self-start rounded-xl w-[25rem] sm:w-[40rem] p-10 ring-[0.3px] min-h-[17rem]">
            <GradOutline />
            <div className="relative z-20 flex flex-col gap-6">
                <h5 className="font-semibold text-gray-500">
                    Full Stack Developer | AI Enthusiast | Intern @Polymath AI
                </h5>
                <div className="flex flex-col gap-4">
                    <h3 className="text-4xl font-semibold">
                        <span className="text-transparent bg-gradient-to-r from-orange-700 to-white bg-clip-text">
                            Hey!{" "}
                        </span>
                        <span>I&apos;m Ashmin Jayson</span>
                    </h3>
                    <p>
                        <TypeAnimation
                            sequence={[
                                "I'm an enthusiastic and goal-oriented developer",
                                200,
                                "I'm an enthusiastic and goal-oriented engineer",
                                200,
                                "I'm an enthusiastic and goal-oriented engineer who loves to slouch and play games.",
                                200,
                                "I'm an enthusiastic and goal-oriented engineer who loves to collaborate and build amazing technological solutions that'll make a difference.",
                            ]}
                            speed={70}
                            cursor={false}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}

function ProfileImage() {
    return (
        <div className="relative self-center mb-10 sm:mb-0 sm:self-end group lg:mr-20">
            <div className="rounded-md group-hover:translate-x-6 transition-all group-hover:opacity-100 opacity-0 group-hover:-translate-y-6 gsmContainer inset-0 absolute w-[14rem] h-[16rem]">
                <GradOutline />
                <p className="relative z-20 p-1 px-2 text-xs italic text-gray-400">
                    Here&apos;s me!
                </p>
            </div>
            <div className="rounded-md gsmContainer w-[14rem] h-[16rem]"></div>
        </div>
    );
}

export default function Home() {
    return (
        <PageWrapper>
            <div className="flex flex-col gap-10 md:gap-0">
                <ProfileImage />
                <Introduction />
                <FooterCatch blind="My superpower is converting coffee ☕ to code 🧑‍💻" />
            </div>
        </PageWrapper>
    );
}
