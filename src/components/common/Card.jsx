import React from 'react';

const Card = ({ children, className = "" }) => {
    return (
        <div className={`glass-card p-6 rounded-2xl border border-white/5 dark:border-white/5 relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Card;
