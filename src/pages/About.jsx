import { motion } from 'framer-motion';
import BrandPartners from '../components/BrandPartners';
import YashImg from '../assets/Card/YashCard.png';
import NidhiImg from '../assets/Card/NidhiCard.png';
import aboutUs1 from '../assets/AboutUs/About-us-1.png';
import aboutUs2 from '../assets/AboutUs/About-us-2.png';
import aboutUs3 from '../assets/AboutUs/About-us-3.png';

export default function About() {
    return (
        <div style={{ backgroundColor: '#F1DDDA' }} className="min-h-screen pt-32 pb-20 overflow-hidden">

            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-32 bg-transparent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-heading tracking-[0.2em] uppercase text-xs font-bold block mb-4">Designing with Purpose</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-heading mb-8 leading-tight">
                            Complete Interior Solutions in <span className="text-cta italic">Jaipur</span>
                        </h1>
                        <p className="text-body-text text-lg leading-relaxed mb-6">
                            SVE Interior was born out of a belief that thoughtful design can stand the test of time. We bridge the gap between form and function, elegance and comfort. With 15+ years of experience delivering premium product quality and a seamless customer experience, we are Jaipur's most trusted name in complete interior solutions.
                        </p>
                        <p className="text-body-text leading-relaxed mb-12 font-light">
                            Founded by Yash &amp; Nidhi Mamoria, SVE Interior has grown from a passion project into one of Rajasthan's leading interior showrooms. Every decision we make is guided by balance-between innovation and timelessness-ensuring spaces that feel both modern and enduring.
                        </p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="relative h-[800px] w-full"
                    >
                        <div className="absolute top-0 right-0 w-[80%] h-[80%] border border-gold/20 rounded-tr-[100px] z-0 translate-x-8 -translate-y-8"></div>
                        <img
                            src={aboutUs1}
                            alt="Luxury Interior Showroom"
                            className="relative z-10 w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-rose/90 backdrop-blur-xl z-20 rounded-full flex items-center justify-center p-6 border border-gold/30 hidden md:flex shadow-2xl">
                            <p className="text-white font-serif text-center italic text-lg leading-tight">"Design is our Passion"</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Design is Our Passion Section */}
            <section className="bg-[#F1DDDA] py-32 my-32 relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-rose/20 to-transparent"></div>
                    <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-rose/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <motion.img
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                src={aboutUs2}
                                alt="Design Passion"
                                className="w-full h-[600px] object-cover rounded-lg shadow-lg filter brightness-95 hover:brightness-100 transition-all duration-700"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-serif text-heading mb-10"
                            >
                                Design is Our <span className="text-cta italic">Passion</span>
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="space-y-6 text-body-text font-light text-lg leading-relaxed"
                            >
                                <p>
                                    At SVE Interior, we believe that great design is invisible-it simply feels right. Since 2008, we have been delivering complete interior solutions that combine premium product quality with a seamless customer experience. Every project we undertake is guided by balance-between innovation and timelessness.
                                </p>
                                <p>
                                    With 15,000+ projects completed and 500+ corporate clients nationwide, our reputation speaks for itself. From bespoke home furnishings to large-scale commercial fit-outs, we bring the same conviction: invest in long-term value, never settle for short-term trends.
                                </p>
                                <p className="border-l-2 border-cta pl-6 italic text-heading/80">
                                    "Thoughtful design stands the test of time. That is the only kind we practice."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="container mx-auto px-6 mb-32 bg-transparent">
                <div className="text-center mb-16">
                    <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold block mb-4">The Visionaries</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-heading">Meet the <span className="text-cta italic">Founders</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {[
                        {
                            name: "Yash Mamoria",
                            role: "Co-Founder & Design Director",
                            desc: "With an unwavering eye for detail and a deep conviction in quality over quantity, Yash leads SVE Interior's design philosophy. His belief: every space should reflect the personality of its owner, built with materials and designs that appreciate over time, not depreciate.",
                            image: YashImg
                        },
                        {
                            name: "Nidhi Mamoria",
                            role: "Co-Founder & Operations Head",
                            desc: "Nidhi brings operational excellence and a seamless customer experience to every project. Her passion for long-term value over short-term trends has shaped SVE Interior's reputation for reliability, transparency, and client satisfaction across 15,000+ projects.",
                            image: NidhiImg
                        }
                    ].map((founder, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="bg-transparent rounded-2xl overflow-hidden group"
                        >
                            <div className="h-72 overflow-hidden">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-serif text-heading mb-1">{founder.name}</h3>
                                <span className="text-cta text-xs uppercase tracking-[0.15em] font-bold block mb-4">{founder.role}</span>
                                <p className="text-body-text font-light leading-relaxed text-sm">{founder.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Now We Have Section */}
            <section className="container mx-auto px-6 mb-32 rounded-3xl p-12 lg:p-16" style={{ backgroundColor: '#F1DDDA' }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-serif text-heading mb-8">15 Years of <span className="text-cta italic">Living Art</span></h2>
                        <p className="text-body-text leading-loose mb-8 text-lg">
                            Since 2008, SVE Interior has grown from a passion project into Rajasthan's most trusted curator of living spaces. What began as a vision by Yash & Nidhi Mamoria has evolved into a 15,000+ project legacy, a testament to uncompromising craftsmanship and a deep understanding of how people truly live.
                        </p>
                        <p className="text-body-text leading-loose mb-12 text-lg">
                            We don't just furnish rooms,  we architect emotions. Every stretch ceiling, every woven curtain, every plank of flooring is selected with one purpose: to make your space feel unmistakably <em>yours</em>. As Rajasthan's foremost interior authority, we bring global design sensibility with local precision.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {['15+ Years of Design Excellence', '15,000+ Completed Projects', "Rajasthan's Curator of Living Art", 'Trusted by 500+ Corporates'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 border border-black/10 bg-[#F1DDDA]/40 rounded-lg hover:bg-rose/10 transition-colors cursor-default">
                                    <div className="w-2 h-2 bg-cta rounded-full flex-shrink-0"></div>
                                    <span className="text-sm font-medium text-heading">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative h-[600px] group">
                        <div className="absolute inset-0 bg-gold/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                        <img
                            src={aboutUs3}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                            alt="Interior Detail"
                        />
                    </div>
                </div>
            </section>

            {/* Premium Partners */}
            <BrandPartners />
        </div>
    );
}
