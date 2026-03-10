import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper, { Step } from '../../components/ui/Stepper';
import { MapPin, IndianRupee, FileText, Briefcase } from 'lucide-react';

const PostDailyJob: React.FC = () => {
    const navigate = useNavigate();
    const [jobTitle, setJobTitle] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [location, setLocation] = useState('');
    const [latitude, setLatitude] = useState(12.9716);
    const [longitude, setLongitude] = useState(77.5946);
    const [wage, setWage] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [workDate, setWorkDate] = useState('');

    const categories = [
        'Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Cleaning',
        'Gardening', 'Moving', 'Event Help', 'Construction', 'Other'
    ];

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    alert(`Location set: ${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
                },
                (_error) => {
                    alert('Unable to get location. Please enter manually or allow location access.');
                }
            );
        }
    };

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex-1 overflow-hidden">
                <Stepper
                    initialStep={1}
                    onStepChange={(step: number) => console.log('Current step:', step)}
                    onFinalStepCompleted={() => {
                        console.log('Job posted!');
                        setTimeout(() => navigate('/posted-jobs'), 2000);
                    }}
                    backButtonText="Previous"
                    nextButtonText="Next"
                    stepContainerClassName="h-full"
                    contentClassName="overflow-y-auto"
                >
                    {/* Step 1: Job Title & Category */}
                    <Step>
                        <div className="p-6 space-y-6">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                                    <Briefcase size={32} className="text-green-600 dark:text-green-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                    What kind of work do you need?
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Let's start by defining your job
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    placeholder="e.g., Plumbing Work, Event Helper"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-green-500 dark:focus:border-green-500 outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Category
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setJobCategory(cat)}
                                            className={`px-4 py-3 rounded-xl font-medium transition-all ${jobCategory === cat
                                                    ? 'bg-green-500 text-white shadow-lg scale-105'
                                                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Step>

                    {/* Step 2: Job Description */}
                    <Step>
                        <div className="p-6 space-y-6">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                                    <FileText size={32} className="text-green-600 dark:text-green-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                    Describe the work
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Provide details about what needs to be done
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Job Description
                                </label>
                                <textarea
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    placeholder="Describe the work requirements, skills needed, etc."
                                    rows={8}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-green-500 dark:focus:border-green-500 outline-none transition-colors resize-none"
                                />
                            </div>
                        </div>
                    </Step>

                    {/* Step 3: Location */}
                    <Step>
                        <div className="p-6 space-y-6">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                                    <MapPin size={32} className="text-green-600 dark:text-green-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                    Where is the work?
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Set the job location
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="e.g., Indiranagar, Bangalore"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-green-500 dark:focus:border-green-500 outline-none transition-colors"
                                />
                            </div>

                            <button
                                onClick={getCurrentLocation}
                                className="w-full px-6 py-3 rounded-xl font-medium text-green-600 dark:text-green-400 border-2 border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center justify-center gap-2"
                            >
                                <MapPin size={20} />
                                Use Current Location
                            </button>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                        Latitude
                                    </label>
                                    <input
                                        type="number"
                                        step="0.0001"
                                        value={latitude}
                                        onChange={(e) => setLatitude(parseFloat(e.target.value))}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-green-500 dark:focus:border-green-500 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                        Longitude
                                    </label>
                                    <input
                                        type="number"
                                        step="0.0001"
                                        value={longitude}
                                        onChange={(e) => setLongitude(parseFloat(e.target.value))}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-green-500 dark:focus:border-green-500 outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </Step>

                    {/* Step 4: Wage & Timing */}
                    <Step>
                        <div className="p-6 space-y-6">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                                    <IndianRupee size={32} className="text-green-600 dark:text-green-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                    Payment & Schedule
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Set the wage and work hours
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Daily Wage (₹)
                                </label>
                                <div className="relative">
                                    <IndianRupee size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                                    <input
                                        type="number"
                                        value={wage}
                                        onChange={(e) => setWage(e.target.value)}
                                        placeholder="800"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-green-500 dark:focus:border-green-500 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Work Date
                                </label>
                                <input
                                    type="date"
                                    value={workDate}
                                    onChange={(e) => setWorkDate(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-green-500 dark:focus:border-green-500 outline-none transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                        Start Time
                                    </label>
                                    <input
                                        type="time"
                                        value={startTime}
                                        onChange={(e) => setStartTime(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-green-500 dark:focus:border-green-500 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                        End Time
                                    </label>
                                    <input
                                        type="time"
                                        value={endTime}
                                        onChange={(e) => setEndTime(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-green-500 dark:focus:border-green-500 outline-none transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </Step>
                </Stepper>
            </div>
        </div>
    );
};

export default PostDailyJob;
