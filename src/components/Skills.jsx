import React from 'react';
import Section from './common/Section';
import Card from './common/Card';
import { skillsData } from '../data/portfolio';

const Skills = () => {
    return (
        <Section id="skills" className="bg-background-light dark:bg-background-dark font-display relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="text-center mb-16 relative z-10 animate-fade-in-up">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Skills & Expertise</h2>
                <div className="mt-4 h-1.5 w-24 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A comprehensive overview of my technical abilities and professional toolkit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {/* Technical Skills */}
                <div className="lg:col-span-2">
                    <Card className="h-full !bg-white/5 backdrop-blur-md border-white/10 hover:border-purple-500/30 transition-colors duration-500">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                <span className="material-symbols-outlined text-purple-400">code_blocks</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Technical Proficiency</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                            {skillsData.technical.map((skill, index) => (
                                <div key={skill.name} className={`group animate-fade-in-up`} style={{ animationDelay: `${(index % 3 + 1) * 100}ms` }}>
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                                                <span className="material-symbols-outlined text-sm text-gray-400 group-hover:text-purple-400 transition-colors">{skill.icon}</span>
                                            </div>
                                            <span className="text-gray-200 font-semibold group-hover:text-white transition-colors">{skill.name}</span>
                                        </div>
                                        <span className="text-sm text-purple-400 font-mono font-bold">{skill.level}</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
                                        <div
                                            className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out transform origin-left scale-x-0 group-hover:scale-x-100 relative"
                                            style={{ width: skill.level }}
                                        >
                                            <div className="absolute inset-0 bg-white/20 animate-pulse-fast"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Other Skills */}
                <div className="space-y-8">
                    {/* Soft Skills */}
                    <Card className="!bg-white/5 backdrop-blur-md border-white/10 hover:border-blue-500/30 transition-colors duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                <span className="material-symbols-outlined text-blue-400">psychology</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Soft Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.soft.map((skill, index) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-white/5 hover:bg-blue-500/10 text-gray-300 hover:text-blue-300 text-sm font-medium rounded-lg transition-all border border-white/5 hover:border-blue-500/30 hover:-translate-y-0.5"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>

                    {/* Tools */}
                    <Card className="!bg-white/5 backdrop-blur-md border-white/10 hover:border-pink-500/30 transition-colors duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-pink-500/10 rounded-xl border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
                                <span className="material-symbols-outlined text-pink-400">terminal</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Tools & Technologies</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.tools.map((tool, index) => (
                                <span
                                    key={tool}
                                    className="px-3 py-1.5 bg-white/5 hover:bg-pink-500/10 text-gray-300 hover:text-pink-300 text-sm font-medium rounded-lg transition-all border border-white/5 hover:border-pink-500/30 hover:-translate-y-0.5"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
