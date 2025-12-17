import React, { useState, useEffect } from 'react';
import { Crosshair, Sliders, Send, MapPin, Construction, ChevronLeft, Phone, Plus, Minus, IndianRupee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MapComponent from '../components/MapComponent';
import { LocationMap } from '../components/ui/expand-map';
import { EncryptedText } from '../components/ui/encrypted-text';

const MapWorker: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(45);
    const [negotiationActive] = useState(true);
    const [isLoadingMap, setIsLoadingMap] = useState(false);
    const [isNegotiationOpen, setIsNegotiationOpen] = useState(false);
    const [negotiationPrice, setNegotiationPrice] = useState(500);

    useEffect(() => {
        if (negotiationActive && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [negotiationActive, timeLeft]);

    const progressPercent = (timeLeft / 45) * 100;

    const triggerLoading = () => {
        setIsLoadingMap(true);
        setTimeout(() => setIsLoadingMap(false), 1200);
    };

    const incrementPrice = (amount: number) => {
        setNegotiationPrice((prev) => Math.max(0, prev + amount));
    };

    useEffect(() => {
        if (negotiationPrice < 0) setNegotiationPrice(0);
    }, [negotiationPrice]);

    return (
        <div className="bg-gray-100 text-gray-900 font-sans overflow-hidden h-full w-full relative">
            <div className="absolute inset-0 z-0" style={{ filter: 'grayscale(100%) brightness(103%) contrast(105%)' }}>
                <MapComponent
                    center={[12.9716, 77.5946]}
                    zoom={14}
                    markers={[
                        { position: [12.9716, 77.5946], title: 'Active Job: ₹600' },
                        { position: [12.985, 77.605], title: 'Available Worker' },
                        { position: [12.965, 77.585], title: 'Available Worker' },
                    ]}
                />
            </div>

            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                {/* Back Button - Fixed design */}
                <div className="absolute top-6 left-6 pointer-events-auto z-20">
                    <button
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-all shadow-lg"
                    >
                        <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span>Back</span>
                    </button>
                </div>

                <div className="absolute top-6 right-6 pointer-events-auto">
                    <div className="flex flex-col items-end gap-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl px-4 py-3 shadow-lg">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Posted job location</p>
                        <div onClick={triggerLoading} className="">
                            <LocationMap location="Indiranagar, Bangalore" coordinates="12.9716° N, 77.5946° E" />
                        </div>
                        <p className="text-[11px] text-gray-500">Gradient-safe container — text follows the gradient rule.</p>
                    </div>
                </div>

                <div className="flex-1 flex items-end justify-center p-6 md:p-10 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="pointer-events-auto w-full max-w-[440px]"
                    >
                        <div className="bg-white rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
                            <div className="h-0.5 bg-gray-200 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-orange-500"
                                    initial={{ width: '100%' }}
                                    animate={{ width: `${progressPercent}%` }}
                                    transition={{ duration: 1, ease: 'linear' }}
                                />
                            </div>

                            <div className="p-6 pb-4 border-b border-gray-200">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-2xl font-bold text-black leading-tight">Construction Assistant</h2>
                                        <div className="flex items-center gap-2 mt-2">
                                            <MapPin className="text-gray-600" size={16} />
                                            <span className="text-gray-600 text-sm">1.2km away • Starts in 30 mins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center bg-gray-100 rounded-2xl p-3">
                                        <Construction className="text-gray-900" size={24} />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200">
                                        <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">High Demand</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-orange-600">
                                        <div className="size-2 bg-orange-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-semibold">{timeLeft}s left</span>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[320px] overflow-y-auto p-6 space-y-4 bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                                <div className="flex justify-center">
                                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Session started 1 min ago</span>
                                </div>

                                <div className="flex flex-col items-start gap-1 max-w-[85%]">
                                    <div className="flex items-end gap-2">
                                        <div
                                            className="size-8 rounded-full bg-cover bg-center border border-gray-200 flex-shrink-0"
                                            style={{ backgroundImage: 'url("https://i.pravatar.cc/150?img=33")' }}
                                        ></div>
                                        <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-sm shadow-sm">
                                            <p className="text-sm text-gray-900">
                                                I can offer <span className="font-bold text-black">₹400</span> for this job. It's a quick 4-hour shift.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-gray-500 ml-10">Provider • 10:42 AM</span>
                                </div>

                                <div className="flex flex-col items-end gap-1 max-w-[85%] ml-auto">
                                    <div className="bg-black text-white p-3 rounded-2xl rounded-tr-sm shadow-sm">
                                        <p className="text-sm">
                                            That's too low. The standard rate is higher. How about <span className="font-bold">₹500</span>?
                                        </p>
                                    </div>
                                    <span className="text-[10px] text-gray-500 text-right">You • 10:43 AM</span>
                                </div>

                                <div className="flex items-center gap-2 ml-10">
                                    <span className="flex gap-1 items-center">
                                        <span className="size-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="size-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                        <span className="size-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium">Provider is typing...</span>
                                </div>
                            </div>

                            <div className="p-4 bg-white border-t border-gray-200 flex gap-2">
                                <input
                                    className="flex-1 bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-2xl px-4 py-3 focus:ring-2 focus:ring-black/20 focus:border-gray-300 placeholder:text-gray-500 transition-all outline-none"
                                    placeholder="Type a counter offer..."
                                    type="text"
                                />
                                <button className="bg-black hover:bg-gray-900 text-white rounded-2xl px-5 flex items-center justify-center transition-colors shadow-sm">
                                    <Send size={18} />
                                </button>
                            </div>

                            <div className="p-4 bg-gray-50 border-t border-gray-200 flex gap-3">
                                <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 h-12 rounded-full font-bold text-sm tracking-wide transition-all shadow-sm">
                                    Skip Job
                                </button>
                                <button 
                                    onClick={() => setIsNegotiationOpen(true)}
                                    className="flex-[2] bg-green-500 hover:bg-green-600 text-white h-12 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                                >
                                    Negotiate Price
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Modern Negotiation Modal - Same as JobDetail */}
                <AnimatePresence>
                    {isNegotiationOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                                onClick={() => setIsNegotiationOpen(false)}
                            />

                            {/* Modal */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md z-50 pointer-events-auto"
                            >
                                <div className="rounded-2xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl overflow-hidden">
                                    {/* Header */}
                                    <div className="px-6 py-5 bg-emerald-500/10 dark:bg-emerald-500/20">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-emerald-500"
                                                    style={{ backgroundImage: 'url("https://i.pravatar.cc/150?img=33")' }}
                                                />
                                                <div>
                                                    <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">Job Provider</h3>
                                                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                                                        <MapPin size={12} />
                                                        <span>1.2 km away</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setIsNegotiationOpen(false)}
                                                className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 transition-colors"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 6L6 18M6 6l12 12" />
                                                </svg>
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
                                                <span className="text-sm text-neutral-600 dark:text-neutral-400">Provider's Offer</span>
                                                <span className="text-lg font-bold text-neutral-800 dark:text-neutral-200">₹400</span>
                                            </div>

                                            {/* Price Input with Increment/Decrement */}
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Your Counter Offer</span>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => incrementPrice(-50)}
                                                            className="w-8 h-8 rounded-lg bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-700 dark:text-neutral-300 flex items-center justify-center transition-colors"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        
                                                        <div className="relative flex items-center gap-1 px-4 py-2 rounded-lg border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20">
                                                            <IndianRupee size={16} className="text-emerald-600 dark:text-emerald-400" />
                                                            <input
                                                                type="number"
                                                                value={negotiationPrice}
                                                                onChange={(e) => setNegotiationPrice(Number(e.target.value))}
                                                                className="w-20 bg-transparent text-xl font-black text-center focus:outline-none text-emerald-600 dark:text-emerald-400"
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
                                                    {[400, 450, 500, 550, 600].map((amount) => (
                                                        <button
                                                            key={amount}
                                                            onClick={() => setNegotiationPrice(amount)}
                                                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                                                negotiationPrice === amount
                                                                    ? 'bg-emerald-500 text-white'
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
                                                    min={300}
                                                    max={800}
                                                    step={50}
                                                    value={negotiationPrice}
                                                    onChange={(e) => setNegotiationPrice(Number(e.target.value))}
                                                    className="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-500"
                                                    style={{
                                                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${((negotiationPrice - 300) / 500) * 100}%, rgb(212 212 212 / 0.3) ${((negotiationPrice - 300) / 500) * 100}%, rgb(212 212 212 / 0.3) 100%)`,
                                                    }}
                                                />
                                                <div className="flex justify-between text-[10px] text-neutral-400">
                                                    <span>₹300</span>
                                                    <span>₹800</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 pt-2">
                                            <a
                                                href="tel:+919876543210"
                                                className="flex-1 py-3 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Phone size={16} />
                                                Call Provider
                                            </a>
                                            <button
                                                className="flex-1 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg bg-emerald-500 hover:bg-emerald-600 text-white"
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

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto">
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-lg rounded-full px-6 py-3 flex items-center gap-6">
                        <button className="group flex items-center gap-2 hover:bg-gray-100 rounded-full px-4 py-2 transition-all" title="My Location" onClick={triggerLoading}>
                            <Crosshair size={20} className="text-gray-700 group-hover:text-black transition-colors" />
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-black">Locate</span>
                        </button>
                        <div className="h-6 w-px bg-gray-300" />
                        <button className="group flex items-center gap-2 hover:bg-gray-100 rounded-full px-4 py-2 transition-all" title="Filter Jobs">
                            <Sliders size={20} className="text-gray-700 group-hover:text-black transition-colors" />
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-black">Filter</span>
                        </button>
                        <div className="h-6 w-px bg-gray-300" />
                        <div className="flex items-center gap-2 px-2">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Today</span>
                                <span className="text-sm font-bold text-black">₹1,250</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isLoadingMap && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="bg-white rounded-2xl px-6 py-5 border border-gray-200 shadow-[0_35px_70px_-30px_rgba(0,0,0,0.4)] flex flex-col items-center gap-3">
                            <div className="h-10 w-10 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
                            <EncryptedText
                                text="Loading maps..."
                                encryptedClassName="text-gray-500"
                                revealedClassName="text-gray-900"
                                className="text-sm font-semibold"
                                revealDelayMs={50}
                            />
                            <p className="text-xs text-gray-500">Decrypting layers to expand the map.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MapWorker;

                {/* Floating Pill Dock - Glass Morphism Controls */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto">
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-lg rounded-full px-6 py-3 flex items-center gap-6">
                        <button className="group flex items-center gap-2 hover:bg-gray-100 rounded-full px-4 py-2 transition-all" title="My Location">
                            <Crosshair size={20} className="text-gray-700 group-hover:text-black transition-colors" />
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-black">Locate</span>
                        </button>
                        <div className="h-6 w-px bg-gray-300" />
                        <button className="group flex items-center gap-2 hover:bg-gray-100 rounded-full px-4 py-2 transition-all" title="Filter Jobs">
                            <Sliders size={20} className="text-gray-700 group-hover:text-black transition-colors" />
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-black">Filter</span>
                        </button>
                        <div className="h-6 w-px bg-gray-300" />
                        <div className="flex items-center gap-2 px-2">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Today</span>
                                <span className="text-sm font-bold text-black">₹1,250</span>
                            </div>
                        </div>
                    </div>
                </div>