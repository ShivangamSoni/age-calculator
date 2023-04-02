import {
    forwardRef,
    type DetailedHTMLProps,
    type InputHTMLAttributes,
    type ReactNode,
} from "react";

import Error from "./Error";

interface InputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label: string;
    error: ReactNode;
    displayError: boolean;
}

export default forwardRef<HTMLInputElement, InputProps>(function input(
    { label, error, displayError, className, ...rest },
    ref,
) {
    return (
        <div className="flex flex-col justify-start gap-1">
            <label className="flex flex-col justify-start gap-1">
                <span
                    className={`text-xs sm:text-sm ${
                        !error ? "text-neutral-grey-300" : "text-error"
                    } font-bold uppercase tracking-widest`}
                >
                    {label}
                </span>
                <input
                    ref={ref}
                    {...rest}
                    className={`text-base sm:text-lg font-bold tracking-wide p-3 border-none outline-none ring-1 ${
                        !error ? "ring-neutral-grey-200" : "ring-error"
                    } rounded-md transition-all duration-200 focus:ring-primary focus:ring-opacity-50 placeholder:font-bold placeholder:tracking-wide`}
                />
            </label>
            {displayError && <Error>{error}</Error>}
        </div>
    );
});
