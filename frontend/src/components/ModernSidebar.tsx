import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Briefcase,
    MessageSquare,
    Settings,
    Menu,
    X,
    Zap,
    Briefcase as BriefcaseIcon,
    ChevronRight,
    ChevronLeft
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { useMode } from '../context/ModeContext';

const ModernSidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { mode, toggleMode } = useMode();

    const navItems = [
        { path: '/posted-jobs', label: 'Posted Jobs', icon: LayoutDashboard },
        { path: '/applied-jobs', label: 'Applied Jobs', icon: Briefcase },
        { path: '/chat', label: 'Messages', icon: MessageSquare },
        { path: '/settings', label: 'Settings', icon: Settings },
    ];

    const sidebarVariants = {
        expanded: { width: "16rem" },
        collapsed: { width: "5rem" }
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-black/50 backdrop-blur-md text-white border border-white/10 shadow-lg"
            >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <motion.aside
                initial="expanded"
                animate={isCollapsed ? "collapsed" : "expanded"}
                variants={sidebarVariants}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={twMerge(
                    "fixed top-0 left-0 z-40 h-screen bg-black/40 backdrop-blur-xl border-r border-white/10 transition-all duration-300 ease-in-out lg:translate-x-0 flex flex-col",
                    isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"
                )}
            >
                {/* Logo Area */}
                <div className={twMerge("h-20 flex items-center px-6 border-b border-white/5", isCollapsed ? "justify-center px-2" : "justify-between")}>
                    <div className="flex items-center gap-3 text-white overflow-hidden">
                        <div className="size-8 text-primary shrink-0">
                            <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        {!isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-xl font-bold tracking-tight whitespace-nowrap"
                            >
                                HybridMarket
                            </motion.span>
                        )}
                    </div>
                </div>

                {/* Mode Toggle (Unified) */}
                <div className="p-4">
                    <button
                        onClick={toggleMode}
                        className={twMerge(
                            "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 border border-white/10 shadow-lg group relative overflow-hidden",
                            mode === 'daily'
                                ? "bg-gradient-to-r from-green-900/50 to-emerald-900/50 hover:border-green-500/50"
                                : "bg-gradient-to-r from-yellow-900/50 to-orange-900/50 hover:border-yellow-500/50"
                        )}
                    >
                        <div className={twMerge(
                            "absolute inset-0 opacity-20 transition-opacity duration-500",
                            mode === 'daily' ? "bg-green-500 blur-xl" : "bg-yellow-500 blur-xl"
                        )}></div>

                        <div className={twMerge("relative z-10 flex items-center justify-center size-8 rounded-lg shrink-0 transition-colors", mode === 'daily' ? "bg-green-500 text-black" : "bg-yellow-500 text-black")}>
                            {mode === 'daily' ? <Zap size={18} fill="currentColor" /> : <BriefcaseIcon size={18} fill="currentColor" />}
                        </div>

                        {!isCollapsed && (
                            <div className="relative z-10 flex flex-col items-start overflow-hidden">
                                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Current Mode</span>
                                <span className="text-sm font-bold text-white whitespace-nowrap">
                                    {mode === 'daily' ? 'Daily Wages' : 'Long Term'}
                                </span>
                            </div>
                        )}
                    </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto overflow-x-hidden">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => twMerge(
                                "flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group relative",
                                isActive
                                    ? "text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        />
                                    )}
                                    <item.icon size={22} className={twMerge("shrink-0 transition-colors", isActive ? "text-primary" : "group-hover:text-white")} />
                                    {!isCollapsed && (
                                        <span className="font-medium whitespace-nowrap">{item.label}</span>
                                    )}
                                    {isCollapsed && (
                                        <div className="absolute left-full ml-4 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 border border-white/10 backdrop-blur-md">
                                            {item.label}
                                        </div>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Collapse Toggle (Desktop Only) */}
                <div className="hidden lg:flex p-4 justify-end border-t border-white/5">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                {/* User Profile */}
                <div className="p-4 border-t border-white/5">
                    <div className={twMerge("flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group", isCollapsed ? "justify-center" : "")}>
                        <div className="size-10 rounded-full bg-cover bg-center border border-white/10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgzrR30M9GV7p6fP-HnG9w0D2qJxRehRPn8wASmhCRmcGzwmtWRvSR7Z5uEaUmKeBnyxoFGPSzwDJNS2Y1FSYW_tFDjc-EnwuPPraGcnGN3ut3REf-mbECSRf2slKT3raThozKFlmBMLpwhjiIMA7Oi-VGpRBg9oTqEflqkH3legiewG3erQfGplesSUVuxpszafiLpYs5F6aKlhjTxUOlBTPeX_KI8GULGVEcs7vuQzbSbxPfVIti3mOQaziodeEnW7jWHyDIEwBD")' }}></div>
                        {!isCollapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-white truncate group-hover:text-primary transition-colors">Athish</p>
                                <p className="text-xs text-gray-400 truncate">View Profile</p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.aside>

            {/* Overlay for mobile */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                ></div>
            )}
        </>
    );
};

export default ModernSidebar;
