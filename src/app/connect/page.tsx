"use client";

import { TypeAnimation } from "react-type-animation";
import { FooterCatch, GradOutline } from "../components";
import { PageWrapper } from "../components/PageWrapper";

function LinkRouter({ url }: { url: string }) {
    return (
        <span
            className="cursor-pointer"
            onClick={() => {
                if (url.endsWith("@gmail.com")) window.open(`mailto:${url}`);
                else window.open(url);
            }}
        >
            <TypeAnimation cursor={false} sequence={[`${url}`]} />
        </span>
    );
}

export default function Connect() {
    return (
        <PageWrapper>
            <div className="relative z-20 flex flex-col justify-between gap-8">
                <h3 className="mt-10 text-2xl font-semibold text-center">
                    Let&apos;s get in touch
                </h3>
                <div className="mx-auto rounded-lg group gsmContainer hover:ring-1 min-w-[42rem]">
                    <GradOutline />
                    <div className="relative z-20 flex flex-col gap-6 p-8">
                        <p>
                            Mail me at{" "}
                            <LinkRouter url="ashminjayson10@gmail.com" />
                        </p>
                        <p>
                            Connect on LinkedIn?{" "}
                            <LinkRouter url="https://www.linkedin.com/in/ashmin-jayson/" />
                        </p>
                        <p>
                            Tweet and a follow??{" "}
                            <LinkRouter url="https://twitter.com/JaysonAshmin" />
                        </p>
                        <p>
                            Do checkout my projects on{" "}
                            <LinkRouter url="https://github.com/AshminJayson/" />
                        </p>
                        <p>You know what? I trust you with this 9072738970</p>
                    </div>
                </div>
                <FooterCatch blind="Note: Ask for feedback only if you'll consider it ‼️" />
            </div>
        </PageWrapper>
    );
}
