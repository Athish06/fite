import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMode } from '../context/ModeContext';
import { motion } from 'framer-motion';
import { Briefcase, Clock, TrendingUp, Users, ChevronRight, Sparkles, Zap, Search, MapPin } from 'lucide-react';
import TextType from '../components/ui/TextType';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { mode } = useMode();

    const isDaily = mode === 'daily';

    const stats = [
        { label: 'Active Jobs', value: '24', icon: Briefcase, color: isDaily ? 'emerald' : 'amber' },
        { label: 'Applications', value: '156', icon: Users, color: isDaily ? 'teal' : 'orange' },
        { label: 'Response Rate', value: '89%', icon: TrendingUp, color: isDaily ? 'cyan' : 'yellow' },
        { label: 'Avg. Time', value: '2.4h', icon: Clock, color: isDaily ? 'green' : 'red' },
    ];

    const quickActions = isDaily
        ? [
            { title: 'Post a Quick Job', desc: 'Get workers in minutes', path: '/posted-jobs', icon: Zap },
            { title: 'View Posted Jobs', desc: 'Track your active jobs', path: '/posted-jobs', icon: Briefcase },
            { title: 'Explore Workers', desc: 'Find nearby workers', path: '/explore-jobs', icon: Search },
        ]
        : [
            { title: 'Post a Position', desc: 'Find the perfect candidate', path: '/posted-jobs', icon: Zap },
            { title: 'View Posted Jobs', desc: 'Manage applications', path: '/posted-jobs', icon: Briefcase },
            { title: 'Browse Candidates', desc: 'Discover talent', path: '/explore-jobs', icon: Users },
        ];

    const recentJobs = [
        { title: isDaily ? 'Plumbing Work' : 'Frontend Developer', location: 'Koramangala, Bangalore', applicants: 5, time: '2h ago' },
        { title: isDaily ? 'Electrical Repairs' : 'Backend Engineer', location: 'HSR Layout, Bangalore', applicants: 8, time: '4h ago' },
        { title: isDaily ? 'House Cleaning' : 'UI/UX Designer', location: 'Indiranagar, Bangalore', applicants: 3, time: '1d ago' },
    ];

    return (
        <div className="w-full min-h-screen relative px-6 md:px-8 pt-8 pb-8">
            {/* Background Pattern - Watercolor Paper Texture */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden z-0"
                style={{
                    left: 0,
                    right: 0,
                    backgroundColor: isDaily ? '#F5F9F7' : '#FAF8F5'
                }}
            >
                {/* Grainy Paper Texture */}
                <div
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-multiply"
                    style={{ filter: 'contrast(110%) brightness(100%)' }}
                />

                {/* Organic Watercolor Gradients */}
                {isDaily ? (
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
                )}
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-800">
                        <TextType text="Dashboard" typingSpeed={80} loop={false} showCursor={false} />
                    </h1>
                    <p className="text-sm text-neutral-600 mt-1">
                        {isDaily ? "Manage your daily wage postings" : "Track your long-term positions"}
                    </p>
                </div>
            </div>

            {/* Welcome Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 mb-8"
            >
                <div
                    className={`relative overflow-hidden rounded-2xl p-6 md:p-8 border ${isDaily ? 'border-emerald-200/50' : 'border-amber-200/50'}`}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${isDaily ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                <Sparkles size={14} />
                                {isDaily ? 'Daily Wage Mode' : 'Long-Term Mode'}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
                                Welcome to <span className={isDaily ? 'text-emerald-600' : 'text-amber-600'}>FITE</span>
                            </h2>
                            <p className="text-neutral-600 max-w-xl">
                                {isDaily
                                    ? 'Connect with skilled workers instantly. Post jobs and get responses within minutes.'
                                    : 'Build your team with top talent. Find qualified candidates for long-term positions.'
                                }
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate('/posted-jobs')}
                            className={`shrink-0 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg ${isDaily
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                : 'bg-amber-600 text-white hover:bg-amber-700'
                                }`}
                        >
                            <Zap size={18} />
                            Post a Job
                            <ChevronRight size={18} />
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="p-5 rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-all"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}
                    >
                        <div className={`w-10 h-10 rounded-xl ${isDaily ? 'bg-emerald-100' : 'bg-amber-100'} flex items-center justify-center mb-3`}>
                            <stat.icon size={20} className={isDaily ? 'text-emerald-600' : 'text-amber-600'} />
                        </div>
                        <div className="text-2xl font-bold text-neutral-800">{stat.value}</div>
                        <div className="text-sm text-neutral-500">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="relative z-10 mb-8">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {quickActions.map((action, index) => (
                        <motion.div
                            key={action.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + 0.1 * index }}
                            whileHover={{ scale: 1.01, y: -2 }}
                            onClick={() => navigate(action.path)}
                            className="group cursor-pointer p-5 rounded-xl border border-neutral-200/80 hover:border-neutral-400 transition-all"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}
                        >
                            <div className={`w-12 h-12 rounded-xl ${isDaily ? 'bg-emerald-100 group-hover:bg-emerald-200' : 'bg-amber-100 group-hover:bg-amber-200'} flex items-center justify-center mb-4 transition-colors`}>
                                <action.icon size={24} className={isDaily ? 'text-emerald-600' : 'text-amber-600'} />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-800 mb-1">{action.title}</h3>
                            <p className="text-sm text-neutral-500 mb-4">{action.desc}</p>
                            <div className="flex items-center text-sm font-medium text-neutral-600 group-hover:text-neutral-800 transition-colors">
                                Get Started
                                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Recent Jobs */}
            <div className="relative z-10">
                <h2 className="text-xl font-bold text-neutral-800 mb-4">Recent Activity</h2>
                <div
                    className="rounded-xl border border-neutral-200/80 overflow-hidden"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}
                >
                    {recentJobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + 0.1 * index }}
                            className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-neutral-50 transition-colors ${index !== recentJobs.length - 1 ? 'border-b border-neutral-100' : ''}`}
                        >
                            <div className={`w-12 h-12 rounded-xl ${isDaily ? 'bg-emerald-100' : 'bg-amber-100'} flex items-center justify-center shrink-0`}>
                                <Briefcase size={20} className={isDaily ? 'text-emerald-600' : 'text-amber-600'} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-neutral-800 truncate">{job.title}</h4>
                                <div className="flex items-center gap-2 text-sm text-neutral-500">
                                    <MapPin size={12} />
                                    <span className="truncate">{job.location}</span>
                                </div>
                            </div>
                            <div className="text-right shrink-0">
                                <div className="flex items-center gap-1 text-sm font-medium text-neutral-700">
                                    <Users size={14} />
                                    {job.applicants} applicants
                                </div>
                                <div className="text-xs text-neutral-400">{job.time}</div>
                            </div>
                            <ChevronRight size={20} className="text-neutral-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
