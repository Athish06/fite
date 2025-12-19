import React, { useState } from 'react';
import { User, Lock, Briefcase, Bell, LogOut, Edit, CheckCircle, CloudUpload, FileText, Trash2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMode } from '../context/ModeContext';
import TextType from '../components/ui/TextType';

const UserSettings: React.FC = () => {
    const [radius, setRadius] = useState(25);
    const [availability, setAvailability] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [activeTab, setActiveTab] = useState('profile');
    const { mode } = useMode();

    const isDaily = mode === 'daily';

    const navItems = [
        { id: 'profile', label: 'General Profile', icon: User },
        { id: 'security', label: 'Security & Login', icon: Lock },
        { id: 'preferences', label: 'Job Preferences', icon: Briefcase },
        { id: 'notifications', label: 'Notifications', icon: Bell },
    ];

    return (
        <div className="w-full min-h-screen relative">
            {/* Background Pattern - Watercolor Paper Texture */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden z-0"
                style={{
                    left: 0,
                    right: 0,
                    backgroundColor: isDaily ? '#F5F9F7' : '#FAF8F5'
                }}
            >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-multiply" />
                {isDaily ? (
                    <>
                        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[50%] rounded-full opacity-30" style={{ background: 'radial-gradient(ellipse at center, rgba(134, 239, 172, 0.5) 0%, transparent 70%)', filter: 'blur(60px)' }} />
                        <div className="absolute bottom-[-15%] left-[-10%] w-[55%] h-[50%] rounded-full opacity-25" style={{ background: 'radial-gradient(ellipse at center, rgba(110, 231, 183, 0.4) 0%, transparent 70%)', filter: 'blur(70px)' }} />
                    </>
                ) : (
                    <>
                        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[50%] rounded-full opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(251, 191, 136, 0.5) 0%, transparent 70%)', filter: 'blur(60px)' }} />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full opacity-35" style={{ background: 'radial-gradient(ellipse at center, rgba(252, 211, 165, 0.4) 0%, transparent 70%)', filter: 'blur(70px)' }} />
                    </>
                )}
            </div>

            <div className="relative z-10 px-6 md:px-8 pt-8 pb-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-neutral-800">
                            <TextType text="Settings" typingSpeed={80} loop={false} showCursor={false} />
                        </h1>
                        <p className="text-sm text-neutral-600 mt-1">Manage your account and preferences</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar Navigation */}
                    <motion.aside
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-64 shrink-0"
                    >
                        <div
                            className="rounded-xl border border-neutral-200/80 overflow-hidden"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}
                        >
                            <nav className="p-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${activeTab === item.id
                                            ? `${isDaily ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'} font-semibold`
                                            : 'text-neutral-600 hover:bg-neutral-100'
                                            }`}
                                    >
                                        <item.icon size={20} />
                                        <span className="text-sm">{item.label}</span>
                                    </button>
                                ))}
                            </nav>
                            <div className="border-t border-neutral-200/80 p-2">
                                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors">
                                    <LogOut size={20} />
                                    <span className="text-sm font-medium">Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </motion.aside>

                    {/* Main Content Area */}
                    <main className="flex-1">
                        <div className="flex flex-col gap-6">
                            {/* Profile Header Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-xl border border-neutral-200/80 p-6"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}
                            >
                                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                    <div className="relative group cursor-pointer">
                                        <div
                                            className="rounded-full h-20 w-20 border-4 border-white shadow-lg bg-cover bg-center"
                                            style={{ backgroundImage: 'url("https://i.pravatar.cc/150?img=3")' }}
                                        />
                                        <div className={`absolute bottom-0 right-0 ${isDaily ? 'bg-emerald-500' : 'bg-amber-500'} p-1.5 rounded-full shadow-md border-2 border-white flex items-center justify-center`}>
                                            <Edit size={12} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <h2 className="text-xl font-bold text-neutral-800">Athish</h2>
                                        <div className="flex flex-wrap gap-2 items-center mt-1">
                                            <span className={`${isDaily ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'} text-xs font-semibold px-2.5 py-1 rounded-full`}>Full Stack Developer</span>
                                            <span className="text-neutral-500 text-sm">Member since 2024</span>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 rounded-xl border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
                                        View Public Profile
                                    </button>
                                </div>
                            </motion.div>

                            {/* Personal Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="rounded-xl border border-neutral-200/80 p-6"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}
                            >
                                <h3 className="text-lg font-bold text-neutral-800 mb-6">Personal Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-neutral-700 text-sm font-medium">First Name</span>
                                        <input className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-800 h-11 px-4 focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300 outline-none transition-all" type="text" defaultValue="Athish" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-neutral-700 text-sm font-medium">Last Name</span>
                                        <input className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-800 h-11 px-4 focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300 outline-none transition-all" type="text" defaultValue="Kumar" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-neutral-700 text-sm font-medium">Email Address</span>
                                        <input className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-800 h-11 px-4 focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300 outline-none transition-all" type="email" defaultValue="athish@example.com" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-700 text-sm font-medium">Phone Number</span>
                                            <span className="text-emerald-600 text-xs font-semibold flex items-center gap-1">
                                                <CheckCircle size={12} /> Verified
                                            </span>
                                        </div>
                                        <input className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-800 h-11 px-4 focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300 outline-none transition-all" type="tel" defaultValue="+91 98765 43210" />
                                    </label>
                                </div>
                            </motion.div>

                            {/* Professional Documents */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="rounded-xl border border-neutral-200/80 p-6"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-bold text-neutral-800">Professional Documents</h3>
                                    <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-lg">PDF only, Max 5MB</span>
                                </div>
                                <div className={`border-2 border-dashed ${isDaily ? 'border-emerald-300 bg-emerald-50/50' : 'border-amber-300 bg-amber-50/50'} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-opacity-70 transition-colors group`}>
                                    <div className="bg-white p-3 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                        <CloudUpload size={28} className={isDaily ? 'text-emerald-600' : 'text-amber-600'} />
                                    </div>
                                    <p className="text-neutral-800 font-semibold mb-1">Upload Updated Resume</p>
                                    <p className="text-neutral-500 text-sm">Drag and drop or click to browse</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-red-100 text-red-600 p-2.5 rounded-xl">
                                            <FileText size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-neutral-800">Athish_Resume_2024.pdf</p>
                                            <p className="text-xs text-neutral-500">Uploaded 2 days ago • 2.4 MB</p>
                                        </div>
                                    </div>
                                    <button className="text-neutral-400 hover:text-red-500 transition-colors p-2">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </motion.div>

                            {/* App Preferences */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="rounded-xl border border-neutral-200/80 p-6"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}
                            >
                                <h3 className="text-lg font-bold text-neutral-800 mb-6">App Preferences</h3>
                                <div className="flex flex-col gap-6">
                                    {/* Slider */}
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between items-center">
                                            <label className="text-neutral-800 text-sm font-semibold flex items-center gap-2">
                                                <MapPin size={16} className={isDaily ? 'text-emerald-600' : 'text-amber-600'} />
                                                Daily Wage Search Radius
                                            </label>
                                            <span className={`${isDaily ? 'text-emerald-600' : 'text-amber-600'} font-bold text-sm`}>{radius} km</span>
                                        </div>
                                        <input
                                            className={`w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer ${isDaily ? 'accent-emerald-600' : 'accent-amber-600'}`}
                                            max="100"
                                            min="5"
                                            type="range"
                                            value={radius}
                                            onChange={(e) => setRadius(parseInt(e.target.value))}
                                        />
                                        <div className="flex justify-between text-xs text-neutral-400 font-medium">
                                            <span>5 km</span>
                                            <span>100 km</span>
                                        </div>
                                    </div>

                                    <hr className="border-neutral-200" />

                                    {/* Toggles */}
                                    <div className="flex flex-col gap-5">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-neutral-800 font-medium">Availability Status</span>
                                                <span className="text-neutral-500 text-xs">Allow recruiters to contact you for new gigs</span>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={availability}
                                                    onChange={() => setAvailability(!availability)}
                                                />
                                                <div className={`w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${isDaily ? 'peer-checked:bg-emerald-600' : 'peer-checked:bg-amber-600'}`}></div>
                                            </label>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-neutral-800 font-medium">Daily Wage Notifications</span>
                                                <span className="text-neutral-500 text-xs">Get alerts for jobs within your radius immediately</span>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={notifications}
                                                    onChange={() => setNotifications(!notifications)}
                                                />
                                                <div className={`w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${isDaily ? 'peer-checked:bg-emerald-600' : 'peer-checked:bg-amber-600'}`}></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Action Buttons */}
                            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
                                <button className="px-6 py-3 rounded-xl border border-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors">
                                    Cancel
                                </button>
                                <button className={`px-8 py-3 rounded-xl ${isDaily ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-amber-600 hover:bg-amber-700'} text-white font-semibold text-sm shadow-lg transition-all`}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default UserSettings;
