import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Ruler, HardHat, Hammer } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';
import heroBg from '../assets/home-page-hero.png';

import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import BrandTicker from '../components/BrandTicker';
import BeforeAfter from '../components/BeforeAfter';
import ClientShowcase from '../components/ClientShowcase';

import ShinyText from '../components/react-bits/ShinyText';
import BlurText from '../components/react-bits/BlurText';
import MagneticButton from '../components/react-bits/MagneticButton';


export default function Home() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="overflow-x-hidden bg-[#f4e9e2]">
            {/* Hero Section - Blush Background */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-blush">
                {/* Background with Slow Scale Animation - Optional Image or just Blush color */}
                <motion.div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        y: y1
                    }}
                    animate={{ scale: [1, 1.1] }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                >
                </motion.div>
                {/* Dark overlay for text legibility */}
                <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.25))" }} />

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <div className="mb-8">
                        <ShinyText
                            text="Est. 2008-Jaipur, India"
                            className="!text-white/80 uppercase text-xs md:text-sm font-bold tracking-[0.3em] drop-shadow-sm"

                        />
                    </div>

                    <div className="mb-10 text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white leading-none tracking-tight">
                        <BlurText text="A Legacy of" delay={0.3} className="block text-center justify-center text-white drop-shadow-lg" />
                        <span className="italic font-light text-white/80 block mt-2">
                            <BlurText text="Luxury" delay={1} className="block text-center justify-center text-white/80 drop-shadow-lg" />
                        </span>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-2xl md:text-3xl font-serif text-white mb-4 max-w-3xl mx-auto leading-snug drop-shadow"
                    >
                        Defining Jaipur's Skyline Since 2008
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="text-base md:text-lg text-white/75 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Founded by Yash &amp; Nidhi Mamoria on the principles of design integrity and honest craftsmanship. With enormous years of experience and 15,000+ projects completed, we don't just decorate spaces-we create enduring experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        <MagneticButton strength={30}>
                            <Link
                                to="/our-products"
                                className="group inline-flex items-center gap-4 bg-cta text-white uppercase tracking-[0.2em] text-xs font-extrabold hover:bg-rose transition-all px-10 py-5 rounded-full shadow-lg"
                            >
                                Explore Our Signature Products
                                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>

            {/* Brand Ticker */}
            <BrandTicker />

            {/* Stats Section */}
            <Stats />

            {/* Why Choose Us Section - ROSE Background */}
            <WhyChooseUs />

            {/* Featured Signature Products Preview */}
            <section className="py-32 px-6 bg-[#f4e9e2]">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h3 className="text-gold tracking-[0.2em] uppercase text-xs mb-4 font-bold">Curated Excellence</h3>
                            <h2 className="text-4xl md:text-6xl font-serif text-heading leading-tight">Our Signature <span className="italic text-body-text font-light">Products</span></h2>
                        </div>
                        <div className="mt-8 md:mb-2">
                            <Link to="/our-products" className="group inline-flex items-center gap-2 text-body-text hover:text-cta transition-colors uppercase tracking-[0.2em] text-xs font-bold border-b border-soft-border pb-2 hover:border-cta">
                                View All Signature Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="flex flex-col gap-6">
                            {/* Tall Item */}
                            <Link
                                to={`/collections/${products[1].id}`}
                                className="relative group overflow-hidden cursor-pointer bg-[#f4e9e2] rounded-xl border border-soft-border h-[300px] md:h-[376px] block"
                            >
                                <img src={products[1].image} alt={products[1].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-[5]"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-center z-10">
                                    <span className="product-label">{products[1].title}</span>
                                </div>
                            </Link>
                            {/* Short Item */}
                            <Link
                                to={`/collections/${products[5].id}`}
                                className="relative group overflow-hidden cursor-pointer bg-[#f4e9e2] rounded-xl border border-soft-border h-[200px] md:h-[200px] block"
                            >
                                <img src={products[5].image} alt={products[5].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-[5]"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-center z-10">
                                    <span className="product-label">{products[5].title}</span>
                                </div>
                            </Link>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-6">
                            {/* Short Item */}
                            <Link
                                to={`/collections/${products[2].id}`}
                                className="relative group overflow-hidden cursor-pointer bg-[#f4e9e2] rounded-xl border border-soft-border h-[200px] md:h-[200px] block"
                            >
                                <img src={products[2].image} alt={products[2].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-[5]"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-center z-10">
                                    <span className="product-label">{products[2].title}</span>
                                </div>
                            </Link>
                            {/* Tall Item */}
                            <Link
                                to={`/collections/${products[6].id}`}
                                className="relative group overflow-hidden cursor-pointer bg-[#f4e9e2] rounded-xl border border-soft-border h-[300px] md:h-[376px] block"
                            >
                                <img src={products[6].image} alt={products[6].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-[5]"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-center z-10">
                                    <span className="product-label">{products[6].title}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beyond Products: Turnkey Services */}
            <section className="py-24 bg-[#f4e9e2] relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold block mb-4">Beyond Decor</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-heading">Full-Stack <span className="italic text-body-text">Interiors</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Ruler, title: "Architectural Consulting", desc: "Our in-house architects help you visualize the structural potential of your space." },
                            { icon: HardHat, title: "Civil Contracting", desc: "From false ceilings to electrical grids, we handle the technical execution." },
                            { icon: Hammer, title: "Turnkey Execution", desc: "Hand us the keys to a bare shell, and we hand them back fully furnished." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#f4e9e2] p-12 group hover:shadow-xl transition-all relative overflow-hidden rounded-xl border border-soft-border hover:border-cta h-full">
                                <div className="mb-8 text-cta/70 group-hover:text-cta transition-colors">
                                    <item.icon size={32} strokeWidth={1} />
                                </div>
                                <h3 className="text-xl font-serif text-heading mb-4">{item.title}</h3>
                                <p className="text-body-text font-light leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformation Showcase */}
            {/* Transformation Showcase */}
            <BeforeAfter
                beforeImage="/before-after-before.jpeg"
                afterImage="/before-after-after.jpeg"
            />

            {/* Testimonials */}
            <section className="py-32 bg-[#f4e9e2] border-t border-soft-border">
                <div className="container mx-auto px-6 text-center max-w-6xl">
                    <h2 className="text-3xl font-serif text-heading mb-20">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                name: "Vipul Gupta",
                                role: "Businessman, Raja Park",
                                text: "SVE Interior transformed our office space. The acoustic panels are both functional and incredibly stylish. The attention to detail is unmatched in Jaipur.",
                                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
                            },
                            {
                                name: "Anjali Sharma",
                                role: "Homeowner, Vaishali Nagar",
                                text: "The wooden flooring selection is unmatched. The team was professional and the finish is flawless. They finished the job 2 days ahead of schedule.",
                                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                            },
                            {
                                name: "Anonymous",
                                role: "Architect, C-Scheme",
                                text: "As an architect, I rely on quality. SVE delivers premium products consistently. My go-to for wallpapers and blinds for all my high-end clients.",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center group">
                                <div className="w-16 h-16 rounded-full overflow-hidden mb-8 border-2 border-cta/20 group-hover:border-cta transition-colors">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <p className="text-body-text font-light mb-8 leading-loose text-sm max-w-xs mx-auto">"{item.text}"</p>

                                <h4 className="text-heading font-serif text-base mb-1">{item.name}</h4>
                                <span className="text-cta text-[10px] uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">{item.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Photo Section */}
            {/* Company Photo Section */}


            {/* Clients Grid Removed */}


            {/* Client Showcase */}
            <ClientShowcase />

        </div >
    );
}
