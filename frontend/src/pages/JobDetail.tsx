import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChevronLeft, MapPin, IndianRupee, Clock, Users, Calendar, 
    Briefcase, Phone, Navigation, ChevronDown, ChevronUp, Map
} from 'lucide-react';

interface Worker {
    id: number;
    name: string;
    rating: number;
    distance: string;
    phone: string;
    avatar: string;
}

const JobDetail: React.FC = () => {
    const { mode, jobId } = useParams();
    const navigate = useNavigate();
    const [isNegotiationOpen, setIsNegotiationOpen] = useState(true);
    const [negotiationPrice, setNegotiationPrice] = useState(800);

    const isDaily = mode === 'daily';

    // Mock job data
    const jobData = {
        id: jobId,
        title: isDaily ? "Plumbing Work" : "Frontend Developer",
        description: isDaily 
            ? "Need an experienced plumber to fix kitchen sink leak and check bathroom pipes. Tools will be provided. Should be completed within 4-5 hours."
            : "Looking for an experienced React developer with TypeScript skills. Remote work possible. Must have 2+ years of experience.",
        location: "Indiranagar, Bangalore",
        pay: isDaily ? "₹800/day" : "₹12 LPA",
        time: isDaily ? "9 AM - 6 PM" : "Full-time",
        date: "Dec 18, 2024",
        applicants: 12,
        status: "active",
        postedAt: "2 hours ago",
        category: isDaily ? "Plumbing" : "Technology",
        requirements: isDaily 
            ? ["Experience with pipe fitting", "Own basic tools preferred", "Good communication"]
            : ["React & TypeScript", "2+ years experience", "Team player"]
    };

    const nearbyWorkers: Worker[] = [
        { id: 1, name: "Rajesh Kumar", rating: 4.8, distance: "2.3 km", phone: "+91 98765 43210", avatar: "https://i.pravatar.cc/150?img=15" },
        { id: 2, name: "Suresh Patel", rating: 4.5, distance: "3.1 km", phone: "+91 98765 43211", avatar: "https://i.pravatar.cc/150?img=12" },
        { id: 3, name: "Amit Singh", rating: 4.9, distance: "4.0 km", phone: "+91 98765 43212", avatar: "https://i.pravatar.cc/150?img=8" },
    ];

    const handleOpenMap = () => {
        navigate(`/job-responses/${mode}/${jobId}`);
    };

    return (
        <div className={`min-h-screen w-full relative overflow-hidden bg-gray-100 dark:bg-neutral-900`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className={`absolute top-[-30%] right-[-20%] w-[70%] h-[70%] rounded-full ${isDaily ? 'bg-green-500/10' : 'bg-yellow-500/10'} blur-[120px]`} />
                <div className={`absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full ${isDaily ? 'bg-emerald-500/8' : 'bg-orange-500/8'} blur-[100px]`} />
            </div>

            {/* Header */}
            <div className="relative z-10 px-6 py-4 flex items-center justify-between">
                <button
                    onClick={() => navigate('/posted-jobs')}
                    className={`group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all shadow-sm`}
                >
                    <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                    <span>Back</span>
                </button>

                <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${isDaily ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-700'}`}>
                    {isDaily ? 'Daily Wage' : 'Long Term'}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-6 pb-8 w-full">
                {/* Job Title Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-6 rounded-2xl bg-white dark:bg-neutral-800 border-2 ${isDaily ? 'border-green-200 dark:border-green-900/30' : 'border-yellow-200 dark:border-yellow-900/30'} shadow-lg mb-6`}
                >
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 ${isDaily ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'}`}>
                                <Briefcase size={12} />
                                {jobData.category}
                            </div>
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{jobData.title}</h1>
                            <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
                                <span className="flex items-center gap-1"><MapPin size={14} /> {jobData.location}</span>
                                <span className="flex items-center gap-1"><Clock size={14} /> {jobData.postedAt}</span>
                            </div>
                        </div>
                        <div className={`text-right`}>
                            <div className={`text-3xl font-black ${isDaily ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>{jobData.pay}</div>
                            <div className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">{jobData.time}</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center gap-2">
                            <Users size={16} className="text-neutral-500 dark:text-neutral-400" />
                            <span className="text-neutral-900 dark:text-white font-semibold">{jobData.applicants}</span>
                            <span className="text-neutral-500 dark:text-neutral-400 text-sm">applicants</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-neutral-500 dark:text-neutral-400" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">{jobData.date}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Description & Requirements */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm"
                    >
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Description</h3>
                        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{jobData.description}</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm"
                    >
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Requirements</h3>
                        <ul className="space-y-2">
                            {jobData.requirements.map((req, i) => (
                                <li key={i} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                                    <div className={`w-1.5 h-1.5 rounded-full ${isDaily ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Open Map Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={handleOpenMap}
                    className={`w-full p-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg ${isDaily ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-yellow-500 hover:bg-yellow-600 text-black'}`}
                >
                    <Map size={22} />
                    Open Live Map
                    <Navigation size={18} className="ml-1" />
                </motion.button>

                {/* Nearby Workers */}
                {isDaily && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="mt-6"
                    >
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Nearby Workers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {nearbyWorkers.map((worker) => (
                                <div key={worker.id} className="p-4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-green-400 dark:hover:border-green-600 transition-colors shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <img src={worker.avatar} alt={worker.name} className="w-12 h-12 rounded-full object-cover border-2 border-green-400" />
                                        <div className="flex-1">
                                            <div className="text-neutral-900 dark:text-white font-semibold">{worker.name}</div>
                                            <div className="text-neutral-500 dark:text-neutral-400 text-sm">⭐ {worker.rating} • {worker.distance}</div>
                                        </div>
                                        <a href={`tel:${worker.phone}`} className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                                            <Phone size={16} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Floating Negotiation Panel */}
            <div className="fixed bottom-6 right-6 z-50 w-[min(400px,calc(100vw-3rem))]">
                <motion.div
                    layout
                    className={`rounded-2xl border shadow-2xl overflow-hidden bg-white dark:bg-neutral-800 ${isDaily ? 'border-green-300 dark:border-green-700' : 'border-yellow-300 dark:border-yellow-700'}`}
                >
                    <div 
                        className={`flex items-center justify-between px-5 py-4 cursor-pointer ${isDaily ? 'bg-green-50 dark:bg-green-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'}`}
                        onClick={() => setIsNegotiationOpen(v => !v)}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDaily ? 'bg-green-100 dark:bg-green-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'}`}>
                                <IndianRupee size={20} className={isDaily ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'} />
                            </div>
                            <div>
                                <div className="text-neutral-900 dark:text-white font-semibold">Quick Negotiate</div>
                                <div className="text-neutral-600 dark:text-neutral-400 text-sm">Set your counter offer</div>
                            </div>
                        </div>
                        <button className="p-2 rounded-full hover:bg-white/50 dark:hover:bg-black/20 text-neutral-600 dark:text-neutral-400">
                            {isNegotiationOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                        </button>
                    </div>

                    <AnimatePresence>
                        {isNegotiationOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                            >
                                <div className="p-5 space-y-4 border-t border-neutral-200 dark:border-neutral-700">
                                    <div className="flex items-center justify-between">
                                        <span className="text-neutral-700 dark:text-neutral-300">Current Price</span>
                                        <span className={`text-xl font-bold ${isDaily ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>₹800</span>
                                    </div>
                                    
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">Your Offer</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-neutral-900 dark:text-white font-bold">₹</span>
                                                <input
                                                    type="number"
                                                    value={negotiationPrice}
                                                    onChange={(e) => setNegotiationPrice(Number(e.target.value))}
                                                    className={`w-20 px-2 py-1 rounded-lg border text-neutral-900 dark:text-white bg-white dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 font-bold text-right focus:outline-none focus:ring-2 ${isDaily ? 'focus:ring-green-500' : 'focus:ring-yellow-500'}`}
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="range"
                                            min={600}
                                            max={1200}
                                            step={50}
                                            value={negotiationPrice}
                                            onChange={(e) => setNegotiationPrice(Number(e.target.value))}
                                            className={`w-full h-2 rounded-full appearance-none cursor-pointer ${isDaily ? 'accent-green-500' : 'accent-yellow-500'}`}
                                            style={{ background: `linear-gradient(to right, ${isDaily ? '#22c55e' : '#eab308'} 0%, ${isDaily ? '#22c55e' : '#eab308'} ${((negotiationPrice - 600) / 600) * 100}%, rgba(0,0,0,0.1) ${((negotiationPrice - 600) / 600) * 100}%, rgba(0,0,0,0.1) 100%)` }}
                                        />
                                    </div>

                                    <button className={`w-full py-3 rounded-xl font-bold transition-all hover:scale-[1.02] ${isDaily ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-yellow-500 hover:bg-yellow-600 text-black'}`}>
                                        Send Offer
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default JobDetail;
