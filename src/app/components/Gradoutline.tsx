export function GradOutline() {
    return (
        <>
            <div className="absolute group-hover:-inset-1 group-hover:duration-[2s] bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30"></div>
            <div className="absolute inset-0 z-0 group-hover:bg-white dark:group-hover:bg-[#121212] rounded-xl"></div>
        </>
    );
}
