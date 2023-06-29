import { TypeAnimation } from "react-type-animation";
import { GradOutline } from "..";

export function IntroductionCard() {
    return (
        <div className="group z-30 gsmContainer self-center sm:self-start rounded-xl w-[25rem] sm:w-[40rem] p-10 ring-[0.3px] min-h-[17rem]">
            <GradOutline />
            <div className="relative flex flex-col gap-6">
                <h5 className="font-semibold text-gray-500">
                    Full Stack Developer | AI Enthusiast | Intern{" "}
                    <span
                        className="cursor-pointer "
                        onClick={() => {
                            window.open("https://trypolymath.ai/");
                        }}
                    >
                        @Polymath AI
                    </span>
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
