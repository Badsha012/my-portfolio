import React from 'react';
import Section from './common/Section';
import Card from './common/Card';
import { educationData } from '../data/portfolio';

const Education = () => {
    return (
        <Section id="education" className="bg-background-light dark:bg-background-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="text-center mb-20 relative z-10 animate-fade-in-up">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Education Journey</h2>
                <div className="mt-4 h-1.5 w-24 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">My academic path and professional training milestones.</p>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 px-4">
                {/* Center Line for Desktop, Left for Mobile */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 md:-translate-x-1/2"></div>

                <div className="space-y-16">
                    {educationData.map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-8 items-center group ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} animate-fade-in-up`} style={{ animationDelay: `${index * 200}ms` }}>
                            {/* Timeline Node */}
                            <div className="absolute left-8 md:left-1/2 w-5 h-5 bg-[#0a0a0a] rounded-full border-4 border-purple-500 transform -translate-x-1/2 mt-8 z-10 shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:scale-125 group-hover:bg-white group-hover:border-white transition-all duration-500"></div>

                            {/* Card Wrapper */}
                            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                <Card className="p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] border border-white/5 !bg-white/5 backdrop-blur-xl group-hover:border-purple-500/30 relative overflow-hidden">
                                    {/* Hover Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20 group-hover:bg-purple-500/20 transition-all shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                                            <span className="material-symbols-outlined text-sm">calendar_month</span>
                                            {item.duration}
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                            {item.degree}
                                        </h3>

                                        <div className="flex items-center gap-2 mb-4 text-gray-300 font-medium">
                                            <span className="material-symbols-outlined text-purple-400">school</span>
                                            {item.institution}
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </Card>
                            </div>

                            {/* Empty side for layout balance */}
                            <div className="hidden md:block w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Education;
