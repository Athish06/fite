import React, { useState } from 'react';
import { User, Lock, Briefcase, Bell, LogOut, Edit, CheckCircle, CloudUpload, FileText, Trash2, MapPin } from 'lucide-react';

const UserSettings: React.FC = () => {
    const [radius, setRadius] = useState(25);
    const [availability, setAvailability] = useState(true);
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="flex flex-1 overflow-hidden relative h-[calc(100vh-64px)]">
            {/* Sidebar Navigation */}
            <aside className="w-64 hidden md:flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632] overflow-y-auto">
                <div className="p-4 flex flex-col h-full justify-between">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col px-3 pt-2">
                            <h1 className="text-gray-900 dark:text-white text-xl font-bold leading-normal">Settings</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Manage your account</p>
                        </div>
                        <nav className="flex flex-col gap-2 mt-2">
                            <a className="flex items-center gap-3 px-3 py-3 rounded-lg bg-blue-500/10 text-blue-500 transition-colors" href="#">
                                <User size={24} />
                                <p className="text-sm font-bold leading-normal">General Profile</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-300 transition-colors" href="#">
                                <Lock size={24} />
                                <p className="text-sm font-medium leading-normal">Security & Login</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-300 transition-colors" href="#">
                                <Briefcase size={24} />
                                <p className="text-sm font-medium leading-normal">Job Preferences</p>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-300 transition-colors" href="#">
                                <Bell size={24} />
                                <p className="text-sm font-medium leading-normal">Notifications</p>
                            </a>
                        </nav>
                    </div>
                    <div className="px-3 pb-2">
                        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 w-full transition-colors">
                            <LogOut size={24} />
                            <p className="text-sm font-medium leading-normal">Sign Out</p>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-[#111921] p-4 md:p-8 lg:px-12">
                <div className="max-w-[800px] mx-auto flex flex-col gap-8 pb-20">
                    {/* Profile Header Card */}
                    <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <div className="relative group cursor-pointer">
                                <div className="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 border-4 border-white dark:border-gray-700 shadow-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTYhE722NLpmWJveZ-xK064KJBvZd67nvl4bJVdfBc2tEkc0L-BiNonM5SJqoycZ6gV3QYHiK_VwN0TF4l2zgPSZklPUPWvuvjv4WY26oFVxoGOdmDxGev7hjBvbcoaJSzFY9BdF6aho4zHbROux_tjUJWzaOpR4_qxfjQo8MeD3qKhv3K0UHRQhUkE_5ImMPlnIFFvELmgrGSFWy2vOyzNqy5t6qyamCrrA-KHwwjyrG5WTv6Ym4bhtZccITEFOITWDbtYQi6o5uE")' }}></div>
                                <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 p-1.5 rounded-full shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                                    <Edit size={18} className="text-blue-500" />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1">
                                <h2 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Alex Johnson</h2>
                                <div className="flex flex-wrap gap-2 items-center mt-1">
                                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-500 text-xs font-bold px-2.5 py-1 rounded-full">Full Stack Developer</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Member since 2021</span>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                View Public Profile
                            </button>
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-6">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">First Name</span>
                                <input className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#111921] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" type="text" defaultValue="Alex" />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">Last Name</span>
                                <input className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#111921] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" type="text" defaultValue="Johnson" />
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">Email Address</span>
                                <input className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#111921] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" type="email" defaultValue="alex.j@example.com" />
                            </label>
                            <label className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">Phone Number</span>
                                    <span className="text-green-600 text-xs font-bold flex items-center gap-1">
                                        <CheckCircle size={14} /> Verified
                                    </span>
                                </div>
                                <input className="w-full rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#111921] text-gray-900 dark:text-white h-12 px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" type="tel" defaultValue="+1 (555) 123-4567" />
                            </label>
                        </div>
                    </div>

                    {/* Professional Documents */}
                    <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Professional Documents</h3>
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PDF only, Max 5MB</span>
                        </div>
                        <div className="border-2 border-dashed border-blue-500/30 dark:border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/5 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-500/10 dark:hover:bg-blue-500/10 transition-colors group">
                            <div className="bg-white dark:bg-[#111921] p-3 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-200">
                                <CloudUpload size={32} className="text-blue-500" />
                            </div>
                            <p className="text-gray-900 dark:text-white font-bold text-base mb-1">Upload Updated Resume</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Drag and drop or click to browse</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between p-4 bg-gray-50 dark:bg-[#111921] rounded-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded-lg">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Alex_Johnson_CV_2024.pdf</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Uploaded 2 days ago • 2.4 MB</p>
                                </div>
                            </div>
                            <button className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-2">
                                <Trash2 size={20} />
                            </button>
                        </div>
                    </div>

                    {/* App Preferences */}
                    <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-6">App Preferences</h3>
                        <div className="flex flex-col gap-8">
                            {/* Slider */}
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center">
                                    <label className="text-gray-900 dark:text-gray-200 text-sm font-bold flex items-center gap-2">
                                        <MapPin size={18} className="text-blue-500" />
                                        Daily Wage Search Radius
                                    </label>
                                    <span className="text-blue-500 font-bold text-sm">{radius} km</span>
                                </div>
                                <input
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    max="100"
                                    min="5"
                                    type="range"
                                    value={radius}
                                    onChange={(e) => setRadius(parseInt(e.target.value))}
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 font-medium px-1">
                                    <span>5 km</span>
                                    <span>100 km</span>
                                </div>
                            </div>
                            <hr className="border-gray-100 dark:border-gray-700" />
                            {/* Toggles */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-gray-900 dark:text-white text-base font-medium">Availability Status</span>
                                        <span className="text-gray-500 dark:text-gray-400 text-xs">Allow recruiters to contact you for new gigs</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={availability}
                                            onChange={() => setAvailability(!availability)}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-gray-900 dark:text-white text-base font-medium">Daily Wage Notifications</span>
                                        <span className="text-gray-500 dark:text-gray-400 text-xs">Get alerts for jobs within your radius immediately</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={notifications}
                                            onChange={() => setNotifications(!notifications)}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 mt-2">
                        <button className="px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full sm:w-auto">
                            Cancel
                        </button>
                        <button className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all w-full sm:w-auto">
                            Save Changes
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserSettings;
