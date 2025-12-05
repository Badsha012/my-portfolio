import React from 'react';
import Section from './common/Section';
import Card from './common/Card';
import { projectsData } from '../data/portfolio';

const Projects = () => {
    return (
        <Section id="projects" className="bg-background-light dark:bg-background-dark animate-fade-in-up">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Featured Projects</h2>
                <div className="mt-4 h-1.5 w-24 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A showcase of my recent work, featuring full-stack applications and complex UI implementations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <div key={index} className={`group relative animate-fade-in-up delay-${(index % 3 + 1) * 100}`}>
                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>

                        <Card className="relative flex flex-col h-full !bg-[#151925] border-white/5 group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="mb-6">
                                {/* Project Preview */}
                                <div className="w-full h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative group/image">
                                    <div className="absolute inset-0 bg-black/20 group-hover/image:bg-transparent transition-colors z-10"></div>

                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span className="material-symbols-outlined text-6xl text-white/20 group-hover/image:scale-110 transition-transform duration-500">monitor</span>
                                    )}

                                    {/* Overlay Tags */}
                                    <div className="absolute bottom-3 left-3 flex gap-2 z-20">
                                        {project.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md bg-black/50 backdrop-blur-md text-white border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 2 && (
                                            <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-black/50 backdrop-blur-md text-white border border-white/10">
                                                +{project.tags.length - 2}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto flex gap-4">
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02]"
                                    >
                                        <span className="material-symbols-outlined text-lg">visibility</span>
                                        Live Demo
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2.5 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/5 text-gray-300 hover:text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                                    >
                                        <span className="material-symbols-outlined text-lg">code</span>
                                        Source
                                    </a>
                                )}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
