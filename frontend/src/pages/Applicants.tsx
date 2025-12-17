import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, Phone, Mail, MapPin, Star, Calendar, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

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
    resumeUrl: string;
}

const Applicants: React.FC = () => {
    const { mode } = useParams();
    const navigate = useNavigate();

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
            skills: ["React", "TypeScript", "Node.js"],
            resumeUrl: "/resumes/rajesh-kumar.pdf"
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
            skills: ["UI/UX", "Figma", "Adobe XD"],
            resumeUrl: "/resumes/priya-sharma.pdf"
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
            skills: ["Python", "Django", "PostgreSQL"],
            resumeUrl: "/resumes/amit-patel.pdf"
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
            skills: ["Java", "Spring Boot", "Microservices"],
            resumeUrl: "/resumes/sneha-reddy.pdf"
        }
    ];

    const handleDownloadAll = () => {
        // In real app, this would download a zip of all resumes
        alert('Downloading all resumes...');
    };

    const handleDownloadResume = (applicant: Applicant) => {
        // In real app, this would download individual resume
        alert(`Downloading ${applicant.name}'s resume...`);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-neutral-900">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/posted-jobs')}
                            className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div>
                            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Applicants</h1>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{applicants.length} total applications</p>
                        </div>
                    </div>
                    <button
                        onClick={handleDownloadAll}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white transition-all shadow-md hover:shadow-lg ${
                            isDaily ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                        }`}
                    >
                        <Download size={18} />
                        Download All Resumes
                    </button>
                </div>
            </div>

            {/* Applicants List */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid gap-4">
                    {applicants.map((applicant, index) => (
                        <motion.div
                            key={applicant.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start gap-6">
                                {/* Avatar */}
                                <img
                                    src={applicant.avatar}
                                    alt={applicant.name}
                                    className={`w-20 h-20 rounded-full object-cover border-4 ${
                                        isDaily ? 'border-green-200 dark:border-green-900/30' : 'border-yellow-200 dark:border-yellow-900/30'
                                    }`}
                                />

                                {/* Details */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                                                {applicant.name}
                                            </h3>
                                            <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                                <Star size={16} fill="currentColor" />
                                                <span className="text-sm font-semibold">{applicant.rating}</span>
                                                <span className="text-neutral-500 dark:text-neutral-400 text-sm ml-2">
                                                    {applicant.experience} experience
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-full">
                                            <Calendar size={12} className="inline mr-1" />
                                            {applicant.appliedAt}
                                        </span>
                                    </div>

                                    {/* Contact & Location */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                            <MapPin size={16} />
                                            <span>{applicant.location}</span>
                                        </div>
                                        <a
                                            href={`tel:${applicant.phone}`}
                                            className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                        >
                                            <Phone size={16} />
                                            <span>{applicant.phone}</span>
                                        </a>
                                        <a
                                            href={`mailto:${applicant.email}`}
                                            className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <Mail size={16} />
                                            <span>{applicant.email}</span>
                                        </a>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex items-center gap-2 mb-4">
                                        {applicant.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    isDaily
                                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                                                }`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => handleDownloadResume(applicant)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                                                isDaily
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                                                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-900/50'
                                            }`}
                                        >
                                            <FileText size={16} />
                                            View Resume
                                        </button>
                                        <button
                                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white transition-all ${
                                                isDaily
                                                    ? 'bg-green-500 hover:bg-green-600'
                                                    : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                                            }`}
                                        >
                                            Accept
                                        </button>
                                        <button className="px-4 py-2 rounded-xl font-semibold bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-all">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Applicants;
