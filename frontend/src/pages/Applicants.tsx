import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Phone, Mail, MapPin, Star, Calendar, Briefcase, Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TextType from '../components/ui/TextType';

interface Applicant {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    experience: string;
    location: string;
    phone: string;
    email: string;
    appliedAt: string;
    skills: string[];
    bio: string;
}

const Applicants: React.FC = () => {
    const { mode } = useParams();
    const navigate = useNavigate();
    const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);

    const isDaily = mode === 'daily';

    // Mock applicants data
    const applicants: Applicant[] = [
        {
            id: 1,
            name: "Rajesh Kumar",
            avatar: "https://i.pravatar.cc/150?img=12",
            rating: 4.8,
            experience: "5 years",
            location: "Indiranagar, Bangalore",
            phone: "+91 98765 43210",
            email: "rajesh.kumar@email.com",
            appliedAt: "2 hours ago",
            skills: ["React", "TypeScript", "Node.js", "MongoDB"],
            bio: "Experienced full-stack developer with a passion for building scalable web applications. Specialized in React and Node.js ecosystems with strong problem-solving skills."
        },
        {
            id: 2,
            name: "Priya Sharma",
            avatar: "https://i.pravatar.cc/150?img=5",
            rating: 4.9,
            experience: "3 years",
            location: "Koramangala, Bangalore",
            phone: "+91 98765 43211",
            email: "priya.sharma@email.com",
            appliedAt: "5 hours ago",
            skills: ["UI/UX", "Figma", "Adobe XD", "Prototyping"],
            bio: "Creative UI/UX designer focused on user-centered design principles. Expert in creating intuitive interfaces and seamless user experiences across web and mobile platforms."
        },
        {
            id: 3,
            name: "Amit Patel",
            avatar: "https://i.pravatar.cc/150?img=8",
            rating: 4.7,
            experience: "4 years",
            location: "Whitefield, Bangalore",
            phone: "+91 98765 43212",
            email: "amit.patel@email.com",
            appliedAt: "1 day ago",
            skills: ["Python", "Django", "PostgreSQL", "Docker"],
            bio: "Backend developer specializing in Python and Django. Strong experience in database optimization, API design, and cloud infrastructure deployment."
        },
        {
            id: 4,
            name: "Sneha Reddy",
            avatar: "https://i.pravatar.cc/150?img=9",
            rating: 4.6,
            experience: "2 years",
            location: "HSR Layout, Bangalore",
            phone: "+91 98765 43213",
            email: "sneha.reddy@email.com",
            appliedAt: "2 days ago",
            skills: ["Java", "Spring Boot", "Microservices", "Kafka"],
            bio: "Java developer with expertise in building microservices architecture. Passionate about clean code and modern software development practices."
        }
    ];

    return (
        <div className="w-full min-h-screen relative px-6 md:px-8 pt-8 pb-8">
            {/* Background Pattern - Same as PostedJobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-gray-100 dark:bg-neutral-900" style={{ left: 0, right: 0 }}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150"></div>
                <div className={`absolute top-[-30%] right-[-20%] w-[80%] h-[80%] rounded-full ${isDaily ? 'bg-green-500/10' : 'bg-yellow-500/10'} blur-[140px]`} />
                <div className={`absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full ${isDaily ? 'bg-emerald-500/8' : 'bg-orange-500/8'} blur-[120px]`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full ${isDaily ? 'bg-green-400/5' : 'bg-yellow-400/5'} blur-[160px]`} />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/posted-jobs')}
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all shadow-sm"
                    >
                        <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                        <span>Back to Jobs</span>
                    </button>
                </div>

                <div
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border ${
                        isDaily
                            ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-600'
                            : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-600'
                    }`}
                >
                    {isDaily ? 'Daily Wage' : 'Long Term'}
                </div>
            </div>

            {/* Title Section */}
            <div className="relative z-10 mb-8">
                <h1 className="text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
                    <TextType
                        text="Applicants"
                        typingSpeed={80}
                        loop={false}
                        showCursor={false}
                    />
                </h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    {applicants.length} {applicants.length === 1 ? 'applicant' : 'applicants'} received for this position
                </p>
            </div>

            {/* Applicants Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {applicants.map((applicant, index) => (
                    <motion.div
                        key={applicant.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setSelectedApplicant(applicant)}
                        className="group cursor-pointer p-5 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        {/* Header with Avatar and Basic Info */}
                        <div className="flex items-start gap-4 mb-4">
                            <img
                                src={applicant.avatar}
                                alt={applicant.name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-neutral-300 dark:border-neutral-600"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">{applicant.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                    <Star size={14} className="fill-amber-400 text-amber-400" />
                                    <span className="font-medium">{applicant.rating}</span>
                                    <span className="mx-1">•</span>
                                    <Briefcase size={14} />
                                    <span>{applicant.experience}</span>
                                </div>
                            </div>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">{applicant.appliedAt}</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                            <MapPin size={14} className="text-neutral-500 dark:text-neutral-500" />
                            <span>{applicant.location}</span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {applicant.skills.slice(0, 3).map((skill, i) => (
                                <span
                                    key={i}
                                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                                        isDaily
                                            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                                            : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                                    }`}
                                >
                                    {skill}
                                </span>
                            ))}
                            {applicant.skills.length > 3 && (
                                <span className="px-2 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400">
                                    +{applicant.skills.length - 3} more
                                </span>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-3 border-t border-neutral-200 dark:border-neutral-700">
                            <a
                                href={`tel:${applicant.phone}`}
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                            >
                                <Phone size={14} />
                                Call
                            </a>
                            <a
                                href={`mailto:${applicant.email}`}
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                            >
                                <Mail size={14} />
                                Email
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Expanded Applicant Modal */}
            <AnimatePresence>
                {selectedApplicant && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setSelectedApplicant(null)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[90vh] z-50 overflow-auto"
                        >
                            <div className="rounded-2xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl overflow-hidden">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedApplicant(null)}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors shadow-lg"
                                >
                                    <X size={20} className="text-neutral-700 dark:text-neutral-300" />
                                </button>

                                {/* Header */}
                                <div className={`px-6 py-6 ${isDaily ? 'bg-emerald-500/10 dark:bg-emerald-500/20' : 'bg-amber-500/10 dark:bg-amber-500/20'}`}>
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={selectedApplicant.avatar}
                                            alt={selectedApplicant.name}
                                            className={`w-20 h-20 rounded-full object-cover border-3 ${
                                                isDaily ? 'border-emerald-500' : 'border-amber-500'
                                            }`}
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{selectedApplicant.name}</h3>
                                            <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                                                <div className="flex items-center gap-1">
                                                    <Star size={14} className="fill-amber-400 text-amber-400" />
                                                    <span className="font-medium">{selectedApplicant.rating}</span>
                                                </div>
                                                <span>•</span>
                                                <div className="flex items-center gap-1">
                                                    <Briefcase size={14} />
                                                    <span>{selectedApplicant.experience}</span>
                                                </div>
                                                <span>•</span>
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    <span>{selectedApplicant.appliedAt}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                                                <MapPin size={14} />
                                                <span>{selectedApplicant.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-6">
                                    {/* Bio */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wider">About</h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{selectedApplicant.bio}</p>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedApplicant.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                                                        isDaily
                                                            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-600'
                                                            : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-600'
                                                    }`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Contact Information</h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 text-sm">
                                                <Phone size={16} className="text-neutral-500 dark:text-neutral-400" />
                                                <a href={`tel:${selectedApplicant.phone}`} className="text-neutral-700 dark:text-neutral-300 hover:underline">
                                                    {selectedApplicant.phone}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm">
                                                <Mail size={16} className="text-neutral-500 dark:text-neutral-400" />
                                                <a href={`mailto:${selectedApplicant.email}`} className="text-neutral-700 dark:text-neutral-300 hover:underline">
                                                    {selectedApplicant.email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 pt-4">
                                        <a
                                            href={`tel:${selectedApplicant.phone}`}
                                            className="flex-1 py-3 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Phone size={16} />
                                            Call Applicant
                                        </a>
                                        <button
                                            className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 ${
                                                isDaily
                                                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                                                    : 'bg-amber-500 hover:bg-amber-600 text-black'
                                            }`}
                                        >
                                            <Download size={16} />
                                            Download Resume
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Applicants;
