import React from 'react';
import Section from './common/Section';
import Card from './common/Card';
import { contactData } from '../data/portfolio';

const Contact = () => {
    return (
        <Section id="contact" className="bg-background-dark relative overflow-hidden animate-fade-in-up">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Get In Touch</h2>
                <div className="mt-4 h-1.5 w-24 mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {/* Contact Info */}
                <div className="space-y-8">
                    <Card className="h-full !bg-white/5 backdrop-blur-md border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                        <div className="space-y-8">
                            {[
                                { icon: 'email', label: 'Email', value: contactData.email, href: `mailto:${contactData.email}` },
                                { icon: 'phone', label: 'Phone', value: contactData.phone, href: `tel:${contactData.phone}` },
                                { icon: 'location_on', label: 'Location', value: contactData.location, href: null }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors border border-purple-500/10 group-hover:scale-110 transform duration-300">
                                        <span className="material-symbols-outlined text-purple-400">{item.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 mb-1">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="text-lg text-gray-200 hover:text-purple-400 transition-colors font-medium">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg text-gray-200 font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h4 className="text-lg font-semibold text-white mb-6">Connect With Me</h4>
                            <div className="flex gap-4">
                                {contactData.social.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                                    >
                                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Contact Form */}
                <div>
                    <Card className="!bg-white/5 backdrop-blur-md border-white/10">
                        <form className="space-y-6" action={`mailto:${contactData.email}`} method="post" encType="text/plain">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Your Name</label>
                                    <input type="text" name="name" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Your Email</label>
                                    <input type="email" name="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600" placeholder="john@example.com" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Subject</label>
                                <input type="text" name="subject" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600" placeholder="Project Inquiry" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea name="message" rows="4" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder-gray-600" placeholder="Tell me about your project..." required></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-1 hover:shadow-purple-500/40">
                                Send Message
                            </button>
                        </form>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
