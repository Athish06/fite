import React from 'react';
import { useMode } from '../../context/ModeContext';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { Briefcase, Clock } from 'lucide-react';

const GlobalToggle: React.FC = () => {
    const { mode, setMode } = useMode();
    const { isDark } = useTheme();

    return (
        <div className="flex justify-center items-center">
            <div className={`relative flex items-center rounded-full p-1 ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white/80 border border-neutral-200 backdrop-blur-sm shadow-sm'}`}>
                {/* Sliding Background */}
                <motion.div
                    layoutId="modeToggle"
                    className={`absolute h-8 rounded-full ${mode === 'daily'
                        ? isDark ? 'bg-emerald-600' : 'bg-emerald-500'
                        : isDark ? 'bg-amber-600' : 'bg-amber-500'
                        }`}
                    initial={false}
                    animate={{
                        x: mode === 'daily' ? 4 : 108,
                        width: 100
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />

                {/* Daily Wages Button */}
                <button
                    onClick={() => setMode('daily')}
                    className={`relative z-10 w-[100px] h-8 flex items-center justify-center gap-1.5 rounded-full text-xs font-semibold transition-colors ${mode === 'daily' ? 'text-white' : isDark ? 'text-zinc-500 hover:text-zinc-400' : 'text-neutral-500 hover:text-neutral-700'
                        }`}
                >
                    <Clock size={12} />
                    Daily Wage
                </button>

                {/* Long Term Jobs Button */}
                <button
                    onClick={() => setMode('longterm')}
                    className={`relative z-10 w-[100px] h-8 flex items-center justify-center gap-1.5 rounded-full text-xs font-semibold transition-colors ${mode === 'longterm' ? 'text-white' : isDark ? 'text-zinc-500 hover:text-zinc-400' : 'text-neutral-500 hover:text-neutral-700'
                        }`}
                >
                    <Briefcase size={12} />
                    Long-Term
                </button>
            </div>
        </div>
    );
};

export default GlobalToggle;
