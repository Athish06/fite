import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMode } from '../context/ModeContext';
import { motion } from 'framer-motion';
import { Briefcase, Clock, TrendingUp, Users, ChevronRight, Sparkles, Zap } from 'lucide-react';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { mode } = useMode();

    const isDaily = mode === 'daily';

    const stats = [
        { label: 'Active Jobs', value: '24', icon: Briefcase },
        { label: 'Applications', value: '156', icon: Users },
        { label: 'Response Rate', value: '89%', icon: TrendingUp },
        { label: 'Avg. Time', value: '2.4h', icon: Clock },
    ];

    const quickActions = isDaily 
        ? [
            { title: 'Post a Quick Job', desc: 'Get workers in minutes', path: '/posted-jobs', gradient: 'from-emerald-500 to-teal-600' },
            { title: 'View Posted Jobs', desc: 'Track your active jobs', path: '/posted-jobs', gradient: 'from-emerald-600 to-teal-700' },
            { title: 'Find Workers', desc: 'Browse available workers', path: '/map', gradient: 'from-teal-500 to-emerald-700' },
        ]
        : [
            { title: 'Post a Position', desc: 'Find the perfect candidate', path: '/posted-jobs', gradient: 'from-amber-500 to-orange-600' },
            { title: 'View Posted Jobs', desc: 'Manage applications', path: '/posted-jobs', gradient: 'from-amber-600 to-orange-700' },
            { title: 'Browse Candidates', desc: 'Discover talent', path: '/jobs', gradient: 'from-orange-500 to-red-600' },
        ];

    return (
        <div className="w-full min-h-screen">
            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden rounded-3xl p-8 md:p-12 mb-8 border ${isDaily ? 'border-emerald-500/10 bg-gradient-to-br from-emerald-900/30 via-[#0a120a] to-[#0a0f0a]' : 'border-amber-500/10 bg-gradient-to-br from-amber-900/30 via-[#12100a] to-[#0f0d0a]'}`}
            >
                {/* Background effects */}
                <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] ${isDaily ? 'bg-emerald-500/10' : 'bg-amber-500/10'}`}></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />
                
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${isDaily ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/15 text-amber-400 border border-amber-500/20'}`}
                    >
                        <Sparkles size={16} />
                        {isDaily ? 'Daily Wage Mode' : 'Long-Term Mode'}
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
                    >
                        Welcome to <span className={`${isDaily ? 'text-emerald-400' : 'text-amber-400'}`}>FITE</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-white/60 max-w-2xl leading-relaxed"
                    >
                        {isDaily 
                            ? 'Connect with skilled workers instantly. Post jobs and get responses within minutes.'
                            : 'Build your team with top talent. Find qualified candidates for long-term positions.'
                        }
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/posted-jobs')}
                        className={`mt-8 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all shadow-2xl ${
                            isDaily 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/20' 
                                : 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-amber-500/20'
                        }`}
                    >
                        <Zap size={20} />
                        Post a Job Now
                        <ChevronRight size={20} />
                    </motion.button>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className={`p-6 rounded-2xl border backdrop-blur-sm ${isDaily ? 'bg-emerald-900/10 border-emerald-500/10' : 'bg-amber-900/10 border-amber-500/10'} hover:border-white/20 transition-colors`}
                    >
                        <div className={`w-10 h-10 rounded-xl ${isDaily ? 'bg-emerald-500/15' : 'bg-amber-500/15'} flex items-center justify-center mb-3`}>
                            <stat.icon size={20} className={isDaily ? 'text-emerald-400' : 'text-amber-400'} />
                        </div>
                        <div className="text-3xl font-black text-white">{stat.value}</div>
                        <div className="text-sm text-white/50">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4 mb-8">
                <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {quickActions.map((action, index) => (
                        <motion.div
                            key={action.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + 0.1 * index }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate(action.path)}
                            className={`group cursor-pointer p-6 rounded-3xl bg-gradient-to-br ${action.gradient} hover:shadow-2xl transition-all shadow-lg`}
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                            <p className="text-white/80 text-sm mb-4">{action.desc}</p>
                            <div className="flex items-center text-white font-medium group-hover:gap-2 transition-all">
                                Get Started
                                <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
                <div className={`p-6 rounded-3xl border ${isDaily ? 'bg-emerald-900/5 border-emerald-500/10' : 'bg-amber-900/5 border-amber-500/10'}`}>
                    <div className="space-y-3">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer`}>
                                <div className={`w-12 h-12 rounded-xl ${isDaily ? 'bg-emerald-500/15' : 'bg-amber-500/15'} flex items-center justify-center shrink-0`}>
                                    <Briefcase size={20} className={isDaily ? 'text-emerald-400' : 'text-amber-400'} />
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-white">
                                        {isDaily ? 'Plumbing Work' : 'Frontend Developer'}
                                    </div>
                                    <div className="text-sm text-white/50">
                                        {item === 1 ? '5 new applications' : item === 2 ? 'Posted 2 hours ago' : 'In progress'}
                                    </div>
                                </div>
                                <ChevronRight size={20} className="text-white/30" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
