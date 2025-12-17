import React from 'react';
import { Briefcase, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import MapWorker from './MapWorker'; // Using MapWorker as the "Daily Wages" seeker view
import MyApplications from './MyApplications'; // Using MyApplications as "Full Time" seeker view
import { useMode } from '../context/ModeContext';

const AppliedJobs: React.FC = () => {
    const { mode } = useMode();
    const isDaily = mode === 'daily';

    return (
        <div className="flex flex-col gap-6 min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${isDaily ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/15 text-amber-400 border border-amber-500/20'}`}
                    >
                        <Sparkles size={12} />
                        {isDaily ? 'Active Gigs' : 'Career Applications'}
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2"
                    >
                        Applied Jobs
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 text-lg"
                    >
                        Track your applications and active gigs
                    </motion.p>
                </div>

                {/* Mode Indicator */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`px-5 py-3 rounded-2xl border flex items-center gap-3 text-sm font-bold backdrop-blur-xl ${
                        isDaily
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                            : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                    }`}
                >
                    {isDaily ? <Zap size={18} /> : <Briefcase size={18} />}
                    <span>{isDaily ? 'Daily Wages Mode' : 'Long Term Mode'}</span>
                </motion.div>
            </div>

            {/* Content Area */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`flex-1 w-full min-h-[600px] relative rounded-3xl overflow-hidden border backdrop-blur-sm ${
                    isDaily 
                        ? 'border-emerald-500/10 bg-emerald-900/5' 
                        : 'border-amber-500/10 bg-amber-900/5'
                }`}
            >
                {isDaily ? (
                    <div className="h-full w-full">
                        <MapWorker />
                    </div>
                ) : (
                    <div className="h-full w-full overflow-y-auto p-6">
                        <MyApplications />
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default AppliedJobs;
