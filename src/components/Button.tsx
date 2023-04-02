import { type DetailedHTMLProps, type ButtonHTMLAttributes } from "react";

export default function Button({
    children,
    className,
    ...rest
}: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) {
    return (
        <button
            className={`border-none outline-none bg-primary text-neutral-white-50 p-4 md:p-6 transition-all duration-300 hover:bg-neutral-black focus-visible:bg-neutral-black ${
                className ?? ""
            }`}
            {...rest}
        >
            {children}
        </button>
    );
}
