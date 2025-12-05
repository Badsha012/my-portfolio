import React from 'react';
import { heroData } from '../data/portfolio';

const Hero = () => {
    const { name, title, subtitle, status, image } = heroData;
    const [displayText, setDisplayText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(150);

    React.useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % 1; // Since we only have one title for now, but scalable for array
            const fullText = title;

            setDisplayText(isDeleting
                ? fullText.substring(0, displayText.length - 1)
                : fullText.substring(0, displayText.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, typingSpeed, title]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0a0a0a]">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                {/* Glowing Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow opacity-50"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow opacity-50" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-pink-600/10 rounded-full blur-[100px] animate-bounce-slow opacity-30"></div>
            </div>

            <div className="container mx-auto px-8 md:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-gray-300 text-sm font-medium tracking-wide">{status}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white tracking-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x inline-block pb-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                            {name}
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light tracking-wide h-10 flex items-center justify-center md:justify-start gap-1">
                        <span>I am a</span>
                        <span className="font-semibold text-white border-r-2 border-purple-500 pr-1 animate-blink">
                            {displayText}
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed font-light">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                        <button className="group w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] cursor-pointer flex items-center justify-center gap-2">
                            <span>Get in Touch</span>
                            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>

                        <a
                            href={heroData.resume}
                            download="Badsha_Sheikh_Resume.pdf"
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white hover:bg-white/10 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer border border-white/10 hover:border-white/20 backdrop-blur-md"
                        >
                            <span>Download Resume</span>
                            <span className="material-symbols-outlined text-xl group-hover:translate-y-1 transition-transform">download</span>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
                        {/* Social Links */}
                        {heroData.socialLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer transform hover:scale-110 border border-white/5 group relative overflow-hidden"
                                title={link.name}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform duration-300 relative z-10">{link.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Image/Visual */}
                <div className="flex-1 relative w-full max-w-md animate-float block perspective-1000 mt-10 md:mt-0">
                    <div className="relative z-10 group transform transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-12">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                        <div className="glass-card p-2 rounded-full relative overflow-hidden bg-[#151925] aspect-square flex items-center justify-center ring-2 ring-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full opacity-50"></div>
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover rounded-full shadow-2xl grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-[1.01] group-hover:scale-105 border-4 border-white/5"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-[#151925]/90 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 shadow-xl animate-bounce-slow flex items-center gap-3 z-20">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            <span className="text-white font-semibold text-sm tracking-wide">Open to Work</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow cursor-pointer z-20 opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-xs text-gray-400 font-bold tracking-[0.2em] uppercase">Scroll Down</span>
                <div className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg">
                    <span className="material-symbols-outlined text-3xl text-purple-400 animate-pulse">keyboard_double_arrow_down</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
