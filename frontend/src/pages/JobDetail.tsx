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
import { LocationMap } from '../components/ui/expand-map';
import { EncryptedText } from '../components/ui/encrypted-text';

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
    const navigate = useNavigate();
    const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
    const [negotiationPrice, setNegotiationPrice] = useState(800);
    const [isMapLoading, setIsMapLoading] = useState(false);

    const isDaily = mode === 'daily';

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
        <div className="w-full min-h-screen relative px-6 md:px-8 pt-8 pb-8">
            {/* Background Pattern - Same as PostedJobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-gray-100 dark:bg-neutral-900" style={{ left: 0, right: 0 }}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150"></div>
                <div className={`absolute top-[-30%] right-[-20%] w-[80%] h-[80%] rounded-full ${isDaily ? 'bg-green-500/10' : 'bg-yellow-500/10'} blur-[140px]`} />
                <div className={`absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full ${isDaily ? 'bg-emerald-500/8' : 'bg-orange-500/8'} blur-[120px]`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full ${isDaily ? 'bg-green-400/5' : 'bg-yellow-400/5'} blur-[160px]`} />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate('/posted-jobs')}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all shadow-sm"
                >
                    <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                    <span>Back to Jobs</span>
                </button>

                <div
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border ${
                        isDaily
                            ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-600'
                            : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-600'
                    }`}
                >
                    {isDaily ? 'Daily Wage' : 'Long Term'}
                </div>
            </div>

            {/* Main Job Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 mb-6 p-6 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-sm"
            >
                {/* Colored Accent Line */}
                <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-full ${isDaily ? 'bg-emerald-500' : 'bg-amber-500'}`} />

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-start gap-3">
                            <div
                                className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold ${
                                    isDaily 
                                        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-600' 
                                        : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-600'
                                }`}
                            >
                                <Briefcase size={12} />
                                {jobData.category}
                            </div>
                        </div>
                        
                        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 leading-tight">{jobData.title}</h1>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                            <span className="flex items-center gap-1.5">
                                <MapPin size={14} className="text-neutral-500" />
                                {jobData.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} className="text-neutral-500" />
                                {jobData.postedAt}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Navigation size={14} className="text-neutral-500" />
                                {jobData.time}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-3 min-w-[200px]">
                        <div className={`text-3xl font-black ${isDaily ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                            {jobData.pay}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <Users size={16} className="text-neutral-500" />
                            <span className="font-semibold text-neutral-800 dark:text-neutral-200">{jobData.applicants}</span>
                            <span>applicants</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <Calendar size={16} className="text-neutral-500" />
                            <span>{jobData.date}</span>
                        </div>
                    </div>
                </div>

                {/* Location Section */}
                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex flex-col lg:flex-row gap-4 lg:items-end lg:justify-between">
                        <div className="flex-1">
                            <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-3">Posted Job Location</p>
                            <LocationMap location={jobData.location} coordinates="12.9716° N, 77.5946° E" className="mb-2" />
                            <p className="text-[10px] text-neutral-400 dark:text-neutral-500">Interactive map widget with live location</p>
                        </div>
                        <button
                            onClick={handleLocationOpen}
                            className="self-start lg:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-all shadow-lg"
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
                    className="p-6 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-sm"
                >
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Description</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{jobData.description}</p>
                </motion.div>

                {/* Requirements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="p-6 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-sm"
                >
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Requirements</h3>
                    <ul className="space-y-2.5">
                        {jobData.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isDaily ? 'bg-emerald-500' : 'bg-amber-500'}`} />
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
                    className="relative z-10 p-6 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-sm mb-20"
                >
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Applicant Workers</h3>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">Click to negotiate</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {nearbyWorkers.map((worker) => (
                            <motion.div
                                key={worker.id}
                                whileHover={{ y: -4 }}
                                onClick={() => handleWorkerSelect(worker)}
                                className={`relative cursor-pointer p-4 rounded-lg border-2 transition-all ${
                                    worker.status === 'accepted'
                                        ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 dark:border-emerald-600'
                                        : worker.status === 'waiting'
                                        ? 'bg-white dark:bg-neutral-700/50 border-neutral-300 dark:border-neutral-600 hover:border-emerald-400 dark:hover:border-emerald-500'
                                        : 'bg-neutral-50 dark:bg-neutral-700/30 border-neutral-200 dark:border-neutral-700 opacity-50'
                                }`}
                            >
                                {worker.status === 'accepted' && (
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                                        <Check size={14} className="text-white" />
                                    </div>
                                )}
                                
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="relative">
                                        <img 
                                            src={worker.avatar} 
                                            alt={worker.name} 
                                            className={`w-16 h-16 rounded-full object-cover border-2 ${
                                                worker.status === 'accepted' 
                                                    ? 'border-emerald-500' 
                                                    : 'border-neutral-300 dark:border-neutral-600'
                                            }`} 
                                        />
                                        {worker.status === 'waiting' && (
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-500 border-2 border-white dark:border-neutral-800 flex items-center justify-center">
                                                <Clock size={10} className="text-white" />
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="w-full">
                                        <div className="font-semibold text-sm text-neutral-800 dark:text-neutral-100">{worker.name}</div>
                                        <div className="flex items-center justify-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                                            <Star size={12} className="fill-amber-400 text-amber-400" />
                                            <span>{worker.rating}</span>
                                            <span className="mx-1">•</span>
                                            <span>{worker.distance}</span>
                                        </div>
                                        {worker.status === 'accepted' && (
                                            <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                                Primary Worker
                                            </div>
                                        )}
                                        {worker.status === 'waiting' && (
                                            <div className="mt-2 text-xs font-medium text-amber-600 dark:text-amber-400">
                                                In Queue
                                            </div>
                                        )}
                                    </div>

                                    <a
                                        href={`tel:${worker.phone}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className={`w-full py-2 rounded-lg text-xs font-medium transition-colors ${
                                            worker.status === 'accepted'
                                                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                                : 'bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-500'
                                        }`}
                                    >
                                        <Phone size={12} className="inline mr-1" />
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
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setSelectedWorker(null)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md z-50"
                        >
                            <div className="rounded-2xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl overflow-hidden">
                                {/* Header */}
                                <div className={`px-6 py-5 ${isDaily ? 'bg-emerald-500/10 dark:bg-emerald-500/20' : 'bg-amber-500/10 dark:bg-amber-500/20'}`}>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <img 
                                                src={selectedWorker.avatar} 
                                                alt={selectedWorker.name} 
                                                className="w-14 h-14 rounded-full border-2 border-emerald-500 object-cover" 
                                            />
                                            <div>
                                                <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">{selectedWorker.name}</h3>
                                                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                                                    <Star size={12} className="fill-amber-400 text-amber-400" />
                                                    <span>{selectedWorker.rating}</span>
                                                    <span>•</span>
                                                    <span>{selectedWorker.distance}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedWorker(null)}
                                            className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-6">
                                    <div>
                                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
                                            Negotiate Price
                                        </label>
                                        
                                        {/* Current Price Display */}
                                        <div className="flex items-center justify-between p-4 rounded-lg bg-neutral-100 dark:bg-neutral-700/50 mb-4">
                                            <span className="text-sm text-neutral-600 dark:text-neutral-400">Original Price</span>
                                            <span className="text-lg font-bold text-neutral-800 dark:text-neutral-200">₹800</span>
                                        </div>

                                        {/* Price Input with Increment/Decrement */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Your Offer</span>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => incrementPrice(-50)}
                                                        className="w-8 h-8 rounded-lg bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-300 flex items-center justify-center transition-colors"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    
                                                    <div className={`relative flex items-center gap-1 px-4 py-2 rounded-lg border-2 ${
                                                        isDaily 
                                                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' 
                                                            : 'border-amber-500 bg-amber-50 dark:bg-amber-950/20'
                                                    }`}>
                                                        <IndianRupee size={16} className={isDaily ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'} />
                                                        <input
                                                            type="number"
                                                            value={negotiationPrice}
                                                            onChange={(e) => setNegotiationPrice(Number(e.target.value))}
                                                            className={`w-20 bg-transparent text-xl font-black text-center focus:outline-none ${
                                                                isDaily ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
                                                            }`}
                                                        />
                                                    </div>
                                                    
                                                    <button
                                                        onClick={() => incrementPrice(50)}
                                                        className="w-8 h-8 rounded-lg bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-300 flex items-center justify-center transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Quick Amount Buttons */}
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-neutral-500 dark:text-neutral-400">Quick:</span>
                                                {[600, 700, 800, 900, 1000].map((amount) => (
                                                    <button
                                                        key={amount}
                                                        onClick={() => setNegotiationPrice(amount)}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                                            negotiationPrice === amount
                                                                ? isDaily
                                                                    ? 'bg-emerald-500 text-white'
                                                                    : 'bg-amber-500 text-black'
                                                                : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-600'
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
                                                className={`w-full h-2 rounded-full appearance-none cursor-pointer ${
                                                    isDaily ? 'accent-emerald-500' : 'accent-amber-500'
                                                }`}
                                                style={{
                                                    background: `linear-gradient(to right, ${isDaily ? '#10b981' : '#f59e0b'} 0%, ${
                                                        isDaily ? '#10b981' : '#f59e0b'
                                                    } ${((negotiationPrice - 500) / 1000) * 100}%, ${
                                                        'rgb(212 212 212 / 0.3)'
                                                    } ${((negotiationPrice - 500) / 1000) * 100}%, ${'rgb(212 212 212 / 0.3)'} 100%)`,
                                                }}
                                            />
                                            <div className="flex justify-between text-[10px] text-neutral-400">
                                                <span>₹500</span>
                                                <span>₹1500</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2">
                                        <a
                                            href={`tel:${selectedWorker.phone}`}
                                            className="flex-1 py-3 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Phone size={16} />
                                            Call Worker
                                        </a>
                                        <button
                                            className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg ${
                                                isDaily 
                                                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                                                    : 'bg-amber-500 hover:bg-amber-600 text-black'
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
                        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl px-8 py-6 shadow-2xl flex flex-col items-center gap-4">
                            <div className="h-12 w-12 rounded-full border-3 border-emerald-500 border-t-transparent animate-spin" />
                            <EncryptedText
                                text="Loading maps..."
                                encryptedClassName="text-neutral-400"
                                revealedClassName="text-neutral-800 dark:text-neutral-200"
                                className="text-base font-semibold"
                                revealDelayMs={60}
                            />
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">Preparing full interactive map view</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default JobDetail;
