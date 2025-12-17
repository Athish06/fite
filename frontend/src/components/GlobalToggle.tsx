import React from 'react';
import { useMode } from '../context/ModeContext';
import { motion } from 'framer-motion';

const GlobalToggle: React.FC = () => {
    const { mode, setMode } = useMode();

    return (
        <div className="flex justify-center items-center">
            <div className="relative flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-1">
                {/* Sliding Background */}
                <motion.div
                    layoutId="modeToggle"
                    className={`absolute h-8 rounded-md ${
                        mode === 'daily' ? 'bg-emerald-600' : 'bg-amber-600'
                    }`}
                    initial={false}
                    animate={{
                        x: mode === 'daily' ? 4 : 88,
                        width: 80
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />

                {/* Daily Wages Button */}
                <button
                    onClick={() => setMode('daily')}
                    className={`relative z-10 w-20 h-8 flex items-center justify-center rounded-md text-xs font-medium transition-colors ${
                        mode === 'daily' ? 'text-white' : 'text-zinc-500 hover:text-zinc-400'
                    }`}
                >
                    Daily Wage
                </button>

                {/* Long Term Jobs Button */}
                <button
                    onClick={() => setMode('longterm')}
                    className={`relative z-10 w-20 h-8 flex items-center justify-center rounded-md text-xs font-medium transition-colors ${
                        mode === 'longterm' ? 'text-white' : 'text-zinc-500 hover:text-zinc-400'
                    }`}
                >
                    Long-Term
                </button>
            </div>
        </div>
    );
};

export default GlobalToggle;
