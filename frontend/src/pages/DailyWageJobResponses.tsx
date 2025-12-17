import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, MapPin, IndianRupee, Clock, Phone, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JobMap from '../components/JobMap';

type JobStatus = 'searching' | 'negotiating' | 'confirmed' | 'in-progress';

interface Worker {
    id: number;
    name: string;
    rating: number;
    distance: string;
    phone: string;
    avatar: string;
    currentLat: number;
    currentLng: number;
}

const DailyWageJobResponses: React.FC = () => {
    const { jobId: _jobId } = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState<JobStatus>('searching');
    const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
    const [proposedPrice] = useState(800);
    const [negotiationPrice, setNegotiationPrice] = useState(800);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const canvasRef = useRef<HTMLDivElement>(null);

    const jobLocation = { lat: 12.9716, lng: 77.5946 };

    useEffect(() => {
        if (status === 'searching') {
            const timer = setTimeout(() => {
                const worker: Worker = {
                    id: 1,
                    name: 'Rajesh Kumar',
                    rating: 4.8,
                    distance: '2.3 km',
                    phone: '+91 98765 43210',
                    avatar: 'https://i.pravatar.cc/150?img=15',
                    currentLat: 12.9616,
                    currentLng: 77.5846,
                };
                setSelectedWorker(worker);
                setStatus('negotiating');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const mapJobs = useMemo(() => {
        if (selectedWorker && status !== 'searching') {
            return [
                { lat: jobLocation.lat, lng: jobLocation.lng, price: `₹${proposedPrice}`, icon: '⚒', isActive: true, variant: 'job' as const },
                { lat: selectedWorker.currentLat, lng: selectedWorker.currentLng, price: '', icon: '•', isActive: false, variant: 'worker' as const },
            ];
        }
        return [{ lat: jobLocation.lat, lng: jobLocation.lng, price: `₹${proposedPrice}`, icon: '⚒', isActive: true, variant: 'job' as const }];
    }, [jobLocation.lat, jobLocation.lng, proposedPrice, selectedWorker, status]);

    const statusLabel = (() => {
        switch (status) {
            case 'searching':
                return 'Finding a nearby worker...';
            case 'negotiating':
                return 'Negotiate and confirm';
            case 'confirmed':
                return 'Worker confirmed';
            case 'in-progress':
                return 'Worker en route';
            default:
                return '';
        }
    })();

    return (
        <div ref={canvasRef} className="fixed inset-0 w-screen h-screen bg-slate-50">
            {/* Full Screen Map */}
            <div className="absolute inset-0">
                <JobMap jobs={mapJobs} center={[jobLocation.lat, jobLocation.lng]} zoom={13.5} showControls />
            </div>
            
            {/* Back Button */}
            <div className="fixed top-4 left-4 z-20">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg border border-black/5 text-sm font-semibold hover:shadow-xl transition-all hover:scale-105"
                >
                    <ChevronLeft size={18} /> Back
                </button>
            </div>

            {/* Negotiation Panel */}
            <div className="fixed left-4 bottom-4 z-30 w-[min(420px,calc(100%-2rem))]">
                <motion.div
                    layout
                    drag={isCollapsed}
                    dragConstraints={canvasRef}
                    dragMomentum={false}
                    className={`rounded-3xl border ${isCollapsed ? 'border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.3)]' : 'border-emerald-900/30'} bg-[#0a120a]/95 backdrop-blur-xl text-white shadow-[0_25px_80px_rgba(0,0,0,0.5)] overflow-hidden ${isCollapsed ? 'w-14 h-14 flex items-center justify-center cursor-grab active:cursor-grabbing' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 160, damping: 20 }}
                >
                    {isCollapsed ? (
                        <button
                            onClick={() => setIsCollapsed(false)}
                            className="w-full h-full flex items-center justify-center"
                            aria-label="Expand negotiation"
                        >
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-600 shadow-lg">
                                <span className="text-white text-sm font-semibold">↕</span>
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow" />
                            </div>
                        </button>
                    ) : (
                        <>
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-gradient-to-r from-emerald-900/60 to-emerald-800/40">
                                <div>
                                    <div className="text-xs text-emerald-100/80">Current status</div>
                                    <div className="text-lg font-semibold text-white">{statusLabel}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-900 text-emerald-100 border border-emerald-700/60">
                                        {status.toUpperCase()}
                                    </span>
                                    <button
                                        onClick={() => setIsCollapsed(true)}
                                        className="p-2 rounded-full hover:bg-white/5 text-white"
                                        aria-label="Minimize"
                                    >
                                        <ChevronDown size={18} />
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={status}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 12 }}
                                    transition={{ duration: 0.18 }}
                                    className="p-4 space-y-4"
                                >
                                    {status === 'searching' && (
                                        <div className="space-y-3">
                                            <div className="text-sm text-emerald-100/80">Matching you with the closest verified worker. Hang tight.</div>
                                            <div className="grid grid-cols-3 gap-3">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="h-20 rounded-xl bg-white/5 border border-white/5 animate-pulse" />
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {status === 'negotiating' && selectedWorker && (
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <img src={selectedWorker.avatar} alt={selectedWorker.name} className="w-12 h-12 rounded-full object-cover border border-emerald-700/50" />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-base font-semibold text-white">{selectedWorker.name}</div>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-emerald-800 text-emerald-100 border border-emerald-700/70">{selectedWorker.distance} away</span>
                                                    </div>
                                                    <div className="text-sm text-emerald-100/80">⭐ {selectedWorker.rating} rating</div>
                                                </div>
                                                <a href={`tel:${selectedWorker.phone}`} className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-white" aria-label="Call worker">
                                                    <Phone size={16} />
                                                </a>
                                            </div>

                                            <div className="p-3 rounded-xl border border-white/10 bg-white/5">
                                                <div className="flex items-center justify-between text-sm text-emerald-100/90">
                                                    <div className="flex items-center gap-2"><IndianRupee size={16} /> Proposed price</div>
                                                    <span className="font-semibold text-white">₹{proposedPrice}</span>
                                                </div>
                                                <div className="mt-3">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <label className="text-xs text-emerald-100/70">Counter offer</label>
                                                        <div className="flex items-center gap-1">
                                                            <span className="text-emerald-100/70 text-xs">₹</span>
                                                            <input
                                                                type="number"
                                                                value={negotiationPrice}
                                                                onChange={(e) => setNegotiationPrice(Number(e.target.value))}
                                                                className="w-16 px-2 py-0.5 rounded-md border border-emerald-700/50 bg-white/5 text-white text-xs font-semibold text-right focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                                            />
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="range"
                                                        min={proposedPrice - 200}
                                                        max={proposedPrice + 400}
                                                        step={50}
                                                        value={negotiationPrice}
                                                        onChange={(e) => setNegotiationPrice(Number(e.target.value))}
                                                        className="w-full accent-emerald-400"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <button
                                                    onClick={() => setStatus('confirmed')}
                                                    className="h-11 rounded-xl bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition"
                                                >
                                                    Accept & Confirm
                                                </button>
                                                <button
                                                    onClick={() => setStatus('searching')}
                                                    className="h-11 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
                                                >
                                                    Find Another
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {status === 'confirmed' && selectedWorker && (
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-emerald-900 border border-emerald-700 flex items-center justify-center text-emerald-200">
                                                    <Clock size={18} />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-emerald-100/80">Worker confirmed</div>
                                                    <div className="text-base font-semibold text-white">{selectedWorker.name} starts in 15 mins</div>
                                                </div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white flex items-center justify-between">
                                                <div>
                                                    <div className="text-xs uppercase tracking-[0.08em]">Live tracking</div>
                                                    <div className="text-sm font-semibold">Worker is on the way</div>
                                                </div>
                                                <Navigation size={20} />
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <button
                                                    onClick={() => setStatus('in-progress')}
                                                    className="h-11 rounded-xl bg-white text-emerald-900 font-semibold hover:bg-emerald-50 transition"
                                                >
                                                    Start Job
                                                </button>
                                                <button
                                                    onClick={() => setStatus('negotiating')}
                                                    className="h-11 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
                                                >
                                                    Modify Details
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {status === 'in-progress' && selectedWorker && (
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-blue-900/60 border border-blue-700 flex items-center justify-center text-blue-100">
                                                    <MapPin size={18} />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-emerald-100/80">Work started</div>
                                                    <div className="text-base font-semibold text-white">Track progress and pay on completion</div>
                                                </div>
                                            </div>
                                            <div className="p-3 rounded-xl border border-white/10 bg-white/5">
                                                <div className="flex items-center justify-between text-sm text-emerald-100/90">
                                                    <span>Agreed pay</span>
                                                    <span className="font-semibold text-white">₹{negotiationPrice}</span>
                                                </div>
                                                <div className="mt-2 text-xs text-emerald-100/70">Payment releases after you mark the job complete.</div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <button className="h-11 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">Mark Complete</button>
                                                <button className="h-11 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition">Help</button>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default DailyWageJobResponses;
