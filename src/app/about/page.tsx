interface MessageBoxProps {
    message: string;
    blind: string;
}

function MessageBox({ message, blind }: MessageBoxProps) {
    return (
        <div className="gsmContainer p-6 rounded-lg flex flex-col max-w-2xl gap-4">
            <p>{message}</p>
            <p className="ml-auto text-xs text-gray-400">{blind}</p>
        </div>
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
            "I' on the lookout for amazing opportunities to build freelance projects and also gain exposure through internships.",
        blind: "Opportunities here I come",
    },
];

export default function About() {
    return (
        <div className="flex flex-col gap-8">
            {Messages.map((content, index) => (
                <MessageBox key={index} {...content} />
            ))}
            <p className="ml-auto text-gray-500 text-xs">
                I&apos;m also super into conversation that make me go whaaa-
            </p>
        </div>
    );
}
