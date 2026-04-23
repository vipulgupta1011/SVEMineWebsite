import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, message: '', type: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: '', type: '' });

        try {
            const API_BASE = import.meta.env.VITE_API_URL || '';
            const response = await fetch(`${API_BASE}/api/save-contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ loading: false, message: 'Message sent successfully!', type: 'success' });
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            setStatus({ loading: false, message: error.message, type: 'error' });
            console.error('Submission Error:', error);
        }
    };

    return (

        <div className="bg-blush min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif text-heading mb-4">Get In Touch</h1>
                    <p className="text-body-text">We endeavor to answer all enquiries within 24 hours on business days.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-[#f4e9e2] p-8 rounded-2xl border border-soft-border hover:border-cta transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-rose" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-heading mb-2">Visit Our Showroom</h3>
                                    <p className="text-body-text leading-relaxed">
                                        264, Gurunanakpura, Nr. Pranami Mandir, <br />
                                        Raja Park, Jaipur - (302004)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#f4e9e2] p-8 rounded-2xl border border-soft-border hover:border-cta transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-rose" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-heading mb-2">Call Us</h3>
                                    <p className="text-body-text">
                                        +91-9414718318 <br />
                                        +91-9829068401
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#f4e9e2] p-8 rounded-2xl border border-soft-border hover:border-cta transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-rose" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-heading mb-2">Email Us</h3>
                                    <p className="text-body-text">sveinterior@yahoo.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-2xl border border-soft-border"
                    >
                        <h3 className="text-2xl font-serif text-heading mb-6">Send a Message</h3>
                        {status.message && (
                            <div className={`p-4 mb-4 rounded-lg ${status.type === 'success' ? 'bg-[#f4e9e2] text-heading border border-heading/20' : 'bg-red-100 text-red-700'}`}>
                                {status.message}
                            </div>
                        )}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-body-text text-sm mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white border border-soft-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-cta transition-colors placeholder:text-gray-400"
                                        placeholder="Amit"
                                    />
                                </div>
                                <div>
                                    <label className="block text-body-text text-sm mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white border border-soft-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-cta transition-colors placeholder:text-gray-400"
                                        placeholder="Kumar"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-body-text text-sm mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border border-soft-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-cta transition-colors placeholder:text-gray-400"
                                    placeholder="amit@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-body-text text-sm mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white border border-soft-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-cta transition-colors placeholder:text-gray-400"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status.loading}
                                className="w-full bg-cta text-white font-bold py-4 rounded-lg hover:bg-rose transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status.loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Map */}
                <div className="mt-20 rounded-2xl overflow-hidden border border-soft-border h-[400px]">
                    <iframe
                        src="https://maps.google.com/maps?q=SVE%20INTERIOR%2C%20Raja%20Park%2C%20PARNAMI%20MANDIR%2C%20SVE%20INTERIOR%20264%2C%20Raja%20Park%2C%20Jaipur%2C%20Rajasthan%20302004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}
