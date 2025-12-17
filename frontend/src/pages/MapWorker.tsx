import React, { useState, useEffect } from 'react';
import { Construction, MapPin, Send, CheckCircle, TrendingUp, Shield, Crosshair, Sliders } from 'lucide-react';
import { motion } from 'framer-motion';
import MapComponent from '../components/MapComponent';

const MapWorker: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(45);
    const [negotiationActive] = useState(true);

    useEffect(() => {
        if (negotiationActive && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [negotiationActive, timeLeft]);

    return (
        <div className="bg-background-dark text-white font-display overflow-hidden h-full w-full relative">
            {/* Background Map Layer */}
            <div className="absolute inset-0 z-0 bg-[#131811]">
                <MapComponent
                    center={[12.9716, 77.5946]}
                    zoom={14}
                    markers={[
                        { position: [12.9716, 77.5946], title: "Active Job: ₹600" },
                        { position: [12.985, 77.605], title: "Available Worker" },
                        { position: [12.965, 77.585], title: "Available Worker" }
                    ]}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#131811]/90 via-[#131811]/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Foreground UI Layer */}
            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                {/* Top Navigation Bar */}
                <header className="w-full flex justify-center pt-6 px-6 pointer-events-auto">
                    <div className="bg-surface-dark/90 backdrop-blur-md border border-border-dark p-1.5 rounded-full shadow-2xl flex items-center">
                        {/* Toggle Switch */}
                        <div className="relative flex h-10 items-center rounded-full bg-[#131811] p-1">
                            <label className="flex cursor-pointer h-full items-center justify-center rounded-full px-6 transition-all duration-300 bg-primary shadow-[0_0_10px_rgba(70,236,19,0.3)]">
                                <span className="text-[#131811] text-sm font-bold tracking-tight">Daily Wages</span>
                                <input defaultChecked className="invisible w-0" name="job-mode" type="radio" value="Daily Wages" />
                            </label>
                            <label className="flex cursor-pointer h-full items-center justify-center rounded-full px-6 transition-all duration-300 hover:bg-white/5">
                                <span className="text-[#a3b99d] text-sm font-medium tracking-tight">Long-Term Jobs</span>
                                <input className="invisible w-0" name="job-mode" type="radio" value="Long-Term Jobs" />
                            </label>
                        </div>
                        <div className="h-6 w-px bg-border-dark mx-4"></div>
                        {/* Profile Small */}
                        <div className="flex items-center gap-3 pr-2">
                            <div className="flex flex-col items-end">
                                <span className="text-xs text-[#a3b99d] uppercase tracking-wider font-bold">Earnings</span>
                                <span className="text-sm font-bold text-white">₹1,250</span>
                            </div>
                            <div className="size-8 rounded-full bg-cover bg-center border border-border-dark" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFjfiqeqk0WALAJv-ydAGrA0hdzqF4-D-lttgI2f1_awAmIPwkuVa96u_YLGv8T2dBvNaqICcoCVx3QuZGRCIBwt90xlDeihRebZ7JQ5Cjizi4NngRq8zI7DRxboco-4c3ieMusg7pOCcWzlQcRTL0_6zel-UQ0faJp2dholW4QsF3b2rz19JwS_qg99-MgpcoMAqCZiXDvvpeD7igE0RA8b1LgpemL9_goVlSIRv-sVghWrOplfvnw2y6qJ13kfWwiWzCdz9wNUDd")' }}></div>
                        </div>
                    </div>
                </header>

                {/* Main Workspace (Split View) */}
                <div className="flex-1 flex items-start justify-between p-6 md:p-10">
                    {/* Floating Sidebar / Job Card (Negotiation State) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="pointer-events-auto w-full max-w-[420px] flex flex-col gap-4"
                    >
                        {/* Main Negotiation Card */}
                        <div className="bg-surface-dark border border-border-dark rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
                            {/* Card Header */}
                            <div className="p-6 pb-4 border-b border-border-dark/50 bg-gradient-to-b from-white/5 to-transparent">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white leading-tight">Construction Assistant</h2>
                                        <div className="flex items-center gap-2 mt-1">
                                            <MapPin className="text-primary" size={16} />
                                            <span className="text-[#a3b99d] text-sm font-medium">1.2km away • Starts in 30 mins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center bg-white/10 rounded-full p-2">
                                        <Construction className="text-white" size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Negotiation Body */}
                            <div className="flex flex-col h-[400px]">
                                {/* Timer Section */}
                                <div className="px-6 py-4 flex items-center justify-between bg-[#1a2218]">
                                    <div className="flex items-center gap-3">
                                        <div className="relative size-12 flex items-center justify-center">
                                            {/* Simple SVG Timer Ring */}
                                            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                                <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                                <path
                                                    className="text-orange-500 drop-shadow-[0_0_4px_rgba(255,159,28,0.5)] transition-all duration-1000 ease-linear"
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeDasharray={`${(timeLeft / 60) * 100}, 100`}
                                                    strokeWidth="3"
                                                ></path>
                                            </svg>
                                            <span className="text-xs font-bold text-orange-500">{timeLeft}s</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white font-bold text-sm">Negotiation Active</span>
                                            <span className="text-[#a3b99d] text-xs">Offer expires soon</span>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                                        <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">High Demand</span>
                                    </div>
                                </div>

                                {/* Chat Area */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-[#161c14]">
                                    {/* System Message */}
                                    <div className="flex justify-center">
                                        <span className="text-xs text-[#a3b99d]/60 bg-white/5 px-3 py-1 rounded-full">Session started 1 min ago</span>
                                    </div>

                                    {/* Provider Offer */}
                                    <div className="flex flex-col items-start gap-1 max-w-[85%]">
                                        <div className="flex items-end gap-2">
                                            <div className="size-8 rounded-full bg-cover bg-center border border-white/10 flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByLvMKdAsqqpIV0JMUvgXNu0cOsailk45j506K-kOMEg6toL0GSlazsGl7tF9-uKX3rvkYTGAj60qIPvNy9Vc-NC59bg_Rim-iN4TL2tg0JWKa09DUWmRGaZyaErXC622b0FFM54G4O1BAqlS32siXHV8d5JWY-vJ3B7-mYkpK0CXhqfa4krPcCtkraa68m4Wcnuqn7Fw2pwYORK5KrTktkDMkkj1qbXGrNCBeYgkqxdPYYEwY7pq4HXeDJXEbsOue7l4weNjtqqUJ")' }}></div>
                                            <div className="bg-[#2c3928] text-white p-3 rounded-2xl rounded-bl-none shadow-sm">
                                                <p className="text-sm">I can offer <span className="font-bold text-white">₹400</span> for this job. It's a quick 4-hour shift.</p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-[#a3b99d] ml-10">Provider • 10:42 AM</span>
                                    </div>

                                    {/* User Counter */}
                                    <div className="flex flex-col items-end gap-1 max-w-[85%] ml-auto">
                                        <div className="bg-primary/20 text-white border border-primary/20 p-3 rounded-2xl rounded-br-none shadow-sm">
                                            <p className="text-sm">That's too low. The standard rate is higher. How about <span className="font-bold text-primary">₹500</span>?</p>
                                        </div>
                                        <span className="text-[10px] text-[#a3b99d] text-right">You • 10:43 AM</span>
                                    </div>

                                    {/* Waiting Indicator */}
                                    <div className="flex items-center gap-2 mt-4 ml-10 animate-pulse">
                                        <span className="flex gap-1 items-center">
                                            <span className="size-1.5 bg-orange-500 rounded-full"></span>
                                            <span className="size-1.5 bg-orange-500 rounded-full animation-delay-200"></span>
                                            <span className="size-1.5 bg-orange-500 rounded-full animation-delay-400"></span>
                                        </span>
                                        <span className="text-xs text-orange-500 font-medium">Provider is typing...</span>
                                    </div>
                                </div>

                                {/* Input Area */}
                                <div className="p-4 bg-surface-dark border-t border-border-dark flex gap-2">
                                    <input className="flex-1 bg-[#131811] border border-border-dark text-white text-sm rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 placeholder:text-[#a3b99d]/50 transition-all outline-none" placeholder="Type a counter offer..." type="text" />
                                    <button className="bg-orange-500 hover:bg-orange-500/90 text-[#131811] rounded-xl px-4 flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(255,159,28,0.3)]">
                                        <Send className="font-bold" size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="p-4 bg-[#1a2218] flex gap-3 border-t border-border-dark">
                                <button className="flex-1 bg-[#3a4436] hover:bg-[#455240] text-white h-12 rounded-full font-bold text-sm tracking-wide transition-all">
                                    Skip
                                </button>
                                <button className="flex-[2] bg-primary hover:bg-[#39d60b] text-[#131811] h-12 rounded-full font-bold text-base tracking-wide shadow-[0_0_20px_rgba(70,236,19,0.4)] flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]">
                                    <span>Accept Deal</span>
                                    <CheckCircle size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Secondary Info Card (Quick Stats) */}
                        <div className="bg-surface-dark/80 backdrop-blur border border-border-dark rounded-2xl p-4 flex justify-between items-center shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                    <TrendingUp className="text-blue-400" size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-[#a3b99d] font-medium">Market Rate</span>
                                    <span className="text-sm font-bold text-white">₹450 - ₹650</span>
                                </div>
                            </div>
                            <div className="h-8 w-px bg-border-dark"></div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg">
                                    <Shield className="text-purple-400" size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-[#a3b99d] font-medium">Safety Score</span>
                                    <span className="text-sm font-bold text-white">98% Verified</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side (Floating Controls) */}
                    <div className="pointer-events-auto flex flex-col gap-4">
                        <button className="size-12 rounded-full bg-surface-dark border border-border-dark text-white shadow-lg hover:bg-white/10 flex items-center justify-center transition-all" title="My Location">
                            <Crosshair size={24} />
                        </button>
                        <button className="size-12 rounded-full bg-surface-dark border border-border-dark text-white shadow-lg hover:bg-white/10 flex items-center justify-center transition-all" title="Filter Jobs">
                            <Sliders size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapWorker;
