import React, { useState } from 'react';
import { useMode } from '../context/ModeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Map, MapPin, Clock, IndianRupee, Star, Play, Square, Loader2, Navigation, Phone, X, Briefcase } from 'lucide-react';
import TextType from '../components/ui/TextType';
import MapComponent from '../components/MapComponent';

interface Job {
    id: number;
    title: string;
    location: string;
    address: string;
    pay: string;
    time: string;
    employer: string;
    employerRating: number;
    employerAvatar: string;
    distance: string;
    skills: string[];
    description: string;
    postedAt: string;
    coordinates: [number, number];
}

interface LongTermJob {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    requirements: string[];
    description: string;
    postedAt: string;
}

const ExploreJobs: React.FC = () => {
    const { mode } = useMode();
    const [viewMode, setViewMode] = useState<'card' | 'map'>('card');
    const [isExploring, setIsExploring] = useState(false);
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const [foundJobs, setFoundJobs] = useState<Job[]>([]);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);

    const isDaily = mode === 'daily';

    // Mock data for daily wage jobs
    const mockDailyJobs: Job[] = [
        {
            id: 1,
            title: "Plumbing Work",
            location: "Indiranagar",
            address: "123 MG Road, Indiranagar, Bangalore",
            pay: "₹800/day",
            time: "9 AM - 6 PM",
            employer: "Rahul Sharma",
            employerRating: 4.8,
            employerAvatar: "https://i.pravatar.cc/150?img=11",
            distance: "1.2 km",
            skills: ["Plumbing", "Pipe Fitting", "Leak Repair"],
            description: "Need an experienced plumber for bathroom renovation work. Must have own tools.",
            postedAt: "30 mins ago",
            coordinates: [12.9716, 77.6046]
        },
        {
            id: 2,
            title: "Electrical Wiring",
            location: "Koramangala",
            address: "456 80 Feet Road, Koramangala, Bangalore",
            pay: "₹1,000/day",
            time: "10 AM - 5 PM",
            employer: "Priya Patel",
            employerRating: 4.9,
            employerAvatar: "https://i.pravatar.cc/150?img=25",
            distance: "2.5 km",
            skills: ["Electrical", "Wiring", "Circuit Repair"],
            description: "Looking for electrician for complete house wiring. Safety equipment provided.",
            postedAt: "1 hour ago",
            coordinates: [12.9352, 77.6245]
        },
        {
            id: 3,
            title: "House Painting",
            location: "HSR Layout",
            address: "789 Sector 7, HSR Layout, Bangalore",
            pay: "₹900/day",
            time: "8 AM - 4 PM",
            employer: "Vikram Kumar",
            employerRating: 4.5,
            employerAvatar: "https://i.pravatar.cc/150?img=33",
            distance: "3.8 km",
            skills: ["Painting", "Wall Preparation", "Color Mixing"],
            description: "Need painters for 3BHK apartment. Paint and materials provided.",
            postedAt: "2 hours ago",
            coordinates: [12.9121, 77.6446]
        }
    ];

    // Mock data for long-term jobs
    const mockLongTermJobs: LongTermJob[] = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "TechCorp Solutions",
            location: "Bangalore (Hybrid)",
            salary: "₹12-15 LPA",
            type: "Full-time",
            requirements: ["React", "TypeScript", "3+ years experience"],
            description: "Looking for experienced frontend developers to join our product team.",
            postedAt: "1 day ago"
        },
        {
            id: 2,
            title: "UI/UX Designer",
            company: "DesignHub India",
            location: "Remote",
            salary: "₹8-12 LPA",
            type: "Full-time",
            requirements: ["Figma", "User Research", "2+ years experience"],
            description: "Join our design team to create beautiful user experiences.",
            postedAt: "2 days ago"
        },
        {
            id: 3,
            title: "React Developer Intern",
            company: "StartupXYZ",
            location: "Bangalore",
            salary: "₹25,000/month",
            type: "Internship",
            requirements: ["React Basics", "JavaScript", "Fresh Graduate"],
            description: "6-month internship with opportunity for full-time conversion.",
            postedAt: "3 days ago"
        }
    ];

    const startExploring = () => {
        setIsLoadingLocation(true);
        
        // Simulate getting user location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation([position.coords.latitude, position.coords.longitude]);
                setIsExploring(true);
                setIsLoadingLocation(false);
                
                // Simulate finding jobs after a delay
                setTimeout(() => {
                    setFoundJobs(mockDailyJobs);
                }, 2000);
            },
            () => {
                // Fallback to Bangalore coordinates
                setUserLocation([12.9716, 77.5946]);
                setIsExploring(true);
                setIsLoadingLocation(false);
                
                setTimeout(() => {
                    setFoundJobs(mockDailyJobs);
                }, 2000);
            }
        );
    };

    const stopExploring = () => {
        setIsExploring(false);
        setFoundJobs([]);
        setUserLocation(null);
    };

    const calculateDistance = (jobCoords: [number, number]) => {
        if (!userLocation) return "N/A";
        const R = 6371; // km
        const dLat = (jobCoords[0] - userLocation[0]) * Math.PI / 180;
        const dLon = (jobCoords[1] - userLocation[1]) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(userLocation[0] * Math.PI / 180) * Math.cos(jobCoords[0] * Math.PI / 180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return (R * c).toFixed(1) + " km";
    };

    return (
        <div className="w-full min-h-screen relative px-6 md:px-8 pt-8 pb-8">
            {/* Background Pattern - Watercolor Paper Texture */}
            <div 
                className="fixed inset-0 pointer-events-none overflow-hidden z-0" 
                style={{ 
                    left: 0, 
                    right: 0,
                    backgroundColor: isDaily ? '#F5F9F7' : '#FAF8F5'
                }}
            >
                {/* Grainy Paper Texture */}
                <div 
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-multiply"
                    style={{ filter: 'contrast(110%) brightness(100%)' }}
                />
                
                {/* Organic Watercolor Gradients */}
                {isDaily ? (
                    <>
                        <div 
                            className="absolute top-[-10%] right-[-5%] w-[60%] h-[50%] rounded-full opacity-40"
                            style={{ 
                                background: 'radial-gradient(ellipse at center, rgba(134, 239, 172, 0.5) 0%, rgba(187, 247, 208, 0.3) 40%, transparent 70%)',
                                filter: 'blur(60px)'
                            }}
                        />
                        <div 
                            className="absolute top-[20%] left-[-10%] w-[50%] h-[45%] rounded-full opacity-35"
                            style={{ 
                                background: 'radial-gradient(ellipse at center, rgba(167, 243, 208, 0.5) 0%, rgba(209, 250, 229, 0.3) 50%, transparent 70%)',
                                filter: 'blur(80px)'
                            }}
                        />
                        <div 
                            className="absolute bottom-[-15%] right-[10%] w-[55%] h-[50%] rounded-full opacity-30"
                            style={{ 
                                background: 'radial-gradient(ellipse at center, rgba(110, 231, 183, 0.4) 0%, rgba(167, 243, 208, 0.2) 45%, transparent 70%)',
                                filter: 'blur(70px)'
                            }}
                        />
                    </>
                ) : (
                    <>
                        <div 
                            className="absolute top-[-10%] right-[-5%] w-[60%] h-[50%] rounded-full opacity-50"
                            style={{ 
                                background: 'radial-gradient(ellipse at center, rgba(251, 191, 136, 0.6) 0%, rgba(254, 215, 170, 0.4) 40%, transparent 70%)',
                                filter: 'blur(60px)'
                            }}
                        />
                        <div 
                            className="absolute top-[15%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-40"
                            style={{ 
                                background: 'radial-gradient(ellipse at center, rgba(254, 243, 199, 0.6) 0%, rgba(253, 230, 188, 0.4) 50%, transparent 70%)',
                                filter: 'blur(80px)'
                            }}
                        />
                        <div 
                            className="absolute bottom-[-10%] right-[5%] w-[55%] h-[55%] rounded-full opacity-45"
                            style={{ 
                                background: 'radial-gradient(ellipse at center, rgba(252, 211, 165, 0.5) 0%, rgba(254, 226, 185, 0.3) 45%, transparent 70%)',
                                filter: 'blur(70px)'
                            }}
                        />
                    </>
                )}
            </div>

            {/* Header Toolbar */}
            <div className="relative z-10 flex items-center justify-between mb-8">
                {/* Left: Title with Typewriter */}
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-neutral-800">
                        <TextType
                            text="Explore Jobs"
                            typingSpeed={80}
                            loop={false}
                            showCursor={false}
                        />
                    </h1>
                    <p className="text-sm text-neutral-600 mt-1">
                        {isDaily ? "Find daily wage opportunities near you" : "Discover long-term career opportunities"}
                    </p>
                </div>

                {/* Right: Control Bar */}
                <div className="flex items-center gap-3">
                    {/* View Switcher - Cards/Map (only for daily wage) */}
                    {isDaily && isExploring && foundJobs.length > 0 && (
                        <div className="relative flex items-center p-1 rounded-lg bg-white/60 border border-neutral-300/80 backdrop-blur-sm">
                            <motion.div
                                layoutId="exploreViewToggle"
                                className="absolute h-8 rounded-md bg-neutral-900 shadow-sm"
                                initial={false}
                                animate={{
                                    x: viewMode === 'card' ? 4 : 44,
                                    width: 36
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                            <button
                                onClick={() => setViewMode('card')}
                                className={`relative z-10 w-9 h-8 flex items-center justify-center rounded-md transition-colors ${
                                    viewMode === 'card' ? 'text-white' : 'text-neutral-600 hover:text-neutral-800'
                                }`}
                            >
                                <LayoutGrid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('map')}
                                className={`relative z-10 w-9 h-8 flex items-center justify-center rounded-md transition-colors ${
                                    viewMode === 'map' ? 'text-white' : 'text-neutral-600 hover:text-neutral-800'
                                }`}
                            >
                                <Map size={16} />
                            </button>
                        </div>
                    )}

                    {/* Explore/Stop Button */}
                    {isDaily && (
                        <button
                            onClick={isExploring ? stopExploring : startExploring}
                            disabled={isLoadingLocation}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm ${
                                isExploring 
                                    ? 'bg-red-500 text-white hover:bg-red-600' 
                                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                            } ${isLoadingLocation ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoadingLocation ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    Getting Location...
                                </>
                            ) : isExploring ? (
                                <>
                                    <Square size={16} />
                                    Stop Exploring
                                </>
                            ) : (
                                <>
                                    <Play size={16} />
                                    Start Exploring
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>

            {/* Status Indicator */}
            {isDaily && isExploring && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 mb-6"
                >
                    <div 
                        className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-neutral-300/80"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-neutral-700">Status: Active</span>
                        </div>
                        <div className="w-px h-4 bg-neutral-300" />
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                            <Navigation size={14} />
                            <span>Searching for jobs nearby...</span>
                        </div>
                        {foundJobs.length > 0 && (
                            <>
                                <div className="w-px h-4 bg-neutral-300" />
                                <span className="text-sm font-semibold text-neutral-800">{foundJobs.length} jobs found</span>
                            </>
                        )}
                    </div>
                </motion.div>
            )}

            {/* Main Content */}
            <AnimatePresence mode="wait">
                {isDaily ? (
                    // Daily Wage Content
                    !isExploring ? (
                        // Not exploring - Show start prompt
                        <motion.div
                            key="start-prompt"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="relative z-10 flex flex-col items-center justify-center py-20"
                        >
                            <div 
                                className="p-8 rounded-2xl border border-neutral-300/80 text-center max-w-md"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
                                    <MapPin size={32} className="text-neutral-600" />
                                </div>
                                <h2 className="text-xl font-semibold text-neutral-800 mb-2">Start Exploring Jobs</h2>
                                <p className="text-neutral-600 mb-6">
                                    Click the button above to share your location and start finding daily wage jobs near you. 
                                    Your profile will be visible to employers looking for workers with your skills.
                                </p>
                                <button
                                    onClick={startExploring}
                                    className="px-6 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
                                >
                                    <Play size={16} className="inline mr-2" />
                                    Start Exploring
                                </button>
                            </div>
                        </motion.div>
                    ) : foundJobs.length === 0 ? (
                        // Exploring but no jobs yet
                        <motion.div
                            key="searching"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative z-10 flex flex-col items-center justify-center py-20"
                        >
                            <Loader2 size={48} className="text-neutral-400 animate-spin mb-4" />
                            <p className="text-neutral-600">Scanning for jobs in your area...</p>
                        </motion.div>
                    ) : viewMode === 'card' ? (
                        // Cards View
                        <motion.div
                            key="cards"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                        >
                            {foundJobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setSelectedJob(job)}
                                    className="group relative cursor-pointer p-5 rounded-xl border border-neutral-300/80 hover:border-neutral-400 transition-all duration-300"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                                    }}
                                >
                                    {/* Accent Line */}
                                    <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-neutral-800" />

                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-lg font-semibold text-neutral-800 pr-3">{job.title}</h3>
                                        <span className="shrink-0 text-xs px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 font-medium">
                                            {job.distance}
                                        </span>
                                    </div>

                                    {/* Employer */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <img src={job.employerAvatar} alt={job.employer} className="w-6 h-6 rounded-full" />
                                        <span className="text-sm text-neutral-600">{job.employer}</span>
                                        <div className="flex items-center gap-1 text-xs">
                                            <Star size={12} className="fill-amber-400 text-amber-400" />
                                            <span className="text-neutral-600">{job.employerRating}</span>
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                                            <MapPin size={14} className="text-neutral-500" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 text-sm text-neutral-700">
                                                <IndianRupee size={14} className="text-neutral-500" />
                                                <span className="font-semibold">{job.pay}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                                                <Clock size={14} className="text-neutral-500" />
                                                <span>{job.time}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {job.skills.slice(0, 3).map((skill) => (
                                            <span key={skill} className="text-xs px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                                        <span className="text-xs text-neutral-500">{job.postedAt}</span>
                                        <button className="text-xs font-medium text-neutral-700 hover:text-neutral-900">
                                            View Details →
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        // Map View
                        <motion.div
                            key="map"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative z-10 rounded-2xl overflow-hidden border border-neutral-300/80"
                            style={{ height: 'calc(100vh - 250px)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
                        >
                            <MapComponent
                                center={userLocation || [12.9716, 77.5946]}
                                zoom={13}
                                markers={[
                                    ...(userLocation ? [{ position: userLocation, title: 'Your Location' }] : []),
                                    ...foundJobs.map(job => ({
                                        position: job.coordinates,
                                        title: `${job.title} - ${job.pay}`
                                    }))
                                ]}
                            />
                            
                            {/* Job Cards Overlay on Map */}
                            <div className="absolute bottom-4 left-4 right-4 flex gap-3 overflow-x-auto pb-2">
                                {foundJobs.map((job) => (
                                    <div
                                        key={job.id}
                                        onClick={() => setSelectedJob(job)}
                                        className="shrink-0 w-72 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-semibold text-neutral-800">{job.title}</h4>
                                            <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">{job.distance}</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 mb-2">{job.location}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-neutral-800">{job.pay}</span>
                                            <span className="text-xs text-neutral-500">{job.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )
                ) : (
                    // Long Term Jobs - Simple listing
                    <motion.div
                        key="longterm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                    >
                        {mockLongTermJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative cursor-pointer p-5 rounded-xl border border-neutral-300/80 hover:border-neutral-400 transition-all duration-300"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                {/* Accent Line */}
                                <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-neutral-600" />

                                {/* Header */}
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-neutral-800 pr-3">{job.title}</h3>
                                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-md border border-neutral-300 text-neutral-600">
                                        {job.type}
                                    </span>
                                </div>

                                {/* Company */}
                                <div className="flex items-center gap-2 mb-3">
                                    <Briefcase size={14} className="text-neutral-500" />
                                    <span className="text-sm font-medium text-neutral-700">{job.company}</span>
                                </div>

                                {/* Metrics */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                                        <MapPin size={14} className="text-neutral-500" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-neutral-700">
                                        <IndianRupee size={14} className="text-neutral-500" />
                                        <span className="font-medium">{job.salary}</span>
                                    </div>
                                </div>

                                {/* Requirements */}
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {job.requirements.map((req) => (
                                        <span key={req} className="text-xs px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600">
                                            {req}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                                    <span className="text-xs text-neutral-500">{job.postedAt}</span>
                                    <button className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Job Detail Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setSelectedJob(null)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[90vh] z-50 overflow-auto"
                        >
                            <div className="rounded-2xl bg-white border-2 border-neutral-200 shadow-2xl overflow-hidden">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedJob(null)}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white border-2 border-neutral-300 hover:bg-neutral-100 transition-colors shadow-lg"
                                >
                                    <X size={20} className="text-neutral-700" />
                                </button>

                                {/* Header */}
                                <div className="px-6 py-6 bg-neutral-50 border-b border-neutral-200">
                                    <h3 className="text-2xl font-bold text-neutral-800 mb-2">{selectedJob.title}</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <img src={selectedJob.employerAvatar} alt={selectedJob.employer} className="w-8 h-8 rounded-full" />
                                            <span className="text-sm font-medium text-neutral-700">{selectedJob.employer}</span>
                                            <div className="flex items-center gap-1">
                                                <Star size={12} className="fill-amber-400 text-amber-400" />
                                                <span className="text-sm text-neutral-600">{selectedJob.employerRating}</span>
                                            </div>
                                        </div>
                                        <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 text-xs font-medium">
                                            {calculateDistance(selectedJob.coordinates)}
                                        </span>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-6">
                                    {/* Pay & Time */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                                            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Pay</p>
                                            <p className="text-xl font-bold text-neutral-800">{selectedJob.pay}</p>
                                        </div>
                                        <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                                            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Timing</p>
                                            <p className="text-xl font-bold text-neutral-800">{selectedJob.time}</p>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-700 mb-2 uppercase tracking-wider">Location</h4>
                                        <div className="flex items-start gap-2 text-neutral-600">
                                            <MapPin size={16} className="mt-0.5 shrink-0" />
                                            <span>{selectedJob.address}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-700 mb-2 uppercase tracking-wider">Description</h4>
                                        <p className="text-neutral-600">{selectedJob.description}</p>
                                    </div>

                                    {/* Skills Required */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-700 mb-2 uppercase tracking-wider">Skills Required</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedJob.skills.map((skill) => (
                                                <span key={skill} className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-700 text-sm font-medium border border-neutral-200">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Map Preview */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-neutral-700 mb-2 uppercase tracking-wider">Job Location</h4>
                                        <div className="h-48 rounded-xl overflow-hidden border border-neutral-200">
                                            <MapComponent
                                                center={selectedJob.coordinates}
                                                zoom={15}
                                                markers={[
                                                    { position: selectedJob.coordinates, title: selectedJob.title }
                                                ]}
                                            />
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 pt-4">
                                        <a
                                            href={`tel:+919876543210`}
                                            className="flex-1 py-3 rounded-lg bg-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-neutral-300 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Phone size={16} />
                                            Call Employer
                                        </a>
                                        <button
                                            className="flex-1 py-3 rounded-lg bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors"
                                        >
                                            Accept Job
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

export default ExploreJobs;
