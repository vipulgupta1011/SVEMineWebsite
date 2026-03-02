import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ value, label }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const springValue = useSpring(0, { duration: 2000, bounce: 0 });
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString() + "+");

    // Create a separate state for rendering the text to avoid direct DOM manipulation issues with Motion
    const [currentValue, setCurrentValue] = useState("0+");

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    useEffect(() => {
        return displayValue.on('change', (latest) => {
            setCurrentValue(latest);
        });
    }, [displayValue]);

    return (
        <div ref={ref} className="text-center py-10 h-full flex flex-col justify-center bg-[#f4e9e2] rounded-lg border border-[#5a3e3e]/15">
            <motion.div
                className="text-5xl md:text-6xl font-serif font-bold text-heading mb-2"
            >
                {currentValue}
            </motion.div>
            <p className="text-body-text uppercase tracking-widest text-sm font-light">{label}</p>
        </div>
    );
}

export default function Stats() {
    return (
        <section className="bg-[#f4e9e2] border-y border-[#5a3e3e]/10 py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Counter value={18} label="Years of Design Excellence" />
                    <Counter value={15000} label="Successfully Completed Projects" />
                    <Counter value={500} label="Corporate Clients Nationwide" />
                </div>
            </div>
        </section>
    );
}
