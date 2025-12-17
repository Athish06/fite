import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Home, Briefcase, FileText, MessageCircle, 
    Menu, X, ChevronRight
} from "lucide-react";
import { useMode } from "../context/ModeContext";
import GlobalToggle from "../components/GlobalToggle";

interface NavItem {
    icon: React.ReactNode;
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { icon: <Home size={22} />, label: "Home", href: "/" },
    { icon: <Briefcase size={22} />, label: "Posted Jobs", href: "/posted-jobs" },
    { icon: <FileText size={22} />, label: "Applied Jobs", href: "/applied-jobs" },
    { icon: <MessageCircle size={22} />, label: "Messages", href: "/chat-inbox" },
];

const Layout: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { mode } = useMode();

    // Don't show mode toggle on job-responses pages
    const hideToggle = location.pathname.includes("/job-responses") || location.pathname.includes("/job-detail");

    // Full screen pages - no sidebar
    const isFullScreen = location.pathname.includes("/job-responses");
    if (isFullScreen) {
        return <Outlet />;
    }

    const isActive = (href: string) => {
        if (href === "/") return location.pathname === "/" || location.pathname === "/home";
        return location.pathname.startsWith(href);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className={mode === 'daily'
                    ? "absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-green-500/10 blur-[120px]"
                    : "absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-yellow-500/10 blur-[120px]"
                }></div>
            </div>

            {/* Navigation Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-6 left-6 z-50 p-3 rounded-xl border shadow-md backdrop-blur-sm transition-all duration-300 ${
                    isOpen 
                        ? 'bg-neutral-700 border-neutral-600 text-white' 
                        : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={22} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Menu size={22} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Vertical Nav Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Nav Dropdown */}
                        <motion.nav
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-20 left-6 z-50 w-72 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-xl overflow-hidden"
                        >
                            {/* Logo/Brand */}
                            <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-700">
                                <div className="flex items-center gap-3">
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg font-black ${mode === 'daily' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
                                        F
                                    </div>
                                    <div>
                                        <div className="text-neutral-900 dark:text-white font-bold text-lg">FITE</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 text-xs">Find • Work • Grow</div>
                                    </div>
                                </div>
                            </div>

                            {/* Nav Items */}
                            <div className="p-3 space-y-1">
                                {navItems.map((item, index) => {
                                    const active = isActive(item.href);
                                    return (
                                        <motion.button
                                            key={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => {
                                                setIsOpen(false);
                                                navigate(item.href);
                                            }}
                                            className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 relative ${
                                                active
                                                    ? mode === 'daily'
                                                        ? 'bg-green-500 text-white shadow-md'
                                                        : 'bg-yellow-500 text-black shadow-md'
                                                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                                            }`}
                                        >
                                            <span className={`transition-transform duration-200 ${active ? '' : 'group-hover:scale-110'}`}>
                                                {item.icon}
                                            </span>
                                            <span className="font-semibold flex-1 text-left">{item.label}</span>
                                            
                                            {active && (
                                                <ChevronRight size={16} />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Profile */}
                            <div className="p-3 border-t border-neutral-200 dark:border-neutral-700">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        navigate('/profile');
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                                >
                                    <img
                                        src="https://i.pravatar.cc/150?img=3"
                                        className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-200 dark:ring-neutral-600"
                                        alt="Avatar"
                                    />
                                    <div className="text-left flex-1">
                                        <div className="text-neutral-900 dark:text-white font-semibold text-sm">Athish</div>
                                        <div className="text-neutral-500 dark:text-neutral-400 text-xs">View Profile</div>
                                    </div>
                                </button>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>

            {/* Mode Toggle at Top Center */}
            {!hideToggle && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 z-30">
                    <GlobalToggle />
                </div>
            )}

            {/* Main Content */}
            <main className="relative z-10 min-h-screen pt-24 px-4 md:px-8 pb-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
