import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Award, CheckCircle, Sparkles } from 'lucide-react';

// Ken Burns Hero Image with slow zoom
const KenBurnsImage = ({ src, alt }) => (
    <div className="relative w-full h-full overflow-hidden">
        <motion.img
            src={src}
            alt={alt}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
    </div>
);

// Specification grid data per product
const getSpecifications = (product) => ({
    applications: product.bestUse?.includes("Commercial") || product.bestUse?.includes("Office") || product.bestUse?.includes("Hotel") || product.bestUse?.includes("Conference")
        ? ["Residential", "Commercial"]
        : ["Residential"],
    craftsmanship: product.material?.includes("Wool") || product.material?.includes("Silk") || product.material?.includes("Velvet") || product.material?.includes("Natural")
        ? "Bespoke"
        : "Premium",
});

// Page transition variants
const pageVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } }
};

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === id);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    if (!product) return (
        <div className="min-h-screen grid place-items-center bg-primary">
            <div className="text-center">
                <h1 className="text-4xl font-serif text-heading mb-4">Product Not Found</h1>
                <Link to="/our-products" className="text-cta uppercase tracking-widest text-xs font-bold">← Back to Curation</Link>
            </div>
        </div>
    );

    const displayImages = product.gallery?.length > 0 ? product.gallery : [product.image];
    const specs = getSpecifications(product);
    const relatedProducts = products.filter(p => p.id !== id).slice(0, 3);

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-primary min-h-screen"
        >
            {/* Back to Curation-Sleek thin-lined arrow */}
            <div className="fixed top-36 left-6 z-30">
                <Link
                    to="/our-products"
                    className="group inline-flex items-center gap-3 bg-white border-2 border-black rounded-full pl-3 pr-5 py-2.5 hover:bg-black transition-all duration-300 shadow-lg"
                >
                    <span className="w-7 h-7 rounded-full border border-black flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300">
                        <ArrowLeft size={12} className="text-black group-hover:text-black transition-colors" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black group-hover:text-white">Back to Curation</span>
                </Link>
            </div>

            {/* === Hero: 60/40 Asymmetric Split === */}
            <section className="flex flex-col lg:flex-row min-h-screen">

                {/* Left 60%-Full-bleed Image with Ken Burns */}
                <div className="w-full lg:w-[60%] h-[50vh] lg:h-screen relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0"
                        >
                            <KenBurnsImage
                                src={displayImages[activeImageIndex]}
                                alt={`${product.title} - View ${activeImageIndex + 1}`}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Image Navigation Dots */}
                    {displayImages.length > 1 && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                            {displayImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImageIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeImageIndex
                                        ? 'bg-white w-8'
                                        : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Right 40%-Dossier Panel */}
                <div className="w-full lg:w-[40%] lg:h-screen lg:overflow-y-auto" style={{ backgroundColor: '#f4e9e2' }}>
                    <div className="px-8 md:px-12 lg:px-14 py-12 lg:py-24 flex flex-col justify-center min-h-full">

                        {/* Category Tag */}
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-cta tracking-[0.3em] uppercase text-[10px] font-bold mb-6 block"
                        >
                            SVE Signature Product
                        </motion.span>

                        {/* Title-Oversized Elegant Serif */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-heading mb-8 leading-[1.1]"
                        >
                            {product.title}
                        </motion.h1>

                        {/* Thin Divider */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '60px' }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="h-px bg-heading/30 mb-8"
                        />

                        {/* Mission-Led Description / Design Intent */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-heading/60 mb-3">Design Intent</h3>
                            <div className="text-heading/80 text-base leading-relaxed font-light mb-4 space-y-4">
                                {(product.longDescription || product.description).split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <p className="text-heading/60 text-sm leading-relaxed font-light italic">
                                Reflecting our 15-year legacy of precision, these {product.title} solutions are designed to translate your vision into a functional, aesthetically refined environment.
                            </p>
                        </motion.div>

                        {/* Best Use */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            className="mb-8"
                        >
                            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-heading/40 block mb-3">Best Use</span>
                            <div className="flex flex-wrap gap-2">
                                {product.bestUse?.split(', ').map((use, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-full border border-heading/15 text-heading/70 text-[10px] uppercase tracking-wider font-bold bg-secondary/40">
                                        {use}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Interactive Design Insight-Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, rotate: -1 }}
                            animate={{ opacity: 1, y: 0, rotate: -1 }}
                            whileHover={{ rotate: 0, scale: 1.02 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="relative bg-secondary rounded-xl p-6 shadow-lg border border-soft-border cursor-default"
                        >
                            <Sparkles size={16} className="text-gold absolute top-4 right-4" />
                            <p className="text-lg font-serif italic text-heading/80 leading-relaxed">
                                "A SVE Signature: Thoughtful details that elevate everyday living."
                            </p>
                            <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-cta mt-3">- Design Philosophy</span>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                            className="mt-10"
                        >
                            <Link
                                to="/contact-us"
                                className="inline-flex items-center gap-3 bg-white text-black border-2 border-black px-8 py-4 rounded-sm hover:bg-black hover:text-white transition-all duration-300 group shadow-lg"
                            >
                                <span className="text-xs uppercase tracking-[0.2em] font-bold">Request a Consultation</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Gallery Strip-Additional Images */}
            {displayImages.length > 1 && (
                <section className="bg-primary py-20">
                    <div className="container mx-auto px-6">
                        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-heading/40 mb-10 text-center">Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {displayImages.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.6 }}
                                    className={`overflow-hidden rounded-lg cursor-pointer ${activeImageIndex === i ? 'ring-2 ring-cta' : ''
                                        }`}
                                    onClick={() => { setActiveImageIndex(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.title} view ${i + 1}`}
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Related Signature Products */}
            <section className="bg-blush py-20">
                <div className="container mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-cta block mb-2">Continue Exploring</span>
                            <h3 className="text-3xl font-serif text-heading">From the Curation</h3>
                        </div>
                        <Link to="/our-products" className="text-xs text-cta uppercase tracking-widest hover:text-heading transition-colors font-bold">
                            View All →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProducts.map((p, idx) => (
                            <Link to={`/product/${p.id}`} key={idx} className="group cursor-pointer">
                                <div className="overflow-hidden rounded-xl aspect-[4/5] mb-4 relative">
                                    <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={p.title} />
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <h4 className="text-heading font-serif text-xl">{p.title}</h4>
                                <p className="text-body-text text-sm font-light">{p.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
