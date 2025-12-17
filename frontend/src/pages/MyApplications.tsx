import React from 'react';
import { FileText, Clock, AlertCircle, Search, Filter, List, LayoutGrid, Check, Ban, Inbox } from 'lucide-react';

const MyApplications: React.FC = () => {
    return (
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-8">
                    <div className="layout-content-container flex flex-col w-full max-w-[1400px] flex-1 gap-6">
                        {/* Header & Stats Section */}
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap justify-between gap-3">
                                <div className="flex min-w-72 flex-col gap-2">
                                    <h1 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">My Applications</h1>
                                    <p className="text-[#637588] dark:text-gray-400 text-base font-normal leading-normal">Track your job search progress across all stages</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#dce0e5] dark:border-gray-800 bg-white dark:bg-[#1a2632] shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                            <FileText size={20} />
                                        </div>
                                        <p className="text-[#637588] dark:text-gray-400 text-sm font-medium leading-normal">Total Applications</p>
                                    </div>
                                    <p className="text-[#111418] dark:text-white tracking-light text-2xl font-bold leading-tight pl-1">12</p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#dce0e5] dark:border-gray-800 bg-white dark:bg-[#1a2632] shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                                            <Clock size={20} />
                                        </div>
                                        <p className="text-[#637588] dark:text-gray-400 text-sm font-medium leading-normal">Active Process</p>
                                    </div>
                                    <p className="text-[#111418] dark:text-white tracking-light text-2xl font-bold leading-tight pl-1">5</p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-xl p-6 border border-[#dce0e5] dark:border-gray-800 bg-white dark:bg-[#1a2632] shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400">
                                            <AlertCircle size={20} />
                                        </div>
                                        <p className="text-[#637588] dark:text-gray-400 text-sm font-medium leading-normal">Action Required</p>
                                    </div>
                                    <p className="text-[#111418] dark:text-white tracking-light text-2xl font-bold leading-tight pl-1">1</p>
                                </div>
                            </div>
                        </div>

                        {/* Controls Bar */}
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-2 border-y border-[#f0f2f4] dark:border-gray-800">
                            <div className="w-full md:w-96">
                                <label className="flex w-full items-center rounded-lg bg-white dark:bg-[#1a2632] border border-[#dce0e5] dark:border-gray-700 h-10 px-3 gap-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                                    <Search className="text-[#637588] dark:text-gray-400" size={20} />
                                    <input className="w-full bg-transparent border-none text-sm text-[#111418] dark:text-white placeholder:text-[#637588] dark:placeholder:text-gray-500 focus:outline-none focus:ring-0" placeholder="Search by company or role" />
                                </label>
                            </div>
                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-white dark:bg-[#1a2632] border border-[#dce0e5] dark:border-gray-700 text-[#111418] dark:text-white text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <Filter size={20} />
                                    <span>Filters</span>
                                </button>
                                <div className="flex h-10 items-center rounded-lg bg-[#f0f2f4] dark:bg-[#1a2632] p-1 border border-transparent dark:border-gray-700">
                                    <label className="cursor-pointer flex items-center justify-center h-full px-3 rounded-md bg-white dark:bg-gray-700 shadow-sm text-[#111418] dark:text-white text-xs font-bold transition-all">
                                        <input defaultChecked className="hidden" name="view-toggle" type="radio" value="board" />
                                        <span className="flex items-center gap-1"><LayoutGrid size={14} /> Board</span>
                                    </label>
                                    <label className="cursor-pointer flex items-center justify-center h-full px-3 rounded-md text-[#637588] dark:text-gray-400 hover:text-[#111418] dark:hover:text-white text-xs font-medium transition-all">
                                        <input className="hidden" name="view-toggle" type="radio" value="list" />
                                        <span className="flex items-center gap-1"><List size={14} /> List</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Kanban Board */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 h-full min-h-[500px] items-start pb-10">
                            {/* Column 1: Applied */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between pb-2 border-b-2 border-blue-200 dark:border-blue-900">
                                    <h3 className="font-bold text-[#111418] dark:text-white">Applied</h3>
                                    <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold">5</span>
                                </div>
                                {/* Card */}
                                <div className="group flex flex-col gap-3 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-[#1a2632] p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-gray-100 flex-shrink-0 bg-center bg-cover border border-gray-100 dark:border-gray-600" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJR_6_WlGWkSCRDJJobMR05PVgFwE2dEA30njgfz7JjQl1mrFJSzBvV11a4tCFQeLtNPwWCNM-2T0RbeI-2y1_XGgDsvu-tVmg3k1uCEFvJZ4pjn7UBVdxc6kE3boSqbO-vIZY5EjON_aSDvPmvCzy5c4GcP0j_368HbS3Iov13ojE3Us_CZVv-0nFQKg3w2cUCfuF8G6XAHPVtuBUpNBnW21F3HOIsekrmK77Sds5khd1Axg7rDFqu0Ha7r8jDGgbVMVzKnMgMiEN")' }}></div>
                                            <div className="overflow-hidden">
                                                <p className="font-bold text-[#111418] dark:text-white text-sm truncate">Product Manager</p>
                                                <p className="text-xs text-[#637588] dark:text-gray-400 truncate">FinTech Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5 mt-1">
                                        <div className="flex items-center gap-1">
                                            <div className="size-2 rounded-full bg-blue-500 ring-2 ring-blue-100 dark:ring-blue-900"></div>
                                            <div className="h-0.5 flex-1 bg-[#f0f2f4] dark:bg-gray-700"></div>
                                            <div className="size-2 rounded-full bg-[#dce0e5] dark:bg-gray-600"></div>
                                            <div className="h-0.5 flex-1 bg-[#f0f2f4] dark:bg-gray-700"></div>
                                            <div className="size-2 rounded-full bg-[#dce0e5] dark:bg-gray-600"></div>
                                        </div>
                                        <p className="text-xs font-medium text-blue-500">Application Sent</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#f0f2f4] dark:border-gray-700">
                                        <span className="text-xs text-[#637588] dark:text-gray-400">Applied 2d ago</span>
                                        <span className="text-xs font-semibold text-[#111418] dark:text-white">$120k - $150k</span>
                                    </div>
                                </div>
                                {/* Card */}
                                <div className="group flex flex-col gap-3 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-[#1a2632] p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-gray-100 flex-shrink-0 bg-center bg-cover border border-gray-100 dark:border-gray-600" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9sxRDPhcffteEhSblfXuqgnIFcgsVo3o1pjDmNE7sEvBPFE10MUGTrlPiVJ621zQMXVha6e0wo2RGc2mFLNFCbhm8o3c0aQ8Vogppsao6lu0cKG-bZeLIE44YA5VIXAvaHWPfkc2ihgtmgfew5HwyezQWZTsfooUMjgCb1IM-xGW3tJofuTxcJ85lJFj7B0dE2bl9F2bepbjUnfkHVv_JfGY1tQLrJtMcljFiJyOra0JtyGURT91FkX-q89rrd0WByWohdap7816N")' }}></div>
                                            <div className="overflow-hidden">
                                                <p className="font-bold text-[#111418] dark:text-white text-sm truncate">Frontend Developer</p>
                                                <p className="text-xs text-[#637588] dark:text-gray-400 truncate">WebWorks Global</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5 mt-1">
                                        <div className="flex items-center gap-1">
                                            <div className="size-2 rounded-full bg-blue-500 ring-2 ring-blue-100 dark:ring-blue-900"></div>
                                            <div className="h-0.5 flex-1 bg-[#f0f2f4] dark:bg-gray-700"></div>
                                            <div className="size-2 rounded-full bg-[#dce0e5] dark:bg-gray-600"></div>
                                            <div className="h-0.5 flex-1 bg-[#f0f2f4] dark:bg-gray-700"></div>
                                            <div className="size-2 rounded-full bg-[#dce0e5] dark:bg-gray-600"></div>
                                        </div>
                                        <p className="text-xs font-medium text-blue-500">Application Sent</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#f0f2f4] dark:border-gray-700">
                                        <span className="text-xs text-[#637588] dark:text-gray-400">Applied 5h ago</span>
                                        <span className="text-xs font-semibold text-[#111418] dark:text-white">Remote</span>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Viewed */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between pb-2 border-b-2 border-indigo-200 dark:border-indigo-900">
                                    <h3 className="font-bold text-[#111418] dark:text-white">Viewed</h3>
                                    <span className="px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold">3</span>
                                </div>
                                {/* Card */}
                                <div className="group flex flex-col gap-3 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-[#1a2632] p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-gray-100 flex-shrink-0 bg-center bg-cover border border-gray-100 dark:border-gray-600" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0tmrkCUsvcKnUBEE3I3pgSnspR5gIfnEc8ea7-2tywec89JF0huC7MfU12ljaBj2siANGH1nlGFa6j5TqqZKFM2cgrBlJXVcqncxAMwppwLpouIOA_ANV02ZrQloWEnDcBiTrjbdb2VPOZmnaMV4Q4R-bTym_wy8O_fBuzMg_-Actfo8TeFM0_Z71C3VsXECQ0cjpR1fDPabmGOCRMmajjNz8UgF2sxifghqJK6TGzenDhjFpBqdd9NWIijCFEZLlKZYETcIS2czx")' }}></div>
                                            <div className="overflow-hidden">
                                                <p className="font-bold text-[#111418] dark:text-white text-sm truncate">Senior UX Designer</p>
                                                <p className="text-xs text-[#637588] dark:text-gray-400 truncate">Creative Pulse</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5 mt-1">
                                        <div className="flex items-center gap-1">
                                            <div className="size-2 rounded-full bg-blue-500"></div>
                                            <div className="h-0.5 flex-1 bg-blue-500"></div>
                                            <div className="size-2 rounded-full bg-blue-500 ring-2 ring-blue-100 dark:ring-blue-900"></div>
                                            <div className="h-0.5 flex-1 bg-[#f0f2f4] dark:bg-gray-700"></div>
                                            <div className="size-2 rounded-full bg-[#dce0e5] dark:bg-gray-600"></div>
                                        </div>
                                        <p className="text-xs font-medium text-blue-500">Reviewed by HR today</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#f0f2f4] dark:border-gray-700">
                                        <span className="text-xs text-[#637588] dark:text-gray-400">Applied 4d ago</span>
                                        <button className="text-xs font-bold text-blue-500 hover:underline">View Details</button>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Shortlisted */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between pb-2 border-b-2 border-emerald-200 dark:border-emerald-900">
                                    <h3 className="font-bold text-[#111418] dark:text-white">Shortlisted</h3>
                                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold">2</span>
                                </div>
                                {/* Card Highlighted */}
                                <div className="group flex flex-col gap-3 rounded-xl border-l-4 border-l-blue-500 border-t border-r border-b border-[#dce0e5] dark:border-gray-700 bg-blue-50/30 dark:bg-blue-900/10 p-4 shadow-md hover:shadow-lg transition-all cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-gray-100 flex-shrink-0 bg-center bg-cover border border-gray-100 dark:border-gray-600" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAchnp7FJC9oCo2QS3t7uRCZSiGXljc-WLUnkMge8CNX0V-2yk44lPDW8chkmfu6eDNnI1qzoLe0QC7raE-3ZK89jBTTg25C-qvUpnMWLcP8bkMB3q98aVHbSzkbiqrUOueX5rpxnF6_oOU-yAcm_3fFwai_OY_0elXws1ImiztMPF_P1IvPrYATSScWeUwhVlhA4sau4TLh07h4pyvsBAGR2pX_HO2BwXwB0T3tQkCSDfJ2LA_uE1-zF9TclD3b8SfHl9ULGEhP8kw")' }}></div>
                                            <div className="overflow-hidden">
                                                <p className="font-bold text-[#111418] dark:text-white text-sm truncate">Staff Engineer</p>
                                                <p className="text-xs text-[#637588] dark:text-gray-400 truncate">Orbit Tech</p>
                                            </div>
                                        </div>
                                        <div className="flex size-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400">
                                            <Check size={14} className="font-bold" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5 mt-1">
                                        <div className="flex items-center gap-1">
                                            <div className="size-2 rounded-full bg-blue-500"></div>
                                            <div className="h-0.5 flex-1 bg-blue-500"></div>
                                            <div className="size-2 rounded-full bg-blue-500"></div>
                                            <div className="h-0.5 flex-1 bg-blue-500"></div>
                                            <div className="size-2 rounded-full bg-blue-500 ring-2 ring-blue-100 dark:ring-blue-900"></div>
                                        </div>
                                        <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Interview Scheduled</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#f0f2f4] dark:border-gray-700/50">
                                        <span className="text-xs text-[#637588] dark:text-gray-400">Tomorrow, 10:00 AM</span>
                                        <button className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-sm">Join Call</button>
                                    </div>
                                </div>
                                {/* Card */}
                                <div className="group flex flex-col gap-3 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-white dark:bg-[#1a2632] p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-gray-100 flex-shrink-0 bg-center bg-cover border border-gray-100 dark:border-gray-600" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGr_B54z0acHq4JN9_Ari19iyrIdaQbRFGOXqBGkTj4rE2HnJqB5rx0zDnCVjK_GH-Qr7ty1VvRtwQFiBYmUOmmpbQ33rTdVZWk_klzDLIPVW2jNcS4Ze_XpmmdBN99jvKGN0Yxyip_0rLWYMkNW03wHZaPZei3aMWET0zuN1x-ZUJN_O2N5Q82T-A6-7ktxkJai3Ujaf5xbScl-p9gtEUtiFV_2LVYIWCNnNrxTIof6z36qrZaK0w-ZwN9QaHwptz4EXnDI4lZ9bI")' }}></div>
                                            <div className="overflow-hidden">
                                                <p className="font-bold text-[#111418] dark:text-white text-sm truncate">Art Director</p>
                                                <p className="text-xs text-[#637588] dark:text-gray-400 truncate">Studio Blanc</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5 mt-1">
                                        <div className="flex items-center gap-1">
                                            <div className="size-2 rounded-full bg-blue-500"></div>
                                            <div className="h-0.5 flex-1 bg-blue-500"></div>
                                            <div className="size-2 rounded-full bg-blue-500"></div>
                                            <div className="h-0.5 flex-1 bg-blue-500"></div>
                                            <div className="size-2 rounded-full bg-blue-500 ring-2 ring-blue-100 dark:ring-blue-900"></div>
                                        </div>
                                        <p className="text-xs font-bold text-blue-500">Assessment Pending</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#f0f2f4] dark:border-gray-700">
                                        <span className="text-xs text-[#637588] dark:text-gray-400">Applied 1w ago</span>
                                        <span className="text-xs font-bold text-orange-500">Action Required</span>
                                    </div>
                                </div>
                            </div>

                            {/* Column 4: Rejected */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between pb-2 border-b-2 border-red-100 dark:border-red-900/50">
                                    <h3 className="font-bold text-[#637588] dark:text-gray-400">Rejected</h3>
                                    <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-bold">2</span>
                                </div>
                                {/* Card */}
                                <div className="group flex flex-col gap-3 rounded-xl border border-[#dce0e5] dark:border-gray-700 bg-gray-50 dark:bg-[#151e26] p-4 opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg bg-gray-200 flex-shrink-0 bg-center bg-cover grayscale" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoj1vu-dNvdsqoz2fbuiGvKkD329S52TFN29SNMPir59NjGElNsb7_09oCehXnPc2T5pktmUDC1rlEJOIrjMG-EkmJYKjc-3mJofeigiIbXeUolmD0BalKJDFttC0N3-2JaAsOEXYHuhI4DsT5VWON1S1AyoKAsVhCsY2nix8p5ZxcCa9JYSN-7i5HfzXJcKyxYK9X_-N4XhhN-GtWqRfeGJNSDXPMQET041B8vj4NaPfWnutywWYoa5yMi5rxOWB2pwZT_csSGjlf")' }}></div>
                                            <div className="overflow-hidden">
                                                <p className="font-bold text-[#637588] dark:text-gray-400 text-sm truncate line-through decoration-gray-400">Marketing Lead</p>
                                                <p className="text-xs text-[#637588] dark:text-gray-500 truncate">Alpha Corp</p>
                                            </div>
                                        </div>
                                        <Ban className="text-gray-400" size={18} />
                                    </div>
                                    <div className="flex flex-col gap-1.5 mt-1">
                                        <div className="flex items-center gap-1">
                                            <div className="size-2 rounded-full bg-gray-400"></div>
                                            <div className="h-0.5 flex-1 bg-gray-300 dark:bg-gray-700"></div>
                                            <div className="size-2 rounded-full bg-gray-400"></div>
                                            <div className="h-0.5 flex-1 bg-gray-300 dark:bg-gray-700"></div>
                                            <div className="size-2 rounded-full bg-red-400"></div>
                                        </div>
                                        <p className="text-xs font-medium text-red-500">Not selected</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-gray-200 dark:border-gray-700">
                                        <span className="text-xs text-[#637588] dark:text-gray-500">Updated 1d ago</span>
                                        <button className="text-xs font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Archive</button>
                                    </div>
                                </div>
                                {/* Empty State for illustration in column */}
                                <div className="flex flex-col items-center justify-center p-6 border border-dashed border-[#dce0e5] dark:border-gray-700 rounded-xl bg-transparent">
                                    <Inbox className="text-[#637588] dark:text-gray-600 mb-2" size={36} />
                                    <p className="text-xs text-center text-[#637588] dark:text-gray-500">Drag items here to archive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyApplications;
