import { Navbar } from "./components";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${ibmPlexMono.className} py-8 px-16 h-screen w-screen`}
            >
                <Navbar />
                <div className="mt-10 flex flex-col gap-8 justify-center">
                    {children}
                </div>
            </body>
        </html>
    );
}
