import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Mail, MessageSquare, Clock, RefreshCw, Copy, Check, LogOut, Lock } from 'lucide-react';

const ADMIN_PASSWORD = 'SVE2026';

export default function AdminLeads() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('sve_admin') === 'true');
    const [passwordInput, setPasswordInput] = useState('');
    const [authError, setAuthError] = useState('');
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [copiedId, setCopiedId] = useState(null);
    const [selectedLead, setSelectedLead] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        if (passwordInput === ADMIN_PASSWORD) {
            sessionStorage.setItem('sve_admin', 'true');
            setIsAuthenticated(true);
            setAuthError('');
        } else {
            setAuthError('Incorrect password. Please try again.');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('sve_admin');
        setIsAuthenticated(false);
        setLeads([]);
    };

    const fetchLeads = async () => {
        setLoading(true);
        setError('');
        try {
            const API_BASE = import.meta.env.VITE_API_URL || '';
            const res = await fetch(`${API_BASE}/api/leads`);
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to fetch leads');
            setLeads(data);
        } catch (err) {
            setError(err.message || 'Could not load leads.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) fetchLeads();
    }, [isAuthenticated]);

    const copyEmail = (email, id) => {
        navigator.clipboard.writeText(email);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const formatDate = (timestamp) => {
        const d = new Date(timestamp);
        return d.toLocaleDateString('en-IN', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    /* ─── Login Gate ─── */
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#f4e9e2] flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md border border-[#e2d0c8]"
                >
                    <div className="text-center mb-8">
                        <div className="w-14 h-14 bg-[#5a3e3e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock size={22} className="text-[#5a3e3e]" />
                        </div>
                        <h1 className="text-2xl font-serif text-[#5a3e3e] mb-1">SVE Admin</h1>
                        <p className="text-sm text-gray-400">Leads Dashboard — Restricted Access</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">Password</label>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#5a3e3e] focus:outline-none focus:border-[#5a3e3e] transition-colors"
                                placeholder="Enter admin password"
                                autoFocus
                            />
                        </div>
                        {authError && <p className="text-red-500 text-sm">{authError}</p>}
                        <button
                            type="submit"
                            className="w-full bg-[#5a3e3e] text-white font-bold py-3 rounded-lg hover:bg-[#7a5c5c] transition-colors"
                        >
                            Enter Dashboard
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    /* ─── Dashboard ─── */
    return (
        <div className="min-h-screen bg-[#f4e9e2] pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#5a3e3e]/50 block mb-1">SVE Interior</span>
                        <h1 className="text-4xl font-serif text-[#5a3e3e]">Leads Dashboard</h1>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={fetchLeads}
                            disabled={loading}
                            className="inline-flex items-center gap-2 bg-white border border-[#5a3e3e]/20 text-[#5a3e3e] px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-[#5a3e3e] hover:text-white transition-all"
                        >
                            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                            Refresh
                        </button>
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-red-600 hover:text-white transition-all"
                        >
                            <LogOut size={14} />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { icon: Users, label: 'Total Leads', value: leads.length },
                        { icon: Mail, label: 'Unique Emails', value: new Set(leads.map(l => l.email)).size },
                        { icon: MessageSquare, label: 'With Messages', value: leads.filter(l => l.message).length },
                        {
                            icon: Clock, label: 'Latest Lead',
                            value: leads.length > 0
                                ? new Date(leads[0].timestamp).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
                                : '—'
                        },
                    ].map(({ icon: Icon, label, value }, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white rounded-xl p-5 border border-[#e2d0c8] shadow-sm"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(90,62,62,0.08)' }}>
                                    <Icon size={16} className="text-[#5a3e3e]" />
                                </div>
                                <div>
                                    <p className="text-xl font-serif font-bold text-[#5a3e3e]">{value}</p>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-400">{label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Error State */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 text-sm">
                        ⚠️ {error}
                    </div>
                )}

                {/* Leads Table */}
                <div className="bg-white rounded-2xl border border-[#e2d0c8] overflow-hidden shadow-sm">
                    <div className="px-6 py-4 border-b border-[#e2d0c8] flex justify-between items-center">
                        <h2 className="font-serif text-[#5a3e3e] text-lg">All Submissions</h2>
                        <span className="text-xs text-gray-400">{leads.length} total entries</span>
                    </div>

                    {loading ? (
                        <div className="py-20 text-center text-gray-400 text-sm">Loading leads...</div>
                    ) : leads.length === 0 ? (
                        <div className="py-20 text-center text-gray-400 text-sm">No submissions yet. Check back after the first contact form is submitted.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#e2d0c8] bg-[#f4e9e2]/50">
                                        {['#', 'Name', 'Email', 'Message Preview', 'Date'].map(h => (
                                            <th key={h} className="text-left px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-[#5a3e3e]/50">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map((lead, i) => (
                                        <motion.tr
                                            key={lead.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: i * 0.03 }}
                                            onClick={() => setSelectedLead(lead)}
                                            className="border-b border-[#e2d0c8]/60 hover:bg-[#f4e9e2]/40 cursor-pointer transition-colors"
                                        >
                                            <td className="px-6 py-4 text-gray-400 font-mono text-xs">{lead.id}</td>
                                            <td className="px-6 py-4 font-medium text-[#5a3e3e]">
                                                {lead.first_name} {lead.last_name}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[#5a3e3e]/70">{lead.email}</span>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); copyEmail(lead.email, lead.id); }}
                                                        className="text-gray-300 hover:text-[#5a3e3e] transition-colors"
                                                        title="Copy email"
                                                    >
                                                        {copiedId === lead.id
                                                            ? <Check size={12} className="text-green-500" />
                                                            : <Copy size={12} />}
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-400 max-w-[240px] truncate">{lead.message || '—'}</td>
                                            <td className="px-6 py-4 text-gray-400 whitespace-nowrap text-xs">{formatDate(lead.timestamp)}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Lead Detail Modal */}
            <AnimatePresence>
                {selectedLead && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
                        onClick={() => setSelectedLead(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-serif text-[#5a3e3e]">
                                        {selectedLead.first_name} {selectedLead.last_name}
                                    </h2>
                                    <p className="text-sm text-gray-400 mt-1">{formatDate(selectedLead.timestamp)}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedLead(null)}
                                    className="text-gray-300 hover:text-gray-600 text-xl font-light leading-none"
                                >✕</button>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-[#f4e9e2] rounded-xl p-4">
                                    <p className="text-[10px] uppercase tracking-widest text-[#5a3e3e]/50 mb-1">Email</p>
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="text-[#5a3e3e] font-medium">{selectedLead.email}</p>
                                        <button
                                            onClick={() => copyEmail(selectedLead.email, `modal-${selectedLead.id}`)}
                                            className="text-[#5a3e3e]/40 hover:text-[#5a3e3e] transition-colors"
                                        >
                                            {copiedId === `modal-${selectedLead.id}`
                                                ? <Check size={14} className="text-green-500" />
                                                : <Copy size={14} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-[#f4e9e2] rounded-xl p-4">
                                    <p className="text-[10px] uppercase tracking-widest text-[#5a3e3e]/50 mb-2">Message</p>
                                    <p className="text-[#5a3e3e]/80 leading-relaxed">{selectedLead.message || 'No message provided.'}</p>
                                </div>
                            </div>

                            <a
                                href={`mailto:${selectedLead.email}?subject=Re: Your SVE Interior Inquiry`}
                                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#5a3e3e] text-white font-bold py-3 rounded-lg hover:bg-[#7a5c5c] transition-colors text-sm"
                            >
                                <Mail size={14} />
                                Reply via Email
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
