import React from 'react';
import Section from './common/Section';
import Card from './common/Card';
import { articlesData } from '../data/portfolio';

const Articles = () => {
    return (
        <Section id="articles" className="bg-background-light dark:bg-background-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="text-center mb-16 relative z-10 animate-fade-in-up">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Latest Articles</h2>
                <div className="mt-4 h-1.5 w-24 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Insights, tutorials, and thoughts on web development and modern technologies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {articlesData.map((article, index) => (
                    <div key={index} className="group perspective-1000">
                        <Card className={`flex flex-col h-full !p-0 overflow-hidden animate-fade-in-up transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5 !bg-[#151925] group-hover:border-purple-500/30`} style={{ animationDelay: `${(index % 3 + 1) * 100}ms` }}>
                            {/* Image Container */}
                            <div className="relative h-52 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#151925] via-transparent to-transparent z-10 opacity-80"></div>
                                <div className="absolute inset-0 bg-purple-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />

                                {/* Floating Tag */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 text-xs font-bold text-white bg-purple-600/90 backdrop-blur-md rounded-lg shadow-lg border border-white/10">
                                        {article.tags[0]}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1 relative">
                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-medium tracking-wide">
                                    <div className="flex items-center gap-1.5 text-purple-400">
                                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                                        <span>{article.date}</span>
                                    </div>
                                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 line-clamp-2">
                                    {article.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3 group-hover:text-gray-300 transition-colors">
                                    {article.preview}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                                    <div className="flex -space-x-2">
                                        {/* Placeholder for author avatars or extra meta */}
                                    </div>

                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-white flex items-center gap-2 group/btn hover:text-purple-400 transition-colors"
                                    >
                                        Read Article
                                        <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover/btn:translate-x-1">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Articles;
