import React from 'react';
import { useMode } from '../context/ModeContext';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const GlobalToggle: React.FC = () => {
    const { mode, setMode } = useMode();

    return (
        <div className="flex justify-center items-center">
            <div className="relative flex items-center bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-1.5 shadow-2xl">
                {/* Sliding Background */}
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={twMerge(
                        "absolute top-1.5 bottom-1.5 rounded-xl shadow-lg z-0",
                        mode === 'daily' 
                            ? "left-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]" 
                            : "right-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-amber-500 to-orange-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                    )}
                />

                {/* Daily Wages Button */}
                <button
                    onClick={() => setMode('daily')}
                    className={twMerge(
                        "flex items-center justify-center relative z-10 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                        mode === 'daily' ? "text-white" : "text-white/50 hover:text-white/80"
                    )}
                >
                    Daily Wage
                </button>

                {/* Long Term Jobs Button */}
                <button
                    onClick={() => setMode('longterm')}
                    className={twMerge(
                        "flex items-center justify-center relative z-10 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                        mode === 'longterm' ? "text-black" : "text-white/50 hover:text-white/80"
                    )}
                >
                    Long-Term
                </button>
            </div>
        </div>
    );
};

export default GlobalToggle;
