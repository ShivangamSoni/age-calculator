import { type ReactNode } from "react";

export default function error({ children }: { children: ReactNode }) {
    if (!children) return null;
    return (
        <span className="text-error text-xs sm:text-sm md:text-base italic">
            {children}
        </span>
    );
}
