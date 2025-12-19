import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    MapPin,
    Clock,
    Users,
    Calendar,
    Briefcase,
    Phone,
    Navigation,
    Map,
    IndianRupee,
    Star,
    Check,
    X,
    Plus,
    Minus,
} from 'lucide-react';
import { LocationMap } from '../../components/ui/expand-map';
import { EncryptedText } from '../../components/ui/encrypted-text';
import { useTheme } from '../../context/ThemeContext';
import { useMode } from '../../context/ModeContext';

interface Worker {
    id: number;
    name: string;
    rating: number;
    distance: string;
    phone: string;
    avatar: string;
    status: 'accepted' | 'waiting' | 'rejected';
}

const JobDetail: React.FC = () => {
    const { mode, jobId } = useParams();
    const { mode: contextMode } = useMode();
    const { isDark } = useTheme();
    const navigate = useNavigate();
    const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
    const [negotiationPrice, setNegotiationPrice] = useState(800);
    const [isMapLoading, setIsMapLoading] = useState(false);

    const isDaily = mode === 'daily' || contextMode === 'daily';

    const jobData = {
        id: jobId,
        title: isDaily ? 'Plumbing Work' : 'Frontend Developer',
        description: isDaily
            ? 'Need an experienced plumber to fix kitchen sink leak and check bathroom pipes. Tools will be provided. Should be completed within 4-5 hours.'
            : 'Looking for an experienced React developer with TypeScript skills. Remote work possible. Must have 2+ years of experience.',
        location: 'Indiranagar, Bangalore',
        pay: isDaily ? '₹800/day' : '₹12 LPA',
        time: isDaily ? '9 AM - 6 PM' : 'Full-time',
        date: 'Dec 18, 2024',
        applicants: 12,
        postedAt: '2 hours ago',
        category: isDaily ? 'Plumbing' : 'Technology',
        requirements: isDaily
            ? ['Experience with pipe fitting', 'Own basic tools preferred', 'Good communication']
            : ['React & TypeScript', '2+ years experience', 'Team player'],
    };

    const nearbyWorkers: Worker[] = [
        { id: 1, name: 'Rajesh Kumar', rating: 4.8, distance: '2.3 km', phone: '+91 98765 43210', avatar: 'https://i.pravatar.cc/150?img=15', status: 'accepted' },
        { id: 2, name: 'Suresh Patel', rating: 4.5, distance: '3.1 km', phone: '+91 98765 43211', avatar: 'https://i.pravatar.cc/150?img=12', status: 'waiting' },
        { id: 3, name: 'Amit Singh', rating: 4.9, distance: '4.0 km', phone: '+91 98765 43212', avatar: 'https://i.pravatar.cc/150?img=8', status: 'waiting' },
        { id: 4, name: 'Vijay Sharma', rating: 4.7, distance: '5.2 km', phone: '+91 98765 43213', avatar: 'https://i.pravatar.cc/150?img=33', status: 'waiting' },
    ];

    const handleLocationOpen = () => {
        setIsMapLoading(true);
        setTimeout(() => {
            setIsMapLoading(false);
            navigate(`/job-responses/${mode}/${jobId}`);
        }, 1200);
    };

    const handleWorkerSelect = (worker: Worker) => {
        if (worker.status === 'accepted' || worker.status === 'waiting') {
            setSelectedWorker(worker);
            setNegotiationPrice(800);
        }
    };

    const incrementPrice = (amount: number) => {
        setNegotiationPrice((prev) => Math.max(0, prev + amount));
    };

    useEffect(() => {
        if (negotiationPrice < 0) setNegotiationPrice(0);
    }, [negotiationPrice]);

    return (
        <div className={`w-full min-h-screen relative px-6 md:px-8 pt-8 pb-8 transition-colors duration-500 ${isDark ? 'bg-[#09090b]' : 'bg-[#F5F8FA]'}`}>
            {/* Background Pattern - Watercolor Paper Texture */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden z-0"
                style={{
                    left: 0,
                    right: 0,
                    backgroundColor: isDark ? '#09090b' : (isDaily ? '#F5F9F7' : '#FAF8F5')
                }}
            >
                {!isDark && (
                    <>
                        {/* Grainy Paper Texture */}
                        <div
                            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-multiply"
                            style={{ filter: 'contrast(110%) brightness(100%)' }}
                        />

                        {/* Organic Watercolor Gradients */}
                        {isDaily ? (
                            <>
                                <div
                                    className="absolute top-[-10%] right-[-5%] w-[60%] h-[50%] rounded-full opacity-40"
                                    style={{
                                        background: 'radial-gradient(ellipse at center, rgba(134, 239, 172, 0.5) 0%, rgba(187, 247, 208, 0.3) 40%, transparent 70%)',
                                        filter: 'blur(60px)'
                                    }}
                                />
                                <div
                                    className="absolute top-[20%] left-[-10%] w-[50%] h-[45%] rounded-full opacity-35"
                                    style={{
                                        background: 'radial-gradient(ellipse at center, rgba(167, 243, 208, 0.5) 0%, rgba(209, 250, 229, 0.3) 50%, transparent 70%)',
                                        filter: 'blur(80px)'
                                    }}
                                />
                                <div
                                    className="absolute bottom-[-15%] right-[10%] w-[55%] h-[50%] rounded-full opacity-30"
                                    style={{
                                        background: 'radial-gradient(ellipse at center, rgba(110, 231, 183, 0.4) 0%, rgba(167, 243, 208, 0.2) 45%, transparent 70%)',
                                        filter: 'blur(70px)'
                                    }}
                                />
                            </>
                        ) : (
                            <>
                                <div
                                    className="absolute top-[-10%] right-[-5%] w-[60%] h-[50%] rounded-full opacity-50"
                                    style={{
                                        background: 'radial-gradient(ellipse at center, rgba(251, 191, 136, 0.6) 0%, rgba(254, 215, 170, 0.4) 40%, transparent 70%)',
                                        filter: 'blur(60px)'
                                    }}
                                />
                                <div
                                    className="absolute top-[15%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-40"
                                    style={{
                                        background: 'radial-gradient(ellipse at center, rgba(254, 243, 199, 0.6) 0%, rgba(253, 230, 188, 0.4) 50%, transparent 70%)',
                                        filter: 'blur(80px)'
                                    }}
                                />
                                <div
                                    className="absolute bottom-[-10%] right-[5%] w-[55%] h-[55%] rounded-full opacity-45"
                                    style={{
                                        background: 'radial-gradient(ellipse at center, rgba(252, 211, 165, 0.5) 0%, rgba(254, 226, 185, 0.3) 45%, transparent 70%)',
                                        filter: 'blur(70px)'
                                    }}
                                />
                            </>
                        )}
                    </>
                )}
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate('/posted-jobs')}
                    className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${isDark
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'bg-black text-white hover:bg-neutral-800'
                        }`}
                >
                    <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                    <span>Back to Jobs</span>
                </button>
            </div>

            {/* Main Job Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`relative z-10 mb-6 p-6 pl-8 rounded-2xl transition-all ${isDark
                    ? 'bg-white/[0.04] border border-white/10'
                    : 'bg-white border border-neutral-200 shadow-lg'
                    }`}
            >
                {/* Left Accent Line - Black */}
                <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pl-4">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-start gap-3">
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold ${isDark ? 'bg-white/10 text-white' : 'bg-neutral-100 text-black'
                                }`}>
                                <Briefcase size={12} />
                                {jobData.category}
                            </div>
                        </div>

                        <h1 className={`text-3xl md:text-4xl font-black leading-tight ${isDark ? 'text-white' : 'text-black'}`}>
                            {jobData.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className={`flex items-center gap-1.5 font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                <MapPin size={14} className="opacity-70" />
                                {jobData.location}
                            </span>
                            <span className={`flex items-center gap-1.5 font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                <Clock size={14} className="opacity-70" />
                                {jobData.postedAt}
                            </span>
                            <span className={`flex items-center gap-1.5 font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                <Navigation size={14} className="opacity-70" />
                                {jobData.time}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-3 min-w-[200px]">
                        <div className={`text-3xl md:text-4xl font-black ${isDark ? 'text-white' : 'text-black'}`}>
                            {jobData.pay}
                        </div>
                        <div className={`flex items-center gap-2 text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                            <Users size={16} className="opacity-70" />
                            <span className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>{jobData.applicants}</span>
                            <span>applicants</span>
                        </div>
                        <div className={`flex items-center gap-2 text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                            <Calendar size={16} className="opacity-70" />
                            <span>{jobData.date}</span>
                        </div>
                    </div>
                </div>

                {/* Location Section */}
                <div className={`mt-6 pt-6 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                    <div className="flex flex-col lg:flex-row gap-4 lg:items-end lg:justify-between pl-4">
                        <div className="flex-1">
                            <p className={`text-[11px] uppercase tracking-wider font-bold mb-3 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                Posted Job Location
                            </p>
                            <LocationMap location={jobData.location} coordinates="12.9716° N, 77.5946° E" className="mb-2" isDark={isDark} />
                            <p className={`text-[10px] ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>Interactive map widget with live location</p>
                        </div>
                        <button
                            onClick={handleLocationOpen}
                            className={`self-start lg:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg hover:scale-105 ${isDark
                                ? 'bg-white text-black hover:bg-neutral-200'
                                : 'bg-black text-white hover:bg-neutral-800'
                                }`}
                        >
                            <Map size={18} />
                            Open Full Map
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Description & Requirements Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`p-6 rounded-2xl transition-all ${isDark
                        ? 'bg-white/[0.04]'
                        : 'bg-white'
                        }`}
                >
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>Description</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>{jobData.description}</p>
                </motion.div>

                {/* Requirements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className={`p-6 rounded-2xl transition-all ${isDark
                        ? 'bg-white/[0.04]'
                        : 'bg-white'
                        }`}
                >
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>Requirements</h3>
                    <ul className="space-y-2.5">
                        {jobData.requirements.map((req, i) => (
                            <li key={i} className={`flex items-start gap-3 text-sm ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isDark ? 'bg-white' : 'bg-black'}`} />
                                <span>{req}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Workers Section */}
            {isDaily && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`z-10 p-6 rounded-2xl mb-20 ${isDark
                        ? 'bg-white/[0.04]'
                        : 'bg-white'
                        }`}
                >
                    <div className="flex items-center justify-between mb-5">
                        <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>Applicant Workers</h3>
                        <span className={`text-xs font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>Click to negotiate</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {nearbyWorkers.map((worker) => (
                            <motion.div
                                key={worker.id}
                                onClick={() => handleWorkerSelect(worker)}
                                className={`relative cursor-pointer p-4 pl-6 rounded-xl border transition-all ${worker.status === 'accepted'
                                    ? isDark
                                        ? 'bg-emerald-500/10 border-emerald-500/30'
                                        : 'bg-emerald-50 border-emerald-300'
                                    : worker.status === 'waiting'
                                        ? isDark
                                            ? 'bg-white/[0.02] border-white/10 hover:border-white/20'
                                            : 'bg-white border-neutral-200 hover:border-neutral-400'
                                        : isDark
                                            ? 'bg-white/[0.01] border-white/10 opacity-50'
                                            : 'bg-neutral-50 border-neutral-200 opacity-50'
                                    }`}
                            >
                                {/* Left accent line for worker cards */}
                                <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-full ${worker.status === 'accepted'
                                    ? 'bg-emerald-500'
                                    : isDark ? 'bg-white/50' : 'bg-black/50'
                                    }`} />
                                {worker.status === 'accepted' && (
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                                        <Check size={14} className="text-white" />
                                    </div>
                                )}

                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="relative">
                                        <img
                                            src={worker.avatar}
                                            alt={worker.name}
                                            className={`w-16 h-16 rounded-full object-cover border-2 ${worker.status === 'accepted'
                                                ? 'border-emerald-500'
                                                : isDark ? 'border-white/20' : 'border-neutral-300'
                                                }`}
                                        />
                                        {worker.status === 'waiting' && (
                                            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-500 border-2 flex items-center justify-center ${isDark ? 'border-[#09090b]' : 'border-white'}`}>
                                                <Clock size={10} className="text-white" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-full">
                                        <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-neutral-900'}`}>{worker.name}</div>
                                        <div className={`flex items-center justify-center gap-1 text-xs mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>
                                            <Star size={12} className="fill-amber-400 text-amber-400" />
                                            <span>{worker.rating}</span>
                                            <span className="mx-1">•</span>
                                            <span>{worker.distance}</span>
                                        </div>
                                        {worker.status === 'accepted' && (
                                            <div className={`mt-2 text-xs font-bold ${isDark ? 'text-white' : 'text-black'}`}>Primary Worker</div>
                                        )}
                                        {worker.status === 'waiting' && (
                                            <div className={`mt-2 text-xs font-semibold ${isDark ? 'text-neutral-400' : 'text-neutral-700'}`}>In Queue</div>
                                        )}
                                    </div>

                                    <a
                                        href={`tel:${worker.phone}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className={`w-full py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 ${worker.status === 'accepted'
                                            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                            : isDark
                                                ? 'bg-white text-black hover:bg-neutral-200'
                                                : 'bg-black text-white hover:bg-neutral-800'
                                            }`}
                                    >
                                        <Phone size={12} />
                                        Call
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Negotiation Modal */}
            <AnimatePresence>
                {selectedWorker && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setSelectedWorker(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md z-50"
                        >
                            <div className={`rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'bg-[#0a0a0b] border-2 border-white/20' : 'bg-white border-2 border-black'}`}>
                                {/* Header */}
                                <div className={`px-6 py-5 ${isDark ? 'bg-white/5' : 'bg-neutral-100'}`}>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={selectedWorker.avatar}
                                                alt={selectedWorker.name}
                                                className={`w-14 h-14 rounded-full border-2 object-cover ${isDark ? 'border-white/20' : 'border-black'}`}
                                            />
                                            <div>
                                                <h3 className={`text-lg font-black ${isDark ? 'text-white' : 'text-black'}`}>{selectedWorker.name}</h3>
                                                <div className={`flex items-center gap-2 text-sm mt-0.5 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                                                    <Star size={12} className="fill-amber-400 text-amber-400" />
                                                    <span>{selectedWorker.rating}</span>
                                                    <span>•</span>
                                                    <span>{selectedWorker.distance}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedWorker(null)}
                                            className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10 text-neutral-400' : 'hover:bg-black/5 text-neutral-600'}`}
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-6">
                                    <div>
                                        <label className={`block text-[11px] uppercase tracking-wider font-bold mb-3 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                            Negotiate Price
                                        </label>

                                        {/* Current Price Display */}
                                        <div className={`flex items-center justify-between p-4 rounded-xl mb-4 ${isDark ? 'bg-white/5' : 'bg-neutral-100'}`}>
                                            <span className={`text-sm font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>Original Price</span>
                                            <span className={`text-lg font-black ${isDark ? 'text-white' : 'text-black'}`}>₹800</span>
                                        </div>

                                        {/* Price Input with Increment/Decrement */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className={`text-sm font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>Your Offer</span>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => incrementPrice(-50)}
                                                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-neutral-200 text-black hover:bg-neutral-300'}`}
                                                    >
                                                        <Minus size={14} />
                                                    </button>

                                                    <div className={`relative flex items-center gap-1 px-4 py-2 rounded-lg border-2 ${isDark ? 'border-white/30 bg-white/5' : 'border-black bg-neutral-50'}`}>
                                                        <IndianRupee size={16} className={isDark ? 'text-white' : 'text-black'} />
                                                        <input
                                                            type="number"
                                                            value={negotiationPrice}
                                                            onChange={(e) => setNegotiationPrice(Number(e.target.value))}
                                                            className={`w-20 bg-transparent text-xl font-black text-center focus:outline-none ${isDark ? 'text-white' : 'text-black'}`}
                                                        />
                                                    </div>

                                                    <button
                                                        onClick={() => incrementPrice(50)}
                                                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-neutral-200 text-black hover:bg-neutral-300'}`}
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Quick Amount Buttons */}
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>Quick:</span>
                                                {[600, 700, 800, 900, 1000].map((amount) => (
                                                    <button
                                                        key={amount}
                                                        onClick={() => setNegotiationPrice(amount)}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${negotiationPrice === amount
                                                            ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                                                            : isDark
                                                                ? 'bg-white/10 text-white hover:bg-white/20'
                                                                : 'bg-neutral-200 text-black hover:bg-neutral-300'
                                                            }`}
                                                    >
                                                        ₹{amount}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Price Range Slider */}
                                            <input
                                                type="range"
                                                min={500}
                                                max={1500}
                                                step={50}
                                                value={negotiationPrice}
                                                onChange={(e) => setNegotiationPrice(Number(e.target.value))}
                                                className={`w-full h-2 rounded-full appearance-none cursor-pointer ${isDark ? 'accent-white' : 'accent-black'}`}
                                                style={{
                                                    background: `linear-gradient(to right, ${isDark ? '#fff' : '#000'} 0%, ${isDark ? '#fff' : '#000'} ${((negotiationPrice - 500) / 1000) * 100}%, ${isDark ? 'rgb(255 255 255 / 0.1)' : 'rgb(212 212 212 / 0.5)'} ${((negotiationPrice - 500) / 1000) * 100}%, ${isDark ? 'rgb(255 255 255 / 0.1)' : 'rgb(212 212 212 / 0.5)'} 100%)`,
                                                }}
                                            />
                                            <div className={`flex justify-between text-[10px] ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                                                <span>₹500</span>
                                                <span>₹1500</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2">
                                        <a
                                            href={`tel:${selectedWorker.phone}`}
                                            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 ${isDark
                                                ? 'bg-white/10 text-white hover:bg-white/20'
                                                : 'bg-neutral-200 text-black hover:bg-neutral-300'
                                                }`}
                                        >
                                            <Phone size={16} />
                                            Call Worker
                                        </a>
                                        <button
                                            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] shadow-lg ${isDark
                                                ? 'bg-white text-black hover:bg-neutral-200'
                                                : 'bg-black text-white hover:bg-neutral-800'
                                                }`}
                                        >
                                            Send Offer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Map Loading Overlay */}
            <AnimatePresence>
                {isMapLoading && (
                    <motion.div
                        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className={`rounded-2xl px-8 py-6 shadow-2xl flex flex-col items-center gap-4 ${isDark ? 'bg-[#0a0a0b] border-2 border-white/20' : 'bg-white border-2 border-black'}`}>
                            <div className={`h-12 w-12 rounded-full border-4 border-t-transparent animate-spin ${isDark ? 'border-white' : 'border-black'}`} />
                            <EncryptedText
                                text="Loading maps..."
                                encryptedClassName={isDark ? 'text-neutral-400' : 'text-neutral-500'}
                                revealedClassName={isDark ? 'text-white' : 'text-black'}
                                className="text-base font-bold"
                                revealDelayMs={60}
                            />
                            <p className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>Preparing full interactive map view</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default JobDetail;
