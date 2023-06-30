import { Navbar } from "./components";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Ashmin Jayson",
    description: "Developer | Engineer | Student",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${ibmPlexMono.className} py-8 px-2 sm:px-16 h-screen relative w-full text-black dark:text-white bg-white dark:bg-[#121212]`}
            >
                <Navbar />
                <div className="flex flex-col justify-center mt-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
