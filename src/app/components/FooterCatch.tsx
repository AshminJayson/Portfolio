export function FooterCatch({ blind }: { blind: string }) {
    return (
        <p className="self-center text-xs text-gray-500 md:self-end bottom-10 right-10">
            {blind}
        </p>
    );
}
