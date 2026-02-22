import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [isSending, setIsSending] = useState(false);

    const questions = [
        { key: 'name', label: "What's your name?", placeholder: "John Doe", type: "text" },
        { key: 'email', label: "What's your email?", placeholder: "john@example.com", type: "email" },
        { key: 'message', label: "Tell me about your project", placeholder: "I have an idea for...", type: "textarea" }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [questions[step].key]: e.target.value });
        setError('');
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
            setError('');
        }
    };

    const handleNext = async (e?: React.FormEvent) => {
        e?.preventDefault();
        const currentKey = questions[step].key as keyof typeof formData;

        if (!formData[currentKey].trim()) {
            setError('Please fill this out');
            return;
        }

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            // Submit logic here
            setIsSending(true);
            try {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                        to_name: "Lakshita",
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );
                setIsSending(false);
                setStep(step + 1); // Go to success screen
            } catch (err) {
                console.error("EmailJS Error:", err);
                setIsSending(false);
                setError("Failed to send message. Please try again.");
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleNext();
        }
    };

    return (
        <section
            className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#4b3839] py-20"
        >
            <div className="max-w-2xl w-full px-6 md:px-12 relative z-10 flex flex-col justify-center">

                <h2 className="text-3xl md:text-6xl font-bold text-white mb-12 md:mb-16 tracking-tighter text-center leading-tight">
                    Let's create something<br /> <span className="text-white/40">extraordinary.</span>
                </h2>

                <AnimatePresence mode='wait'>
                    {step < questions.length ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex flex-col gap-8 md:gap-10"
                        >
                            {/* Progress Indicator */}
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-end">
                                    <span className="text-white/40 text-[10px] font-black tracking-[0.2em] uppercase">
                                        Step {step + 1} of {questions.length}
                                    </span>
                                    <span className="text-white/20 text-[10px] font-mono">
                                        {Math.round(((step) / questions.length) * 100)}%
                                    </span>
                                </div>
                                <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-y-0 left-0 bg-white/40"
                                        initial={{ width: `${(step / questions.length) * 100}%` }}
                                        animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <label className="text-xl md:text-5xl font-light text-white/90 leading-snug block">
                                    {questions[step].label}
                                </label>

                                <div className="relative group">
                                    {questions[step].type === 'textarea' ? (
                                        <textarea
                                            value={formData[questions[step].key as keyof typeof formData]}
                                            onChange={handleChange}
                                            onKeyDown={handleKeyDown}
                                            placeholder={questions[step].placeholder}
                                            autoFocus
                                            rows={2}
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-lg md:text-3xl text-white placeholder-white/10 focus:outline-none focus:border-white/40 transition-all duration-300 resize-none"
                                        />
                                    ) : (
                                        <input
                                            type={questions[step].type}
                                            value={formData[questions[step].key as keyof typeof formData]}
                                            onChange={handleChange}
                                            onKeyDown={handleKeyDown}
                                            placeholder={questions[step].placeholder}
                                            autoFocus
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-lg md:text-3xl text-white placeholder-white/10 focus:outline-none focus:border-white/40 transition-all duration-300"
                                        />
                                    )}
                                    <div className="absolute right-0 bottom-4 text-red-400 text-[10px] font-bold uppercase tracking-widest opacity-0 transition-opacity duration-300" style={{ opacity: error ? 1 : 0 }}>
                                        {error}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-6 mt-4">
                                {step > 0 && (
                                    <button
                                        onClick={handleBack}
                                        className="p-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all active:scale-95 group"
                                        title="Previous Step"
                                    >
                                        <FaArrowLeft size={10} className="group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                )}
                                <button
                                    onClick={handleNext}
                                    className={`px-6 py-3 bg-white text-[#4b3839] rounded-lg text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all active:scale-95 shadow-lg shadow-black/10 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={isSending}
                                >
                                    {step === questions.length - 1 ? (isSending ? 'Sending...' : 'Send Message') : 'Next Step'} <FaArrowRight size={10} />
                                </button>
                                <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest hidden md:block">
                                    hit <strong>Enter ↵</strong>
                                </span>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-10"
                        >
                            <div className="mb-8 flex justify-center text-white/20">
                                <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Mission<br /><span className="text-white/30">Accepted</span></h2>
                            <p className="text-sm md:text-xl text-white/50 uppercase font-bold tracking-[0.2em] max-w-sm mx-auto">
                                I'll analyze your project and reach out shortly, {formData.name.split(' ')[0]}.
                            </p>
                            <button
                                onClick={() => {
                                    setStep(0);
                                    setFormData({ name: '', email: '', message: '' });
                                }}
                                className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all underline decoration-white/10 hover:decoration-white/40 underline-offset-8"
                            >
                                Initiate New Session
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Contact;
