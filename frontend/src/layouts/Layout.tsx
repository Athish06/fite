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
        <div className="min-h-screen bg-[#09090b] relative overflow-hidden">
            {/* Subtle gradient orbs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-[-40%] right-[-20%] w-[60%] h-[60%] rounded-full blur-[150px] ${
                    mode === 'daily' ? 'bg-emerald-500/5' : 'bg-amber-500/5'
                }`} />
                <div className={`absolute bottom-[-30%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] ${
                    mode === 'daily' ? 'bg-emerald-600/3' : 'bg-amber-600/3'
                }`} />
            </div>

            {/* Navigation Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-6 left-6 z-50 p-2.5 rounded-lg border transition-all duration-200 ${
                    isOpen 
                        ? 'bg-zinc-800 border-zinc-700 text-zinc-100' 
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-300 hover:border-zinc-700'
                }`}
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
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ type: "spring", damping: 25, stiffness: 350 }}
                            className="fixed top-[72px] left-6 z-50 w-64 rounded-xl border border-zinc-800 bg-[#121212] shadow-2xl overflow-hidden"
                        >
                            {/* Logo/Brand */}
                            <div className="px-5 py-4 border-b border-zinc-800">
                                <div className="flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${
                                        mode === 'daily' ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
                                    }`}>
                                        F
                                    </div>
                                    <div>
                                        <div className="text-zinc-100 font-semibold text-sm">FITE</div>
                                        <div className="text-zinc-600 text-[11px]">Find • Work • Grow</div>
                                    </div>
                                </div>
                            </div>

                            {/* Nav Items */}
                            <div className="p-2 space-y-0.5">
                                {navItems.map((item, index) => {
                                    const active = isActive(item.href);
                                    return (
                                        <motion.button
                                            key={item.href}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.04 }}
                                            onClick={() => {
                                                setIsOpen(false);
                                                navigate(item.href);
                                            }}
                                            className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 relative ${
                                                active
                                                    ? 'bg-zinc-800 text-zinc-100'
                                                    : 'text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'
                                            }`}
                                        >
                                            {/* Active indicator */}
                                            {active && (
                                                <div className={`absolute left-0 top-2 bottom-2 w-0.5 rounded-full ${
                                                    mode === 'daily' ? 'bg-emerald-500' : 'bg-amber-500'
                                                }`} />
                                            )}
                                            <span className="ml-1">{item.icon}</span>
                                            <span className="font-medium text-sm flex-1 text-left">{item.label}</span>
                                            {active && <ChevronRight size={14} className="text-zinc-600" />}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* Profile */}
                            <div className="p-2 border-t border-zinc-800">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        navigate('/profile');
                                    }}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800/50 transition-colors"
                                >
                                    <img
                                        src="https://i.pravatar.cc/150?img=3"
                                        className="h-8 w-8 rounded-full object-cover ring-1 ring-zinc-700"
                                        alt="Avatar"
                                    />
                                    <div className="text-left flex-1">
                                        <div className="text-zinc-300 font-medium text-sm">Athish</div>
                                        <div className="text-zinc-600 text-[11px]">View Profile</div>
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
