import { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfter({ beforeImage, afterImage }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (event) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = ("touches" in event ? event.touches[0].clientX : event.clientX) - rect.left;
        const position = Math.max(0, Math.min(100, (x / rect.width) * 100));

        setSliderPosition(position);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        window.addEventListener('touchend', handleGlobalMouseUp);

        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            window.removeEventListener('touchend', handleGlobalMouseUp);
        };
    }, []);

    return (
        <section className="py-24 bg-[#f4e9e2]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold block mb-4">Transformation</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-heading">The SVE <span className="italic text-body-text">Difference</span></h2>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl cursor-col-resize shadow-2xl border border-white/10 select-none group"
                    onMouseMove={handleMove}
                    onTouchMove={handleMove}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* After Image (Background) */}
                    <img
                        src={afterImage}
                        alt="After Renovation"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] font-bold tracking-widest border border-white/10 z-10">AFTER</div>

                    {/* Before Image (Foreground - Clipped) */}
                    <div
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{
                            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                        }}
                    >
                        <img
                            src={beforeImage}
                            alt="Before Renovation"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover filter brightness-90 sepia-[0.3]"
                        />
                        <div className="absolute top-6 left-6 bg-gold/90 backdrop-blur-md px-4 py-2 rounded-full text-rich-charcoal text-[10px] font-bold tracking-widest border border-white/10 z-10">BEFORE</div>
                    </div>

                    {/* Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-champagne-gold cursor-col-resize z-20 shadow-[0_0_20px_rgba(212,175,55,0.8)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-champagne-gold rounded-full flex items-center justify-center shadow-lg transition-transform group-active:scale-110">
                            <ArrowLeftRight size={20} className="text-dark-charcoal" />
                        </div>
                    </div>
                </div>

                <p className="text-center text-body-text mt-8 text-sm italic">Drag the slider to reveal the luxury.</p>
            </div>
        </section>
    );
}
