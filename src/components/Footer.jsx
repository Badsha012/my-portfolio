import React from 'react';
import { footerData } from '../data/portfolio';

const Footer = () => {
    return (
        <footer className="bg-[#0b0f19] pt-20 pb-10 border-t border-white/5 font-display relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center">



                    {/* Copyright & Credit */}
                    <div className="text-center space-y-2">
                        <p className="text-gray-400 text-sm">
                            {footerData.copyright}
                        </p>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
