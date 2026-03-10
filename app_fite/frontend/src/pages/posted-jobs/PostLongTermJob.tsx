import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper, { Step } from '../../components/ui/Stepper';
import { Briefcase, FileText, IndianRupee, MapPin, Award } from 'lucide-react';

const PostLongTermJob: React.FC = () => {
    const navigate = useNavigate();
    const [jobTitle, setJobTitle] = useState('');
    const [jobType, setJobType] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [skills, setSkills] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [salaryType, setSalaryType] = useState('LPA');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [employmentType, setEmploymentType] = useState('Full-time');

    const jobTypes = [
        'Software Development', 'Design', 'Marketing', 'Sales', 'HR',
        'Finance', 'Operations', 'Customer Support', 'Other'
    ];

    const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
    const educationLevels = ['High School', 'Diploma', 'Bachelor\'s', 'Master\'s', 'PhD', 'Any'];

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
                    {/* Step 1: Job Title & Type */}
                    <Step>
                        <div className="p-6 space-y-6">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 mb-4">
                                    <Briefcase size={32} className="text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                    What position are you hiring for?
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Define the role you need to fill
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
                                    placeholder="e.g., Frontend Developer, UI/UX Designer"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Job Category
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {jobTypes.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setJobType(type)}
                                            className={`px-4 py-3 rounded-xl font-medium transition-all ${jobType === type
                                                    ? 'bg-yellow-500 text-white shadow-lg scale-105'
                                                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Employment Type
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {employmentTypes.map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setEmploymentType(type)}
                                            className={`px-4 py-3 rounded-xl font-medium transition-all ${employmentType === type
                                                    ? 'bg-yellow-500 text-white shadow-lg scale-105'
                                                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                                }`}
                                        >
                                            {type}
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
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 mb-4">
                                    <FileText size={32} className="text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                    Describe the role
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    What will this person be doing?
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Job Description
                                </label>
                                <textarea
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    placeholder="Describe the role, responsibilities, and what the ideal candidate looks like..."
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Requirements
                                </label>
                                <textarea
                                    value={requirements}
                                    onChange={(e) => setRequirements(e.target.value)}
                                    placeholder="List the key requirements and qualifications..."
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors resize-none"
                                />
                            </div>
                        </div>
                    </Step>

                    {/* Step 3: Skills & Qualifications */}
                    <Step>
                        <div className="p-6 space-y-6">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 mb-4">
                                    <Award size={32} className="text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                    Required Skills & Education
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    What qualifications do you need?
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Required Skills
                                </label>
                                <input
                                    type="text"
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    placeholder="e.g., React, TypeScript, Node.js (comma separated)"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors"
                                />
                                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                                    Separate skills with commas
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Minimum Experience Required
                                </label>
                                <input
                                    type="text"
                                    value={experience}
                                    onChange={(e) => setExperience(e.target.value)}
                                    placeholder="e.g., 2 years, Fresher, 5+ years"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Education Level
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {educationLevels.map((level) => (
                                        <button
                                            key={level}
                                            onClick={() => setEducation(level)}
                                            className={`px-4 py-3 rounded-xl font-medium transition-all ${education === level
                                                    ? 'bg-yellow-500 text-white shadow-lg scale-105'
                                                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                                }`}
                                        >
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Step>

                    {/* Step 4: Salary & Location */}
                    <Step>
                        <div className="p-6 space-y-6">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 mb-4">
                                    <IndianRupee size={32} className="text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                    Compensation & Location
                                </h2>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Set the salary and work location
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Salary
                                </label>
                                <div className="flex gap-3">
                                    <div className="relative flex-1">
                                        <IndianRupee size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                                        <input
                                            type="number"
                                            value={salary}
                                            onChange={(e) => setSalary(e.target.value)}
                                            placeholder="12"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors"
                                        />
                                    </div>
                                    <select
                                        value={salaryType}
                                        onChange={(e) => setSalaryType(e.target.value)}
                                        className="px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors"
                                    >
                                        <option value="LPA">LPA</option>
                                        <option value="per month">per month</option>
                                        <option value="per hour">per hour</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-2">
                                    Work Location
                                </label>
                                <div className="relative">
                                    <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="e.g., HSR Layout, Bangalore"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:border-yellow-500 dark:focus:border-yellow-500 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                                <h4 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                                    Job Summary
                                </h4>
                                <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                                    <p><strong>Title:</strong> {jobTitle || 'Not set'}</p>
                                    <p><strong>Type:</strong> {employmentType}</p>
                                    <p><strong>Experience:</strong> {experience || 'Not set'}</p>
                                    <p><strong>Salary:</strong> ₹{salary || '0'} {salaryType}</p>
                                    <p><strong>Location:</strong> {location || 'Not set'}</p>
                                </div>
                            </div>
                        </div>
                    </Step>
                </Stepper>
            </div>
        </div>
    );
};

export default PostLongTermJob;
