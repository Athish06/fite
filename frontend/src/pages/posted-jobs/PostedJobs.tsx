import React, { useState } from 'react';
import { useMode } from '../../context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List, Plus, MapPin, Clock, IndianRupee, Users, X, ChevronRight, ChevronDown, Search } from 'lucide-react';
import TextType from '../../components/ui/TextType';
import { useTheme } from '../../context/ThemeContext';

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
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 300 }} className="fixed right-0 top-0 h-screen w-[500px] max-w-[90vw] bg-[#09090b] border-l border-zinc-800 z-50 flex flex-col">
                        <div className="h-0.5 bg-zinc-800">
                            <motion.div className={`h-full ${isDaily ? 'bg-emerald-500' : 'bg-amber-500'}`} initial={{ width: 0 }} animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }} transition={{ duration: 0.3 }} />
                        </div>
                        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
                            <div>
                                <h2 className="text-lg font-semibold text-zinc-100">Post New Job</h2>
                                <p className="text-xs text-zinc-500 mt-0.5">{isDaily ? 'Daily Wage Position' : 'Long-term Position'}</p>
                            </div>
                            <button onClick={onClose} className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 transition-colors"><X size={20} /></button>
                        </div>
                        <div className="px-6 py-4 border-b border-zinc-800/50">
                            <div className="flex items-center gap-2">
                                {steps.map((step, index) => (
                                    <React.Fragment key={step}>
                                        <span className={`text-xs font-medium ${index <= currentStep ? 'text-zinc-300' : 'text-zinc-600'}`}>{step}</span>
                                        {index < steps.length - 1 && <ChevronRight size={12} className="text-zinc-700" />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto px-6 py-6">
                            <AnimatePresence mode="wait">
                                <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-5">
                                    {currentStep === 0 && (
                                        <>
                                            <div>
                                                <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">Job Title</label>
                                                <input type="text" placeholder={isDaily ? "e.g., Plumbing Work" : "e.g., Frontend Developer"} className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none" />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">Category</label>
                                                <select className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 focus:ring-1 focus:ring-zinc-600 focus:outline-none cursor-pointer">
                                                    <option value="" className="bg-zinc-900">Select Category</option>
                                                    {isDaily ? (<><option value="plumbing" className="bg-zinc-900">Plumbing</option><option value="electrical" className="bg-zinc-900">Electrical</option><option value="painting" className="bg-zinc-900">Painting</option><option value="cleaning" className="bg-zinc-900">Cleaning</option><option value="moving" className="bg-zinc-900">Moving & Labor</option></>) : (<><option value="fulltime" className="bg-zinc-900">Full-time</option><option value="parttime" className="bg-zinc-900">Part-time</option><option value="internship" className="bg-zinc-900">Internship</option><option value="contract" className="bg-zinc-900">Contract</option></>)}
                                                </select>
                                            </div>
                                        </>
                                    )}
                                    {currentStep === 1 && (<div><label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">Description</label><textarea placeholder={isDaily ? "Describe the work..." : "Describe the role..."} rows={8} className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none resize-none" /></div>)}
                                    {currentStep === 2 && (<>{isDaily ? (<><div><label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">Address</label><input type="text" placeholder="Enter address or landmark" className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none" /></div><button className="w-full py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400 text-sm flex items-center justify-center gap-2 hover:bg-zinc-700 hover:text-zinc-300 transition-colors"><MapPin size={16} />Use current location</button></>) : (<><div><label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">Requirements</label><textarea placeholder="List requirements (one per line)" rows={5} className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none resize-none" /></div><div><label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">Experience</label><input type="text" placeholder="e.g., 2+ years" className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none" /></div></>)}</>)}
                                    {currentStep === 3 && (<><div><label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">{isDaily ? 'Daily Wage (₹)' : 'Salary Range'}</label><input type="text" placeholder={isDaily ? "e.g., 800" : "e.g., 8-12 LPA"} className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none" /></div>{isDaily ? (<div className="grid grid-cols-2 gap-4"><div><label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">Start Time</label><input type="time" className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 focus:ring-1 focus:ring-zinc-600 focus:outline-none" /></div><div><label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">End Time</label><input type="time" className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 focus:ring-1 focus:ring-zinc-600 focus:outline-none" /></div></div>) : (<div><label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-1.5">Location</label><input type="text" placeholder="e.g., Bangalore / Remote" className="w-full bg-zinc-900/50 border-none rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:ring-1 focus:ring-zinc-600 focus:outline-none" /></div>)}</>)}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="px-6 py-4 border-t border-zinc-800 flex items-center gap-3">
                            {currentStep > 0 && (<button onClick={handleBack} className="px-5 py-2.5 rounded-lg bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-700 transition-colors">Back</button>)}
                            <button onClick={handleNext} className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${currentStep === totalSteps - 1 ? isDaily ? 'bg-emerald-600 text-white hover:bg-emerald-500' : 'bg-amber-600 text-white hover:bg-amber-500' : 'bg-white text-black hover:bg-zinc-200'}`}>{currentStep === totalSteps - 1 ? 'Post Job' : 'Continue'}</button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// Sparkline Component
const Sparkline: React.FC<{ trend: 'up' | 'down' | 'stable' }> = ({ trend }) => {
    const paths = { up: "M0,16 L8,14 L16,10 L24,12 L32,6 L40,8 L48,4", down: "M0,4 L8,6 L16,8 L24,5 L32,10 L40,14 L48,12", stable: "M0,10 L8,8 L16,12 L24,9 L32,11 L40,8 L48,10" };
    return (<svg width="48" height="20" viewBox="0 0 48 20" className="opacity-60"><path d={paths[trend]} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
};

// Filter Sidebar Component - Simplified for Posted Jobs
interface FilterSidebarProps {
    isDark: boolean;
    isDaily: boolean;
    categoryFilter: string;
    setCategoryFilter: (v: string) => void;
    statusFilter: string;
    setStatusFilter: (v: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isDark, isDaily, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter }) => {
    const [expandedSections, setExpandedSections] = useState({ category: true, status: true });
    const toggleSection = (section: keyof typeof expandedSections) => setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    const filterBtnClass = (active: boolean) => `w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${active ? isDark ? 'bg-white text-black' : 'bg-black text-white' : isDark ? 'text-neutral-400 hover:bg-white/10 hover:text-white' : 'text-neutral-600 hover:bg-neutral-100 hover:text-black'}`;
    const categories = isDaily ? ['All', 'Plumbing', 'Electrical', 'Painting', 'Cleaning', 'Moving & Labor', 'Event Helper'] : ['All', 'Full-time', 'Part-time', 'Internship', 'Contract', 'Freelance'];
    const statuses = ['All', 'Active', 'Ongoing', 'Completed'];
    const sectionHeaderClass = `flex items-center justify-between w-full py-3 px-3 rounded-xl cursor-pointer transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-neutral-100 hover:bg-neutral-200 border border-neutral-200'}`;

    return (
        <div
            className={`w-56 shrink-0 rounded-xl p-4 h-fit sticky top-24 transition-colors ${isDark ? 'bg-white/[0.02] border border-white/10' : 'bg-white/60 border border-neutral-300/80 backdrop-blur-sm'}`}
            style={!isDark ? { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' } : {}}
        >
            <div className="mb-4">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-neutral-200'}`}>
                    <Search size={16} className={isDark ? 'text-neutral-500' : 'text-neutral-400'} />
                    <input type="text" placeholder="Search jobs..." className={`bg-transparent text-sm w-full outline-none placeholder:text-neutral-500 ${isDark ? 'text-white' : 'text-black'}`} />
                </div>
            </div>

            {/* Status Filter */}
            <div className="mb-3">
                <button onClick={() => toggleSection('status')} className={sectionHeaderClass}>
                    <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-black'}`}>Status</span>
                    <ChevronDown size={16} className={`transition-transform ${expandedSections.status ? 'rotate-180' : ''} ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} />
                </button>
                <AnimatePresence>{expandedSections.status && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="pt-2 space-y-1">{statuses.map((status) => (<button key={status} onClick={() => setStatusFilter(status.toLowerCase())} className={filterBtnClass(statusFilter === status.toLowerCase())}>{status}</button>))}</div></motion.div>)}</AnimatePresence>
            </div>

            {/* Category Filter */}
            <div>
                <button onClick={() => toggleSection('category')} className={sectionHeaderClass}>
                    <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-black'}`}>Category</span>
                    <ChevronDown size={16} className={`transition-transform ${expandedSections.category ? 'rotate-180' : ''} ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} />
                </button>
                <AnimatePresence>{expandedSections.category && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="pt-2 space-y-1">{categories.map((cat) => (<button key={cat} onClick={() => setCategoryFilter(cat.toLowerCase())} className={filterBtnClass(categoryFilter === cat.toLowerCase())}>{cat}</button>))}</div></motion.div>)}</AnimatePresence>
            </div>
        </div>
    );
};

const PostedJobs: React.FC = () => {
    const { mode } = useMode();
    const { isDark } = useTheme();
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    const isDaily = mode === 'daily';

    const dailyWageJobs = [
        { id: 1, title: "Plumbing Work", location: "Indiranagar, Bangalore", pay: "₹800/day", time: "9 AM - 6 PM", applicants: 12, status: "active", postedAt: "2h ago", trend: 'up' as const },
        { id: 2, title: "Event Helper", location: "Palace Grounds, Bangalore", pay: "₹1,200/day", time: "2 PM - 11 PM", applicants: 8, status: "active", postedAt: "5h ago", trend: 'stable' as const },
        { id: 3, title: "Painting Work", location: "Koramangala, Bangalore", pay: "₹900/day", time: "8 AM - 5 PM", applicants: 5, status: "active", postedAt: "1d ago", trend: 'down' as const }
    ];

    const longTermJobs = [
        { id: 1, title: "Software Development Intern", location: "HSR Layout, Bangalore", pay: "₹25,000/month", type: "Internship", applicants: 45, status: "active", postedAt: "3d ago", trend: 'up' as const },
        { id: 2, title: "Frontend Developer", location: "Whitefield, Bangalore", pay: "₹12 LPA", type: "Full-time", applicants: 23, status: "active", postedAt: "1w ago", trend: 'stable' as const },
        { id: 3, title: "UI/UX Designer", location: "Koramangala, Bangalore", pay: "₹10 LPA", type: "Full-time", applicants: 18, status: "active", postedAt: "1w ago", trend: 'up' as const }
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
            {/* Background Pattern - Watercolor Paper Texture like AppliedJobs */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden z-0"
                style={{
                    left: 0,
                    right: 0,
                    backgroundColor: isDark ? '#09090b' : (isDaily ? '#F5F9F7' : '#FAF8F5')
                }}
            >
                {/* Grainy Paper Texture */}
                {!isDark && (
                    <div
                        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-multiply"
                        style={{ filter: 'contrast(110%) brightness(100%)' }}
                    />
                )}

                {/* Organic Watercolor Gradients */}
                {!isDark && (isDaily ? (
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
                ))}
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-8">
                <div>
                    <h1 className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-neutral-800'}`}>
                        <TextType text="Posted Jobs" typingSpeed={80} loop={false} showCursor={false} />
                    </h1>
                    <p className={`text-sm mt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        {isDaily ? "Manage your daily wage listings" : "Track your long-term job postings"}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {/* View Toggle - Icons with proper boundaries */}
                    <div className={`relative flex items-center p-1.5 rounded-xl overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-neutral-200'}`}>
                        <motion.div
                            layoutId="viewTogglePill"
                            className={`absolute h-9 w-10 rounded-lg ${isDark ? 'bg-white' : 'bg-black'}`}
                            initial={false}
                            animate={{ x: viewMode === 'card' ? 0 : 44 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                        <button
                            onClick={() => setViewMode('card')}
                            className={`relative z-10 w-10 h-9 flex items-center justify-center rounded-lg transition-colors ${viewMode === 'card' ? isDark ? 'text-black' : 'text-white' : isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`relative z-10 w-10 h-9 flex items-center justify-center rounded-lg transition-colors ${viewMode === 'list' ? isDark ? 'text-black' : 'text-white' : isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>

                    {/* Post Button */}
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg active:scale-95 ${isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'}`}
                    >
                        <Plus size={18} />
                        Post Job
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex gap-8">
                <FilterSidebar isDark={isDark} isDaily={isDaily} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} statusFilter={statusFilter} setStatusFilter={setStatusFilter} />

                <div className="flex-1 min-w-0">
                    <AnimatePresence mode="wait">
                        {viewMode === 'card' ? (
                            <motion.div key="cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                {currentJobs.map((job, index) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => handleJobClick(job.id)}
                                        className={`group relative cursor-pointer p-6 pl-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-white/[0.04] border border-white/10 hover:border-white/20' : 'bg-white border border-neutral-200 hover:shadow-lg'}`}
                                    >
                                        {/* Left accent line */}
                                        <div className={`absolute left-0 top-4 bottom-4 w-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-neutral-800'}`} />
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <h3 className={`text-lg font-bold leading-tight mb-1.5 ${isDark ? 'text-white' : 'text-black'}`}>{job.title}</h3>
                                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>{job.status}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3 mb-6">
                                            <div className={`flex items-center gap-3 text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                                <MapPin size={16} className="opacity-70" /><span>{job.location}</span>
                                            </div>
                                            <div className={`flex items-center gap-3 text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                                <IndianRupee size={16} className="opacity-70" /><span className="font-bold">{job.pay}</span>
                                            </div>
                                            {isDaily && 'time' in job && (
                                                <div className={`flex items-center gap-3 text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                                    <Clock size={16} className="opacity-70" /><span>{job.time}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className={`pt-4 border-t flex items-center justify-between ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                                            <div className="flex items-center gap-3">
                                                <Users size={16} className={isDark ? 'text-neutral-400' : 'text-neutral-500'} />
                                                <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>{job.applicants} Applicants</span>
                                                <div className={`scale-75 origin-left ${isDaily ? 'text-emerald-500' : 'text-amber-500'}`}><Sparkline trend={job.trend} /></div>
                                            </div>
                                            <span className={`text-xs font-medium ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>{job.postedAt}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                                <div className={`grid grid-cols-12 gap-4 px-6 py-3 text-[11px] uppercase tracking-wider font-bold ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                                    <div className="col-span-4">Job Title</div>
                                    <div className="col-span-3">Location</div>
                                    <div className="col-span-2">Pay</div>
                                    <div className="col-span-2">Applicants</div>
                                    <div className="col-span-1 text-right">Posted</div>
                                </div>
                                {currentJobs.map((job, index) => (
                                    <motion.div key={job.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} onClick={() => handleJobClick(job.id)} className={`group relative grid grid-cols-12 gap-4 items-center cursor-pointer pl-8 pr-6 py-5 rounded-xl transition-all duration-200 ${isDark ? 'bg-white/[0.04] border border-white/10 hover:border-white/20' : 'bg-white border border-neutral-200 hover:shadow-md'}`}>
                                        {/* Left accent line */}
                                        <div className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-neutral-800'}`} />
                                        <div className="col-span-4 flex items-center gap-4">
                                            <div className={`w-2.5 h-2.5 rounded-full ${isDaily ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                            <div>
                                                <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>{job.title}</div>
                                                <span className={`text-xs font-medium capitalize ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>{job.status}</span>
                                            </div>
                                        </div>
                                        <div className={`col-span-3 flex items-center gap-2 text-sm font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                                            <MapPin size={14} className="opacity-70" /><span className="truncate">{job.location}</span>
                                        </div>
                                        <div className={`col-span-2 text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>{job.pay}</div>
                                        <div className="col-span-2 flex items-center gap-3">
                                            <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>{job.applicants}</span>
                                            <div className={`scale-75 origin-left ${isDaily ? 'text-emerald-500' : 'text-amber-500'}`}><Sparkline trend={job.trend} /></div>
                                        </div>
                                        <div className={`col-span-1 text-xs font-medium text-right ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`}>{job.postedAt}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <PostJobDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} mode={isDaily ? 'daily' : 'longterm'} />
        </div>
    );
};

export default PostedJobs;
