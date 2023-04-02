import { useEffect, useState } from "react";

export function useAnimatedCount(value: number) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (typeof value !== "number") return;

        let start = count;
        const end = value;
        if (start === end) return;

        const diff = Math.abs(start - end);
        const delay = 3000 / diff;

        let timer = setInterval(() => {
            console.log({ timer });
            if (start < end) {
                start += 1;
            } else if (start > end) {
                start -= 1;
            }
            setCount(start);
            if (start === end) clearInterval(timer);
        }, delay);
    }, [value]);

    return count;
}
