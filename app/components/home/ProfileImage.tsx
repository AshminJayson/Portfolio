import { GradOutline } from "..";
import Image from "next/image";
import { IoFlash } from "react-icons/io5";

export function ProfileImage() {
    return (
        <div className="relative z-30 self-center mb-10 sm:mb-0 sm:self-end group lg:mr-20">
            <div className="rounded-md group-hover:translate-x-6 transition-all group-hover:opacity-100 opacity-0 group-hover:-translate-y-6 gsmContainerLight dark:gsmContainerDark inset-0 absolute w-[16rem] h-[16rem]">
                <GradOutline />
                <p className="relative p-1 px-2 text-xs italic text-gray-800 rounded-lg dark:text-gray-400">
                    Nice to see you too❗
                </p>
            </div>
            <div className="absolute z-30 w-12 h-12 translate-x-2 translate-y-2 rounded-full opacity-0 group-hover:opacity-100">
                <IoFlash
                    className="cursor-pointer hover:text-orange-400"
                    onClick={() => {
                        window.open("https://github.com/AshminJayson");
                    }}
                />
            </div>
            <>
                <div className="absolute group-hover:-inset-1 dark:-inset-1 group-hover:duration-[2s] bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30"></div>
                <div className="absolute inset-0 z-0 group-hover:bg-white dark:bg-[#121212] rounded-xl"></div>
            </>
            <div className="rounded-md gsmContainerLight dark:gsmContainerDark w-[16rem] h-[16rem] flex justify-center items-center relative">
                <Image
                    src="/images/Profile.jpg"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-full transition-opacity duration-300 rounded-md opacity-0 group-hover:opacity-100"
                ></Image>
                <p className="absolute p-2 text-sm text-center group-hover:hidden">
                    Interact to take a peek
                </p>
            </div>
        </div>
    );
}
