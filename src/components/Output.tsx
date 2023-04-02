import { type DetailedHTMLProps, type OutputHTMLAttributes } from "react";

import { useAnimatedCount } from "@/hooks/useAnimatedCount";

interface OutputProps
    extends DetailedHTMLProps<
        OutputHTMLAttributes<HTMLOutputElement>,
        HTMLOutputElement
    > {
    label: string;
    value: string | number;
}

export default function Output({
    label,
    value,
    className,
    ...rest
}: OutputProps) {
    const count = useAnimatedCount(typeof value === "number" ? value : 0);

    return (
        <output
            className="text-4xl sm:text-6xl md:text-8xl font-bold italic"
            {...rest}
        >
            <strong className="text-primary">
                {typeof value === "string" ? value : count}
            </strong>{" "}
            {label}
        </output>
    );
}
