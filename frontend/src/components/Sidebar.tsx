import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Briefcase,
    MessageSquare,
    Settings,
    Menu,
    X,
    LogOut
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const navItems = [
        { path: '/posted-jobs', label: 'Posted Jobs', icon: LayoutDashboard },
        { path: '/applied-jobs', label: 'Applied Jobs', icon: Briefcase },
        { path: '/chat', label: 'Messages', icon: MessageSquare },
        { path: '/settings', label: 'Settings', icon: Settings },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-surface-dark text-white border border-border-dark shadow-lg"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <aside className={twMerge(
                "fixed top-0 left-0 z-40 h-screen w-64 bg-surface-dark border-r border-border-dark transition-transform duration-300 ease-in-out lg:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex flex-col h-full">
                    {/* Logo Area */}
                    <div className="h-16 flex items-center px-6 border-b border-border-dark">
                        <div className="flex items-center gap-3 text-white">
                            <div className="size-8 text-primary">
                                <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <span className="text-xl font-bold tracking-tight">HybridMarket</span>
                        </div>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => twMerge(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                    isActive
                                        ? "bg-primary text-background-dark font-bold shadow-[0_0_15px_rgba(70,236,19,0.3)]"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                                onClick={() => setIsOpen(false)} // Close on mobile click
                            >
                                <item.icon size={20} />
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* User Profile / Footer */}
                    <div className="p-4 border-t border-border-dark">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="size-10 rounded-full bg-cover bg-center border border-border-dark" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgzrR30M9GV7p6fP-HnG9w0D2qJxRehRPn8wASmhCRmcGzwmtWRvSR7Z5uEaUmKeBnyxoFGPSzwDJNS2Y1FSYW_tFDjc-EnwuPPraGcnGN3ut3REf-mbECSRf2slKT3raThozKFlmBMLpwhjiIMA7Oi-VGpRBg9oTqEflqkH3legiewG3erQfGplesSUVuxpszafiLpYs5F6aKlhjTxUOlBTPeX_KI8GULGVEcs7vuQzbSbxPfVIti3mOQaziodeEnW7jWHyDIEwBD")' }}></div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-white truncate">Athish</p>
                                <p className="text-xs text-gray-400 truncate">athish@example.com</p>
                            </div>
                            <button className="text-gray-400 hover:text-white transition-colors">
                                <LogOut size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
