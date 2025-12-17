import React from 'react';
import { Search, MapPin, Filter, Bookmark, Zap, DollarSign, CheckCircle } from 'lucide-react';

const LongTermJobSeekerBoard: React.FC = () => {
    return (
        <div className="flex flex-1 justify-center py-6 px-4 lg:px-8">
            <div className="flex w-full max-w-[1280px] gap-6">
                {/* Left Sidebar: Filters */}
                <aside className="hidden lg:flex w-64 flex-col gap-6 shrink-0">
                    {/* Search Widget */}
                    <div className="flex flex-col gap-4 bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-base text-gray-900 dark:text-white">Search</h3>
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                            <input className="w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:text-white" placeholder="Title, skill, or company" type="text" />
                        </div>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 text-gray-400" size={20} />
                            <input className="w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:text-white" placeholder="City, state, or zip" type="text" />
                        </div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" type="checkbox" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Remote only</span>
                        </label>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg text-sm transition">Find Jobs</button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col gap-4 bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-base text-gray-900 dark:text-white">Filters</h3>
                            <button className="text-xs text-blue-500 font-medium hover:underline">Clear all</button>
                        </div>
                        {/* Experience Level */}
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Experience Level</h4>
                            <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition">
                                    <input className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" type="checkbox" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Entry Level</span>
                                        <span className="text-xs text-gray-500">Less than 1 year</span>
                                    </div>
                                </label>
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition">
                                    <input defaultChecked className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" type="checkbox" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mid-Senior Level</span>
                                        <span className="text-xs text-gray-500">4-7 years</span>
                                    </div>
                                </label>
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition">
                                    <input className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" type="checkbox" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Director</span>
                                        <span className="text-xs text-gray-500">8+ years</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="h-px bg-gray-100 dark:bg-gray-700 my-1"></div>
                        {/* Job Type */}
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Job Type</h4>
                            <div className="flex flex-col gap-1">
                                <label className="flex items-center gap-2 py-1 cursor-pointer">
                                    <input defaultChecked className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" type="checkbox" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Full-time</span>
                                </label>
                                <label className="flex items-center gap-2 py-1 cursor-pointer">
                                    <input className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" type="checkbox" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Contract</span>
                                </label>
                                <label className="flex items-center gap-2 py-1 cursor-pointer">
                                    <input className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" type="checkbox" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Part-time</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Center: Job Feed */}
                <div className="flex flex-1 flex-col gap-4 min-w-0">
                    {/* Mobile Search Trigger */}
                    <div className="lg:hidden mb-2">
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                                <input className="w-full pl-10 pr-3 py-2 bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white" placeholder="Search jobs..." type="text" />
                            </div>
                            <button className="bg-white dark:bg-[#1a2632] p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-gray-200">
                                <Filter size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Header for feed */}
                    <div className="flex items-center justify-between pb-2">
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Top Job Picks for You</h1>
                        <span className="text-sm text-gray-500">Based on your profile</span>
                    </div>

                    {/* Job Card 1 */}
                    <div className="group relative flex flex-col gap-4 rounded-xl bg-white dark:bg-[#1a2632] p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 hover:shadow-md transition-all cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-4">
                                <div className="size-14 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200 dark:border-gray-700 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiy70oqR6U6RtN4W6AB8fMM94CbOo4AEj7mMucbVENC4teHCTM2JJO4oBprUMxXCOxZrZtwQCMDGnP6FvIMRslXhQDaDSEgiWOuGl8Se7upAFJP9hZ36insnaE8nsp_XBwmsOPEJugsNKP7DG7PB-cG_5DC3bTvW54NtgVodi4ULVMLWTa8dsWuZer97NV_LymOHMhnbiIOWq5N5VY2WvJ0NtSaCXdeQeYRenQ86JH53x6jvk3xTRAnTgEvjE9bA3VHPuSYI9miCPY")' }}></div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Senior Product Designer</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        <span className="font-medium">Spotify</span>
                                        <span className="size-1 rounded-full bg-gray-400"></span>
                                        <span>4.8 <span className="text-yellow-500">★</span></span>
                                    </div>
                                    <div className="flex items-center gap-x-4 gap-y-2 flex-wrap text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={18} />
                                            New York, NY (Hybrid)
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <DollarSign size={18} />
                                            $140k - $180k/yr
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="shrink-0 text-gray-400 hover:text-blue-500">
                                <Bookmark size={24} />
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            We are looking for a Senior Product Designer to join our Core Experience team. You will be responsible for defining the future of music discovery and personaliz...
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-50 dark:border-gray-800">
                            <div className="flex items-center gap-2 flex-wrap">
                                <div className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                    <Zap size={16} />
                                    95% Match
                                </div>
                                <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
                                    <Zap size={16} className="text-blue-500" />
                                    Easy Apply
                                </div>
                                <span className="text-xs text-gray-400 ml-1">Posted 2 days ago</span>
                            </div>
                            <button className="bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition">Apply Now</button>
                        </div>
                    </div>

                    {/* Job Card 2 */}
                    <div className="group relative flex flex-col gap-4 rounded-xl bg-white dark:bg-[#1a2632] p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 hover:shadow-md transition-all cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-4">
                                <div className="size-14 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200 dark:border-gray-700 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhsZPCqua6gUk04bFeE6LYJb1IgoqWB-8Fbkjcxg9sBm6CX4HvN4Rmvsu3ePQvE-rG-wBXAfx1ygYH0hdxtvJdndRsCss2CMqx6dFslOHDDD1mbkHaCfHjHj3y7Jd_kyNl7ojc1SVSLv09u3SzgW1bdVeGfng-PbagFQi7GNmIA4n0PhIfG7XrM8tC7BQvivLN0RYB89PkGa-f1gn093K7J38vAvnkf0Hd5n2fJl9TR-OdLJTftP08InbYmsRFx3rypSmFuQVqx_E5")' }}></div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Frontend Engineer, Design Systems</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        <span className="font-medium">Airbnb</span>
                                        <span className="size-1 rounded-full bg-gray-400"></span>
                                        <span>4.2 <span className="text-yellow-500">★</span></span>
                                    </div>
                                    <div className="flex items-center gap-x-4 gap-y-2 flex-wrap text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={18} />
                                            Remote
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <DollarSign size={18} />
                                            $160k - $210k/yr
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="shrink-0 text-gray-400 hover:text-blue-500">
                                <Bookmark size={24} />
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            Join the Design Systems team to build the foundation of Airbnb's digital products. You will work closely with designers to create robust, accessible components...
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-50 dark:border-gray-800">
                            <div className="flex items-center gap-2 flex-wrap">
                                <div className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                    <Zap size={16} />
                                    88% Match
                                </div>
                                <span className="text-xs text-gray-400 ml-1">Posted 5 hours ago</span>
                            </div>
                            <button className="bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition">Apply Now</button>
                        </div>
                    </div>

                    {/* Job Card 3 */}
                    <div className="group relative flex flex-col gap-4 rounded-xl bg-white dark:bg-[#1a2632] p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 hover:shadow-md transition-all cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-4">
                                <div className="size-14 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 text-white font-bold text-xl">L</div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Marketing Manager</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mt-1">
                                        <span className="font-medium">Linear</span>
                                        <span className="size-1 rounded-full bg-gray-400"></span>
                                        <span>5.0 <span className="text-yellow-500">★</span></span>
                                    </div>
                                    <div className="flex items-center gap-x-4 gap-y-2 flex-wrap text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={18} />
                                            San Francisco, CA
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <DollarSign size={18} />
                                            $120k - $150k/yr
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="shrink-0 text-gray-400 hover:text-blue-500">
                                <Bookmark size={24} />
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            Linear is looking for a Marketing Manager to lead our growth initiatives. You'll be responsible for content strategy, community management, and brand...
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-50 dark:border-gray-800">
                            <div className="flex items-center gap-2 flex-wrap">
                                <div className="inline-flex items-center gap-1 rounded-full bg-green-50 dark:bg-green-900/30 px-2.5 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
                                    <CheckCircle size={16} />
                                    Active Recruiter
                                </div>
                                <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
                                    <Zap size={16} className="text-blue-500" />
                                    Easy Apply
                                </div>
                                <span className="text-xs text-gray-400 ml-1">Posted 1 week ago</span>
                            </div>
                            <button className="bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition">Apply Now</button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Recommended / Promo */}
                <aside className="hidden xl:flex w-80 flex-col gap-6 shrink-0">
                    {/* Profile Summary Card */}
                    <div className="rounded-xl bg-white dark:bg-[#1a2632] p-5 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
                        <div className="size-20 rounded-full bg-gray-200 mb-3 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCb6_-DudMC7YDQ6a1FLL7tiNqIXDe3psasfjGcercXQwIArEZn6aQdTCovfu0MB53UQVWssV_O1arCE1ihNE_79xzblfnHPHrD_J_NYropM-2rbt2TdcN_wZ43YXzsIbtyoTmQkRvMkXsCbqP9B34KHeV0kZ1B9MzTIe90WLv0DKuSepzYBCqSR3GILGfbWUiDNIX3N9_jfSAGgkEGx3tKl8c0hJ9Y66C5Ysqpsffr937o2lNtBZaSc3lMEBCGb-LC_w4TtnZYIFd")' }}></div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">Alex Morgan</h3>
                        <p className="text-sm text-gray-500 mb-4">Senior Product Designer</p>
                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                            <div className="h-full bg-blue-500 w-[85%]"></div>
                        </div>
                        <p className="text-xs text-gray-400 w-full flex justify-between">
                            <span>Profile Strength</span>
                            <span>85%</span>
                        </p>
                        <button className="w-full mt-4 text-blue-500 text-sm font-bold border border-blue-500 rounded-lg py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition">Update Profile</button>
                    </div>

                    {/* Recommended Widget */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-1">
                            <h3 className="font-bold text-gray-900 dark:text-white">Recommended for you</h3>
                            <button className="text-blue-500 text-xs font-bold">View All</button>
                        </div>
                        {/* Mini Card 1 */}
                        <div className="bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition cursor-pointer">
                            <div className="flex gap-3 mb-2">
                                <div className="size-10 rounded bg-gray-100 flex items-center justify-center shrink-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBFgtmusSj3Vy2pczUC5yth07oto-LpNAWnNHggRxJsJYHi1AHebIWYhJUqqb78WoQiR1gaiG-RX08VEzoJu-gnh7Q42q3qFY3qZxfVgPxUaSjJvUaxT7GlX83ifNZVpSdbFNnXL9likjNsYGYjOUPKPQbsRuSj9S5EAhjh6tiEJBGavfN_psxqTWr3vLw-lv5uTTtd-UFp-kv6nt_ZkPVous1XxxC4-y9mY7LrGWZx828j5pTN5Lg6cgpy-lXiFRN2vB3p8wOZ48K")' }}></div>
                                <div className="overflow-hidden">
                                    <h4 className="font-bold text-sm truncate text-gray-900 dark:text-white">UX Researcher</h4>
                                    <p className="text-xs text-gray-500 truncate">Google • Mountain View</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-500 text-[10px] font-bold px-2 py-0.5 rounded-full">98% Match</span>
                            </div>
                        </div>
                        {/* Mini Card 2 */}
                        <div className="bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition cursor-pointer">
                            <div className="flex gap-3 mb-2">
                                <div className="size-10 rounded bg-gray-100 flex items-center justify-center shrink-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAe2ss5ZqSfUiuM4Hh2jYU1rVfdYN8LSuK5v0km4oJdKpf23RaJNyiQN1VMSi49vYvbK91xvbcWgPCjg1EHxA7KdPE4DRS7tcJNLqhaWCl6UOsENYCIMkS2ongMNmVvUqUC9asCr3Fg8BbiroZ_aN2EqFCbRuc52i6bVdYxZXUMzsjyn3D5poX5d008qYL2ybePSfVKklwqKjwg1pS6YLYu_OreCoIcuLQ3N-VlCPJjE5Ii0ctsY8HvkA0Y_tbZ9YYTNrHSfAw0AieT")' }}></div>
                                <div className="overflow-hidden">
                                    <h4 className="font-bold text-sm truncate text-gray-900 dark:text-white">Product Designer</h4>
                                    <p className="text-xs text-gray-500 truncate">Figma • San Francisco</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-500 text-[10px] font-bold px-2 py-0.5 rounded-full">94% Match</span>
                            </div>
                        </div>
                    </div>

                    {/* Promo / Learning */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#137fec] to-[#0a4d94] p-5 text-white shadow-md">
                        <div className="absolute -right-4 -top-4 size-24 rounded-full bg-white/10 blur-xl"></div>
                        <h3 className="relative font-bold text-lg mb-2">Boost your skills</h3>
                        <p className="relative text-sm text-blue-100 mb-4">Get certified in Advanced UX Research to increase your profile visibility.</p>
                        <button className="relative w-full bg-white text-blue-600 text-sm font-bold py-2 rounded-lg hover:bg-blue-50 transition">Start Learning</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default LongTermJobSeekerBoard;
