import React from 'react';

const Section = ({ children, id, className = "", background = "transparent" }) => {
    return (
        <section id={id} className={`relative py-20 px-6 overflow-hidden ${className}`}>
            <div className="container mx-auto max-w-7xl relative z-10">
                {children}
            </div>
            {/* Optional background decorations could go here */}
        </section>
    );
};

export default Section;
