import React from 'react';
import { ArrowLeft, Edit, ChevronDown, Download, Eye, Check, X } from 'lucide-react';

const LongTermDashboard: React.FC = () => {
    return (
        <div className="flex-1 flex justify-center py-8 px-4 md:px-8">
            <div className="flex flex-col max-w-[960px] w-full gap-6">
                {/* Page Heading Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-2 border-b border-gray-200 dark:border-[#2c3928]/50">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <a className="text-sm text-[#a3b99d] hover:text-primary flex items-center gap-1 transition-colors" href="#">
                                <ArrowLeft size={16} />
                                Back to Jobs
                            </a>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-[#131811] dark:text-white">Junior React Developer</h1>
                        <div className="flex items-center gap-3 text-[#a3b99d] text-sm md:text-base">
                            <span className="px-2 py-0.5 rounded-md bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wide border border-green-500/20">Active</span>
                            <span>•</span>
                            <span>Posted 3 days ago</span>
                            <span>•</span>
                            <span className="text-white font-medium">45 Applicants</span>
                            <span>•</span>
                            <span className="text-primary font-medium">5 New today</span>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-5 h-10 rounded-full bg-[#2c3928] hover:bg-[#3a4b35] text-white text-sm font-bold transition-colors">
                        <Edit size={18} />
                        <span>Edit Job</span>
                    </button>
                </div>

                {/* Toolbar & Actions */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 py-2">
                    {/* Filters */}
                    <div className="flex gap-3 flex-wrap items-center">
                        <div className="text-sm font-semibold text-[#a3b99d] mr-2">Filter by:</div>
                        <button className="group flex h-9 items-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#2c3928] hover:border-primary/50 pl-4 pr-3 transition-all text-[#131811] dark:text-white">
                            <span className="text-sm font-medium">Skill Match Score</span>
                            <ChevronDown className="text-[#a3b99d] group-hover:text-primary" size={20} />
                        </button>
                        <button className="group flex h-9 items-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#2c3928] hover:border-primary/50 pl-4 pr-3 transition-all text-[#131811] dark:text-white">
                            <span className="text-sm font-medium">Experience</span>
                            <ChevronDown className="text-[#a3b99d] group-hover:text-primary" size={20} />
                        </button>
                        <button className="group flex h-9 items-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-[#2c3928] hover:border-primary/50 pl-4 pr-3 transition-all text-[#131811] dark:text-white">
                            <span className="text-sm font-medium">Location</span>
                            <ChevronDown className="text-[#a3b99d] group-hover:text-primary" size={20} />
                        </button>
                        <button className="ml-2 text-xs font-medium text-primary hover:underline">Clear all</button>
                    </div>
                    {/* Primary Action */}
                    <button className="flex shrink-0 items-center justify-center gap-2 rounded-full h-10 bg-primary hover:bg-[#3bdb0b] text-[#131811] text-sm font-bold px-5 shadow-[0_0_15px_rgba(70,236,19,0.2)] transition-all">
                        <Download size={20} />
                        <span>Download All Resumes (.zip)</span>
                    </button>
                </div>

                {/* Applicant List */}
                <div className="flex flex-col gap-4">
                    {/* Card 1: High Match */}
                    <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-5 rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-transparent hover:border-primary/30 transition-all duration-300">
                        {/* Avatar */}
                        <div className="shrink-0 relative">
                            <div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-[#2c3928]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzPNsSwHo3EU709JiqrUPuPD57cc8APa_BWk6QpEQitvIXcyeSSLZHa4-V-ijMOUZmXZ3caNM-p3pc1TRvKUivs64Oak7_UQwU9haVJmWMgrowjbLU9h0m1TmFzXbr6q9NqH0fXovXHqDIbTIBeS6VQPZfMZ6mxx-5fOMmRX0bqzqntsuTtGJpqtwO5PFkau0GqO5qk_XaFnTxmk_H32H8Y8qzHb0nBLxr0F4r_Nz-CRo_rkEwVxj9v2U4YpgMfjzbtKEp9U-UOO4_")' }}></div>
                            <div className="absolute -bottom-1 -right-1 bg-primary text-[#131811] text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-surface-dark">NEW</div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0 flex flex-col gap-2">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <h3 className="text-lg font-bold text-[#131811] dark:text-white truncate">Sarah Jenkins</h3>
                                <span className="hidden md:inline text-[#2c3928] dark:text-[#556950]">•</span>
                                <p className="text-sm text-[#556950] dark:text-[#a3b99d]">Frontend Dev at TechCorp • 3 Years Exp</p>
                            </div>
                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mt-1">
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">React</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">Redux</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">TypeScript</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">Figma</span>
                            </div>
                            <p className="text-xs text-[#556950] dark:text-[#6e8568] mt-1">Applied 2h ago • San Francisco, CA</p>
                        </div>
                        {/* Match Score & Actions */}
                        <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between md:justify-center mt-2 md:mt-0 pl-0 md:pl-4 border-l-0 md:border-l border-[#2c3928]/30">
                            <div className="flex flex-col items-start md:items-end">
                                <span className="text-2xl font-bold text-primary">95%</span>
                                <span className="text-xs font-medium text-[#a3b99d]">Match Score</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-[#3a4b35] text-white transition-colors" title="View Resume">
                                    <Eye size={20} />
                                </button>
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-primary hover:text-[#131811] text-white transition-colors group/btn" title="Shortlist">
                                    <Check size={20} />
                                </button>
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-red-500 hover:text-white text-white transition-colors" title="Reject">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Medium Match */}
                    <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-5 rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-transparent hover:border-primary/30 transition-all duration-300">
                        {/* Avatar */}
                        <div className="shrink-0">
                            <div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-[#2c3928]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnEZcJGEvOwlS1DgreAAUEjAeCX9mahe-bPmyrXi0ZD6PoE11-OOADaI7lnRbwwl6Gu0lWKbPauStTjOXFsOn3TzV43PbJiK8jLtMLPbvJSL5PtER1RPCNe55IaroYC0WXHQtdE2aZ8zfgjXGESPqC5c095E9-nHq7FUGD79ZnihWOrCAqi6QWCJzZ2MMFgbZl-96mVz93t3wgBd2rdJESTxX-2tYYcDBXcV8KY3oSmfzJFxoMaHMVtoR1zxdtK1sl0q63sZnSDL81")' }}></div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0 flex flex-col gap-2">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <h3 className="text-lg font-bold text-[#131811] dark:text-white truncate">Michael Chen</h3>
                                <span className="hidden md:inline text-[#2c3928] dark:text-[#556950]">•</span>
                                <p className="text-sm text-[#556950] dark:text-[#a3b99d]">Full Stack Intern at WebSol • 1 Year Exp</p>
                            </div>
                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mt-1">
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">React</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">Node.js</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">MongoDB</span>
                            </div>
                            <p className="text-xs text-[#556950] dark:text-[#6e8568] mt-1">Applied 5h ago • Remote</p>
                        </div>
                        {/* Match Score & Actions */}
                        <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between md:justify-center mt-2 md:mt-0 pl-0 md:pl-4 border-l-0 md:border-l border-[#2c3928]/30">
                            <div className="flex flex-col items-start md:items-end">
                                <span className="text-2xl font-bold text-yellow-400">78%</span>
                                <span className="text-xs font-medium text-[#a3b99d]">Match Score</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-[#3a4b35] text-white transition-colors" title="View Resume">
                                    <Eye size={20} />
                                </button>
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-primary hover:text-[#131811] text-white transition-colors" title="Shortlist">
                                    <Check size={20} />
                                </button>
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-red-500 hover:text-white text-white transition-colors" title="Reject">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: High Match */}
                    <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-5 rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-transparent hover:border-primary/30 transition-all duration-300">
                        {/* Avatar */}
                        <div className="shrink-0">
                            <div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-[#2c3928]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkz3VSvygd77XYEoihahNJWA_7Uy8ihXaC2DqFKDA67t0p6VJ7d6OFk5DW_DibphVqrghWihPrPLuJeA3vMELkdGNG0vAJAYQttX-SdnLupA0plMAP1j2lK920tW_OhYWYh-RZRHT4foKx5QjhuRvniUEKKif2ONMhKrtsXUS7WMs2wPNfFaxiOLPTI74P_cXZcYuQjeBzhcvp72L1mohIfJGbQkjF-GAb38V0LTT_HuAaNHMnu314xnFk0PxsEsHP-K_aWAiSWAbJ")' }}></div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0 flex flex-col gap-2">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <h3 className="text-lg font-bold text-[#131811] dark:text-white truncate">Priya Patel</h3>
                                <span className="hidden md:inline text-[#2c3928] dark:text-[#556950]">•</span>
                                <p className="text-sm text-[#556950] dark:text-[#a3b99d]">Software Engineer at StartupInc • 2 Years Exp</p>
                            </div>
                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mt-1">
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">React Native</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">JavaScript</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">AWS</span>
                            </div>
                            <p className="text-xs text-[#556950] dark:text-[#6e8568] mt-1">Applied 1d ago • New York, NY</p>
                        </div>
                        {/* Match Score & Actions */}
                        <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between md:justify-center mt-2 md:mt-0 pl-0 md:pl-4 border-l-0 md:border-l border-[#2c3928]/30">
                            <div className="flex flex-col items-start md:items-end">
                                <span className="text-2xl font-bold text-primary">88%</span>
                                <span className="text-xs font-medium text-[#a3b99d]">Match Score</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-[#3a4b35] text-white transition-colors" title="View Resume">
                                    <Eye size={20} />
                                </button>
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-primary hover:text-[#131811] text-white transition-colors" title="Shortlist">
                                    <Check size={20} />
                                </button>
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-red-500 hover:text-white text-white transition-colors" title="Reject">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Low Match */}
                    <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-5 rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-transparent hover:border-primary/30 transition-all duration-300 opacity-80 hover:opacity-100">
                        {/* Avatar */}
                        <div className="shrink-0">
                            <div className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-[#2c3928]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLhdsQJ858JInfGDPPQ4b4baWinDGBYxJYgDtv8EaERcR-Pn2prAu8JqTzvutDSKTU7LVTS_XXMBtgu6x8aP-epA7Zoj1rgDJC8wWeOk7vQ-_rhbqwFaDTCl6SNuy0gCn-bAQQxtRgx-lFxg2wCBGOhsONZULcxHjIecN_UF7p3Oc3_HLvOf1ju650gbjBX-GaAHd7EZ-LTj2jQay6sk7RV_MuZ9NCCLdzVZFZIdE3nHxTSxBG5DXpOMAy4EcZ_byTe3mX1l55tVej")' }}></div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0 flex flex-col gap-2">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <h3 className="text-lg font-bold text-[#131811] dark:text-white truncate">David Kim</h3>
                                <span className="hidden md:inline text-[#2c3928] dark:text-[#556950]">•</span>
                                <p className="text-sm text-[#556950] dark:text-[#a3b99d]">Junior Developer • 0 Years Exp</p>
                            </div>
                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mt-1">
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">HTML/CSS</span>
                                <span className="px-2.5 py-1 rounded-md bg-[#2c3928]/30 text-[#131811] dark:text-[#dce6da] text-xs font-medium border border-[#2c3928]/50">JavaScript Basics</span>
                            </div>
                            <p className="text-xs text-[#556950] dark:text-[#6e8568] mt-1">Applied 2d ago • Austin, TX</p>
                        </div>
                        {/* Match Score & Actions */}
                        <div className="flex flex-row md:flex-col items-center md:items-end gap-4 w-full md:w-auto justify-between md:justify-center mt-2 md:mt-0 pl-0 md:pl-4 border-l-0 md:border-l border-[#2c3928]/30">
                            <div className="flex flex-col items-start md:items-end">
                                <span className="text-2xl font-bold text-[#a3b99d]">45%</span>
                                <span className="text-xs font-medium text-[#a3b99d]">Match Score</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-[#3a4b35] text-white transition-colors" title="View Resume">
                                    <Eye size={20} />
                                </button>
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-primary hover:text-[#131811] text-white transition-colors" title="Shortlist">
                                    <Check size={20} />
                                </button>
                                <button className="size-9 flex items-center justify-center rounded-full bg-[#2c3928] hover:bg-red-500 hover:text-white text-white transition-colors" title="Reject">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination / Load More */}
                <div className="flex justify-center py-6">
                    <button className="text-sm font-semibold text-[#a3b99d] hover:text-primary flex items-center gap-2 transition-colors">
                        Load more applicants
                        <ChevronDown size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LongTermDashboard;
