import React from 'react';
import { useMode } from '../../context/ModeContext';
import { motion } from 'framer-motion';
import { Briefcase, Clock } from 'lucide-react';

const GlobalToggle: React.FC = () => {
    const { mode, setMode } = useMode();

    return (
        <div className="flex justify-center items-center">
            <div className="relative flex items-center rounded-full p-1.5 bg-white border-2 border-neutral-200 shadow-sm">
                {/* Sliding Background */}
                <motion.div
                    layoutId="modeToggle"
                    className={`absolute h-9 rounded-full shadow-sm ${mode === 'daily'
                        ? 'bg-emerald-500'
                        : 'bg-amber-500'
                        }`}
                    initial={false}
                    animate={{
                        x: mode === 'daily' ? 6 : 118,
                        width: 108
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />

                {/* Daily Wages Button */}
                <button
                    onClick={() => setMode('daily')}
                    className={`relative z-10 w-[108px] h-9 flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors ${mode === 'daily' ? 'text-white' : 'text-neutral-500 hover:text-neutral-700'
                        }`}
                >
                    <Clock size={14} />
                    Daily Wage
                </button>

                {/* Long Term Jobs Button */}
                <button
                    onClick={() => setMode('longterm')}
                    className={`relative z-10 w-[108px] h-9 flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors ${mode === 'longterm' ? 'text-white' : 'text-neutral-500 hover:text-neutral-700'
                        }`}
                >
                    <Briefcase size={14} />
                    Long-Term
                </button>
            </div>
        </div>
    );
};

export default GlobalToggle;
