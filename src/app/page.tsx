"use client";

import {
    FooterCatch,
    IntroductionCard,
    PageWrapper,
    ProfileImage,
} from "./components";

export default function Home() {
    return (
        <PageWrapper>
            <div className="flex flex-col gap-10 select-none md:gap-0">
                <ProfileImage />
                <IntroductionCard />
                <FooterCatch blind="My superpower is converting coffee ☕ to code 🧑‍💻" />
            </div>
        </PageWrapper>
    );
}
