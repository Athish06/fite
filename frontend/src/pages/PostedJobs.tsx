import React, { useState } from 'react';
import { useMode } from '../context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List, Plus, MapPin, Clock, IndianRupee, Users, X, Briefcase, ChevronRight } from 'lucide-react';
import TextType from '../components/ui/TextType';

// Slide-Over Drawer Component
interface PostJobDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'daily' | 'longterm';
}

const PostJobDrawer: React.FC<PostJobDrawerProps> = ({ isOpen, onClose, mode }) => {
    const isDaily = mode === 'daily';
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 4;

    const steps = isDaily 
        ? ['Details', 'Description', 'Location', 'Pay & Time']
        : ['Details', 'Description', 'Requirements', 'Compensation'];

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            onClose();
            setCurrentStep(0);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-screen w-[500px] max-w-[90vw] bg-[#09090b] border-l border-zinc-800 z-50 flex flex-col"
                    >
                        {/* Progress Line */}
                        <div className="h-0.5 bg-zinc-800">
                            <motion.div
                                className={`h-full ${isDaily ? 'bg-emerald-500' : 'bg-amber-500'}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
                            <div>
                                <h2 className="text-lg font-semibold text-zinc-100">Post New Job</h2>
                                <p className="text-xs text-zinc-500 mt-0.5">{isDaily ? 'Daily Wage Position' : 'Long-term Position'}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Step Indicators */}
                        <div className="px-6 py-4 border-b border-zinc-800/50">
                            <div className="flex items-center gap-2">
                                {steps.map((step, index) => (
                                    <React.Fragment key={step}>
                                        <span className={`text-xs font-medium ${index <= currentStep ? 'text-zinc-300' : 'text-zinc-600'}`}>
                                            {step}
                                        </span>
                                        {index < steps.length - 1 && (
                                            <ChevronRight size={12} className="text-zinc-700" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="flex-1 overflow-y-auto px-6 py-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-5"
                                >
                                    {currentStep === 0 && (
                                        <>
                                            <div>
                                                <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                    Job Title
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={isDaily ? "e.g., Plumbing Work" : "e.g., Frontend Developer"}
                                                    className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                    Category
                                                </label>
                                                <select className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all cursor-pointer">
                                                    <option value="" className="bg-zinc-900">Select Category</option>
                                                    {isDaily ? (
                                                        <>
                                                            <option value="plumbing" className="bg-zinc-900">Plumbing</option>
                                                            <option value="electrical" className="bg-zinc-900">Electrical</option>
                                                            <option value="painting" className="bg-zinc-900">Painting</option>
                                                            <option value="cleaning" className="bg-zinc-900">Cleaning</option>
                                                            <option value="moving" className="bg-zinc-900">Moving & Labor</option>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <option value="fulltime" className="bg-zinc-900">Full-time</option>
                                                            <option value="parttime" className="bg-zinc-900">Part-time</option>
                                                            <option value="internship" className="bg-zinc-900">Internship</option>
                                                            <option value="contract" className="bg-zinc-900">Contract</option>
                                                        </>
                                                    )}
                                                </select>
                                            </div>
                                        </>
                                    )}

                                    {currentStep === 1 && (
                                        <div>
                                            <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                Description
                                            </label>
                                            <textarea
                                                placeholder={isDaily ? "Describe the work in detail..." : "Describe the role and responsibilities..."}
                                                rows={8}
                                                className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all resize-none"
                                            />
                                        </div>
                                    )}

                                    {currentStep === 2 && (
                                        <>
                                            {isDaily ? (
                                                <>
                                                    <div>
                                                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                            Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter address or landmark"
                                                            className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all"
                                                        />
                                                    </div>
                                                    <button className="w-full py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 text-sm flex items-center justify-center gap-2 hover:bg-zinc-700 hover:text-zinc-300 transition-colors">
                                                        <MapPin size={16} />
                                                        Use current location
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <div>
                                                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                            Requirements
                                                        </label>
                                                        <textarea
                                                            placeholder="List requirements (one per line)"
                                                            rows={5}
                                                            className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all resize-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                            Experience
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="e.g., 2+ years"
                                                            className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all"
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    )}

                                    {currentStep === 3 && (
                                        <>
                                            <div>
                                                <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                    {isDaily ? 'Daily Wage (₹)' : 'Salary Range'}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={isDaily ? "e.g., 800" : "e.g., 8-12 LPA"}
                                                    className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all"
                                                />
                                            </div>
                                            {isDaily ? (
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                            Start Time
                                                        </label>
                                                        <input
                                                            type="time"
                                                            className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                            End Time
                                                        </label>
                                                        <input
                                                            type="time"
                                                            className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">
                                                        Location
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="e.g., Bangalore / Remote"
                                                        className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none transition-all"
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Footer Actions */}
                        <div className="px-6 py-4 border-t border-zinc-800 flex items-center gap-3">
                            {currentStep > 0 && (
                                <button
                                    onClick={handleBack}
                                    className="px-5 py-2.5 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-700 transition-colors"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                    currentStep === totalSteps - 1
                                        ? isDaily
                                            ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                                            : 'bg-amber-600 text-white hover:bg-amber-500'
                                        : 'bg-white text-black hover:bg-zinc-200'
                                }`}
                            >
                                {currentStep === totalSteps - 1 ? 'Post Job' : 'Continue'}
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// Sparkline Component (Static SVG for now)
const Sparkline: React.FC<{ trend: 'up' | 'down' | 'stable' }> = ({ trend }) => {
    const paths = {
        up: "M0,16 L8,14 L16,10 L24,12 L32,6 L40,8 L48,4",
        down: "M0,4 L8,6 L16,8 L24,5 L32,10 L40,14 L48,12",
        stable: "M0,10 L8,8 L16,12 L24,9 L32,11 L40,8 L48,10"
    };

    return (
        <svg width="48" height="20" viewBox="0 0 48 20" className="opacity-60">
            <path
                d={paths[trend]}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const PostedJobs: React.FC = () => {
    const { mode } = useMode();
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            postedAt: "2h ago",
            trend: 'up' as const
        },
        {
            id: 2,
            title: "Event Helper",
            location: "Palace Grounds, Bangalore",
            pay: "₹1,200/day",
            time: "2 PM - 11 PM",
            applicants: 8,
            status: "active",
            postedAt: "5h ago",
            trend: 'stable' as const
        },
        {
            id: 3,
            title: "Painting Work",
            location: "Koramangala, Bangalore",
            pay: "₹900/day",
            time: "8 AM - 5 PM",
            applicants: 5,
            status: "active",
            postedAt: "1d ago",
            trend: 'down' as const
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
            postedAt: "3d ago",
            trend: 'up' as const
        },
        {
            id: 2,
            title: "Frontend Developer",
            location: "Whitefield, Bangalore",
            pay: "₹12 LPA",
            type: "Full-time",
            applicants: 23,
            status: "active",
            postedAt: "1w ago",
            trend: 'stable' as const
        },
        {
            id: 3,
            title: "UI/UX Designer",
            location: "Koramangala, Bangalore",
            pay: "₹10 LPA",
            type: "Full-time",
            applicants: 18,
            status: "active",
            postedAt: "1w ago",
            trend: 'up' as const
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
        <div className="w-full min-h-screen relative px-6 md:px-8 pt-8 pb-8">
            {/* Background Pattern */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-gray-100 dark:bg-neutral-900" style={{ left: 0, right: 0 }}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150"></div>
                <div className={`absolute top-[-30%] right-[-20%] w-[80%] h-[80%] rounded-full ${isDaily ? 'bg-green-500/10' : 'bg-yellow-500/10'} blur-[140px]`} />
                <div className={`absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full ${isDaily ? 'bg-emerald-500/8' : 'bg-orange-500/8'} blur-[120px]`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full ${isDaily ? 'bg-green-400/5' : 'bg-yellow-400/5'} blur-[160px]`} />
            </div>

            {/* Header Toolbar */}
            <div className="relative z-10 flex items-center justify-between mb-8">
                {/* Left: Title with Typewriter */}
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
                        <TextType
                            text="Posted Jobs"
                            typingSpeed={80}
                            loop={false}
                            showCursor={false}
                        />
                    </h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        {isDaily ? "Manage your daily wage job listings" : "Track your long-term job postings"}
                    </p>
                </div>

                {/* Right: Control Bar */}
                <div className="flex items-center gap-3">
                    {/* View Switcher - Segmented Control */}
                    <div className="relative flex items-center p-1 rounded-lg bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
                        <motion.div
                            layoutId="viewToggle"
                            className="absolute h-8 rounded-md bg-white dark:bg-neutral-700 shadow-sm"
                            initial={false}
                            animate={{
                                x: viewMode === 'card' ? 4 : 44,
                                width: 36
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                        <button
                            onClick={() => setViewMode('card')}
                            className={`relative z-10 w-9 h-8 flex items-center justify-center rounded-md transition-colors ${
                                viewMode === 'card' ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400'
                            }`}
                        >
                            <LayoutGrid size={16} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`relative z-10 w-9 h-8 flex items-center justify-center rounded-md transition-colors ${
                                viewMode === 'list' ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400'
                            }`}
                        >
                            <List size={16} />
                        </button>
                    </div>

                    {/* Post Button */}
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm ${
                            isDaily 
                                ? 'bg-green-500 text-white hover:bg-green-600' 
                                : 'bg-yellow-500 text-black hover:bg-yellow-600'
                        }`}
                    >
                        <Plus size={16} />
                        Post Job
                    </button>
                </div>
            </div>

            {/* Jobs Grid/List */}
            <AnimatePresence mode="wait">
                {viewMode === 'card' ? (
                    <motion.div
                        key="cards"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                    >
                        {currentJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => handleJobClick(job.id)}
                                className="group relative cursor-pointer p-5 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                {/* Colored Accent Line */}
                                <div className={`absolute left-0 top-4 bottom-4 w-0.5 rounded-full ${
                                    isDaily ? 'bg-emerald-500' : 'bg-amber-500'
                                }`} />

                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 pr-3">
                                        {job.title}
                                    </h3>
                                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400 capitalize">
                                        {job.status}
                                    </span>
                                </div>

                                {/* Metrics Row */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        <MapPin size={14} className="text-neutral-500 dark:text-neutral-500" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                                            <IndianRupee size={14} className="text-neutral-500 dark:text-neutral-500" />
                                            <span className="font-medium">{job.pay}</span>
                                        </div>
                                        {isDaily && 'time' in job && (
                                            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                                <Clock size={14} className="text-neutral-500 dark:text-neutral-500" />
                                                <span>{job.time}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2">
                                            <Users size={14} className="text-neutral-500 dark:text-neutral-500" />
                                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{job.applicants} Applicants</span>
                                        </div>
                                        <div className={isDaily ? 'text-emerald-500' : 'text-amber-500'}>
                                            <Sparkline trend={job.trend} />
                                        </div>
                                    </div>
                                    <span className="text-xs text-neutral-500 dark:text-neutral-500">{job.postedAt}</span>
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
                        className="space-y-2"
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 px-5 py-3 text-[11px] uppercase tracking-wider font-semibold text-zinc-600">
                            <div className="col-span-4">Job Title</div>
                            <div className="col-span-3">Location</div>
                            <div className="col-span-2">Pay</div>
                            <div className="col-span-2">Applicants</div>
                            <div className="col-span-1 text-right">Posted</div>
                        </div>

                        {currentJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => handleJobClick(job.id)}
                                className="group grid grid-cols-12 gap-4 items-center cursor-pointer px-5 py-4 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200"
                            >
                                {/* Accent dot */}
                                <div className="col-span-4 flex items-center gap-3">
                                    <div className={`w-1.5 h-1.5 rounded-full ${isDaily ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                    <div>
                                        <div className="text-sm font-medium text-zinc-100">{job.title}</div>
                                        <span className="text-xs text-zinc-600 capitalize">{job.status}</span>
                                    </div>
                                </div>
                                <div className="col-span-3 flex items-center gap-2 text-sm text-zinc-500">
                                    <MapPin size={12} className="text-zinc-600" />
                                    <span className="truncate">{job.location}</span>
                                </div>
                                <div className="col-span-2 text-sm font-medium text-zinc-400">
                                    {job.pay}
                                </div>
                                <div className="col-span-2 flex items-center gap-2">
                                    <span className="text-sm text-zinc-300">{job.applicants}</span>
                                    <div className={isDaily ? 'text-emerald-500' : 'text-amber-500'}>
                                        <Sparkline trend={job.trend} />
                                    </div>
                                </div>
                                <div className="col-span-1 text-xs text-zinc-600 text-right">
                                    {job.postedAt}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Post Job Drawer */}
            <PostJobDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                mode={isDaily ? 'daily' : 'longterm'}
            />
        </div>
    );
};

export default PostedJobs;
