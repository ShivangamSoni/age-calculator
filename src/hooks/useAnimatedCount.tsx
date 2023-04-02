import { useEffect, useState } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";

export function useAnimatedCount(value: number) {
    const [count, setCount] = useState(0);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 100,
        stiffness: 100,
        duration: 2500,
    });

    useEffect(() => {
        motionValue.set(value);
    }, [value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => setCount(latest.toFixed(0)));
    }, [springValue]);

    return count;
}
