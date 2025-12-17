import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bike, Briefcase, Users, Timer, CheckCircle, ArrowRight, PlusCircle, History, Shield, MapPin, DollarSign, MessageSquare, FileText } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const ModeSwitch: React.FC = () => {
    const [mode, setMode] = useState<'daily' | 'longterm'>('daily');

    // Dynamic styles based on mode
    const primaryColor = mode === 'daily' ? 'text-primary' : 'text-yellow-400';
    const primaryBg = mode === 'daily' ? 'bg-primary' : 'bg-yellow-400';
    const gradientText = mode === 'daily'
        ? 'from-white to-gray-500'
        : 'from-yellow-200 to-orange-500';

    const buttonHover = mode === 'daily' ? 'hover:bg-[#3bd60f]' : 'hover:bg-yellow-500';
    const shadowColor = mode === 'daily' ? 'shadow-[0_0_20px_rgba(70,236,19,0.2)]' : 'shadow-[0_0_20px_rgba(250,204,21,0.2)]';

    return (
        <div className="mx-auto max-w-6xl flex flex-col gap-8">
            {/* Header & Mode Switcher Section */}
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">Dashboard</h1>
                    <p className="text-[#a3b99d] text-base font-medium">Manage your workforce needs in one place.</p>
                </div>

                {/* Mode Switcher */}
                <div className="w-full md:w-auto">
                    <div className="flex h-14 w-full md:min-w-[400px] items-center rounded-full bg-border-dark p-1.5 shadow-inner">
                        {/* Daily Wages Mode */}
                        <button
                            onClick={() => setMode('daily')}
                            className={twMerge(
                                "relative z-10 flex h-full flex-1 cursor-pointer items-center justify-center rounded-full px-4 transition-all",
                                mode === 'daily'
                                    ? "bg-primary text-background-dark shadow-lg"
                                    : "text-[#a3b99d] hover:text-white"
                            )}
                        >
                            <Bike size={20} className="mr-2" />
                            <span className="truncate text-sm font-bold">Daily Wages</span>
                        </button>

                        {/* Long-Term Jobs Mode */}
                        <button
                            onClick={() => setMode('longterm')}
                            className={twMerge(
                                "relative z-10 flex h-full flex-1 cursor-pointer items-center justify-center rounded-full px-4 transition-all",
                                mode === 'longterm'
                                    ? "bg-yellow-400 text-background-dark shadow-lg"
                                    : "text-[#a3b99d] hover:text-white"
                            )}
                        >
                            <Briefcase size={20} className="mr-2" />
                            <span className="truncate text-sm font-bold">Long-Term Jobs</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className={twMerge("flex flex-col justify-between gap-3 rounded-2xl bg-surface-dark p-6 border border-border-dark transition-all cursor-default hover:border-opacity-100", mode === 'daily' ? "hover:border-primary/30" : "hover:border-yellow-400/30")}>
                    <div className="flex items-center justify-between">
                        <p className="text-[#a3b99d] text-sm font-medium">Active Workers</p>
                        <Users className={primaryColor} size={24} />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white tracking-tight">124</p>
                        <p className={twMerge("text-sm font-medium mt-1", primaryColor)}>+12% from yesterday</p>
                    </div>
                </div>

                <div className={twMerge("flex flex-col justify-between gap-3 rounded-2xl bg-surface-dark p-6 border border-border-dark transition-all cursor-default hover:border-opacity-100", mode === 'daily' ? "hover:border-primary/30" : "hover:border-yellow-400/30")}>
                    <div className="flex items-center justify-between">
                        <p className="text-[#a3b99d] text-sm font-medium">Avg Arrival</p>
                        <Timer className="text-white" size={24} />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white tracking-tight">5 min</p>
                        <p className="text-[#a3b99d] text-sm font-medium mt-1">Hyper-local range</p>
                    </div>
                </div>

                <div className={twMerge("flex flex-col justify-between gap-3 rounded-2xl bg-surface-dark p-6 border border-border-dark transition-all cursor-default hover:border-opacity-100", mode === 'daily' ? "hover:border-primary/30" : "hover:border-yellow-400/30")}>
                    <div className="flex items-center justify-between">
                        <p className="text-[#a3b99d] text-sm font-medium">Tasks Done</p>
                        <CheckCircle className="text-white" size={24} />
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white tracking-tight">1,204</p>
                        <p className={twMerge("text-sm font-medium mt-1", primaryColor)}>+8% this week</p>
                    </div>
                </div>

                {/* Map Preview Card */}
                <Link to="/map" className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-surface-dark p-6 border border-border-dark group cursor-pointer">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-all"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1Uvcbu0HAO-PEv8uWOgo2NUe2OmoFY_WUDmKOfUKMYbjX-sNHneuZuvGkk9d5pDMc7uLXMkEWjTURn5LG951mFO940n0Lu0rzlL4-4bOcwfV_cprHCp4idxoR5Lsv0NptTwlY23ALizbexxs9K7U5YsEiuolYS2pN5tuiM_BKeg4xOqCw0eO1_mvNYgwRDcio-G-mS1-JmPi2Zacv3ZWxTyKDREaCUK9Y9fzkAC1y7L1p7Sdkv1tNniQhtu_Pvagndz_2Bpil_EJl")' }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10"></div>
                    <div className="relative z-20 flex items-center justify-between">
                        <div>
                            <p className="text-white font-bold text-lg">Live Map</p>
                            <p className={twMerge("text-sm", primaryColor)}>View Nearby</p>
                        </div>
                        <div className={twMerge("h-8 w-8 rounded-full flex items-center justify-center text-background-dark", primaryBg)}>
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </Link>
            </div>

            {/* Main Feature / Action Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Hero Action */}
                <div className="lg:col-span-2 rounded-3xl bg-surface-dark border border-border-dark p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                    {/* Background accent */}
                    <div className={twMerge("absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full blur-3xl opacity-5", primaryBg)}></div>

                    <div className="relative z-10 flex flex-col gap-6 max-w-xl">
                        <div className={twMerge("flex items-center gap-2 font-bold text-sm uppercase tracking-wider", primaryColor)}>
                            <span className={twMerge("h-2 w-2 rounded-full animate-pulse", primaryBg)}></span>
                            {mode === 'daily' ? 'Live Mode Active' : 'Recruitment Mode Active'}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            {mode === 'daily' ? 'Instant Hiring' : 'Find Top Talent'} <br />
                            <span className={twMerge("text-transparent bg-clip-text bg-gradient-to-r", gradientText)}>
                                {mode === 'daily' ? 'On Demand.' : 'For Long Term.'}
                            </span>
                        </h2>

                        <p className="text-[#a3b99d] text-lg leading-relaxed">
                            {mode === 'daily'
                                ? 'Find reliable daily wage workers in your vicinity for immediate tasks. Real-time tracking and verified IDs.'
                                : 'Post jobs, review applicants, and hire professionals. AI-powered matching to find the perfect candidate.'}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            <Link to={mode === 'daily' ? "/post-task" : "/post-job"} className={twMerge("flex items-center justify-center gap-2 rounded-full px-8 py-4 text-background-dark font-bold text-lg transition-colors", primaryBg, buttonHover, shadowColor)}>
                                <PlusCircle size={24} />
                                {mode === 'daily' ? 'Post a Quick Task' : 'Post a Job'}
                            </Link>
                            <Link to={mode === 'daily' ? "/profile" : "/dashboard"} className="flex items-center justify-center gap-2 rounded-full bg-border-dark px-8 py-4 text-white font-bold text-lg hover:bg-[#3a4b35] transition-colors">
                                <History size={24} />
                                {mode === 'daily' ? 'View Profile' : 'View Dashboard'}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Quick Verification Status / Sidebar */}
                <div className="flex flex-col gap-4">
                    <div className="flex-1 rounded-3xl bg-surface-dark border border-border-dark p-6 flex flex-col gap-4">
                        <h3 className="text-white text-xl font-bold">Features</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-background-dark/50 border border-border-dark/50">
                                <div className={twMerge("mt-1", primaryColor)}>
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Verified Profiles</h4>
                                    <p className="text-[#a3b99d] text-sm">All workers are ID verified</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-background-dark/50 border border-border-dark/50">
                                <div className={twMerge("mt-1", primaryColor)}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Real-time Tracking</h4>
                                    <p className="text-[#a3b99d] text-sm">Track arrival in real-time</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-background-dark/50 border border-border-dark/50">
                                <div className={twMerge("mt-1", primaryColor)}>
                                    <DollarSign size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Secure Payments</h4>
                                    <p className="text-[#a3b99d] text-sm">Escrow system protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className="rounded-3xl bg-surface-dark border border-border-dark overflow-hidden">
                <div className="flex items-center justify-between p-6 md:p-8 border-b border-border-dark">
                    <h3 className="text-2xl font-bold text-white">Recent Hires</h3>
                    <button className={twMerge("text-sm font-bold hover:underline", primaryColor)}>View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-background-dark/30 text-[#a3b99d] text-sm uppercase tracking-wider">
                                <th className="p-6 font-medium">Worker</th>
                                <th className="p-6 font-medium">Task</th>
                                <th className="p-6 font-medium">Status</th>
                                <th className="p-6 font-medium">Amount</th>
                                <th className="p-6 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-dark">
                            <tr className="group hover:bg-background-dark/20 transition-colors">
                                <td className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmUhb5wwsucy0CINAkg6toN8kzFNI-347BzkLk6T7-GDzGlQXXMM-gYWsqirXSALwSqzFhLgHG9jBaouZX-lHafb27WycrvyCvcZwFRT3nszwcgZ2QdILcN8j9MBpotLDueG3GCur369Shl5dcXpIB9ZnUZcDnphTIm6W5RtoyBOnw7W4UtC4T9yDJ_kzgYiUWvivXFNLRhNP_5fW9rtiX_NNfVpZGYq_uf0rt6gSIgtV5GFsqFuVTjLjL4RtnKMkQ1SI7CyO_1tC5")' }}></div>
                                        <div>
                                            <p className="text-white font-bold">Rajesh Kumar</p>
                                            <p className="text-xs text-[#a3b99d]">Electrician • 4.8 ★</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6 text-white">Home Wiring Fix</td>
                                <td className="p-6">
                                    <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary">
                                        In Progress
                                    </span>
                                </td>
                                <td className="p-6 text-white font-mono">₹500</td>
                                <td className="p-6 text-right">
                                    <button className="h-8 w-8 rounded-full bg-border-dark text-white hover:bg-white hover:text-background-dark inline-flex items-center justify-center transition-all">
                                        <MessageSquare size={18} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="group hover:bg-background-dark/20 transition-colors">
                                <td className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSWqFju2nntRPFq3pOULFSw6Nwbsdv6dq25HCSsF3ib5FJRpdbUgKsphZlMX3Ll2nJzE-Pr3mHPSb--lGZ25UTAAZCB-RWM4c2PQQlzZXvThdl6ak6KeDX-jQCp80b3n8NhOGuZL5moU9ML8ETWjoewpUqEEcaY7-_MbQph5v8Q5Vvl83yVS-bp9LXbL15UHgnwTVl9KJUD3SLKUt67i_XgoJJNYH2ECFcXEDuGa27eTIJMYcPSUX-HUdCecrfJ6_2IU0eL-2SeoUz")' }}></div>
                                        <div>
                                            <p className="text-white font-bold">Sarah Jenkins</p>
                                            <p className="text-xs text-[#a3b99d]">Cleaner • 4.9 ★</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6 text-white">Deep Cleaning</td>
                                <td className="p-6">
                                    <span className="inline-flex items-center rounded-full bg-[#a3b99d]/20 px-3 py-1 text-xs font-bold text-[#a3b99d]">
                                        Completed
                                    </span>
                                </td>
                                <td className="p-6 text-white font-mono">₹1,200</td>
                                <td className="p-6 text-right">
                                    <button className="h-8 w-8 rounded-full bg-border-dark text-white hover:bg-white hover:text-background-dark inline-flex items-center justify-center transition-all">
                                        <FileText size={18} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ModeSwitch;
