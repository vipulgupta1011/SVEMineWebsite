import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { products } from '../data/products';


export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="bg-blush min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">

                {/* Header */}
                <div className="mb-20 text-left">
                    <h1 className="text-5xl md:text-7xl font-serif text-heading mb-6">Our Signature Products</h1>
                    <p className="text-body-text max-w-2xl font-light text-lg">
                        Explore our meticulously curated selection of premium interior finishes.
                        Each category is designed to bring specific character and utility to your space.
                    </p>
                </div>

                {/* Simple Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/collections/${product.id}`}
                            className="break-inside-avoid mb-8 cursor-pointer group block"
                        >
                            <div className="relative overflow-hidden rounded-xl bg-[#f4e9e2] aspect-square md:aspect-[3/4] shadow-sm hover:shadow-md transition-all duration-300 border border-soft-border">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-[5]" />

                                <div className="absolute bottom-4 left-4 right-4 flex justify-center z-10">
                                    <span className="product-label">{product.title}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>



            </div>
        </div>
    );
}
