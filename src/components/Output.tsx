import { type DetailedHTMLProps, type OutputHTMLAttributes } from "react";

interface OutputProps
    extends DetailedHTMLProps<
        OutputHTMLAttributes<HTMLOutputElement>,
        HTMLOutputElement
    > {
    label: string;
    value: string;
}

export default function Output({
    label,
    value,
    className,
    ...rest
}: OutputProps) {
    return (
        <output
            className="text-4xl sm:text-6xl md:text-8xl font-bold italic"
            {...rest}
        >
            <strong className="text-primary">{value}</strong> {label}
        </output>
    );
}
