import React, { useState } from 'react';
import { useMode } from '../../context/ModeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List, MapPin, Clock, IndianRupee, Star, Calendar, CheckCircle, XCircle, Clock3, ChevronDown } from 'lucide-react';
import TextType from '../../components/ui/TextType';

type JobStatus = 'completed' | 'selected' | 'rejected' | 'waiting';
type DateFilter = 'today' | 'yesterday' | 'this-week' | 'this-month' | 'all';

interface DailyJob {
    id: number;
    title: string;
    location: string;
    pay: string;
    time: string;
    status: 'completed';
    completedAt: string;
    rating: number;
    employer: string;
    duration: string;
}

interface LongTermJob {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    status: JobStatus;
    appliedAt: string;
    responseAt?: string;
}

const AppliedJobs: React.FC = () => {
    const { mode } = useMode();
    const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
    const [dateFilter, setDateFilter] = useState<DateFilter>('today');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const isDaily = mode === 'daily';

    // Mock data for daily wage completed jobs
    const dailyJobs: DailyJob[] = [
        {
            id: 1,
            title: "Plumbing Repair",
            location: "Indiranagar, Bangalore",
            pay: "₹850",
            time: "9 AM - 5 PM",
            status: "completed",
            completedAt: "Today, 5:30 PM",
            rating: 4.8,
            employer: "Rahul Sharma",
            duration: "8 hours"
        },
        {
            id: 2,
            title: "Electrical Wiring",
            location: "Koramangala, Bangalore",
            pay: "₹1,200",
            time: "10 AM - 6 PM",
            status: "completed",
            completedAt: "Today, 6:00 PM",
            rating: 5.0,
            employer: "Priya Patel",
            duration: "8 hours"
        },
        {
            id: 3,
            title: "House Painting",
            location: "HSR Layout, Bangalore",
            pay: "₹900",
            time: "8 AM - 4 PM",
            status: "completed",
            completedAt: "Yesterday, 4:00 PM",
            rating: 4.5,
            employer: "Vikram Kumar",
            duration: "8 hours"
        },
        {
            id: 4,
            title: "AC Servicing",
            location: "Whitefield, Bangalore",
            pay: "₹700",
            time: "11 AM - 3 PM",
            status: "completed",
            completedAt: "Yesterday, 3:30 PM",
            rating: 4.9,
            employer: "Meera Singh",
            duration: "4 hours"
        }
    ];

    // Mock data for long-term job applications
    const longTermJobs: LongTermJob[] = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "TechCorp Solutions",
            location: "Bangalore",
            salary: "₹12 LPA",
            type: "Full-time",
            status: "selected",
            appliedAt: "Dec 15, 2025",
            responseAt: "Dec 17, 2025"
        },
        {
            id: 2,
            title: "UI/UX Designer",
            company: "DesignHub India",
            location: "Remote",
            salary: "₹10 LPA",
            type: "Full-time",
            status: "waiting",
            appliedAt: "Dec 16, 2025"
        },
        {
            id: 3,
            title: "React Developer Intern",
            company: "StartupXYZ",
            location: "Hyderabad",
            salary: "₹25,000/month",
            type: "Internship",
            status: "rejected",
            appliedAt: "Dec 10, 2025",
            responseAt: "Dec 14, 2025"
        },
        {
            id: 4,
            title: "Full Stack Developer",
            company: "GlobalTech",
            location: "Bangalore",
            salary: "₹15 LPA",
            type: "Full-time",
            status: "waiting",
            appliedAt: "Dec 18, 2025"
        }
    ];

    const dateFilterOptions = [
        { value: 'today', label: 'Today' },
        { value: 'yesterday', label: 'Yesterday' },
        { value: 'this-week', label: 'This Week' },
        { value: 'this-month', label: 'This Month' },
        { value: 'all', label: 'All Time' }
    ];

    const getStatusBadge = (status: JobStatus) => {
        switch (status) {
            case 'completed':
                return (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-xs font-medium">
                        <CheckCircle size={12} /> Completed
                    </span>
                );
            case 'selected':
                return (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-xs font-medium">
                        <CheckCircle size={12} /> Selected
                    </span>
                );
            case 'rejected':
                return (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-100 text-red-700 text-xs font-medium">
                        <XCircle size={12} /> Rejected
                    </span>
                );
            case 'waiting':
                return (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-100 text-amber-700 text-xs font-medium">
                        <Clock3 size={12} /> Waiting
                    </span>
                );
        }
    };

    // Calculate total earnings for daily wage
    const totalEarnings = dailyJobs.reduce((sum, job) => {
        const amount = parseInt(job.pay.replace('₹', '').replace(',', ''));
        return sum + amount;
    }, 0);

    const avgRating = (dailyJobs.reduce((sum, job) => sum + job.rating, 0) / dailyJobs.length).toFixed(1);

    return (
        <div className="w-full min-h-screen relative px-4 md:px-8 pt-8 pb-10">
            <div className="relative z-10 mx-auto w-full max-w-6xl">

            {/* Header Toolbar */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6">
                {/* Left: Title */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
                        <TextType
                            key={isDaily ? 'applied-daily' : 'applied-longterm'}
                            text={isDaily ? 'Job History' : 'Applications'}
                            typingSpeed={80}
                            loop={false}
                            showCursor={false}
                        />
                    </h1>
                    <p className="text-sm text-neutral-500 mt-1 font-medium">
                        {isDaily ? "Your completed jobs and earnings" : "Track your job applications"}
                    </p>
                </div>

                {/* Right: Control Bar */}
                <div className="flex items-center gap-3">
                    {/* Date Filter Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white border-2 border-neutral-200 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
                        >
                            <Calendar size={16} />
                            {dateFilterOptions.find(o => o.value === dateFilter)?.label}
                            <ChevronDown size={14} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isFilterOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full mt-2 right-0 w-44 bg-white rounded-2xl border-2 border-neutral-200 shadow-xl overflow-hidden z-20"
                                >
                                    {dateFilterOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => {
                                                setDateFilter(option.value as DateFilter);
                                                setIsFilterOpen(false);
                                            }}
                                            className={`w-full px-4 py-3 text-left text-sm transition-colors ${dateFilter === option.value
                                                ? 'bg-neutral-900 text-white font-semibold'
                                                : 'text-neutral-700 hover:bg-neutral-50'
                                                }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* View Switcher - Segmented Control */}
                    <div className="relative flex items-center p-1 rounded-xl bg-neutral-100 border-2 border-neutral-200">
                        <motion.div
                            layoutId="appliedViewToggle"
                            className="absolute h-9 w-10 rounded-lg bg-neutral-900"
                            initial={false}
                            animate={{
                                x: viewMode === 'card' ? 0 : 44
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                        <button
                            onClick={() => setViewMode('card')}
                            className={`relative z-10 w-10 h-9 flex items-center justify-center rounded-lg transition-colors ${viewMode === 'card' ? 'text-white' : 'text-neutral-600'
                                }`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`relative z-10 w-10 h-9 flex items-center justify-center rounded-lg transition-colors ${viewMode === 'list' ? 'text-white' : 'text-neutral-600'
                                }`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Summary for Daily Wage */}
            {isDaily && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
                >
                    <div
                        className="p-4 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm"
                    >
                        <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-1">Total Earned</p>
                        <p className="text-2xl font-bold text-neutral-800">₹{totalEarnings.toLocaleString()}</p>
                    </div>
                    <div
                        className="p-4 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm"
                    >
                        <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-1">Jobs Completed</p>
                        <p className="text-2xl font-bold text-neutral-800">{dailyJobs.length}</p>
                    </div>
                    <div
                        className="p-4 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm"
                    >
                        <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-1">Avg Rating</p>
                        <p className="text-2xl font-bold text-neutral-800 flex items-center gap-1">
                            <Star size={18} className="fill-amber-400 text-amber-400" />
                            {avgRating}
                        </p>
                    </div>
                </motion.div>
            )}

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
                        {isDaily ? (
                            // Daily Wage Completed Jobs
                            dailyJobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative cursor-pointer p-5 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300"
                                >
                                    {/* Accent Line */}
                                    <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-neutral-900/80" />

                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-lg font-semibold text-neutral-800 pr-3">{job.title}</h3>
                                        {getStatusBadge('completed')}
                                    </div>

                                    {/* Employer */}
                                    <p className="text-sm text-neutral-600 mb-3">by {job.employer}</p>

                                    {/* Metrics */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                                            <MapPin size={14} className="text-neutral-500" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 text-sm text-neutral-700">
                                                <IndianRupee size={14} className="text-neutral-500" />
                                                <span className="font-semibold">{job.pay}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                                                <Clock size={14} className="text-neutral-500" />
                                                <span>{job.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-sm">
                                            <Star size={14} className="fill-amber-400 text-amber-400" />
                                            <span className="font-medium text-neutral-700">{job.rating}</span>
                                        </div>
                                        <span className="text-xs text-neutral-500">{job.completedAt}</span>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            // Long Term Job Applications
                            longTermJobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative cursor-pointer p-5 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300"
                                >
                                    {/* Accent Line */}
                                    <div className={`absolute left-0 top-4 bottom-4 w-0.5 rounded-full ${job.status === 'selected' ? 'bg-emerald-500' :
                                        job.status === 'rejected' ? 'bg-red-500' :
                                            'bg-amber-500'
                                        }`} />

                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-neutral-800 pr-3">{job.title}</h3>
                                        {getStatusBadge(job.status)}
                                    </div>

                                    {/* Company */}
                                    <p className="text-sm font-medium text-neutral-700 mb-3">{job.company}</p>

                                    {/* Metrics */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                                            <MapPin size={14} className="text-neutral-500" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 text-sm text-neutral-700">
                                                <IndianRupee size={14} className="text-neutral-500" />
                                                <span className="font-medium">{job.salary}</span>
                                            </div>
                                            <span className="text-xs px-2 py-0.5 rounded-md border border-neutral-300 text-neutral-600">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                                        <span className="text-xs text-neutral-500">Applied: {job.appliedAt}</span>
                                        {job.responseAt && (
                                            <span className="text-xs text-neutral-500">Response: {job.responseAt}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))
                        )}
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
                        <div className="grid grid-cols-12 gap-4 rounded-2xl border-2 border-neutral-200 bg-white px-5 py-3 text-[11px] uppercase tracking-wider font-semibold text-neutral-500 shadow-sm">
                            <div className="col-span-3">Job Title</div>
                            <div className="col-span-3">{isDaily ? 'Employer' : 'Company'}</div>
                            <div className="col-span-2">{isDaily ? 'Earnings' : 'Salary'}</div>
                            <div className="col-span-2">Status</div>
                            <div className="col-span-2 text-right">{isDaily ? 'Rating' : 'Applied'}</div>
                        </div>

                        {isDaily ? (
                            dailyJobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group grid grid-cols-12 gap-4 items-center cursor-pointer px-5 py-4 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-200"
                                >
                                    <div className="col-span-3 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                                        <div>
                                            <div className="text-sm font-medium text-neutral-800">{job.title}</div>
                                            <span className="text-xs text-neutral-500">{job.location}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-3 text-sm text-neutral-600">{job.employer}</div>
                                    <div className="col-span-2 text-sm font-semibold text-neutral-700">{job.pay}</div>
                                    <div className="col-span-2">{getStatusBadge('completed')}</div>
                                    <div className="col-span-2 flex items-center justify-end gap-1">
                                        <Star size={14} className="fill-amber-400 text-amber-400" />
                                        <span className="text-sm font-medium text-neutral-700">{job.rating}</span>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            longTermJobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group grid grid-cols-12 gap-4 items-center cursor-pointer px-5 py-4 rounded-2xl border-2 border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-200"
                                >
                                    <div className="col-span-3 flex items-center gap-3">
                                        <div className={`w-1.5 h-1.5 rounded-full ${job.status === 'selected' ? 'bg-emerald-500' :
                                            job.status === 'rejected' ? 'bg-red-500' :
                                                'bg-amber-500'
                                            }`} />
                                        <div>
                                            <div className="text-sm font-medium text-neutral-800">{job.title}</div>
                                            <span className="text-xs text-neutral-500">{job.location}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-3 text-sm text-neutral-600">{job.company}</div>
                                    <div className="col-span-2 text-sm font-medium text-neutral-700">{job.salary}</div>
                                    <div className="col-span-2">{getStatusBadge(job.status)}</div>
                                    <div className="col-span-2 text-xs text-neutral-500 text-right">{job.appliedAt}</div>
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>
    );
};

export default AppliedJobs;
