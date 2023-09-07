export function FooterCatch({ blind }: { blind: string }) {
    return (
        <p className="z-20 self-center p-4 text-xs text-center text-gray-800 dark:text-gray-300 md:self-end">
            {blind}
        </p>
    );
}
