import React from 'react';
import Section from './common/Section';
import Card from './common/Card';
import { aboutData } from '../data/portfolio';

const About = () => {
    return (
        <Section id="about" className="bg-background-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
                <div className="w-full md:w-1/3 relative group perspective-1000">
                    {/* Image Container with Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-slow"></div>
                    <div className="relative rounded-2xl overflow-hidden glass-card p-2 transform transition-all duration-700 hover:scale-[1.02] hover:rotate-y-12 rotate-y-0 ring-1 ring-white/20 shadow-2xl">
                        <img
                            src={aboutData.image}
                            alt="Profile"
                            className="w-full h-auto rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="mb-8 animate-fade-in-up">
                        <span className="text-purple-400 font-bold tracking-widest uppercase text-xs mb-2 block">Who I Am</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Passionate about <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Web Technologies</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-4"></div>
                    </div>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
                        {aboutData.description.map((paragraph, index) => (
                            <p key={index} className="transition-all hover:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-purple-500">code</span>
                            Core Competencies
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {aboutData.skills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className="px-5 py-2.5 glass rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all cursor-default border border-white/5 shadow-sm hover:shadow-purple-500/10 transform hover:-translate-y-1"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
