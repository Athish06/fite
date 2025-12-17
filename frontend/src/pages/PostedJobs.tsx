import React, { useState } from 'react';
import { useMode } from '../context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List, Plus, MapPin, Clock, IndianRupee, Users, Sparkles, ArrowRight, Briefcase, X } from 'lucide-react';
import Stepper, { Step } from '../components/ui/Stepper';

// Post Job Modal Component
interface PostJobModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'daily' | 'longterm';
}

const PostJobModal: React.FC<PostJobModalProps> = ({ isOpen, onClose, mode }) => {
    const isDaily = mode === 'daily';

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] max-h-[85vh] z-50 rounded-3xl border ${isDaily ? 'border-emerald-500/20 bg-gradient-to-b from-[#0a120a] to-[#0a0f0a]' : 'border-amber-500/20 bg-gradient-to-b from-[#12100a] to-[#0f0d0a]'} shadow-2xl overflow-hidden`}
                    >
                        {/* Header */}
                        <div className={`flex items-center justify-between px-6 py-5 border-b border-white/5 ${isDaily ? 'bg-emerald-900/10' : 'bg-amber-900/10'}`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDaily ? 'bg-emerald-500/20' : 'bg-amber-500/20'}`}>
                                    <Briefcase size={20} className={isDaily ? 'text-emerald-400' : 'text-amber-400'} />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Post New Job</div>
                                    <div className="text-white/50 text-sm">{isDaily ? 'Daily Wage Position' : 'Long-term Position'}</div>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-colors"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Stepper Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
                            <Stepper
                                onFinalStepCompleted={onClose}
                            >
                                {isDaily ? (
                                    <>
                                        <Step>
                                            <div className="space-y-4">
                                                <label className="text-white/70 text-sm font-medium">Job Details</label>
                                                <input type="text" placeholder="Job Title (e.g., Plumbing Work)" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none" />
                                                <select className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-emerald-500/50 focus:outline-none appearance-none cursor-pointer">
                                                    <option value="" className="bg-neutral-900">Select Category</option>
                                                    <option value="plumbing" className="bg-neutral-900">Plumbing</option>
                                                    <option value="electrical" className="bg-neutral-900">Electrical</option>
                                                    <option value="painting" className="bg-neutral-900">Painting</option>
                                                    <option value="cleaning" className="bg-neutral-900">Cleaning</option>
                                                    <option value="moving" className="bg-neutral-900">Moving & Labor</option>
                                                </select>
                                            </div>
                                        </Step>
                                        <Step>
                                            <div className="space-y-4">
                                                <label className="text-white/70 text-sm font-medium">Description</label>
                                                <textarea placeholder="Describe the work in detail..." className="w-full h-40 p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none resize-none" />
                                            </div>
                                        </Step>
                                        <Step>
                                            <div className="space-y-4">
                                                <label className="text-white/70 text-sm font-medium">Location</label>
                                                <input type="text" placeholder="Enter address or landmark" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none" />
                                                <button className="w-full p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center justify-center gap-2 hover:bg-emerald-500/20 transition-colors">
                                                    <MapPin size={16} />
                                                    Use current location
                                                </button>
                                            </div>
                                        </Step>
                                        <Step>
                                            <div className="space-y-4">
                                                <label className="text-white/70 text-sm font-medium">Pay & Timing</label>
                                                <div className="flex items-center gap-3">
                                                    <IndianRupee size={20} className="text-white/50" />
                                                    <input type="number" placeholder="Daily wage (₹)" className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="text-white/50 text-xs mb-1 block">Start Time</label>
                                                        <input type="time" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-emerald-500/50 focus:outline-none" />
                                                    </div>
                                                    <div>
                                                        <label className="text-white/50 text-xs mb-1 block">End Time</label>
                                                        <input type="time" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-emerald-500/50 focus:outline-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Step>
                                    </>
                                ) : (
                                    <>
                                        <Step>
                                            <div className="space-y-4">
                                                <label className="text-white/70 text-sm font-medium">Job Details</label>
                                                <input type="text" placeholder="Job Title (e.g., Frontend Developer)" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-500/50 focus:outline-none" />
                                                <select className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-amber-500/50 focus:outline-none appearance-none cursor-pointer">
                                                    <option value="" className="bg-neutral-900">Select Job Type</option>
                                                    <option value="fulltime" className="bg-neutral-900">Full-time</option>
                                                    <option value="parttime" className="bg-neutral-900">Part-time</option>
                                                    <option value="internship" className="bg-neutral-900">Internship</option>
                                                    <option value="contract" className="bg-neutral-900">Contract</option>
                                                </select>
                                            </div>
                                        </Step>
                                        <Step>
                                            <div className="space-y-4">
                                                <label className="text-white/70 text-sm font-medium">Description</label>
                                                <textarea placeholder="Describe the role and responsibilities..." className="w-full h-40 p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-500/50 focus:outline-none resize-none" />
                                            </div>
                                        </Step>
                                        <Step>
                                            <div className="space-y-4">
                                                <label className="text-white/70 text-sm font-medium">Requirements</label>
                                                <textarea placeholder="List requirements (one per line)" className="w-full h-32 p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-500/50 focus:outline-none resize-none" />
                                                <input type="text" placeholder="Minimum experience (e.g., 2 years)" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-500/50 focus:outline-none" />
                                            </div>
                                        </Step>
                                        <Step>
                                            <div className="space-y-4">
                                                <label className="text-white/70 text-sm font-medium">Compensation</label>
                                                <div className="flex items-center gap-3">
                                                    <IndianRupee size={20} className="text-white/50" />
                                                    <input type="text" placeholder="Salary range (e.g., 8-12 LPA)" className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-500/50 focus:outline-none" />
                                                </div>
                                                <input type="text" placeholder="Location / Remote option" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-amber-500/50 focus:outline-none" />
                                            </div>
                                        </Step>
                                    </>
                                )}
                            </Stepper>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const PostedJobs: React.FC = () => {
    const { mode } = useMode();
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);

    const isDaily = mode === 'daily';

    // Dummy data for posted jobs
    const dailyWageJobs = [
        {
            id: 1,
            title: "Plumbing Work",
            location: "Indiranagar, Bangalore",
            pay: "₹800/day",
            time: "9 AM - 6 PM",
            applicants: 12,
            status: "active",
            postedAt: "2 hours ago"
        },
        {
            id: 2,
            title: "Event Helper",
            location: "Palace Grounds, Bangalore",
            pay: "₹1200/day",
            time: "2 PM - 11 PM",
            applicants: 8,
            status: "active",
            postedAt: "5 hours ago"
        },
        {
            id: 3,
            title: "Painting Work",
            location: "Koramangala, Bangalore",
            pay: "₹900/day",
            time: "8 AM - 5 PM",
            applicants: 5,
            status: "active",
            postedAt: "1 day ago"
        }
    ];

    const longTermJobs = [
        {
            id: 1,
            title: "Software Development Intern",
            location: "HSR Layout, Bangalore",
            pay: "₹25,000/month",
            type: "Internship",
            applicants: 45,
            status: "active",
            postedAt: "3 days ago"
        },
        {
            id: 2,
            title: "Frontend Developer",
            location: "Whitefield, Bangalore",
            pay: "₹12 LPA",
            type: "Full-time",
            applicants: 23,
            status: "active",
            postedAt: "1 week ago"
        },
        {
            id: 3,
            title: "UI/UX Designer",
            location: "Koramangala, Bangalore",
            pay: "₹10 LPA",
            type: "Full-time",
            applicants: 18,
            status: "active",
            postedAt: "1 week ago"
        }
    ];

    const currentJobs = isDaily ? dailyWageJobs : longTermJobs;

    const handleJobClick = (jobId: number) => {
        if (isDaily) {
            navigate(`/job-detail/${mode}/${jobId}`);
        } else {
            navigate(`/applicants/${mode}/${jobId}`);
        }
    };

    return (
        <div className="w-full min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                        Posted Jobs
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        {isDaily ? "Manage your daily wage job listings" : "Track your long-term job postings"}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {/* View Toggle */}
                    <div className="flex items-center gap-1 p-1 rounded-lg bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-white/10">
                        <button
                            onClick={() => setViewMode('card')}
                            className={`p-2 rounded-md transition-all ${
                                viewMode === 'card'
                                    ? 'bg-white dark:bg-neutral-700 shadow-sm'
                                    : 'hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
                            }`}
                        >
                            <LayoutGrid size={18} className="text-neutral-700 dark:text-neutral-300" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-all ${
                                viewMode === 'list'
                                    ? 'bg-white dark:bg-neutral-700 shadow-sm'
                                    : 'hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
                            }`}
                        >
                            <List size={18} className="text-neutral-700 dark:text-neutral-300" />
                        </button>
                    </div>

                    {/* Add Job Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsPostModalOpen(true)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all shadow-lg ${
                            isDaily
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-yellow-500 hover:bg-yellow-600'
                        }`}
                    >
                        <Plus size={20} />
                        Post Job
                    </motion.button>
                </div>
            </div>

            {/* Jobs Grid */}
            <AnimatePresence mode="wait">
                {viewMode === 'card' ? (
                    <motion.div
                        key="cards"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                    >
                        {currentJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => handleJobClick(job.id)}
                                className={`group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 bg-white dark:bg-neutral-800 border-2 ${
                                    isDaily 
                                        ? 'border-green-200 dark:border-green-900/30 hover:shadow-xl' 
                                        : 'border-yellow-200 dark:border-yellow-900/30 hover:shadow-xl'
                                }`}
                            >
                                {/* Magic Bento glow effect */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${isDaily ? 'from-green-500/5 via-transparent to-emerald-500/10' : 'from-yellow-500/5 via-transparent to-orange-500/10'}`} />
                                
                                <div className="relative p-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3 ${isDaily ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDaily ? 'bg-green-600 dark:bg-green-400' : 'bg-yellow-600 dark:bg-yellow-400'}`} />
                                                {job.status}
                                            </div>
                                            <h3 className={`text-xl font-bold text-neutral-800 dark:text-neutral-200 group-hover:${isDaily ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'} transition-colors mb-1`}>
                                                {job.title}
                                            </h3>
                                        </div>
                                        <div className={`p-2 rounded-xl ${isDaily ? 'bg-green-100 dark:bg-green-900/20' : 'bg-yellow-100 dark:bg-yellow-900/20'} group-hover:scale-110 transition-transform`}>
                                            <ArrowRight size={18} className={isDaily ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'} />
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                            <MapPin size={16} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <IndianRupee size={16} />
                                            <span className={`font-bold ${isDaily ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>{job.pay}</span>
                                        </div>
                                        {isDaily && 'time' in job && (
                                            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                                <Clock size={16} />
                                                <span>{job.time}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-white/10">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Users size={16} className="text-neutral-500 dark:text-neutral-400" />
                                            <span className="font-bold text-neutral-800 dark:text-neutral-200">{job.applicants}</span>
                                            <span className="text-neutral-500 dark:text-neutral-400">applicants</span>
                                        </div>
                                        <span className="text-xs text-neutral-500 dark:text-neutral-400">{job.postedAt}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3"
                    >
                        {currentJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => handleJobClick(job.id)}
                                className={`group cursor-pointer p-5 rounded-2xl backdrop-blur-sm transition-all duration-200 hover:translate-x-2 ${
                                    isDaily
                                        ? 'bg-emerald-900/10 border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-900/20'
                                        : 'bg-amber-900/10 border border-amber-500/10 hover:border-amber-500/30 hover:bg-amber-900/20'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5 flex-1">
                                        <div className={`p-3 rounded-2xl ${isDaily ? 'bg-emerald-500/10' : 'bg-amber-500/10'}`}>
                                            <Briefcase size={20} className={isDaily ? 'text-emerald-400' : 'text-amber-400'} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-lg font-bold text-white">{job.title}</h3>
                                                <span className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
                                                    isDaily ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'
                                                }`}>
                                                    {job.status}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-5 text-sm text-white/50">
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin size={13} />
                                                    {job.location}
                                                </span>
                                                <span className={`flex items-center gap-1.5 font-semibold ${isDaily ? 'text-emerald-400' : 'text-amber-400'}`}>
                                                    <IndianRupee size={13} />
                                                    {job.pay}
                                                </span>
                                                {isDaily && 'time' in job && (
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock size={13} />
                                                        {job.time}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8">
                                        <div className="flex items-center gap-2">
                                            <Users size={16} className="text-white/40" />
                                            <span className="font-bold text-white">{job.applicants}</span>
                                            <span className="text-sm text-white/40">applicants</span>
                                        </div>
                                        <span className="text-xs text-white/30 w-20 text-right">{job.postedAt}</span>
                                        <ArrowRight size={18} className={`opacity-0 group-hover:opacity-100 transition-opacity ${isDaily ? 'text-emerald-400' : 'text-amber-400'}`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Post Job Modal */}
            <PostJobModal 
                isOpen={isPostModalOpen} 
                onClose={() => setIsPostModalOpen(false)} 
                mode={isDaily ? 'daily' : 'longterm'} 
            />
        </div>
    );
};

export default PostedJobs;
