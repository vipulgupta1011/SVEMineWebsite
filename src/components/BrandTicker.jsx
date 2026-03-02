import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

const brands = [
    "Excel",
    "D'Decor",
    "Warwick",
    "NBT",
    "Livin",
    "GreenPanel",
    "Somfy",
    "Asian Paints",
    "Du Pont",
    "Kazage",
    "Newmat"
];

const wrap = (min, max, v) => {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
};

function InfiniteMarquee({ children, speed = 3 }) {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

    useAnimationFrame((_, delta) => {
        baseX.set(baseX.get() - speed * (delta / 1000));
    });

    return (
        <motion.div className="flex whitespace-nowrap gap-16" style={{ x }}>
            {children}
            {children}
        </motion.div>
    );
}

export default function BrandTicker() {
    return (
        <div className="bg-blush border-b border-soft-border py-12 overflow-hidden relative">
            <InfiniteMarquee speed={6}>
                {brands.map((brand, index) => (
                    <span
                        key={index}
                        className="text-3xl md:text-5xl font-serif text-heading/20 font-bold uppercase tracking-widest px-8 hover:text-heading transition-colors cursor-default block"
                    >
                        {brand}
                    </span>
                ))}
            </InfiniteMarquee>

            {/* Fade Edges for depth */}
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-blush to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-blush to-transparent z-10 pointer-events-none"></div>
        </div>
    );
}
