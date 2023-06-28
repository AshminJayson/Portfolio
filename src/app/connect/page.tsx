"use client";

import { GradOutline } from "../components";
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
            {url}
        </span>
    );
}

export default function Connect() {
    return (
        <PageWrapper>
            <div className="flex flex-col gap-8 justify-evenly">
                <h3 className="text-2xl font-semibold text-center">
                    Let&apos;s get in touch
                </h3>
                <div className="mx-auto rounded-lg group gsmContainer hover:ring-1">
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
                <p className="self-end text-xs text-gray-500 bottom-10 right-10">
                    Note: Ask for feedback only if you&apos;ll consider it
                </p>
            </div>
        </PageWrapper>
    );
}
